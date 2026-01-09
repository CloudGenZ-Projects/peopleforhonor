import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

const NewsletterCta = () => {
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
                setFormData({ email: '', name: '', interests: '' }); // Clear form
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
                        <h2 className="text-heading text-foreground mb-3">Join the Transformational Journey!</h2>
                        <p className="text-muted-foreground">
                            Stay connected with our community and be the first to know about new programs, events, and opportunities to make a difference.
                        </p>
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
                            {isSubmitting ? 'Submitting...' : 'Join Our Community'}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                        <em>Contribute to the prosperity of people!</em>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCta;
