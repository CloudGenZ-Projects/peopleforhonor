import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useHomePageLive } from "@/hooks/usePayloadLive";

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

const NewsletterCta = () => {
    const { data: cmsData } = useHomePageLive();

    const heading = cmsData?.newsletter_heading;
    const description = cmsData?.newsletter_description;
    const buttonText = cmsData?.newsletter_button_text;
    const footerQuote = cmsData?.newsletter_footer_quote;

    const linkText = cmsData?.newsletter_link_text;
    const linkUrl = cmsData?.newsletter_link_url;

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        interests: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch(`${API_BASE}/api/join/submit.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setMessage({
                    type: 'success',
                    text: 'Thank you for joining us! We\'ll be in touch soon.'
                });
                setFormData({ email: '', name: '', interests: '' });
            } else {
                setMessage({
                    type: 'error',
                    text: data.message || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            setMessage({
                type: 'error',
                text: 'Failed to submit. Please check your connection and try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 sm:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto bg-gradient-card rounded-2xl p-8 sm:p-10 border border-border/50 shadow-medium">
                    <div className="text-center mb-6">
                        {heading && <h2 className="text-heading text-foreground mb-3">{heading}</h2>}
                        {description && (
                            <p className="text-muted-foreground">{description}</p>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {message.text && (
                            <div className={`p-3 rounded-md text-sm ${message.type === 'success'
                                ? 'bg-green-50 text-green-700 border border-green-200'
                                : 'bg-red-50 text-red-700 border border-red-200'
                                }`}>
                                {message.text}
                            </div>
                        )}
                        <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="interests">How would you like to get involved?</Label>
                            <Input
                                id="interests"
                                type="text"
                                placeholder="Tell us about your interests..."
                                value={formData.interests}
                                onChange={handleInputChange}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-gradient-primary hover:bg-primary-hover"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : buttonText || 'Join Our Community'}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>

                    {linkText && linkUrl && (
                        <div className="mt-6 text-center pt-4 border-t border-border/40">
                            <a
                                href={linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                            >
                                {linkText}
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    )}

                    {footerQuote && (
                        <p className="text-xs text-muted-foreground text-center mt-4">
                            <em>{footerQuote}</em>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewsletterCta;
