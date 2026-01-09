import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shirt, Users, Calendar, DollarSign, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SewingBeginners = () => {
    const weekByWeek = [
        {
            week: 1,
            title: "Machine Basics",
            content: "Machine basics, threading, straight/zigzag stitches"
        },
        {
            week: 2,
            title: "Seams & Hems",
            content: "Seams & hems; practice sampler"
        },
        {
            week: 3,
            title: "Project 1: Tote Bag",
            content: "Project 1: tote bag (pattern, cut, sew)"
        },
        {
            week: 4,
            title: "Project 2: Pillow Cover",
            content: "Project 2: pillow cover (zipper or envelope)"
        },
        {
            week: 5,
            title: "Garment Basics",
            content: "Garment basics: measuring, pattern layout"
        },
        {
            week: 6,
            title: "Final Project",
            content: "Project 3 start/finish; showcase & photos"
        }
    ];

    const learningOutcomes = [
        "Machine setup, stitching, seam finishes",
        "Reading simple patterns, measuring & cutting",
        "Make: tote bag, pillow cover, simple skirt or joggers"
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
                                <Shirt className="h-4 w-4" />
                                <span className="text-sm font-medium">Culture & Community Program</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Sewing for Beginners
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">
                                Learn essential sewing skills and create practical projects. Free 6-week program
                                with machines and fabric provided.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    6 Weeks
                                </Badge>
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Users className="h-4 w-4 mr-2" />
                                    8 Participants
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
                                                <p className="text-sm text-muted-foreground">Youth & adults, ages 14+</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Capacity</p>
                                                <p className="text-sm text-muted-foreground">8 participants per cohort</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Schedule</p>
                                                <p className="text-sm text-muted-foreground">1 session/week × 6 weeks (in person)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Cost</p>
                                                <p className="text-sm text-muted-foreground">Free (machines on site; fabric provided for class projects)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Lead Instructor</p>
                                                <p className="text-sm text-muted-foreground">Trained sewing instructor</p>
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
                                            Completion certificate + option to join intermediate cohort
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
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                <Shirt className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Sewing?</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Join our beginner-friendly sewing class and create practical projects you'll be proud of.
                                    All machines and fabric provided—no experience needed!
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

export default SewingBeginners;
