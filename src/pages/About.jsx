import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const values = [
        {
            icon: Heart,
            title: "Think Big",
            description: "We empower newcomers to dream boldly and pursue their goals with confidence."
        },
        {
            icon: Users,
            title: "Belong Fully",
            description: "We create spaces where cultural pride meets Canadian community, fostering true belonging."
        },
        {
            icon: Target,
            title: "Give Back",
            description: "We inspire individuals to lift the next generation, strengthening communities together."
        },
        {
            icon: Award,
            title: "No Judgment",
            description: "We listen first, remove barriers, and celebrate every milestone with dignity and respect."
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
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                About People for Honor
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90">
                                "Honor" isn't just our name. It's how we show up—for ourselves, for each other, and for the country we call home.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Founder's Story */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                                {/* Image 1 */}
                                <img
                                    src="./aboutUs.jpg"
                                    alt="People for Honor coaching"
                                    className="w-full h-80 object-cover rounded-xl shadow-medium"
                                />

                            <Card className="p-8 bg-gradient-card border-0 shadow-medium">
                                <h2 className="text-heading text-foreground mb-6">The Founder's Story</h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p className="text-lg leading-relaxed">
                                        Mr. Francis is a well-established businessman with a master's degree in engineering who made Canada his home years ago. As a newcomer, he learned firsthand how complex migration can be—navigating new systems, accents, workplace culture, and unfamiliar terrain. Those early experiences shaped a simple conviction: <strong className="text-foreground">no one should have to do it alone.</strong>
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        Seeing friends and neighbours face the same hurdles, Mr. Francis set out to build a community space where people, new immigrants in particular, could find practical support without judgment. That vision became People for Honor: a welcoming hub where newcomers access guidance, skills, and encouragement to move forward with confidence.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        For Mr. Francis, Canada is a home away from home—a place that invited him to contribute and belong. He believes true belonging comes from being empowered with knowledge, grounded in cultural pride, and committed to giving back. Under his leadership, People for Honor pairs hands-on programs with a culture of dignity: we listen first, remove barriers, and celebrate every milestone, from a first résumé to a first promotion.
                                    </p>
                                    <p className="text-lg leading-relaxed">
                                        Proudly Nigerian-Canadian, Mr. Francis measures success not just by individual outcomes but by what we build together—strong families, connected neighbourhoods, and opportunities that last. His aim is a living legacy: communities of belonging and fully empowered people who will lift the next generation, just as others once lifted him.
                                    </p>

                                    <div className="mt-8 rounded-xl overflow-hidden shadow-medium">
                                        <div className="aspect-video bg-muted">
                                            {!isVideoPlaying ? (
                                                <div
                                                    className="relative w-full h-full group cursor-pointer"
                                                    onClick={() => setIsVideoPlaying(true)}
                                                >
                                                    <img
                                                        src={`https://img.youtube.com/vi/5tB9-1W31Bg/maxresdefault.jpg`}
                                                        alt="People for Honor Video"
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                                                        <div className="relative">
                                                            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                                                            <Button
                                                                size="lg"
                                                                className="relative bg-primary hover:bg-primary-hover text-primary-foreground rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
                                                            >
                                                                <Play className="h-8 w-8 sm:h-10 sm:w-10 ml-1" fill="currentColor" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <iframe
                                                    className="w-full h-full"
                                                    src="https://www.youtube.com/embed/5tB9-1W31Bg?autoplay=1&rel=0"
                                                    title="People for Honor Video"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Who We Are */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                <h2 className="text-heading text-foreground mb-6">Who We Are</h2>
                                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                                    At People for Honor, there's no judgment—only community lifting community. We serve women, men, and youth (Anglophone and Francophone) with culturally grounded workshops, coaching, and mentorship that spark confidence, protect mental well-being, and open doors to work, school, and community life in Canada.
                                </p>
                                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                                    Our programs are built on the idea that we can <strong className="text-foreground">think big, belong fully, and give back.</strong>
                                </p>

                                {/* Core Values Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    {values.map((value, index) => {
                                        const Icon = value.icon;
                                        return (
                                            <div key={index} className="flex items-start gap-4 p-4 bg-background/50 rounded-lg">
                                                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Icon className="h-6 w-6 text-primary-foreground" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                                                    <p className="text-muted-foreground text-sm">{value.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-medium">
                                <div className="text-center">
                                    <h2 className="text-heading text-foreground mb-2">Our Mission</h2>
                                    <p className="text-lg font-semibold text-foreground mb-6">Empowering Lives, Restoring Hope</p>
                                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                                        Our mission is to equip individuals with the tools, support, and resources to overcome challenges,
                                        achieve their goals, and build a brighter future in Canada. We recognize the strength, purpose, and
                                        potential each person carries, and we walk alongside them as they rebuild, rediscover, and rise into
                                        the best version of themselves with dignity, not just survival.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                            <p className="text-muted-foreground">Assisting in setting goals for your life in Canada</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                            <p className="text-muted-foreground">Working with you to take control of your life</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                            <p className="text-muted-foreground">Connecting you with experienced mentors and coaches</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                            <p className="text-muted-foreground">Supporting you to live a life of honor in Canada</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Our Vision */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                <div className="text-center">
                                    <h2 className="text-heading text-foreground mb-6">Our Vision</h2>
                                    <p className="text-xl leading-relaxed text-muted-foreground">
                                        A safe, welcoming space where people continuously learn and grow, feel empowered to take
                                        the next step, and can always show up as their full selves.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Who We Serve & What We Do */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-medium">
                                <h2 className="text-heading text-foreground mb-8 text-center">Who We Serve & What We Do</h2>

                                <div className="space-y-6">
                                    <div className="bg-background/50 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                            <Users className="h-5 w-5 text-primary" />
                                            Who We Serve
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Newcomers and long-time residents seeking community, confidence, and practical pathways to opportunity.
                                        </p>
                                    </div>

                                    <div className="bg-background/50 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                            <Heart className="h-5 w-5 text-primary" />
                                            How We Help
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Culturally responsive workshops, one-on-one coaching, and mentorship (EN/FR), plus warm referrals
                                            and navigation support for employment, education, and wellness resources.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Our Core Values */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-medium">
                                <h2 className="text-heading text-foreground mb-8 text-center">Our Core Values</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-background/50 p-6 rounded-lg border-l-4 border-primary">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-2 text-lg">Inherent Potential</h3>
                                                <p className="text-muted-foreground">
                                                    Everyone has the capacity to thrive and live a fulfilled life.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-background/50 p-6 rounded-lg border-l-4 border-primary">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-2 text-lg">Self-Worth & Respect</h3>
                                                <p className="text-muted-foreground">
                                                    Knowing your own worth helps you value others.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-background/50 p-6 rounded-lg border-l-4 border-primary">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-2 text-lg">Giving Back</h3>
                                                <p className="text-muted-foreground">
                                                    Contributing to your community strengthens both giver and community.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-background/50 p-6 rounded-lg border-l-4 border-primary">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-2 text-lg">Interconnectedness & Legacy</h3>
                                                <p className="text-muted-foreground">
                                                    We are all connected; we plant seeds today so future generations may rest in the shade of tomorrow's trees.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Get Involved */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong text-center">
                                <h2 className="text-heading text-foreground mb-4">Get Involved</h2>
                                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                                    Ready to join us in making a difference? There are many ways to get involved with People for Honor,
                                    from volunteering your time to making a donation or spreading the word about our work. Together,
                                    we can create a brighter, more hopeful future for all.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover" asChild>
                                        <a href="/join">Ways to Give</a>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <a href="/programs">Explore Our Programs</a>
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

export default About;
