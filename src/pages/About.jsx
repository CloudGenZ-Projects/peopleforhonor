import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Award, Quote, Compass, HeartHandshake, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import francisImg from "@/assets/Francis_Ukposidolo.jpeg";
import { useAboutPageLive } from "@/hooks/usePayloadLive";
import { getMediaUrl } from "@/services/payloadApi";

const getValueIcon = (index) => {
    if (index === 0) return Heart;
    if (index === 1) return Users;
    if (index === 2) return Target;
    return Award;
};

const getInvolvedIcon = (index) => {
    if (index === 0) return Compass;
    if (index === 1) return HeartHandshake;
    return Gift;
};

const About = () => {
    const { data } = useAboutPageLive();

    // 1. Hero Section
    const heroTitle = data?.hero_title;
    const heroSubtitle = data?.hero_subtitle;

    // 2. Founder's Story & Images
    const bannerImgUrl = getMediaUrl(data?.banner_image, './aboutUs.jpg');
    const founderBadge = data?.founder_badge;
    const founderTitle = data?.founder_title;
    const founderName = data?.founder_name;
    const founderRole = data?.founder_role;
    const founderCredentials = data?.founder_credentials;

    const founderSec1Title = data?.founder_sec1_title;
    const founderSec1P1 = data?.founder_sec1_p1;
    const founderSec1P2 = data?.founder_sec1_p2;

    const founderSec2Title = data?.founder_sec2_title;
    const founderSec2P1 = data?.founder_sec2_p1;
    const founderSec2P2 = data?.founder_sec2_p2;

    const founderSec3Title = data?.founder_sec3_title;
    const founderSec3P1 = data?.founder_sec3_p1;
    const founderQuote = data?.founder_quote;
    const founderSec3P2 = data?.founder_sec3_p2;
    const founderLegacyQuote = data?.founder_legacy_quote;

    const founderImgUrl = getMediaUrl(data?.founder_image, francisImg);

    // 3. Who We Are & Values
    const whoTitle = data?.who_title;
    const whoP1 = data?.who_p1;
    const whoP2 = data?.who_p2;
    const valuesList = data?.values_list || [];

    // 4. Mission & Vision
    const missionTitle = data?.mission_title;
    const missionText = data?.mission_text;
    const missionTag = data?.mission_tag;

    const visionTitle = data?.vision_title;
    const visionText = data?.vision_text;
    const visionTag = data?.vision_tag;

    // 5. Who We Serve & What We Do
    const serveHeading = data?.serve_heading;
    const serveTitle = data?.serve_title;
    const serveText = data?.serve_text;
    const helpTitle = data?.help_title;
    const helpText = data?.help_text;

    // 6. Core Values List
    const coreValuesHeading = data?.core_values_heading;
    const coreValuesItems = data?.core_values_items || [];

    // 7. Get Involved Section
    const getInvolvedHeading = data?.get_involved_heading;
    const getInvolvedText = data?.get_involved_text;
    const getInvolvedCards = data?.get_involved_cards || [];

    const ctaBtn1Text = data?.cta_btn_1_text;
    const ctaBtn1Link = data?.cta_btn_1_link;
    const ctaBtn2Text = data?.cta_btn_2_text;
    const ctaBtn2Link = data?.cta_btn_2_link;

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            {heroTitle && <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroTitle}</h1>}
                            {heroSubtitle && <p className="text-xl leading-relaxed opacity-90">{heroSubtitle}</p>}
                        </div>
                    </div>
                </section>

                {/* The Founder's Story */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-8">
                            {bannerImgUrl && (
                                <img
                                    src={bannerImgUrl}
                                    alt="People for Honor coaching"
                                    className="w-full h-80 object-cover rounded-xl shadow-medium"
                                />
                            )}

                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-medium">
                                {founderBadge && (
                                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                                        <Award className="h-4 w-4" />
                                        <span>{founderBadge}</span>
                                    </div>
                                )}
                                {founderTitle && (
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                        {founderTitle}
                                    </h2>
                                )}

                                {/* Section 1 */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
                                    <div className="lg:col-span-7 space-y-4">
                                        {founderSec1Title && (
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                                {founderSec1Title}
                                            </h3>
                                        )}
                                        {founderSec1P1 && (
                                            <p className="text-lg leading-relaxed text-muted-foreground">
                                                {founderSec1P1}
                                            </p>
                                        )}
                                        {founderSec1P2 && (
                                            <p className="text-lg leading-relaxed text-muted-foreground">
                                                {founderSec1P2}
                                            </p>
                                        )}
                                    </div>

                                    <div className="lg:col-span-5">
                                        <div className="relative rounded-2xl overflow-hidden shadow-strong border border-border/50 bg-muted/30 group">
                                            {founderImgUrl && (
                                                <img
                                                    src={founderImgUrl}
                                                    alt={founderName || "Mr. Francis Ukposidolo"}
                                                    className="w-full h-[360px] sm:h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                {founderName && <h4 className="text-xl font-bold">{founderName}</h4>}
                                                {founderRole && <p className="text-sm text-white/90 font-medium mt-1">{founderRole}</p>}
                                                {founderCredentials && <p className="text-xs text-white/75 mt-0.5">{founderCredentials}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="space-y-4 mb-10">
                                    {founderSec2Title && (
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                            {founderSec2Title}
                                        </h3>
                                    )}
                                    {founderSec2P1 && (
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            {founderSec2P1}
                                        </p>
                                    )}
                                    {founderSec2P2 && (
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            {founderSec2P2}
                                        </p>
                                    )}
                                </div>

                                {/* Section 3 */}
                                <div className="space-y-6">
                                    {founderSec3Title && (
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                            {founderSec3Title}
                                        </h3>
                                    )}
                                    {founderSec3P1 && (
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            {founderSec3P1}
                                        </p>
                                    )}

                                    {founderQuote && (
                                        <div className="my-8 relative overflow-hidden rounded-xl bg-gradient-primary p-8 text-primary-foreground shadow-medium">
                                            <Quote className="h-12 w-12 opacity-20 absolute top-4 right-4" />
                                            <p className="text-2xl md:text-3xl font-bold italic tracking-wide text-center">
                                                {founderQuote}
                                            </p>
                                        </div>
                                    )}

                                    {founderSec3P2 && (
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            {founderSec3P2}
                                        </p>
                                    )}

                                    {founderLegacyQuote && (
                                        <div className="mt-8 p-6 rounded-xl bg-primary/5 border-l-4 border-primary">
                                            <p className="text-lg md:text-xl font-semibold text-foreground italic">
                                                {founderLegacyQuote}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Who We Are */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                {whoTitle && <h2 className="text-heading text-foreground mb-6">{whoTitle}</h2>}
                                {whoP1 && <p className="text-lg leading-relaxed text-muted-foreground mb-8">{whoP1}</p>}
                                {whoP2 && (
                                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                                        {whoP2}
                                    </p>
                                )}

                                {valuesList.length > 0 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                        {valuesList.map((value, index) => {
                                            const Icon = getValueIcon(index);
                                            return (
                                                <div key={index} className="flex items-start gap-4 p-4 bg-background/50 rounded-lg">
                                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Icon className="h-6 w-6 text-primary-foreground" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                                                        <p className="text-muted-foreground text-sm">{value.description}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Our Mission & Vision */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Our Mission & Vision
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Guiding every step of our journey as we empower newcomers and build communities of belonging.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Mission Card */}
                                <Card className="p-8 bg-gradient-card border-0 shadow-medium flex flex-col justify-between hover:shadow-strong transition-all duration-300">
                                    <div>
                                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                            <Target className="h-7 w-7 text-primary" />
                                        </div>
                                        {missionTitle && <h3 className="text-2xl font-bold text-foreground mb-4">{missionTitle}</h3>}
                                        {missionText && (
                                            <p className="text-lg leading-relaxed text-muted-foreground">
                                                {missionText}
                                            </p>
                                        )}
                                    </div>
                                    {missionTag && (
                                        <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-2 text-sm font-semibold text-primary">
                                            <span>{missionTag}</span>
                                        </div>
                                    )}
                                </Card>

                                {/* Vision Card */}
                                <Card className="p-8 bg-gradient-card border-0 shadow-medium flex flex-col justify-between hover:shadow-strong transition-all duration-300">
                                    <div>
                                        <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                                            <Heart className="h-7 w-7 text-secondary" />
                                        </div>
                                        {visionTitle && <h3 className="text-2xl font-bold text-foreground mb-4">{visionTitle}</h3>}
                                        {visionText && (
                                            <p className="text-lg leading-relaxed text-muted-foreground">
                                                {visionText}
                                            </p>
                                        )}
                                    </div>
                                    {visionTag && (
                                        <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-2 text-sm font-semibold text-secondary">
                                            <span>{visionTag}</span>
                                        </div>
                                    )}
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who We Serve & What We Do */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-medium">
                                {serveHeading && <h2 className="text-heading text-foreground mb-8 text-center">{serveHeading}</h2>}

                                <div className="space-y-6">
                                    {serveTitle && (
                                        <div className="bg-background/50 p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <Users className="h-5 w-5 text-primary" />
                                                {serveTitle}
                                            </h3>
                                            {serveText && (
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {serveText}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {helpTitle && (
                                        <div className="bg-background/50 p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <Heart className="h-5 w-5 text-primary" />
                                                {helpTitle}
                                            </h3>
                                            {helpText && (
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {helpText}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Our Core Values */}
                {coreValuesItems.length > 0 && (
                    <section className="py-16">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-medium">
                                    {coreValuesHeading && (
                                        <h2 className="text-heading text-foreground mb-8 text-center">{coreValuesHeading}</h2>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {coreValuesItems.map((valItem, idx) => (
                                            <div key={idx} className="bg-background/50 p-6 rounded-lg border-l-4 border-primary">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                                                    <div>
                                                        <h3 className="font-semibold text-foreground mb-2 text-lg">{valItem.title}</h3>
                                                        <p className="text-muted-foreground">{valItem.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </section>
                )}

                {/* Get Involved */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                <div className="text-center mb-10">
                                    {getInvolvedHeading && <h2 className="text-heading text-foreground mb-4">{getInvolvedHeading}</h2>}
                                    {getInvolvedText && (
                                        <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                                            {getInvolvedText}
                                        </p>
                                    )}
                                </div>

                                {getInvolvedCards.length > 0 && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                        {getInvolvedCards.map((cardItem, idx) => {
                                            const Icon = getInvolvedIcon(idx);
                                            return (
                                                <div key={idx} className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 flex flex-col justify-between hover:shadow-medium transition-all duration-300">
                                                    <div>
                                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                                            <Icon className="h-6 w-6 text-primary" />
                                                        </div>
                                                        <h3 className="text-xl font-bold text-foreground mb-3">{cardItem.title}</h3>
                                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                                            {cardItem.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    {ctaBtn1Text && ctaBtn1Link && (
                                        <Button className="bg-gradient-primary hover:bg-primary-hover px-8 py-6 text-base font-semibold" asChild>
                                            <a href={ctaBtn1Link}>{ctaBtn1Text}</a>
                                        </Button>
                                    )}
                                    {ctaBtn2Text && ctaBtn2Link && (
                                        <Button variant="outline" className="px-8 py-6 text-base font-semibold" asChild>
                                            <a href={ctaBtn2Link}>{ctaBtn2Text}</a>
                                        </Button>
                                    )}
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
