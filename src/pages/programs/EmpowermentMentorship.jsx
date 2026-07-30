import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProgramDetailLive } from "@/hooks/usePayloadLive";
import { getMediaUrl } from "@/services/payloadApi";

const EmpowermentMentorship = () => {
    const { hash } = useLocation();
    const { data } = useProgramDetailLive('empowerment');

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [hash]);

    const pageTitle = data?.title || "Career Guidance & Support, Mentorship and Coaching";
    const heroSubtitle = data?.hero_subtitle;

    // Empowerment Section
    const empowermentTitle = data?.empowerment_intro_title;
    const empowermentDesc = data?.empowerment_intro_desc;
    const empowermentImg = getMediaUrl(data?.empowerment_image, null);

    const empowermentOfferHeading = data?.empowerment_offer_heading;
    const empowermentOfferSubtitle = data?.empowerment_offer_subtitle;
    const empowermentOfferImg = getMediaUrl(data?.empowerment_offer_image, null);
    const empowermentFeatures = (data?.empowerment_features || []).map(f => f.feature_text);

    // Mentorship Section
    const mentorshipTitle = data?.mentorship_section_title;
    const mentorshipDesc = data?.mentorship_section_desc;
    const mentorshipImg = getMediaUrl(data?.mentorship_section_image, null);
    const mentorshipFeatures = (data?.mentorship_features || []).map(f => f.feature_text);

    // Coaching Section
    const coachingTitle = data?.coaching_section_title;
    const coachingDesc = data?.coaching_section_desc;
    const coachingImg = getMediaUrl(data?.coaching_section_image, null);

    const coachingOfferHeading = data?.coaching_offer_heading;
    const coachingOfferSubtitle = data?.coaching_offer_subtitle;
    const coachingOfferImg = getMediaUrl(data?.coaching_offer_image, null);
    const coachingFeatures = (data?.coaching_features || []).map(f => f.feature_text);

    // CTA
    const ctaTitle = data?.cta_starting_point_title;
    const ctaDesc = data?.cta_starting_point_desc;

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Single Hero for the combined page */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
                            {heroSubtitle && (
                                <p className="text-lg md:text-xl opacity-90">
                                    {heroSubtitle}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Quick in-page navigation */}
                <section className="py-6 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Button asChild variant="outline">
                                <a href="#empowerment">Career Guidance & Support</a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="#mentorship">Mentorship</a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="#coaching">Coaching</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Empowerment Section */}
                <section id="empowerment" className="py-16 scroll-mt-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {empowermentImg && (
                                <img
                                    src={empowermentImg}
                                    alt="Empowerment"
                                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                                />
                            )}
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Briefcase className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        {empowermentTitle && <CardTitle className="text-2xl">{empowermentTitle}</CardTitle>}
                                    </div>
                                    {empowermentDesc && (
                                        <CardDescription className="text-base whitespace-pre-line">
                                            {empowermentDesc}
                                        </CardDescription>
                                    )}
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* What We Offer Section - Empowerment */}
                {(empowermentOfferHeading || empowermentFeatures.length > 0) && (
                    <section className="py-16 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-8">
                                    {empowermentOfferHeading && <h2 className="text-heading text-foreground mb-4">{empowermentOfferHeading}</h2>}
                                    {empowermentOfferSubtitle && (
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {empowermentOfferSubtitle}
                                        </p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                                    {empowermentOfferImg && (
                                        <img
                                            src={empowermentOfferImg}
                                            alt={empowermentOfferHeading || "What we offer"}
                                            className="w-full h-64 object-cover rounded-xl shadow-medium"
                                        />
                                    )}

                                    {empowermentFeatures.length > 0 && (
                                        <Card className="bg-gradient-card border-0 shadow-medium">
                                            <CardContent className="p-6">
                                                <ul className="space-y-3">
                                                    {empowermentFeatures.map((f, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                                            <span>{f}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Mentorship Section */}
                <section id="mentorship" className="py-8 scroll-mt-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-center">
                            <Card className="order-2 md:order-1 bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Users className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        {mentorshipTitle && <CardTitle className="text-2xl">{mentorshipTitle}</CardTitle>}
                                    </div>
                                    {mentorshipDesc && (
                                        <CardDescription className="text-base whitespace-pre-line">
                                            {mentorshipDesc}
                                        </CardDescription>
                                    )}
                                </CardHeader>
                                {mentorshipFeatures.length > 0 && (
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {mentorshipFeatures.map((f, i) => (
                                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                )}
                            </Card>
                            {mentorshipImg && (
                                <img
                                    src={mentorshipImg}
                                    alt="Mentorship"
                                    className="order-1 md:order-2 w-full h-64 md:h-80 object-cover rounded-xl"
                                />
                            )}
                        </div>
                    </div>
                </section>

                {/* Coaching Section */}
                <section id="coaching" className="py-8 scroll-mt-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {coachingImg && (
                                <img
                                    src={coachingImg}
                                    alt="Coaching"
                                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                                />
                            )}
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Target className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        {coachingTitle && <CardTitle className="text-2xl">{coachingTitle}</CardTitle>}
                                    </div>
                                    {coachingDesc && (
                                        <CardDescription className="text-base whitespace-pre-line">
                                            {coachingDesc}
                                        </CardDescription>
                                    )}
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* What We Offer - Coaching */}
                {(coachingOfferHeading || coachingFeatures.length > 0) && (
                    <section className="py-16 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-8">
                                    {coachingOfferHeading && <h2 className="text-heading text-foreground mb-4">{coachingOfferHeading}</h2>}
                                    {coachingOfferSubtitle && (
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {coachingOfferSubtitle}
                                        </p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                                    {coachingOfferImg && (
                                        <img
                                            src={coachingOfferImg}
                                            alt={coachingOfferHeading || "What we offer"}
                                            className="w-full h-64 object-cover rounded-xl shadow-medium"
                                        />
                                    )}

                                    {coachingFeatures.length > 0 && (
                                        <Card className="bg-gradient-card border-0 shadow-medium">
                                            <CardContent className="p-6">
                                                <ul className="space-y-3">
                                                    {coachingFeatures.map((f, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                                            <span>{f}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                {(ctaTitle || ctaDesc) && (
                    <section className="py-14">
                        <div className="container mx-auto px-4">
                            <Card className="p-6 md:p-8 bg-background/60">
                                {ctaTitle && <CardTitle className="text-2xl mb-2">{ctaTitle}</CardTitle>}
                                {ctaDesc && <CardDescription className="mb-4">{ctaDesc}</CardDescription>}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                                        <a href="/join">Join Us <ArrowRight className="ml-2 h-4 w-4" /></a>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <a href="/contact">Talk to a Coach</a>
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default EmpowermentMentorship;
