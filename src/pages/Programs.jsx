import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, Heart, ArrowRight, Scissors, Shirt, Lightbulb, Music, GraduationCap, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
    const culturePrograms = [
        {
            id: 1,
            title: "Barbershop Training",
            icon: Scissors,
            duration: "6 Weeks",
            capacity: "5 participants per cohort",
            description: "Learn clipper control, fades, line-ups, sanitation, client care, and basic business skills. Completion certificate + optional mentorship for internships/apprenticeships.",
            highlights: ["Clipper control, fades & line-ups", "Sanitation & client care", "Basic business skills"],
            link: "/programs/barbershop-training"
        },
        {
            id: 2,
            title: "Braiding Training",
            icon: Scissors,
            duration: "6 Weeks",
            capacity: "5 participants per cohort",
            description: "Learn sectioning, braiding foundations, cornrows, knotless and box braids, protective styling, scalp care, client care, and basic business skills. Completion certificate plus optional mentorship for internships or apprenticeships.",
            highlights: [
                "Sectioning and braiding foundations",
                "Cornrows, knotless braids, and box braids",
                "Protective styles and scalp care",
                "Sanitation and client care",
                "Basic business skills"
            ],
            link: "/programs/braiding-training"
        },
        {
            id: 3,
            title: "Community Cooking & Cultural Food",
            icon: Heart,
            duration: "6 Weeks",
            capacity: "5 participants per cohort",
            description: "Learn kitchen basics, cultural recipes, and safe food handling. Completion certificate plus optional mentorship for catering and small food business opportunities.",
            highlights: [
                "Kitchen safety and knife skills",
                "Budget-friendly meal prep and planning",
                "Cultural recipes and storytelling through food",
                "Food presentation and potluck basics",
                "Introduction to pricing, catering, and small food business skills"
            ],
            link: "/programs/community-cooking-cultural-food"
        },
        {
            id: 4,
            title: "Sewing for Beginners",
            icon: Shirt,
            duration: "6 Weeks",
            capacity: "8 participants",
            description: "Machine setup, stitching, reading patterns, and creating projects like tote bags, pillow covers, and simple garments. Free machines and fabric provided.",
            highlights: ["Machine setup & stitching", "Reading patterns", "Create practical projects"],
            link: "/programs/sewing-beginners"
        },
        {
            id: 5,
            title: "Entrepreneurship Launchpad",
            icon: Lightbulb,
            duration: "6-8 Weeks",
            capacity: "10-15 participants",
            description: "From idea to pitch: business model, branding, sales, money matters, and legal basics. Includes mentors, templates, and Demo Night pitch opportunity.",
            highlights: ["Business model & pricing", "Branding & marketing", "Pitch to community panel"],
            link: "/programs/entrepreneurship-launchpad"
        },
        {
            id: 6,
            title: "Cultural Dance & Movement",
            icon: Music,
            duration: "Bi-Weekly",
            capacity: "20 participants per session",
            description: "Stress relief through cultural rhythms and mindful movement. No experience needed. Build confidence, mobility, and belonging across cultures.",
            highlights: ["Stress relief & mental health", "Cultural connection", "Judgment-free space"],
            link: "/programs/cultural-dance"
        }
    ];

    const supportPrograms = [
        {
            id: 1,
            title: "Coaching",
            icon: Target,
            href: "/programs/coaching",
            description: "One-on-one support for career development (résumé, LinkedIn, computer literacy) or life & wellbeing (goal setting, time management, nutrition, healthy habits).",
            paths: ["Career Development", "Life & Wellbeing"]
        },
        {
            id: 2,
            title: "Mentorship",
            icon: UserCheck,
            href: "/programs/mentorship",
            description: "Real people. Real careers. Real guidance. Get paired with a mentor in your field for day-in-the-life insights, career advice, and practical next steps.",
            paths: ["For Students (Grade 12-University)", "For Adults (Career Switchers)", "Become a Mentor"]
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
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
                            <p className="text-xl leading-relaxed opacity-90">
                                Learn. Connect. Belong. PFH's free programs give newcomers and locals hands-on skills
                                and a supportive network, guided by trained facilitators. No experience required.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Culture & Community Programs */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Culture & Community Programs</h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Free hands-on training programs that build skills, confidence, and community.
                                All tools and materials provided during class.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {culturePrograms.map((program) => {
                                const Icon = program.icon;
                                return (
                                    <Card key={program.id} className="p-6 hover:shadow-strong transition-shadow duration-300">
                                        <CardHeader className="pb-4">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Icon className="h-7 w-7 text-primary-foreground" />
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-sm font-semibold text-primary">{program.duration}</div>
                                                    <div className="text-xs text-muted-foreground">{program.capacity}</div>
                                                </div>
                                            </div>
                                            <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base leading-relaxed mb-4">
                                                {program.description}
                                            </CardDescription>
                                            <div className="space-y-2 mb-6">
                                                {program.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-sm text-muted-foreground">{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <Button asChild className="bg-gradient-primary hover:bg-primary-hover w-full">
                                                <Link to={program.link}>
                                                    Register Now
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Coaching & Mentorship */}
                <section id="coaching" className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Coaching & Mentorship</h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                One-on-one support to help you reach your goals. Free and available online or in person.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Coaching Card */}
                            <Card className="p-8 hover:shadow-strong transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Target className="h-8 w-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4">Coaching Program</h3>
                                <p className="text-muted-foreground text-center mb-6">
                                    One-on-one support to help you reach your goals.
                                </p>

                                <div className="space-y-6 mb-8">
                                    <div className="bg-muted/50 p-5 rounded-lg">
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                            <Briefcase className="h-5 w-5 text-primary" />
                                            Career Development
                                        </h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                Build a strong, modern résumé
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                Create or improve your LinkedIn profile
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                Strengthen computer literacy & digital tools
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-muted/50 p-5 rounded-lg">
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                            <Heart className="h-5 w-5 text-primary" />
                                            Life & Wellbeing
                                        </h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                Goal setting that sticks and feels achievable
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                Time management techniques
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                Nutrition, sleep & healthy habits
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover w-full" asChild>
                                        <Link to={supportPrograms[0].href}>
                                            Apply for Coaching
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Become a Volunteer Coach
                                    </Button>
                                </div>
                            </Card>

                            {/* Mentorship Card */}
                            <Card id="mentorship" className="p-8 hover:shadow-strong transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <UserCheck className="h-8 w-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4">Mentorship</h3>
                                <p className="text-muted-foreground text-center mb-6">
                                    Real people. Real careers. Real guidance.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="bg-muted/50 p-5 rounded-lg">
                                        <h4 className="font-semibold text-foreground mb-2">Who It's For</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span><strong>Grade 12–University Students:</strong> Explore programs, careers, and real experiences</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Briefcase className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span><strong>Adults (Early/Mid-Career):</strong> Switch roles, level up, or re-enter the workforce</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span><strong>Adults Helping Adults:</strong> Professionals willing to share real-world insight (2–4 hrs/month)</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-muted/50 p-5 rounded-lg">
                                        <h4 className="font-semibold text-foreground mb-2">How It Works</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                1:1 mentorship (virtual or in-person)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                Optional group circles
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                Apply anytime; rolling matches
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover w-full" asChild>
                                        <Link to={supportPrograms[1].href}>
                                            Apply for a Mentor
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Volunteer as a Mentor
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        Register for Adult Circle
                                    </Button>
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
                                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    All programs are free and designed to help you learn, connect, and belong.
                                    No experience required—just bring an open heart and willingness to grow.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg" asChild>
                                        <Link to="/contact">
                                            Contact Us
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link to="/gallery">View Our Community Voice</Link>
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

export default Programs;
