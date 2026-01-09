import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scissors, Users, Calendar, DollarSign, Award, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BarbershopTraining = () => {
    const weekByWeek = [
        {
            week: 1,
            title: "Foundations",
            content: "Tools, safety, sanitation; clipper guards & lengths"
        },
        {
            week: 2,
            title: "Basic Techniques",
            content: "Sectioning, tapers, line-ups; live demo"
        },
        {
            week: 3,
            title: "Fades & Beards",
            content: "Fades (low/mid/high), beard basics"
        },
        {
            week: 4,
            title: "Advanced Skills",
            content: "Scissor over comb; blending; edge refinement"
        },
        {
            week: 5,
            title: "Client Experience",
            content: "Client consultation; timing; barbershop etiquette"
        },
        {
            week: 6,
            title: "Final Practice",
            content: "Commitment: Attend 10 of 12 sessions"
        }
    ];

    const learningOutcomes = [
        "Clipper control, fades & line-ups",
        "Sanitation, client care & shop etiquette",
        "Basic business skills (pricing, bookings, tips)"
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
                                Barbershop Training
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">
                                Learn professional barbering skills in a supportive, hands-on environment.
                                Free 6-week program with tools provided and certification upon completion.
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
                                                <p className="text-sm text-muted-foreground">Youth & young adults (men/women/non-binary), ages 16+</p>
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
                                                <p className="text-sm text-muted-foreground">2 sessions/week × 6 weeks (in person)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Cost</p>
                                                <p className="text-sm text-muted-foreground">Free (tools provided during class)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Lead Instructor</p>
                                                <p className="text-sm text-muted-foreground">Certified barber & trainer</p>
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
                                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                        <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                            <Award className="h-5 w-5 text-primary" />
                                            Takeaway
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Completion certificate + optional mentorship for internships/apprenticeships
                                        </p>
                                    </div>
                                </Card>
                            </div>

                            {/* Week-by-Week Curriculum */}
                            <Card className="p-8 bg-gradient-card border-0 shadow-strong">
                                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Week-by-Week Curriculum</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {weekByWeek.map((week) => (
                                        <Card key={week.week} className="p-5 bg-background hover:shadow-medium transition-shadow">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-primary-foreground font-bold">{week.week}</span>
                                                </div>
                                                <h4 className="font-semibold text-foreground">{week.title}</h4>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{week.content}</p>
                                        </Card>
                                    ))}
                                </div>

                                <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                                    <div className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground mb-1">Commitment Required</p>
                                            <p className="text-sm text-muted-foreground">
                                                Attend 10 of 12 sessions to receive your completion certificate and qualify for mentorship opportunities.
                                            </p>
                                        </div>
                                    </div>
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
                                <Scissors className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Barbering Journey?</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Join our next cohort and learn professional barbering skills in a supportive,
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

export default BarbershopTraining;
