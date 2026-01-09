import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserCheck, GraduationCap, Briefcase, Users, ArrowRight, CheckCircle2, Calendar, DollarSign, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const MentorshipProgram = () => {
    const whoItsFor = [
        {
            icon: GraduationCap,
            title: "Grade 12–University Students",
            description: "Explore programs, careers, and real \"day-in-the-life\" experiences."
        },
        {
            icon: Briefcase,
            title: "Adults (Early/Mid-Career)",
            description: "Switch roles, level up, or re-enter the workforce with insider guidance."
        },
        {
            icon: Users,
            title: "Adults Helping Adults (Mentors)",
            description: "Professionals, entrepreneurs, tradespeople, and community leaders willing to share real-world insight (2–4 hrs/month). Training and support provided."
        }
    ];

    const howItWorks = [
        "1:1 mentorship (virtual or in-person), optional group circles",
        "Adults helping Adults: 3 times a year meeting circle",
        "Apply anytime; rolling matches based on availability"
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
                                <UserCheck className="h-4 w-4" />
                                <span className="text-sm font-medium">Support Program</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Mentorship Program
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">
                                Real people. Real careers. Real guidance. PFH pairs you with a mentor in your field
                                of interest for day-in-the-life insights, career advice, and practical next steps.
                                Free. Safe. Flexible. Hybrid.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Flexible Schedule
                                </Badge>
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Globe className="h-4 w-4 mr-2" />
                                    Virtual or In-Person
                                </Badge>
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <DollarSign className="h-4 w-4 mr-2" />
                                    100% Free
                                </Badge>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who It's For */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-4">Who It's For</h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    Whether you're exploring careers, switching fields, or ready to give back,
                                    our mentorship program connects you with the right people.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {whoItsFor.map((item, index) => {
                                    const Icon = item.icon;
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

                            {/* How It Works */}
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">How Our Mentorship Works</h3>
                                <div className="space-y-4 max-w-3xl mx-auto">
                                    {howItWorks.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                                            <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-lg text-muted-foreground">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Mentorship Matters</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-semibold text-foreground mb-1">Real-World Insights</p>
                                            <p className="text-sm text-muted-foreground">Learn what it's really like in your field of interest</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-semibold text-foreground mb-1">Career Navigation</p>
                                            <p className="text-sm text-muted-foreground">Get guidance on education, training, and next steps</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-semibold text-foreground mb-1">Professional Network</p>
                                            <p className="text-sm text-muted-foreground">Build connections that open doors</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <div>
                                            <p className="font-semibold text-foreground mb-1">Confidence & Clarity</p>
                                            <p className="text-sm text-muted-foreground">Make informed decisions about your future</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                <UserCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Connect?</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Whether you're seeking guidance or ready to share your experience,
                                    join our mentorship community today.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg">
                                        Apply for a Mentor
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" size="lg">
                                        Volunteer as a Mentor
                                    </Button>
                                </div>
                                <div className="flex justify-center">
                                    <Button variant="outline" size="lg">
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
