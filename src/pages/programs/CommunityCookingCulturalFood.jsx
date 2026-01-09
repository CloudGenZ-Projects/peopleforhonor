import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, DollarSign, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityCookingCulturalFood = () => {
    const weekByWeek = [
        { week: 1, title: "Kitchen Basics", content: "Kitchen safety, knife skills, and equipment overview" },
        { week: 2, title: "Budget-Friendly Cooking", content: "Budget-friendly meal prep and planning" },
        { week: 3, title: "Cultural Recipes I", content: "Hands-on cooking with cultural recipes and stories" },
        { week: 4, title: "Cultural Recipes II", content: "More cultural dishes and sharing food traditions" },
        { week: 5, title: "Presentation & Potlucks", content: "Food presentation and potluck-style hosting basics" },
        { week: 6, title: "From Kitchen to Small Business", content: "Intro to pricing, catering, and small food business skills" }
    ];

    const learningOutcomes = [
        "Kitchen safety and knife skills",
        "Budget-friendly meal prep and planning",
        "Cultural recipes and storytelling through food",
        "Food presentation and potluck basics",
        "Introduction to pricing, catering, and small food business skills"
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
                                <Heart className="h-4 w-4" />
                                <span className="text-sm font-medium">Culture & Community Program</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Community Cooking & Cultural Food
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">
                                Learn kitchen basics, cultural recipes, and safe food handling. Completion certificate
                                plus optional mentorship for catering and small food business opportunities.
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
                                                    Adults and youth (all genders), comfortable working in a shared kitchen
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
                                                    1–2 sessions/week × 6 weeks (in person, kitchen-based)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Cost</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Free (all ingredients and tools provided during class)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Lead Facilitator</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Community cook/caterer with cultural food experience
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
                                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    Ready to Cook and Share Your Culture?
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Join our community kitchen to learn new recipes, share your own, and explore how food
                                    can open doors to catering and small business opportunities.
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

export default CommunityCookingCulturalFood;