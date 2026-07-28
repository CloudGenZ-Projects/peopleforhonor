import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, DollarSign, ArrowRight, Mail, Phone, MapPin, ChevronLeft, ChevronRight, X } from "lucide-react";
import UpcomingEvents from "@/components/UpcomingEvents";
import Contact from "@/components/Contact";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useJoinUsPageLive } from "@/hooks/usePayloadLive";
import { getMediaUrl } from "@/services/payloadApi";

const safeText = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') return val.text || val.title || val.description || val.content || '';
    return String(val);
};

const JoinUs = () => {
    const { data } = useJoinUsPageLive();

    // 1. Hero Section
    const heroTitle = data?.hero_title || "Ways to Give";
    const heroSubtitle = data?.hero_subtitle || "Be part of a community that believes in the potential of every immigrant. Together, we can create lasting change and build a more inclusive Canada.";
    const heroButtonText = data?.hero_button_text || "Get Involved Today";
    const heroTagline = data?.hero_tagline || "We are a non-profit ORG Empowering you to discover your inner eagle , Coaching you to soar, and Mentoring you to stay focused. Join us to empower others or be empowered!";
    const heroWhatsappText = data?.hero_whatsapp_text || "Join us on WhatsApp";
    const heroWhatsappUrl = data?.hero_whatsapp_url || "https://chat.whatsapp.com/HSUmX0TTqpxDEIkJWZXRMv";

    // 2. Ways to Give Section
    const giveHeading = data?.give_heading || "Give in a Way That's Meaningful to You";
    const giveDescription = data?.give_description || "Your generosity lifts newcomers and neighbours: helping more people learn, belong, and move forward. Think big. Belong fully. Give back.";

    // 3. One-Time Donation Card
    const onetimeTitle = data?.onetime_title || "One-Time Donation";
    const onetimeDescription = data?.onetime_description || "Make a quick, secure gift online. Even a small donation makes a real difference—every dollar helps fuel workshops, coaching, mentorship, and community circles.";
    const onetimeImpactHeading = data?.onetime_impact_heading || "Examples of Impact:";
    const onetimeImpactItems = (data?.onetime_impact_items && data.onetime_impact_items.length > 0)
        ? data.onetime_impact_items
        : [
            { amount: "$5 →", text: "Support our core programs" },
            { amount: "$10 →", text: "One résumé/LinkedIn coaching session" },
            { amount: "$15 →", text: "Barbershop training kit and sanitation materials" },
            { amount: "$20 →", text: "Entrepreneurship Launchpad resources and mentor office hours" }
        ];
    const onetimeButtonText = data?.onetime_button_text || "Make a One-Time Donation";
    const onetimeButtonUrl = data?.onetime_button_url || "https://www.zeffy.com/en-CA/donation-form/people-for-honor-donate";

    // 4. Monthly Giving Card
    const monthlyTitle = data?.monthly_title || "Monthly Giving";
    const monthlyDescription = data?.monthly_description || "Monthly gifts give us reliable support and give you convenience and flexibility. Consider $10/$15/$20 per month to sustain program seats, coaching matches, and community sessions all year.";
    const monthlyWhyHeading = data?.monthly_why_heading || "Why Monthly Giving?";
    const monthlyWhyItems = (data?.monthly_why_items && data.monthly_why_items.length > 0)
        ? data.monthly_why_items
        : [
            "Predictable support helps us plan programs",
            "Convenient automatic payments",
            "Cancel or adjust anytime"
        ];
    const monthlyButtonText = data?.monthly_button_text || "Raising Futures Every Month";
    const monthlyButtonUrl = data?.monthly_button_url || "https://www.zeffy.com/embed/donation-form/raising-futures-every-month?modal=true";

    // 5. Additional Giving Options (3 Cards)
    const honourTitle = data?.honour_title || "Give in Honour or in Memory";
    const honourDesc = data?.honour_desc || "Recognize a loved one, mentor, or community leader with a tribute gift.";
    const honourBtnText = data?.honour_btn_text || "Donate in Honour/Memory";
    const honourBtnUrl = data?.honour_btn_url || "https://www.zeffy.com/embed/donation-form/give-in-honour-or-in-memory?modal=true";

    const securitiesTitle = data?.securities_title || "Donate Securities";
    const securitiesDesc = data?.securities_desc || "Donate stocks, mutual funds, or ETFs. Avoid capital gains tax while maximizing impact.";
    const securitiesBtnText = data?.securities_btn_text || "Donate Securities";
    const securitiesBtnUrl = data?.securities_btn_url || "https://docs.google.com/forms/d/e/1FAIpQLSeCFnInCVyyaS5FA3-BYdb5nrjO45x3A1jVhYuQ76DpjGYcTA/viewform";

    const corporateTitle = data?.corporate_title || "Corporate Partnerships";
    const corporateDesc = data?.corporate_desc || "Sponsor a cohort, match employee gifts, or support a campaign.";
    const corporateBtnText = data?.corporate_btn_text || "Sponsor a Program";
    const corporateBtnUrl = data?.corporate_btn_url || "https://www.zeffy.com/embed/donation-form/corporate-partnerships-sponsor-a-program?modal=true";

    // 6. Other Ways to Support Section
    const otherHeading = data?.other_heading || "Other Ways to Support People for Honor";
    const otherCards = (data?.other_cards && data.other_cards.length > 0)
        ? data.other_cards
        : [
            {
                title: "Corporate Partnerships",
                description: "Sponsor a cohort, match employee gifts, or support a campaign",
                btn_text: "Partner with PFH",
                btn_url: "https://docs.google.com/forms/d/e/1FAIpQLSfcNagXyfbUpyI6Xeo5IXjcRulJQqDJMN7w6XbqZi9ZpwWzzw/viewform"
            },
            {
                title: "In-Kind Gifts",
                description: "Laptops, sewing fabric/notions, barber tools, printing, space, snacks",
                btn_text: "Offer an In-Kind Gift",
                btn_url: "https://docs.google.com/forms/d/e/1FAIpQLSf8i0d7h0kfIn2iv4bnAHK35pUP3r3SmRO7RLWkkkEqjjy5lw/viewform"
            },
            {
                title: "Volunteer Your Expertise",
                description: "Become a coach or mentor (2–4 hrs/month)",
                btn_text: "Volunteer with PFH",
                btn_url: "https://docs.google.com/forms/d/e/1FAIpQLSfcNagXyfbUpyI6Xeo5IXjcRulJQqDJMN7w6XbqZi9ZpwWzzw/viewform"
            },
            {
                title: "Host a Community Fundraiser",
                description: "From classroom drives to office challenges—make it yours",
                btn_text: "Start a Fundraiser",
                btn_url: "https://www.zeffy.com/en-CA/peer-to-peer/raising-funds-raising-futures-for-newcomers"
            }
        ];

    const etransferTitle = data?.etransfer_title || "e-Transfer / Cheque";
    const etransferEmail = data?.etransfer_email || "info@peopleforhonor.com";
    const etransferCheque = data?.etransfer_cheque || "Pay to People for Honor, mail to: 1505 laperrieve Ave Suite 506 Ottawa, ON, K127T1";

    // 7. Stay Connected Section
    const stayHeading = data?.stay_heading || "Stay Connected";
    const stayDescription = data?.stay_description || "Be first to hear about programs, events, and impact stories.";
    const stayEmail = data?.stay_email || "info@peopleforhonor.com";
    const stayPhone = data?.stay_phone || "613 672 7062";
    const stayAddress = data?.stay_address || "1505 laperrieve Ave Suite 506\nOttawa, ON, K127T1";
    const stayBtnText = data?.stay_btn_text || "Join Our Mailing List";

    // 8. Community Gathering Gallery (6 Bottom Images)
    const galleryHeading = data?.gallery_heading || "community Gathering";
    const galleryDescription = data?.gallery_description || "At People for Honor, we believe in the power of hope to transform lives.";
    const rawCommunityImages = data?.community_images || [];

    const defaultImages = [
        { src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0007.jpg", alt: "Community hangout" },
        { src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0008.jpg", alt: "Community gathering" },
        { src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0010.jpg", alt: "Community event" },
        { src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0009.jpg", alt: "Community members" },
        { src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0011.jpg", alt: "Community activity" },
        { src: "https://peopleforhonor.com/wp-content/uploads/2024/11/IMG-20241126-WA0005.jpg", alt: "Community support" }
    ];

    const communityImages = rawCommunityImages.length > 0
        ? rawCommunityImages.map((imgObj, idx) => ({
            src: getMediaUrl(imgObj.image, imgObj.imageUrl || imgObj.image) || defaultImages[idx % defaultImages.length].src,
            alt: imgObj.alt || defaultImages[idx % defaultImages.length].alt
        }))
        : defaultImages;

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

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

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroTitle}</h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">{heroSubtitle}</p>
                            <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground" asChild>
                                <a href="#ways-to-give">
                                    {heroButtonText}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <div className="mt-6 bg-background/10 backdrop-blur-sm rounded-xl p-4">
                                <p className="text-base md:text-lg">{heroTagline}</p>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <Button size="lg" variant="outline" asChild className="bg-white hover:bg-white/90 text-black border-white">
                                    <a href={heroWhatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Join us on WhatsApp">
                                        {heroWhatsappText}
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
                            <h2 className="text-heading text-foreground mb-4">{giveHeading}</h2>
                            <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">{giveDescription}</p>
                        </div>

                        {/* Primary Donation Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                            {/* One-Time Donation */}
                            <Card className="p-8 hover:shadow-strong transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <DollarSign className="h-8 w-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4">{onetimeTitle}</h3>
                                <p className="text-muted-foreground text-center mb-6">{onetimeDescription}</p>

                                <div className="space-y-3 mb-6 bg-muted/30 p-5 rounded-lg">
                                    <p className="font-semibold text-foreground text-sm mb-3">{onetimeImpactHeading}</p>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        {onetimeImpactItems.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                {item.amount && <span className="font-semibold text-primary">{item.amount}</span>}
                                                {item.text && <span>{item.text}</span>}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link target="_blank" to={onetimeButtonUrl}>
                                    <Button className="bg-gradient-primary hover:bg-primary-hover w-full" size="lg">
                                        {onetimeButtonText}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </Card>

                            {/* Monthly Giving */}
                            <Card className="p-8 hover:shadow-strong transition-shadow duration-300 border-2 border-primary relative">
                                <div className="absolute top-4 right-4">
                                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                        Recommended
                                    </span>
                                </div>
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="h-8 w-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4">{monthlyTitle}</h3>
                                <p className="text-muted-foreground text-center mb-6">{monthlyDescription}</p>

                                <div className="space-y-3 mb-6 bg-primary/5 p-5 rounded-lg border border-primary/20">
                                    <p className="font-semibold text-foreground text-sm mb-3">{monthlyWhyHeading}</p>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        {monthlyWhyItems.map((item, idx) => {
                                            const txt = safeText(item);
                                            if (!txt) return null;
                                            return (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                                                    <span>{txt}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <Link target="_blank" to={monthlyButtonUrl}>
                                    <Button className="bg-gradient-primary hover:bg-primary-hover w-full" size="lg">
                                        {monthlyButtonText}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </Card>
                        </div>

                        {/* Additional Giving Options */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                            {/* Honour/Memory */}
                            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                                <h4 className="font-semibold text-foreground mb-3">{honourTitle}</h4>
                                <p className="text-sm text-muted-foreground mb-4">{honourDesc}</p>
                                <Link target="_blank" to={honourBtnUrl}>
                                    <button className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground">
                                        {honourBtnText}
                                    </button>
                                </Link>
                            </Card>

                            {/* Securities */}
                            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                                <h4 className="font-semibold text-foreground mb-3">{securitiesTitle}</h4>
                                <p className="text-sm text-muted-foreground mb-4">{securitiesDesc}</p>
                                <Button variant="outline" className="w-full" size="sm"
                                    onClick={() => window.open(
                                        securitiesBtnUrl,
                                        "_blank"
                                    )}
                                >
                                    {securitiesBtnText}
                                </Button>
                            </Card>

                            {/* Corporate */}
                            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                                <h4 className="font-semibold text-foreground mb-3">{corporateTitle}</h4>
                                <p className="text-sm text-muted-foreground mb-4">{corporateDesc}</p>
                                <Link target="_blank" to={corporateBtnUrl}>
                                    <Button variant="outline" className="w-full" size="sm">
                                        {corporateBtnText}
                                    </Button>
                                </Link>
                            </Card>
                        </div>

                        {/* Other Ways to Support */}
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 bg-muted/30">
                                <h3 className="text-xl font-bold text-foreground mb-6 text-center">{otherHeading}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {otherCards.map((card, idx) => (
                                        <Card key={idx} className="p-6 bg-background">
                                            <div className="flex items-start gap-3 mb-4">
                                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <p className="font-semibold text-foreground mb-1">{card.title}</p>
                                                    <p className="text-sm text-muted-foreground mb-3">{card.description}</p>
                                                </div>
                                            </div>
                                            {card.btn_text && (
                                                <Button variant="outline" className="w-full" size="sm"
                                                    onClick={() => {
                                                        if (card.btn_url?.startsWith('http')) {
                                                            window.open(card.btn_url, '_blank');
                                                        }
                                                    }}
                                                >
                                                    {card.btn_text}
                                                </Button>
                                            )}
                                        </Card>
                                    ))}
                                </div>

                                {/* e-Transfer / Cheque */}
                                <Card className="p-6 bg-background mt-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-foreground mb-3">{etransferTitle}</p>
                                            <div className="space-y-2 text-sm text-muted-foreground">
                                                <p><strong className="text-foreground">e-Transfer:</strong> {etransferEmail}</p>
                                                <p><strong className="text-foreground">Cheque:</strong> {etransferCheque}</p>
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
                                <h2 className="text-2xl font-bold text-foreground mb-4">{stayHeading}</h2>
                                <p className="text-lg text-muted-foreground mb-8">{stayDescription}</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="flex flex-col items-center">
                                        <Mail className="h-8 w-8 text-primary mb-2" />
                                        <p className="font-semibold text-foreground mb-1">Email</p>
                                        <p className="text-sm text-muted-foreground">{stayEmail}</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Phone className="h-8 w-8 text-primary mb-2" />
                                        <p className="font-semibold text-foreground mb-1">Phone</p>
                                        <p className="text-sm text-muted-foreground">{stayPhone}</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <MapPin className="h-8 w-8 text-primary mb-2" />
                                        <p className="font-semibold text-foreground mb-1">Address</p>
                                        <p className="text-sm text-muted-foreground text-center whitespace-pre-line">{stayAddress}</p>
                                    </div>
                                </div>

                                <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg">
                                    {stayBtnText}
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
                            <h2 className="text-heading text-foreground mb-4">{galleryHeading}</h2>
                            <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">{galleryDescription}</p>
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
                {isImageModalOpen && selectedImageIndex !== null && communityImages.length > 0 && (
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
