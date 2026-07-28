import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Calendar, DollarSign, Award, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useProgramDetailLive } from "@/hooks/usePayloadLive";

const safeText = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') return val.text || val.title || val.content || '';
    return String(val);
};

const EntrepreneurshipLaunchpad = () => {
    const { data } = useProgramDetailLive('entrepreneurship-launchpad');

    const badge = data?.badge;
    const title = data?.title;
    const heroSubtitle = data?.hero_subtitle;

    const duration = data?.duration;
    const capacity = data?.capacity;
    const cost = data?.cost;

    const whoCanJoin = data?.who_can_join;
    const detailsCapacity = data?.details_capacity;
    const schedule = data?.schedule;
    const detailsCost = data?.details_cost;
    const leadInstructor = data?.lead_instructor;

    const learningOutcomes = data?.learning_outcomes || [];
    const takeawayTitle = data?.takeaway_title;
    const takeawayText = data?.takeaway_text;

    const curriculumTitle = data?.curriculum_title;
    const weeks = data?.weeks || [];
    const commitmentNote = data?.commitment_note;

    const ctaHeading = data?.cta_heading;
    const ctaDescription = data?.cta_description;
    const registerButtonText = data?.register_button_text;
    const registerButtonUrl = data?.register_button_url;

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
                                    <Lightbulb className="h-4 w-4" />
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {/* Program Details */}
                                <Card className="p-6 bg-gradient-card border-0 shadow-medium">
                                    <h3 className="text-xl font-bold text-foreground mb-4">Program Details</h3>
                                    <div className="space-y-4">
                                        {whoCanJoin && (
                                            <div className="flex items-start gap-3">
                                                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-foreground">Who Can Join</p>
                                                    <p className="text-sm text-muted-foreground">{whoCanJoin}</p>
                                                </div>
                                            </div>
                                        )}
                                        {detailsCapacity && (
                                            <div className="flex items-start gap-3">
                                                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-foreground">Capacity</p>
                                                    <p className="text-sm text-muted-foreground">{detailsCapacity}</p>
                                                </div>
                                            </div>
                                        )}
                                        {schedule && (
                                            <div className="flex items-start gap-3">
                                                <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-foreground">Schedule</p>
                                                    <p className="text-sm text-muted-foreground">{schedule}</p>
                                                </div>
                                            </div>
                                        )}
                                        {detailsCost && (
                                            <div className="flex items-start gap-3">
                                                <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-foreground">Cost</p>
                                                    <p className="text-sm text-muted-foreground">{detailsCost}</p>
                                                </div>
                                            </div>
                                        )}
                                        {leadInstructor && (
                                            <div className="flex items-start gap-3">
                                                <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-foreground">Support</p>
                                                    <p className="text-sm text-muted-foreground">{leadInstructor}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Card>

                                {/* What You'll Get */}
                                <Card className="p-6 bg-gradient-card border-0 shadow-medium">
                                    <h3 className="text-xl font-bold text-foreground mb-4">What You'll Get</h3>
                                    {learningOutcomes.length > 0 && (
                                        <div className="space-y-3">
                                            {learningOutcomes.map((outcome, index) => {
                                                const txt = safeText(outcome);
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
                                    {takeawayText && (
                                        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                            {takeawayTitle && (
                                                <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                                    <Award className="h-5 w-5 text-primary" />
                                                    {takeawayTitle}
                                                </p>
                                            )}
                                            <p className="text-sm text-muted-foreground">{takeawayText}</p>
                                        </div>
                                    )}
                                </Card>
                            </div>

                            {/* Curriculum */}
                            {weeks.length > 0 && (
                                <Card className="p-8 bg-gradient-card border-0 shadow-strong">
                                    {curriculumTitle && (
                                        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{curriculumTitle}</h3>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {weeks.map((w, idx) => (
                                            <Card key={idx} className="p-5 bg-background hover:shadow-medium transition-shadow">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-primary-foreground font-bold">{w.week || idx + 1}</span>
                                                    </div>
                                                </div>
                                                <h4 className="font-semibold text-foreground mb-2">{w.title}</h4>
                                                <p className="text-sm text-muted-foreground">{w.content}</p>
                                            </Card>
                                        ))}
                                    </div>

                                    {commitmentNote && (
                                        <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                                            <div className="flex items-start gap-3">
                                                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-foreground mb-1">Commitment Required</p>
                                                    <p className="text-sm text-muted-foreground">{commitmentNote}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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
                                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                                {ctaHeading && <h2 className="text-2xl font-bold text-foreground mb-4">{ctaHeading}</h2>}
                                {ctaDescription && <p className="text-lg text-muted-foreground mb-8">{ctaDescription}</p>}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    {registerButtonText && (
                                        <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg"
                                            onClick={() =>
                                                window.open(
                                                    registerButtonUrl || "https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform",
                                                    "_blank"
                                                )
                                            }
                                        >
                                            {registerButtonText}
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    )}
                                    <Button variant="outline" size="lg" asChild>
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

export default EntrepreneurshipLaunchpad;
