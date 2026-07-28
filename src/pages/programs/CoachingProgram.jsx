import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Briefcase, Heart, ArrowRight, CheckCircle2, Users, Calendar, DollarSign, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useProgramDetailLive } from "@/hooks/usePayloadLive";

const safeText = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') return val.text || val.title || val.description || val.content || '';
    return String(val);
};

const getExpectIcon = (index) => {
    switch (index % 4) {
        case 0: return Users;
        case 1: return FileText;
        case 2: return TrendingUp;
        case 3: return CheckCircle2;
        default: return Users;
    }
};

const CoachingProgram = () => {
    const { data } = useProgramDetailLive('coaching');

    const badge = data?.badge;
    const title = data?.title;
    const heroSubtitle = data?.hero_subtitle;

    const duration = data?.duration;
    const capacity = data?.capacity;
    const cost = data?.cost;

    const sectionHeading = data?.coaching_section_heading;
    const sectionSubtitle = data?.coaching_section_subtitle;

    const careerTitle = data?.coaching_career_title;
    const careerDesc = data?.coaching_career_desc;
    const careerItems = data?.coaching_career_items || [];

    const lifeTitle = data?.coaching_life_title;
    const lifeDesc = data?.coaching_life_desc;
    const lifeItems = data?.coaching_life_items || [];

    const expectTitle = data?.coaching_expect_title;
    const expectItems = data?.coaching_expect_items || [];

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
                                    <Target className="h-4 w-4" />
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
                                        <Users className="h-4 w-4 mr-2" />
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

                {/* Program Overview */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                {sectionHeading && <h2 className="text-3xl font-bold text-foreground mb-4">{sectionHeading}</h2>}
                                {sectionSubtitle && (
                                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                        {sectionSubtitle}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                {/* Career Development */}
                                <Card className="p-8 bg-gradient-card border-0 shadow-strong hover:shadow-strong transition-shadow">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Briefcase className="h-8 w-8 text-primary-foreground" />
                                    </div>
                                    {careerTitle && <h3 className="text-2xl font-bold text-foreground text-center mb-4">{careerTitle}</h3>}
                                    {careerDesc && (
                                        <p className="text-muted-foreground text-center mb-6">
                                            {careerDesc}
                                        </p>
                                    )}
                                    {careerItems.length > 0 && (
                                        <div className="space-y-4 mb-8">
                                            {careerItems.map((item, index) => {
                                                const txt = safeText(item);
                                                if (!txt) return null;
                                                return (
                                                    <div key={index} className="flex items-start gap-3">
                                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <p className="text-muted-foreground">{txt}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                    <Button className="bg-gradient-primary hover:bg-primary-hover w-full" size="lg"
                                        onClick={() =>
                                            window.open(
                                                btn1Url || "https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform",
                                                "_blank"
                                            )
                                        }
                                    >
                                        Apply for Career Coaching
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Card>

                                {/* Life & Wellbeing */}
                                <Card className="p-8 bg-gradient-card border-0 shadow-strong hover:shadow-strong transition-shadow">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Heart className="h-8 w-8 text-primary-foreground" />
                                    </div>
                                    {lifeTitle && <h3 className="text-2xl font-bold text-foreground text-center mb-4">{lifeTitle}</h3>}
                                    {lifeDesc && (
                                        <p className="text-muted-foreground text-center mb-6">
                                            {lifeDesc}
                                        </p>
                                    )}
                                    {lifeItems.length > 0 && (
                                        <div className="space-y-4 mb-8">
                                            {lifeItems.map((item, index) => {
                                                const txt = safeText(item);
                                                if (!txt) return null;
                                                return (
                                                    <div key={index} className="flex items-start gap-3">
                                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <p className="text-muted-foreground">{txt}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                    <Button className="bg-gradient-primary hover:bg-primary-hover w-full" size="lg"
                                        onClick={() =>
                                            window.open(
                                                btn1Url || "https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform",
                                                "_blank"
                                            )
                                        }
                                    >
                                        Apply for Life Coaching
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Card>
                            </div>

                            {/* What to Expect */}
                            {expectItems.length > 0 && (
                                <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                    {expectTitle && <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{expectTitle}</h3>}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {expectItems.map((item, index) => {
                                            const Icon = getExpectIcon(index);
                                            return (
                                                <div key={index} className="flex items-start gap-4 p-5 bg-background rounded-lg">
                                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Icon className="h-6 w-6 text-primary-foreground" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Card>
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                                {ctaHeading && <h2 className="text-2xl font-bold text-foreground mb-4">{ctaHeading}</h2>}
                                {ctaDescription && <p className="text-lg text-muted-foreground mb-8">{ctaDescription}</p>}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default CoachingProgram;
