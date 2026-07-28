import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, Heart } from "lucide-react";
import { useState } from "react";
import { useHomePageLive } from "@/hooks/usePayloadLive";

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

const Contact = () => {
    const { data: cmsData } = useHomePageLive();

    const heading = cmsData?.contact_heading || "Get in Touch";
    const description = cmsData?.contact_description || "Have questions about our programs or want to get involved? We'd love to hear from you. Fill out the form below or reach out directly.";
    const phone = cmsData?.contact_phone || "613 672 7062";
    const email = cmsData?.contact_email || "info@peopleforhonor.com";
    const address = cmsData?.contact_address || "1505 laperrieve Ave Suite 506, Ottawa, ON, K127T1";
    const hours = cmsData?.contact_hours || "Monday - Friday: 9:00 AM - 6:00 PM";

    const boxTitle = cmsData?.contact_box_title || "We're Here for You";
    const boxText = cmsData?.contact_box_text || "Your success is our mission. Don't hesitate to reach out - we're committed to supporting your journey in Canada.";

    const zeffyEmbed1 = cmsData?.zeffy_embed_1_url || "https://www.zeffy.com/en-CA/embed/newsletter-form/sign-up-for-our-newsletter-1932";
    const zeffyEmbed2 = cmsData?.zeffy_embed_2_url || "https://www.zeffy.com/en-CA/embed/newsletter-form/join-our-mailing-list-18";

    const contactInfo = [
        {
            icon: Phone,
            title: "Call Us",
            details: phone,
            description: hours
        },
        {
            icon: Mail,
            title: "Email Us",
            details: email,
            description: "We'll respond within 24 hours"
        },
        {
            icon: MapPin,
            title: "Mailing Address Only – programs are not delivered at this location",
            details: address,
            description: ""
        },
        {
            icon: Clock,
            title: "Office Hours",
            details: hours,
            description: ""
        }
    ];

    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notice, setNotice] = useState({ type: '', text: '' });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setNotice({ type: '', text: '' });

        try {
            const payload = {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                phone: formData.phone || null,
                service: formData.service || null,
                message: formData.message,
            };

            const res = await fetch(`${API_BASE}/api/contact/submit.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();

            if (data.success) {
                setNotice({ type: 'success', text: 'Thanks! Your message has been sent successfully.' });
                setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
            } else {
                setNotice({ type: 'error', text: data.message || 'Unable to send your message. Please try again.' });
            }
        } catch (err) {
            setNotice({ type: 'error', text: 'Network error. Please check your connection and try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
                    {heading && (
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
                            {heading}
                        </h2>
                    )}
                    {description && (
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-4 sm:space-y-6 animate-slide-up">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            if (!item.details) return null;
                            return (
                                <Card
                                    key={index}
                                    className="bg-gradient-card border-0 shadow-subtle hover:shadow-medium transition-all duration-300 hover-lift group"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <CardContent className="p-4 sm:p-6">
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm sm:text-base text-foreground font-medium mb-1 break-words">
                                                    {item.details}
                                                </p>
                                                {item.description && (
                                                    <p className="text-xs sm:text-sm text-muted-foreground">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}

                        {/* Additional Support Info Box */}
                        {boxTitle && (
                            <Card className="bg-gradient-primary border-0 shadow-medium">
                                <CardContent className="p-4 sm:p-6 text-center">
                                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground mx-auto mb-3 sm:mb-4" />
                                    <h3 className="text-base sm:text-lg font-bold text-primary-foreground mb-2">
                                        {boxTitle}
                                    </h3>
                                    {boxText && (
                                        <p className="text-primary-foreground/90 text-xs sm:text-sm">
                                            {boxText}
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 animate-fade-in">
                        <Card className="bg-gradient-card border-0 shadow-medium">
                            <CardHeader className="px-4 sm:px-6">
                                <CardTitle className="text-xl sm:text-2xl font-semibold text-foreground">
                                    Send Us a Message
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6">
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    {notice.text && (
                                        <div className={`p-3 rounded-md text-sm ${notice.type === 'success'
                                            ? 'bg-green-50 text-green-700 border border-green-200'
                                            : 'bg-red-50 text-red-700 border border-red-200'
                                            }`}>
                                            {notice.text}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-foreground font-medium text-sm">
                                                First Name *
                                            </Label>
                                            <Input
                                                id="firstName"
                                                placeholder="Enter your first name"
                                                className="border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                                                required
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-foreground font-medium text-sm">
                                                Last Name *
                                            </Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Enter your last name"
                                                className="border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                                                required
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-foreground font-medium text-sm">
                                                Email Address *
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                className="border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-foreground font-medium text-sm">
                                                Phone Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                className="border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="service" className="text-foreground font-medium text-sm">
                                            Service Interest
                                        </Label>
                                        <select
                                            id="service"
                                            className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary/20 focus:outline-none bg-background text-foreground text-sm sm:text-base"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="barbershop">Barbershop Training</option>
                                            <option value="sewing">Sewing for Beginners</option>
                                            <option value="entrepreneurship">Entrepreneurship Launchpad</option>
                                            <option value="dance">Cultural Dance & Movement</option>
                                            <option value="coaching">Coaching Program</option>
                                            <option value="mentorship">Mentorship Program</option>
                                            <option value="general">General Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-foreground font-medium text-sm">
                                            Message *
                                        </Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us how we can help you..."
                                            rows={5}
                                            className="border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                                            required
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-gradient-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 text-sm sm:text-base"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Zeffy Embed Forms */}
                {(zeffyEmbed1 || zeffyEmbed2) && (
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {zeffyEmbed1 && (
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <CardTitle className="text-lg sm:text-xl font-semibold text-foreground">
                                        Sign Up to Our Newsletter
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="relative w-full h-56 rounded-lg overflow-hidden bg-muted">
                                        <iframe
                                            title="Signup form powered by Zeffy - Sign Up to Our Newsletter"
                                            style={{
                                                position: 'absolute',
                                                border: 0,
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            src={zeffyEmbed1}
                                            allowTransparency="true"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {zeffyEmbed2 && (
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <CardTitle className="text-lg sm:text-xl font-semibold text-foreground">
                                        Join Our Mailing List
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="relative w-full h-56 rounded-lg overflow-hidden bg-muted">
                                        <iframe
                                            title="Signup form powered by Zeffy - Join Our Mailing List"
                                            style={{
                                                position: 'absolute',
                                                border: 0,
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            src={zeffyEmbed2}
                                            allowTransparency="true"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;
