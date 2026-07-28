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
    const heroTitle = data?.hero_title;
    const heroSubtitle = data?.hero_subtitle;
    const heroButtonText = data?.hero_button_text;
    const heroTagline = data?.hero_tagline;
    const heroWhatsappText = data?.hero_whatsapp_text;
    const heroWhatsappUrl = data?.hero_whatsapp_url;

    // 2. Ways to Give Section
    const giveHeading = data?.give_heading;
    const giveDescription = data?.give_description;

    // 3. One-Time Donation Card
    const onetimeTitle = data?.onetime_title;
    const onetimeDescription = data?.onetime_description;
    const onetimeImpactHeading = data?.onetime_impact_heading;
    const onetimeImpactItems = data?.onetime_impact_items || [];
    const onetimeButtonText = data?.onetime_button_text;
    const onetimeButtonUrl = data?.onetime_button_url;

    // 4. Monthly Giving Card
    const monthlyTitle = data?.monthly_title;
    const monthlyDescription = data?.monthly_description;
    const monthlyWhyHeading = data?.monthly_why_heading;
    const monthlyWhyItems = data?.monthly_why_items || [];
    const monthlyButtonText = data?.monthly_button_text;
    const monthlyButtonUrl = data?.monthly_button_url;

    // 5. Additional Giving Options (3 Cards)
    const honourTitle = data?.honour_title;
    const honourDesc = data?.honour_desc;
    const honourBtnText = data?.honour_btn_text;
    const honourBtnUrl = data?.honour_btn_url;

    const securitiesTitle = data?.securities_title;
    const securitiesDesc = data?.securities_desc;
    const securitiesBtnText = data?.securities_btn_text;
    const securitiesBtnUrl = data?.securities_btn_url;

    const corporateTitle = data?.corporate_title;
    const corporateDesc = data?.corporate_desc;
    const corporateBtnText = data?.corporate_btn_text;
    const corporateBtnUrl = data?.corporate_btn_url;

    // 6. Other Ways to Support Section
    const otherHeading = data?.other_heading;
    const otherCards = data?.other_cards || [];

    const etransferTitle = data?.etransfer_title;
    const etransferEmail = data?.etransfer_email;
    const etransferCheque = data?.etransfer_cheque;

    // 7. Stay Connected Section
    const stayHeading = data?.stay_heading;
    const stayDescription = data?.stay_description;
    const stayEmail = data?.stay_email;
    const stayPhone = data?.stay_phone;
    const stayAddress = data?.stay_address;
    const stayBtnText = data?.stay_btn_text;

    // 8. Community Gathering Gallery (6 Bottom Images)
    const galleryHeading = data?.gallery_heading;
    const galleryDescription = data?.gallery_description;
    const rawCommunityImages = data?.community_images || [];

    const communityImages = rawCommunityImages.map((imgObj) => ({
        src: getMediaUrl(imgObj.image, imgObj.imageUrl || imgObj.image),
        alt: imgObj.alt || 'Community gathering'
    })).filter(img => Boolean(img.src));

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
                            {heroTitle && <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroTitle}</h1>}
                            {heroSubtitle && <p className="text-xl leading-relaxed opacity-90 mb-8">{heroSubtitle}</p>}
                            {heroButtonText && (
                                <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground" asChild>
                                    <a href="#ways-to-give">
                                        {heroButtonText}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                            )}
                            {heroTagline && (
                                <div className="mt-6 bg-background/10 backdrop-blur-sm rounded-xl p-4">
                                    <p className="text-base md:text-lg">{heroTagline}</p>
                                </div>
                            )}
                            {heroWhatsappUrl && (
                                <div className="mt-4 flex justify-center">
                                    <Button size="lg" variant="outline" asChild className="bg-white hover:bg-white/90 text-black border-white">
                                        <a href={heroWhatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Join us on WhatsApp">
                                            {heroWhatsappText || "Join us on WhatsApp"}
                                        </a>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Ways to Give Section */}
                <section id="ways-to-give" className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            {giveHeading && <h2 className="text-heading text-foreground mb-4">{giveHeading}</h2>}
                            {giveDescription && <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">{giveDescription}</p>}
                        </div>

                        {/* Primary Donation Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                            {/* One-Time Donation */}
                            <Card className="p-8 hover:shadow-strong transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <DollarSign className="h-8 w-8 text-primary-foreground" />
                                </div>
                                {onetimeTitle && <h3 className="text-2xl font-bold text-center mb-4">{onetimeTitle}</h3>}
                                {onetimeDescription && <p className="text-muted-foreground text-center mb-6">{onetimeDescription}</p>}

                                {onetimeImpactItems.length > 0 && (
                                    <div className="space-y-3 mb-6 bg-muted/30 p-5 rounded-lg">
                                        {onetimeImpactHeading && <p className="font-semibold text-foreground text-sm mb-3">{onetimeImpactHeading}</p>}
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            {onetimeImpactItems.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    {item.amount && <span className="font-semibold text-primary">{item.amount}</span>}
                                                    {item.text && <span>{item.text}</span>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {onetimeButtonUrl && (
                                    <Link target="_blank" to={onetimeButtonUrl}>
                                        <Button className="bg-gradient-primary hover:bg-primary-hover w-full" size="lg">
                                            {onetimeButtonText || "Make a One-Time Donation"}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                )}
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
                                {monthlyTitle && <h3 className="text-2xl font-bold text-center mb-4">{monthlyTitle}</h3>}
                                {monthlyDescription && <p className="text-muted-foreground text-center mb-6">{monthlyDescription}</p>}

                                {monthlyWhyItems.length > 0 && (
                                    <div className="space-y-3 mb-6 bg-primary/5 p-5 rounded-lg border border-primary/20">
                                        {monthlyWhyHeading && <p className="font-semibold text-foreground text-sm mb-3">{monthlyWhyHeading}</p>}
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
                                )}

                                {monthlyButtonUrl && (
                                    <Link target="_blank" to={monthlyButtonUrl}>
                                        <Button className="bg-gradient-primary hover:bg-primary-hover w-full" size="lg">
                                            {monthlyButtonText || "Raising Futures Every Month"}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                )}
                            </Card>
                        </div>

                        {/* Additional Giving Options */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                            {/* Honour/Memory */}
                            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                                {honourTitle && <h4 className="font-semibold text-foreground mb-3">{honourTitle}</h4>}
                                {honourDesc && <p className="text-sm text-muted-foreground mb-4">{honourDesc}</p>}
                                {honourBtnUrl && (
                                    <Link target="_blank" to={honourBtnUrl}>
                                        <button className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground">
                                            {honourBtnText || "Donate in Honour/Memory"}
                                        </button>
                                    </Link>
                                )}
                            </Card>

                            {/* Securities */}
                            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                                {securitiesTitle && <h4 className="font-semibold text-foreground mb-3">{securitiesTitle}</h4>}
                                {securitiesDesc && <p className="text-sm text-muted-foreground mb-4">{securitiesDesc}</p>}
                                {securitiesBtnUrl && (
                                    <Button variant="outline" className="w-full" size="sm"
                                        onClick={() => window.open(
                                            securitiesBtnUrl,
                                            "_blank"
                                        )}
                                    >
                                        {securitiesBtnText || "Donate Securities"}
                                    </Button>
                                )}
                            </Card>

                            {/* Corporate */}
                            <Card className="p-6 text-center hover:shadow-medium transition-shadow">
                                {corporateTitle && <h4 className="font-semibold text-foreground mb-3">{corporateTitle}</h4>}
                                {corporateDesc && <p className="text-sm text-muted-foreground mb-4">{corporateDesc}</p>}
                                {corporateBtnUrl && (
                                    <Link target="_blank" to={corporateBtnUrl}>
                                        <Button variant="outline" className="w-full" size="sm">
                                            {corporateBtnText || "Sponsor a Program"}
                                        </Button>
                                    </Link>
                                )}
                            </Card>
                        </div>

                        {/* Other Ways to Support */}
                        {(otherHeading || otherCards.length > 0 || etransferTitle) && (
                            <div className="max-w-4xl mx-auto">
                                <Card className="p-8 bg-muted/30">
                                    {otherHeading && <h3 className="text-xl font-bold text-foreground mb-6 text-center">{otherHeading}</h3>}
                                    {otherCards.length > 0 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {otherCards.map((card, idx) => (
                                                <Card key={idx} className="p-6 bg-background">
                                                    <div className="flex items-start gap-3 mb-4">
                                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                        <div>
                                                            {card.title && <p className="font-semibold text-foreground mb-1">{card.title}</p>}
                                                            {card.description && <p className="text-sm text-muted-foreground mb-3">{card.description}</p>}
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
                                    )}

                                    {/* e-Transfer / Cheque */}
                                    {etransferTitle && (
                                        <Card className="p-6 bg-background mt-6">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-foreground mb-3">{etransferTitle}</p>
                                                    <div className="space-y-2 text-sm text-muted-foreground">
                                                        {etransferEmail && <p><strong className="text-foreground">e-Transfer:</strong> {etransferEmail}</p>}
                                                        {etransferCheque && <p><strong className="text-foreground">Cheque:</strong> {etransferCheque}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    )}
                                </Card>
                            </div>
                        )}
                    </div>
                </section>

                {/* Stay Connected Section */}
                {(stayHeading || stayEmail) && (
                    <section className="py-20 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl mx-auto">
                                <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                    {stayHeading && <h2 className="text-2xl font-bold text-foreground mb-4">{stayHeading}</h2>}
                                    {stayDescription && <p className="text-lg text-muted-foreground mb-8">{stayDescription}</p>}

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        {stayEmail && (
                                            <div className="flex flex-col items-center">
                                                <Mail className="h-8 w-8 text-primary mb-2" />
                                                <p className="font-semibold text-foreground mb-1">Email</p>
                                                <p className="text-sm text-muted-foreground">{stayEmail}</p>
                                            </div>
                                        )}
                                        {stayPhone && (
                                            <div className="flex flex-col items-center">
                                                <Phone className="h-8 w-8 text-primary mb-2" />
                                                <p className="font-semibold text-foreground mb-1">Phone</p>
                                                <p className="text-sm text-muted-foreground">{stayPhone}</p>
                                            </div>
                                        )}
                                        {stayAddress && (
                                            <div className="flex flex-col items-center">
                                                <MapPin className="h-8 w-8 text-primary mb-2" />
                                                <p className="font-semibold text-foreground mb-1">Address</p>
                                                <p className="text-sm text-muted-foreground text-center whitespace-pre-line">{stayAddress}</p>
                                            </div>
                                        )}
                                    </div>

                                    {stayBtnText && (
                                        <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg">
                                            {stayBtnText}
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    )}
                                </Card>
                            </div>
                        </div>
                    </section>
                )}

                {/* Upcoming Events on Join Us */}
                <UpcomingEvents />

                {/* Contact Information */}
                <Contact />

                {/* Community Hangouts - Image Gallery */}
                {communityImages.length > 0 && (
                    <section className="py-20 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                {galleryHeading && <h2 className="text-heading text-foreground mb-4">{galleryHeading}</h2>}
                                {galleryDescription && <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">{galleryDescription}</p>}
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
                )}

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
