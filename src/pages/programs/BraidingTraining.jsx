import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scissors, Users, Calendar, DollarSign, Award, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BraidingTraining = () => {
    const weekByWeek = [
        { week: 1, title: "Foundations", content: "Sectioning basics, tools, safety, and sanitation" },
        { week: 2, title: "Braiding Basics", content: "Braiding foundations, tension, and parting practice" },
        { week: 3, title: "Cornrows", content: "Straight back and creative cornrow patterns" },
        { week: 4, title: "Box & Knotless Braids", content: "Box braids and intro to knotless techniques" },
        { week: 5, title: "Protective Styling & Scalp Care", content: "Protective styles, moisturizing, and scalp care routines" },
        { week: 6, title: "Client & Business Basics", content: "Client care, pricing basics, and practice showcase" }
    ];

    const learningOutcomes = [
        "Sectioning and braiding foundations",
        "Cornrows, knotless braids, and box braids",
        "Protective styles and scalp care",
        "Sanitation and client care",
        "Basic business skills"
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
                                <Scissors className="h-4 w-4" />
                                <span className="text-sm font-medium">Culture & Community Program</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Braiding Training
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">
                                Learn sectioning, braiding foundations, cornrows, knotless and box braids,
                                protective styling, scalp care, client care, and basic business skills.
                                Completion certificate plus optional mentorship for internships or apprenticeships.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    6 Weeks
                                </Badge>
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Users className="h-4 w-4 mr-2" />
                                    5 Participants
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
                                                <p className="text-sm text-muted-foreground">
                                                    Youth & young adults (all genders), ages 16+
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Capacity</p>
                                                <p className="text-sm text-muted-foreground">5 participants per cohort</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Schedule</p>
                                                <p className="text-sm text-muted-foreground">
                                                    2 sessions/week × 6 weeks (in person)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Cost</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Free (all braiding tools provided during class)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Lead Instructor</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Experienced braider & community trainer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                {/* What You'll Learn */}
                                <Card className="p-6 bg-gradient-card border-0 shadow-medium">
                                    <h3 className="text-xl font-bold text-foreground mb-4">You'll Learn</h3>
                                    <div className="space-y-3">
                                        {learningOutcomes.map((outcome, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                                <p className="text-muted-foreground">{outcome}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                <Scissors className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    Ready to Start Your Braiding Journey?
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Join our next cohort and build confident braiding skills in a supportive,
                                    judgment-free environment. All tools provided—just bring your commitment to learn.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg">
                                        Register Now
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

export default BraidingTraining;