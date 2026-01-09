import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Briefcase, Heart, ArrowRight, CheckCircle2, Users, Calendar, DollarSign, FileText, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CoachingProgram = () => {
    const careerDevelopment = [
        "Build a strong, modern résumé that highlights your experience and goals",
        "Create or improve your LinkedIn profile for networking and job searches",
        "Strengthen your computer literacy, using email, job boards, and digital tools with confidence"
    ];

    const lifeWellbeing = [
        "Goal setting that sticks and feels achievable",
        "Time management techniques to get more done, with less stress",
        "Nutrition and sleep basics for sustained energy",
        "Building healthy habits that support your physical and mental wellness"
    ];

    const whatToExpect = [
        {
            icon: Users,
            title: "A dedicated PFH coach matched to your goals",
            description: "Get paired with a coach who understands your journey"
        },
        {
            icon: FileText,
            title: "Structured sessions with hands-on exercises",
            description: "Practical, actionable sessions that build real skills"
        },
        {
            icon: TrendingUp,
            title: "Simple action plans and accountability check-ins",
            description: "Stay on track with clear goals and regular support"
        },
        {
            icon: CheckCircle2,
            title: "Access to templates, resources, and referrals",
            description: "Tools and connections to help you succeed"
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
                                <Target className="h-4 w-4" />
                                <span className="text-sm font-medium">Support Program</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Coaching Program
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">
                                One-on-one support to help you reach your goals. Our Coaching program connects you
                                with trained PFH coaches who guide you through practical steps for personal growth,
                                employment readiness, and everyday wellbeing.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Flexible Schedule
                                </Badge>
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Users className="h-4 w-4 mr-2" />
                                    1-on-1 Sessions
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
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Coaching Path</h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    All coaching is free and available online or in person.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                {/* Career Development */}
                                <Card className="p-8 bg-gradient-card border-0 shadow-strong hover:shadow-strong transition-shadow">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Briefcase className="h-8 w-8 text-primary-foreground" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground text-center mb-4">Career Development</h3>
                                    <p className="text-muted-foreground text-center mb-6">
                                        Sharpen your professional skills and get job-ready support. You'll work one-on-one with a coach to:
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        {careerDevelopment.map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <p className="text-muted-foreground">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="bg-gradient-primary hover:bg-primary-hover w-full" size="lg">
                                        Apply for Career Coaching
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Card>

                                {/* Life & Wellbeing */}
                                <Card className="p-8 bg-gradient-card border-0 shadow-strong hover:shadow-strong transition-shadow">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Heart className="h-8 w-8 text-primary-foreground" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground text-center mb-4">Life & Wellbeing</h3>
                                    <p className="text-muted-foreground text-center mb-6">
                                        Focus on balance, motivation, and everyday habits that help you thrive. Your coach will guide you through:
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        {lifeWellbeing.map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <p className="text-muted-foreground">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="bg-gradient-primary hover:bg-primary-hover w-full" size="lg">
                                        Apply for Life Coaching
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Card>
                            </div>

                            {/* What to Expect */}
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">What to Expect</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {whatToExpect.map((item, index) => {
                                        const Icon = item.icon;
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
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Coaching Journey?</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Whether you're looking to advance your career or improve your wellbeing,
                                    our trained coaches are here to support you every step of the way.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg">
                                        Apply for Coaching
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" size="lg">
                                        Become a Volunteer Coach
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

export default CoachingProgram;
