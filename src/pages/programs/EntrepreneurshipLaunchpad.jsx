import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Calendar, DollarSign, Award, ArrowRight, CheckCircle2, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const EntrepreneurshipLaunchpad = () => {
    const modules = [
        {
            number: 1,
            title: "Problem → Solution",
            content: "Clarity & customer discovery"
        },
        {
            number: 2,
            title: "Business Model & Pricing",
            content: "Break-even, margins"
        },
        {
            number: 3,
            title: "Branding",
            content: "Simple website/landing pages"
        },
        {
            number: 4,
            title: "Sales & Marketing",
            content: "Social, email, partnerships"
        },
        {
            number: 5,
            title: "Money Matters",
            content: "Startup costs, bookkeeping, grants"
        },
        {
            number: 6,
            title: "Legal Basics",
            content: "Registration, permits, contracts"
        },
        {
            number: 7,
            title: "Pitch Practice",
            content: "Storytelling"
        },
        {
            number: 8,
            title: "Demo Night",
            content: "Pitch to community panel"
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                                <Lightbulb className="h-4 w-4" />
                                <span className="text-sm font-medium">Culture & Community Program</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Entrepreneurship Launchpad
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">
                                From idea to pitch: Learn business fundamentals, create your business plan,
                                and pitch to a community panel. Free 6-8 week program with mentors and templates.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    6-8 Weeks
                                </Badge>
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Users className="h-4 w-4 mr-2" />
                                    10-15 Participants
                                </Badge>
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <DollarSign className="h-4 w-4 mr-2" />
                                    100% Free
                                </Badge>
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
                                        <div className="flex items-start gap-3">
                                            <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Who Can Join</p>
                                                <p className="text-sm text-muted-foreground">Early-stage founders & side-hustlers (all ages 16+)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Capacity</p>
                                                <p className="text-sm text-muted-foreground">10–15 participants per cohort</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Schedule</p>
                                                <p className="text-sm text-muted-foreground">6–8 weekly workshops + office hours (hybrid)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Cost</p>
                                                <p className="text-sm text-muted-foreground">Free</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Support</p>
                                                <p className="text-sm text-muted-foreground">Mentors, templates, and pitch feedback</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                {/* Takeaway */}
                                <Card className="p-6 bg-gradient-card border-0 shadow-medium">
                                    <h3 className="text-xl font-bold text-foreground mb-4">What You'll Get</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-muted-foreground">One-page business plan</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-muted-foreground">Basic budget</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-muted-foreground">Starter brand kit</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-muted-foreground">A public pitch</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                        <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                            <Presentation className="h-5 w-5 text-primary" />
                                            Demo Night
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Pitch your business to a community panel and get valuable feedback
                                        </p>
                                    </div>
                                </Card>
                            </div>

                            {/* Modules */}
                            <Card className="p-8 bg-gradient-card border-0 shadow-strong">
                                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Program Modules</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {modules.map((module) => (
                                        <Card key={module.number} className="p-5 bg-background hover:shadow-medium transition-shadow">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-primary-foreground font-bold">{module.number}</span>
                                                </div>
                                            </div>
                                            <h4 className="font-semibold text-foreground mb-2">{module.title}</h4>
                                            <p className="text-sm text-muted-foreground">{module.content}</p>
                                        </Card>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Launch Your Business?</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Join our Entrepreneurship Launchpad and turn your idea into reality.
                                    Get mentorship, templates, and the confidence to pitch your business.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg">
                                        Apply to Cohort
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
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
