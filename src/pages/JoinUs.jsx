import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart, Users, DollarSign, ArrowRight, Mail, Phone, MapPin, ChevronLeft, ChevronRight, X } from "lucide-react";
import UpcomingEvents from "@/components/UpcomingEvents";
import Contact from "@/components/Contact";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const JoinUs = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        interests: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const communityImages = [
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0007.jpg",
            alt: "Community hangout"
        },
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0008.jpg",
            alt: "Community gathering"
        },
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0010.jpg",
            alt: "Community event"
        },
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0009.jpg",
            alt: "Community members"
        },
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0011.jpg",
            alt: "Community activity"
        },
        {
            src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0005.jpg",
            alt: "Community support"
        }
    ];

    const openImageModal = (index) => {
        setSelectedImageIndex(index);
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
        setSelectedImageIndex(null);
    };

    const goToPrevious = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? communityImages.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setSelectedImageIndex((prev) =>
            prev === communityImages.length - 1 ? 0 : prev + 1
        );
    };

    const ways = [
        {
            icon: Heart,
            title: "Volunteer",
            description: "It takes a village, and we'd love for you to be part of ours. Join us as a volunteer and help build the community you want to see.",
            action: "Become a Volunteer",
            link: "#volunteer-form"
        },
        {
            icon: DollarSign,
            title: "Donate",
            description: "Your donations help us to keep making an impact in our community. Through your donations, we can support more immigrants to navigate their life in Canada.",
            action: "Make a Donation",
            link: "#donate"
        },
        {
            icon: Users,
            title: "Partner with Us",
            description: "Are you an organization that shares our values? Let's work together to create meaningful change in our community.",
            action: "Explore Partnership",
            link: "#partner-form"
        }
    ];

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
                text: 'Unable to submit. Please check your connection and try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Ways to Give
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">
                                Be part of a community that believes in the potential of every immigrant.
                                Together, we can create lasting change and build a more inclusive Canada.
                            </p>
                            <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground" asChild>
                                <a href="#ways-to-give">
                                    Get Involved Today
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            {/* Live site tagline */}
                            <div className="mt-6 bg-background/10 backdrop-blur-sm rounded-xl p-4">
                                <p className="text-base md:text-lg">
                                    We are a non-profit ORG Empowering you to discover your inner eagle , Coaching you to soar,
                                    and Mentoring you to stay focused. Join us to empower others or be empowered!
                                </p>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <Button size="lg" variant="outline" asChild className="bg-white hover:bg-white/90 text-black border-white">
                                    <a href="https://chat.whatsapp.com/HSUmX0TTqpxDEIkJWZXRMv" target="_blank" rel="noopener noreferrer" aria-label="Join us on WhatsApp">
                                        Join us on WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ways to Give Section */}
                <section id="ways-to-give" className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-heading text-foreground mb-4">Give in a Way That's Meaningful to You</h2>
                            <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
                                Your generosity lifts newcomers and neighbours: helping more people learn, belong, and move forward.
                                Think big. Belong fully. Give back.
                            </p>
                        </div>

                        {/* Primary Donation Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                            {/* One-Time Donation */}
                            <Card className="p-8 hover:shadow-strong transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <DollarSign className="h-8 w-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4">One-Time Donation</h3>
                                <p className="text-muted-foreground text-center mb-6">
                                    Make a quick, secure gift online. Even a small donation makes a real difference—every dollar helps fuel workshops, coaching, mentorship, and community circles.
                                </p>

                                <div className="space-y-3 mb-6 bg-muted/30 p-5 rounded-lg">
                                    <p className="font-semibold text-foreground text-sm mb-3">Examples of Impact:</p>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex items-start gap-2">
                                            <span className="font-semibold text-primary">$5 →</span>
                                            <span>Support our core programs</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="font-semibold text-primary">$10 →</span>
                                            <span>One résumé/LinkedIn coaching session</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="font-semibold text-primary">$15 →</span>
                                            <span>Barbershop training kit and sanitation materials</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="font-semibold text-primary">$20 →</span>
                                            <span>Entrepreneurship Launchpad resources and mentor office hours</span>
                                        </div>
                                    </div>
                                </div>

                            <Link target="_blank" to="https://www.zeffy.com/en-CA/donation-form/people-for-honor-donate">
                                <Button className="bg-gradient-primary hover:bg-primary-hover w-full" size="lg">
                                    Make a One-Time Donation
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            </Card>

                            {/* Monthly Giving */}
                            <Card className="p-8 hover:shadow-strong transition-shadow duration-300 border-2 border-primary">
                                <div className="absolute top-4 right-4">
                                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                        Recommended
                                    </span>
                                </div>
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="h-8 w-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4">Monthly Giving</h3>
                                <p className="text-muted-foreground text-center mb-6">
                                    Monthly gifts give us reliable support and give you convenience and flexibility.
                                    Consider $10/$15/$20 per month to sustain program seats, coaching matches, and community sessions all year.
                                </p>

                                <div className="space-y-3 mb-6 bg-primary/5 p-5 rounded-lg border border-primary/20">
                                    <p className="font-semibold text-foreground text-sm mb-3">Why Monthly Giving?</p>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                            <span>Predictable support helps us plan programs</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                            <span>Convenient automatic payments</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                            <span>Cancel or adjust anytime</span>
                                        </div>
                                    </div>
                                </div>

                                <Link target="_blank" to="https://www.zeffy.com/embed/donation-form/raising-futures-every-month?modal=true">
                                <Button className="bg-gradient-primary hover:bg-primary-hover w-full" size="lg">
                                    Raising Futures Every Month
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                </Link>
                            </Card>
                        </div>

                        {/* Additional Giving Options */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                            {/* Honour/Memory */}
                            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                                <h4 className="font-semibold text-foreground mb-3">Give in Honour or in Memory</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Recognize a loved one, mentor, or community leader with a tribute gift.
                                </p>
                        <Link target="_blank" to="https://www.zeffy.com/embed/donation-form/give-in-honour-or-in-memory?modal=true">
                        <button
                            id="zeffy-honour-button"
                            className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
                            >
                                Donate in Honour/Memory
                        </button>
                        </Link>
                            </Card>

                            {/* Securities */}
                            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                                <h4 className="font-semibold text-foreground mb-3">Donate Securities</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Donate stocks, mutual funds, or ETFs. Avoid capital gains tax while maximizing impact.
                                </p>
                                <Button variant="outline" className="w-full" size="sm">
                                    Donate Securities
                                </Button>
                            </Card>

                            {/* Corporate */}
                            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                                <h4 className="font-semibold text-foreground mb-3">Corporate Partnerships</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Sponsor a cohort, match employee gifts, or support a campaign.
                                </p>
                                <Link target="_blank" to="https://www.zeffy.com/embed/donation-form/corporate-partnerships-sponsor-a-program?modal=true">
                                <Button variant="outline" className="w-full" size="sm">
                                    Sponsor a Program
                                </Button>
                                </Link>
                            </Card>
                        </div>

                        {/* Other Ways to Support */}
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 bg-muted/30">
                                <h3 className="text-xl font-bold text-foreground mb-6 text-center">Other Ways to Support People for Honor</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card className="p-6 bg-background">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                            <div>
                                                <p className="font-semibold text-foreground mb-1">Corporate Partnerships</p>
                                                <p className="text-sm text-muted-foreground mb-3">Sponsor a cohort, match employee gifts, or support a campaign</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full" size="sm">
                                            Partner with PFH
                                        </Button>
                                    </Card>

                                    <Card className="p-6 bg-background">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                            <div>
                                                <p className="font-semibold text-foreground mb-1">In-Kind Gifts</p>
                                                <p className="text-sm text-muted-foreground mb-3">Laptops, sewing fabric/notions, barber tools, printing, space, snacks</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full" size="sm">
                                            Offer an In-Kind Gift
                                        </Button>
                                    </Card>

                                    <Card className="p-6 bg-background">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                            <div>
                                                <p className="font-semibold text-foreground mb-1">Volunteer Your Expertise</p>
                                                <p className="text-sm text-muted-foreground mb-3">Become a coach or mentor (2–4 hrs/month)</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full" size="sm">
                                            Volunteer with PFH
                                        </Button>
                                    </Card>

                                    <Card className="p-6 bg-background">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                            <div>
                                                <p className="font-semibold text-foreground mb-1">Host a Community Fundraiser</p>
                                                <p className="text-sm text-muted-foreground mb-3">From classroom drives to office challenges—make it yours</p>
                                            </div>
                                        </div>
                                        <Link target="_blank" to="https://www.zeffy.com/en-CA/peer-to-peer/raising-funds-raising-futures-for-newcomers">
                                        <Button variant="outline" className="w-full" size="sm">
                                            Start a Fundraiser
                                        </Button>
                                        </Link>
                                    </Card>
                                </div>

                                {/* e-Transfer / Cheque */}
                                <Card className="p-6 bg-background mt-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-foreground mb-3">e-Transfer / Cheque</p>
                                            <div className="space-y-2 text-sm text-muted-foreground">
                                                <p><strong className="text-foreground">e-Transfer:</strong> info@peopleforhonor.com</p>
                                                <p><strong className="text-foreground">Cheque:</strong> Pay to People for Honor, mail to: 1505 laperrieve Ave Suite 506 Ottawa, ON, K127T1</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Stay Connected Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                <h2 className="text-2xl font-bold text-foreground mb-4">Stay Connected</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Be first to hear about programs, events, and impact stories.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="flex flex-col items-center">
                                        <Mail className="h-8 w-8 text-primary mb-2" />
                                        <p className="font-semibold text-foreground mb-1">Email</p>
                                        <p className="text-sm text-muted-foreground">info@peopleforhonor.com</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Phone className="h-8 w-8 text-primary mb-2" />
                                        <p className="font-semibold text-foreground mb-1">Phone</p>
                                        <p className="text-sm text-muted-foreground">613 672 7062</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <MapPin className="h-8 w-8 text-primary mb-2" />
                                        <p className="font-semibold text-foreground mb-1">Address</p>
                                        <p className="text-sm text-muted-foreground text-center">1505 laperrieve Ave Suite 506<br />Ottawa, ON, K127T1</p>
                                    </div>
                                </div>

                                <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg">
                                    Join Our Mailing List
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events on Join Us */}
                <UpcomingEvents />

                {/* Contact Information */}
                <Contact />

                {/* Community Hangouts - Image Gallery */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-heading text-foreground mb-4">community Gathering</h2>
                            <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
                                At People for Honor, we believe in the power of hope to transform lives.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {communityImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover rounded-xl shadow-medium hover:shadow-strong transition-shadow duration-300 cursor-pointer"
                                    onClick={() => openImageModal(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Image Modal/Slider */}
                {isImageModalOpen && selectedImageIndex !== null && (
                    <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
                        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95">
                            <div className="relative">
                                <img
                                    src={communityImages[selectedImageIndex].src}
                                    alt={communityImages[selectedImageIndex].alt}
                                    className="w-full h-[70vh] object-contain"
                                />

                                {/* Navigation Buttons */}
                                <button
                                    onClick={goToPrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-6 w-6 text-white" />
                                </button>

                                <button
                                    onClick={goToNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-6 w-6 text-white" />
                                </button>

                                {/* Close Button */}
                                <button
                                    onClick={closeImageModal}
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
                                    aria-label="Close"
                                >
                                    <X className="h-5 w-5 text-white" />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <span className="text-white text-sm font-medium">
                                        {selectedImageIndex + 1} / {communityImages.length}
                                    </span>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default JoinUs;
