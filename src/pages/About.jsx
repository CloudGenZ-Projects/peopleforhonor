import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award, Quote, Compass, HeartHandshake, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import francisImg from "@/assets/Francis_Ukposidolo.jpeg";

const About = () => {
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
                        <div className="max-w-4xl mx-auto space-y-8">
                            {/* Image 1 */}
                            <img
                                src="./aboutUs.jpg"
                                alt="People for Honor coaching"
                                className="w-full h-80 object-cover rounded-xl shadow-medium"
                            />

                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-medium">
                                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                                    <Award className="h-4 w-4" />
                                    <span>Leadership & Vision</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                                    Founder’s Story
                                </h2>

                                {/* Section 1: From Aeronautical Engineer to Community Builder */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
                                    <div className="lg:col-span-7 space-y-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                            From Aeronautical Engineer to Community Builder
                                        </h3>
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            Mr. Francis Ukposidolo is an established businessman, a certified third-party Lead Auditor, and a specialized quality management consultant within the aerospace, marine, and heavy machinery sectors. Grounded in a robust background in aeronautical engineering, Mr. Ukposidolo successfully transitioned his professional practice to Canada Our several years ago.
                                        </p>
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            Despite his technical expertise, he experienced firsthand the complex hurdles of migration—from navigating unfamiliar institutional systems to adapting to a new workplace culture. These early challenges shaped his deeply held conviction that no newcomer should have to walk this path alone.
                                        </p>
                                    </div>

                                    <div className="lg:col-span-5">
                                        {/* Founder Portrait replacing Video */}
                                        <div className="relative rounded-2xl overflow-hidden shadow-strong border border-border/50 bg-muted/30 group">
                                            <img
                                                src={francisImg}
                                                alt="Mr. Francis Ukposidolo - Founder of People for Honor"
                                                className="w-full h-[360px] sm:h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <h4 className="text-xl font-bold">Mr. Francis Ukposidolo</h4>
                                                <p className="text-sm text-white/90 font-medium mt-1">
                                                    Founder & Community Builder
                                                </p>
                                                <p className="text-xs text-white/75 mt-0.5">
                                                    Aeronautical Engineer | Certified Lead Auditor
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: A Mission Rooted in Purpose and Impact */}
                                <div className="space-y-4 mb-10">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                        A Mission Rooted in Purpose and Impact
                                    </h3>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        Moving from personal experience to community action, Mr. Ukposidolo founded People for Honor. What began as a personal mission to help friends and neighbours has grown into a vital community hub.
                                    </p>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        Under his visionary leadership, the organization goes beyond basic resettlement assistance. People for Honor focuses on holistic empowerment: helping individuals discover the best version of themselves, coaching them to uncover their true purpose, and mentoring them to fulfill that purpose.
                                    </p>
                                </div>

                                {/* Section 3: The Power of Giving Back */}
                                <div className="space-y-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                        The Power of Giving Back
                                    </h3>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        For Mr. Ukposidolo, true belonging comes from being empowered with knowledge, staying grounded in cultural pride, and giving back to the community. He operates under a simple, profound guiding philosophy:
                                    </p>

                                    {/* Quote Callout */}
                                    <div className="my-8 relative overflow-hidden rounded-xl bg-gradient-primary p-8 text-primary-foreground shadow-medium">
                                        <Quote className="h-12 w-12 opacity-20 absolute top-4 right-4" />
                                        <p className="text-2xl md:text-3xl font-bold italic tracking-wide text-center">
                                            "Life is not about duration, but donation."
                                        </p>
                                    </div>

                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        Through People for Honor, he ensures every individual is met with unwavering dignity. The organization proudly supports newcomers at every stage of their Canadian journey by providing practical guidance, holistic skills training, and purposeful mentorship rooted in dignity and from writing their very first résumé to celebrating their first major workplace promotion. Proudly Nigerian-Canadian, Mr. Francis measures success not just by individual outcomes but by what we build together—strong families, connected neighbourhoods, and opportunities that last. His aim is a living legacy: communities of belonging and fully empowered people who will lift the next generation, just as others once lifted him.
                                    </p>

                                    {/* Concluding Legacy Quote */}
                                    <div className="mt-8 p-6 rounded-xl bg-primary/5 border-l-4 border-primary">
                                        <p className="text-lg md:text-xl font-semibold text-foreground italic">
                                            "Together we plant a tree, others water the tree, and the next generation enjoys the shade."
                                        </p>
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

                {/* Our Mission & Vision */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Our Mission & Vision
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Guiding every step of our journey as we empower newcomers and build communities of belonging.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Mission Card */}
                                <Card className="p-8 bg-gradient-card border-0 shadow-medium flex flex-col justify-between hover:shadow-strong transition-all duration-300">
                                    <div>
                                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                            <Target className="h-7 w-7 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            To remove systemic barriers for newcomers by providing practical guidance, holistic skills training, and purposeful mentorship rooted in dignity.
                                        </p>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-2 text-sm font-semibold text-primary">
                                        <span>Empowering Lives, Restoring Hope</span>
                                    </div>
                                </Card>

                                {/* Vision Card */}
                                <Card className="p-8 bg-gradient-card border-0 shadow-medium flex flex-col justify-between hover:shadow-strong transition-all duration-300">
                                    <div>
                                        <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                                            <Heart className="h-7 w-7 text-secondary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                                        <p className="text-lg leading-relaxed text-muted-foreground">
                                            To build an inclusive society where every immigrant is empowered to unlock their highest potential, celebrate their cultural pride, and confidently contribute to their new home.
                                        </p>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-2 text-sm font-semibold text-secondary">
                                        <span>A Community Where Everyone Belongs</span>
                                    </div>
                                </Card>
                            </div>
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
                            <Card className="p-8 md:p-12 bg-gradient-card border-0 shadow-strong">
                                <div className="text-center mb-10">
                                    <h2 className="text-heading text-foreground mb-4">Get Involved</h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                                        We believe that true community is built together. Whether you are looking for support or want to give back, there is a place for you at People for Honor.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                    <div className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 flex flex-col justify-between hover:shadow-medium transition-all duration-300">
                                        <div>
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                                <Compass className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground mb-3">For Newcomers</h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm">
                                                Access judgment-free career coaching, mentorship, and practical tools to jumpstart your journey in Canada.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 flex flex-col justify-between hover:shadow-medium transition-all duration-300">
                                        <div>
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                                <HeartHandshake className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground mb-3">For Volunteers</h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm">
                                                Share your professional skills, mentor a newcomer, or help us run our vital community programs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 flex flex-col justify-between hover:shadow-medium transition-all duration-300">
                                        <div>
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                                <Gift className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground mb-3">For Donors</h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm">
                                                Fuel our mission. Your financial contributions directly support resources that empower individuals to fulfill their purpose.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover px-8 py-6 text-base font-semibold" asChild>
                                        <a href="/join">Ways to Give</a>
                                    </Button>
                                    <Button variant="outline" className="px-8 py-6 text-base font-semibold" asChild>
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
