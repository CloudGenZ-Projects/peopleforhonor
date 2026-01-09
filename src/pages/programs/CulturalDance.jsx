import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Users, Calendar, DollarSign, Heart, ArrowRight, CheckCircle2, Smile, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const CulturalDance = () => {
    const whyItMatters = [
        {
            icon: Heart,
            title: "Stress relief & mental health",
            description: "Rhythmic movement doubles as meditation—reducing stress and improving mood for newcomers and longtime residents alike."
        },
        {
            icon: Smile,
            title: "Confidence, mobility, and joy",
            description: "Low-impact movement builds balance, flexibility, and self-esteem in a safe, judgment-free space."
        },
        {
            icon: Globe,
            title: "Belonging across cultures",
            description: "Shared music and stories foster social connection, reduce isolation, and strengthen intercultural understanding."
        },
        {
            icon: TrendingUp,
            title: "Low-barrier access",
            description: "Free, equipment-free, and led by trained facilitators; participants can join at any level and feel successful from day one."
        }
    ];

    const sessionFlow = [
        {
            step: 1,
            title: "Gentle warm-up and breathwork",
            description: "Start with mindful breathing and gentle stretches"
        },
        {
            step: 2,
            title: "Learn foundational steps & cultural context",
            description: "Discover the stories and traditions behind the movements"
        },
        {
            step: 3,
            title: "Group choreography & cool-down reflection",
            description: "Dance together and reflect on the experience"
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
                                <Music className="h-4 w-4" />
                                <span className="text-sm font-medium">Culture & Community Program</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Cultural Dance & Movement
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90 mb-8">
                                Stress relief through cultural rhythms and mindful movement. No experience needed.
                                Build confidence, mobility, and belonging across cultures.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Bi-Weekly
                                </Badge>
                                <Badge variant="secondary" className="text-base px-4 py-2">
                                    <Users className="h-4 w-4 mr-2" />
                                    20 Participants
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
                                                <p className="text-sm text-muted-foreground">All ages 14+ (no experience needed)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Capacity</p>
                                                <p className="text-sm text-muted-foreground">20 participants per session</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Schedule</p>
                                                <p className="text-sm text-muted-foreground">Every other Saturday, 1.5–2 hours</p>
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
                                            <Music className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground">Focus</p>
                                                <p className="text-sm text-muted-foreground">Cultural rhythms, community, and mindful movement</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                {/* What to Bring */}
                                <Card className="p-6 bg-gradient-card border-0 shadow-medium">
                                    <h3 className="text-xl font-bold text-foreground mb-4">What to Bring</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-muted-foreground">Comfortable clothes</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-muted-foreground">Water bottle</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <p className="text-muted-foreground">Open heart</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                        <p className="font-semibold text-foreground mb-2">No Experience Required</p>
                                        <p className="text-sm text-muted-foreground">
                                            This is a judgment-free space where everyone is welcome, regardless of skill level or background.
                                        </p>
                                    </div>
                                </Card>
                            </div>

                            {/* Why It Matters */}
                            <Card className="p-8 bg-gradient-card border-0 shadow-strong mb-12">
                                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why It Matters</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {whyItMatters.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <Card key={index} className="p-6 bg-background hover:shadow-medium transition-shadow">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Icon className="h-6 w-6 text-primary-foreground" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                                    </div>
                                                </div>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </Card>

                            {/* What to Expect */}
                            <Card className="p-8 bg-gradient-card border-0 shadow-strong">
                                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">What to Expect</h3>
                                <div className="space-y-6">
                                    {sessionFlow.map((item) => (
                                        <div key={item.step} className="flex items-start gap-4 p-5 bg-background rounded-lg">
                                            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-primary-foreground font-bold">{item.step}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                                                <p className="text-sm text-muted-foreground">{item.description}</p>
                                            </div>
                                        </div>
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
                                <Music className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Move & Connect?</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Join us for Cultural Dance & Movement and experience the joy of rhythmic movement,
                                    cultural connection, and community belonging. All levels welcome!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg">
                                        Reserve a Spot
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

export default CulturalDance;
