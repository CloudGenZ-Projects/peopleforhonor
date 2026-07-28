import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserCheck, GraduationCap, Briefcase, Users, ArrowRight, CheckCircle2, Calendar, DollarSign, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useProgramDetailLive } from "@/hooks/usePayloadLive";

const safeText = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') return val.text || val.title || val.description || val.content || '';
    return String(val);
};

const getWhoIcon = (index) => {
    switch (index % 3) {
        case 0: return GraduationCap;
        case 1: return Briefcase;
        case 2: return Users;
        default: return GraduationCap;
    }
};

const MentorshipProgram = () => {
    const { data } = useProgramDetailLive('mentorship');

    const badge = data?.badge;
    const title = data?.title;
    const heroSubtitle = data?.hero_subtitle;

    const duration = data?.duration;
    const capacity = data?.capacity;
    const cost = data?.cost;

    const forTitle = data?.mentorship_for_title;
    const forSubtitle = data?.mentorship_for_subtitle;
    const forCards = data?.mentorship_for_cards || [];

    const worksTitle = data?.mentorship_works_title;
    const worksItems = data?.mentorship_works_items || [];

    const whyTitle = data?.mentorship_why_title;
    const whyItems = data?.mentorship_why_items || [];

    const ctaHeading = data?.cta_heading;
    const ctaDescription = data?.cta_description;
    const btn1Text = data?.register_button_text;
    const btn1Url = data?.register_button_url;
    const btn2Text = data?.cta_btn2_text;
    const btn2Url = data?.cta_btn2_url;

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            {badge && (
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                                    <UserCheck className="h-4 w-4" />
                                    <span className="text-sm font-medium">{badge}</span>
                                </div>
                            )}
                            {title && <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>}
                            {heroSubtitle && <p className="text-xl leading-relaxed opacity-90 mb-8">{heroSubtitle}</p>}
                            <div className="flex flex-wrap gap-3 justify-center">
                                {duration && (
                                    <Badge variant="secondary" className="text-base px-4 py-2">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        {duration}
                                    </Badge>
                                )}
                                {capacity && (
                                    <Badge variant="secondary" className="text-base px-4 py-2">
                                        <Globe className="h-4 w-4 mr-2" />
                                        {capacity}
                                    </Badge>
                                )}
                                {cost && (
                                    <Badge variant="secondary" className="text-base px-4 py-2">
                                        <DollarSign className="h-4 w-4 mr-2" />
                                        {cost}
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who It's For */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                {forTitle && <h2 className="text-3xl font-bold text-foreground mb-4">{forTitle}</h2>}
                                {forSubtitle && (
                                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                        {forSubtitle}
                                    </p>
                                )}
                            </div>

                            {forCards.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {forCards.map((item, index) => {
                                        const Icon = getWhoIcon(index);
                                        return (
                                            <Card key={index} className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-shadow text-center">
                                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <Icon className="h-8 w-8 text-primary-foreground" />
                                                </div>
                                                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                                                <p className="text-muted-foreground">{item.description}</p>
                                            </Card>
                                        );
                                    })}
                                </div>
                            )}

                            {/* How It Works */}
                            {worksItems.length > 0 && (
                                <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                    {worksTitle && <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{worksTitle}</h3>}
                                    <div className="space-y-4 max-w-3xl mx-auto">
                                        {worksItems.map((item, index) => {
                                            const txt = safeText(item);
                                            if (!txt) return null;
                                            return (
                                                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                                                    <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                                                    <p className="text-lg text-muted-foreground">{txt}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Card>
                            )}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                {whyItems.length > 0 && (
                    <section className="py-16 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                    {whyTitle && <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{whyTitle}</h3>}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {whyItems.map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                                <div>
                                                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                                {ctaHeading && <h2 className="text-2xl font-bold text-foreground mb-4">{ctaHeading}</h2>}
                                {ctaDescription && <p className="text-lg text-muted-foreground mb-8">{ctaDescription}</p>}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                                    {btn1Text && (
                                        <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg"
                                            onClick={() =>
                                                window.open(
                                                    btn1Url || "https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform",
                                                    "_blank"
                                                )
                                            }
                                        >
                                            {btn1Text}
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    )}
                                    {btn2Text && (
                                        <Button variant="outline" size="lg"
                                            onClick={() =>
                                                window.open(
                                                    btn2Url || "https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform",
                                                    "_blank"
                                                )
                                            }
                                        >
                                            {btn2Text}
                                        </Button>
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    <Button variant="outline" size="lg"
                                        onClick={() =>
                                            window.open(
                                                "https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform",
                                                "_blank"
                                            )
                                        }
                                    >
                                        Register for Adult Circle Gathering
                                    </Button>
                                </div>
                                <div className="mt-6">
                                    <Button variant="ghost" size="lg" asChild>
                                        <Link to="/programs">View All Programs</Link>
                                    </Button>
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

export default MentorshipProgram;
