import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const EmpowermentMentorship = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [hash]);
    const empowermentFeatures = [
        "Personalized Guidance",
        "Skill Development",
        "Self-Discovery",
        "Resilience Building",
    ];

    const mentorshipFeatures = [
        "Goal Setting",
        "Performance Enhancement",
        "Clarity and Focus",
    ];

    const coachingFeatures = [
        "Personalized Guidance",
        "Skill Development",
        "Self-Discovery",
        "Resilience Building",
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Single Hero for the combined page */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Guidance & Support, Mentorship and Coaching</h1>
                            <p className="text-lg md:text-xl opacity-90">
                                Practical job‑market readiness, guided growth and coaching—on one path.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quick in-page navigation */}
                <section className="py-6 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Button asChild variant="outline">
                                <a href="#empowerment">Career Guidance & Support</a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="#mentorship">Mentorship</a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="#coaching">Coaching</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Empowerment Section */}
                <section id="empowerment" className="py-16 scroll-mt-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <img
                                src="https://peopleforhonor.com/wp-content/uploads/2019/05/students-studying-together-scaled.jpg"
                                alt="Empowerment"
                                className="w-full h-64 md:h-80 object-cover rounded-xl"
                            />
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Briefcase className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        <CardTitle className="text-2xl">Unlock Your Potential, Seize Control of Your Life</CardTitle>
                                    </div>
                                    <CardDescription className="text-base">
                                        We provide hands-on workshops, resume support, job search guidance, and culturally relevant resources to
                                        help them settle, integrate, and thrive. From understanding the job market to building confidence in
                                        interviews, we offer tools that turn uncertainty into action.
                                        <br /><br />
                                        Our Youth Career Guidance & Support program is built to meet newcomer and immigrant youth where they are, and walk with them as they navigate life in Canada.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* What We Offer Section */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <h2 className="text-heading text-foreground mb-4">What We Offer</h2>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Life is full of ups and downs, but with the right mindset and support system, you can weather any storm.
                                    Our resilience building workshops will teach you how to bounce back from setbacks, cope with stress,
                                    and cultivate a positive outlook on life.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                                <img
                                    src="https://peopleforhonor.com/wp-content/uploads/2024/02/What-we-offer.jpg"
                                    alt="What we offer"
                                    className="w-full h-64 object-cover rounded-xl shadow-medium"
                                />

                                <Card className="bg-gradient-card border-0 shadow-medium">
                                    <CardContent className="p-6">
                                        <ul className="space-y-3">
                                            {empowermentFeatures.map((f, i) => (
                                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mentorship Section */}
                <section id="mentorship" className="py-8 scroll-mt-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-center">
                            <Card className="order-2 md:order-1 bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Users className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        <CardTitle className="text-2xl">Mentorship: Guidance & Growth</CardTitle>
                                    </div>
                                    <CardDescription className="text-base">
                                        We connect newcomers with mentors who guide them through the unspoken rules of Canadian life—career
                                        development, professional culture, leadership skills, and personal growth. Whether it’s building a career
                                        plan, shifting limiting beliefs, or learning how to lead in unfamiliar systems, we offer structured
                                        support that will speak to your challenges.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {mentorshipFeatures.map((f, i) => (
                                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <img
                                src="https://peopleforhonor.com/wp-content/uploads/2019/05/medium-shot-people-working-office-scaled.jpg"
                                alt="Mentorship"
                                className="order-1 md:order-2 w-full h-64 md:h-80 object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </section>

                {/* Coaching Section */}
                <section id="coaching" className="py-8 scroll-mt-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <img
                                src="https://peopleforhonor.com/wp-content/uploads/2019/05/Empowerment-5.jpg"
                                alt="Coaching"
                                className="w-full h-64 md:h-80 object-cover rounded-xl"
                            />
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Target className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        <CardTitle className="text-2xl">Unlock Your Potential, Seize Control of Your Life</CardTitle>
                                    </div>
                                    <CardDescription className="text-base">
                                        We create intentional spaces where Black immigrant youths are seen, supported, and matched with mentors who reflect their realities.
                                        Through Career Guidance & Support workshops, one-on-one matching, and story-sharing, we help rebuild the self-confidence that often gets chipped away
                                        in the immigration process.
                                        <br /><br />
                                        Our mentors offer more than advice, they provide friendship, consistency, and a deep understanding of what it means to start over.
                                        Here, mentorship is not about fixing people. It's about helping them remember who they are.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* What We Offer - Coaching */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <h2 className="text-heading text-foreground mb-4">What We Offer</h2>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Life is full of ups and downs, but with the right mindset and support system, you can weather any storm.
                                    Our resilience building workshops will teach you how to bounce back from setbacks, cope with stress,
                                    and cultivate a positive outlook on life.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                                <img
                                    src="https://peopleforhonor.com/wp-content/uploads/2024/02/What-we-offer.jpg"
                                    alt="What we offer"
                                    className="w-full h-64 object-cover rounded-xl shadow-medium"
                                />

                                <Card className="bg-gradient-card border-0 shadow-medium">
                                    <CardContent className="p-6">
                                        <ul className="space-y-3">
                                            {coachingFeatures.map((f, i) => (
                                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-14">
                    <div className="container mx-auto px-4">
                        <Card className="p-6 md:p-8 bg-background/60">
                            <CardTitle className="text-2xl mb-2">Choose your starting point</CardTitle>
                            <CardDescription className="mb-4">
                                Many participants begin with Career Guidance & Support to build practical readiness and continue with Mentorship for
                                guidance and accountability. We’ll help you tailor the path to your goals.
                            </CardDescription>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                                    <a href="/join">Join Us <ArrowRight className="ml-2 h-4 w-4" /></a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <a href="/contact">Talk to a Coach</a>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default EmpowermentMentorship;
