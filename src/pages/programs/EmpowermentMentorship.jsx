import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProgramDetailLive } from "@/hooks/usePayloadLive";
import { getMediaUrl } from "@/services/payloadApi";

const EmpowermentMentorship = () => {
    const { hash } = useLocation();
    const { data } = useProgramDetailLive('empowerment');

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [hash]);

    const pageTitle = data?.title || "Career Guidance & Support, Mentorship and Coaching";
    const heroSubtitle = data?.hero_subtitle || "Practical job‑market readiness, guided growth and coaching—on one path.";

    // Empowerment Section
    const empowermentTitle = data?.empowerment_intro_title || "Unlock Your Potential, Seize Control of Your Life";
    const empowermentDesc = data?.empowerment_intro_desc || "We provide hands-on workshops, resume support, job search guidance, and culturally relevant resources to help them settle, integrate, and thrive. From understanding the job market to building confidence in interviews, we offer tools that turn uncertainty into action.\n\nOur Youth Career Guidance & Support program is built to meet newcomer and immigrant youth where they are, and walk with them as they navigate life in Canada.";
    const empowermentImg = getMediaUrl(data?.empowerment_image, "https://peopleforhonor.com/wp-content/uploads/2019/05/students-studying-together-scaled.jpg");
    
    const empowermentOfferHeading = data?.empowerment_offer_heading || "What We Offer";
    const empowermentOfferSubtitle = data?.empowerment_offer_subtitle || "Life is full of ups and downs, but with the right mindset and support system, you can weather any storm. Our resilience building workshops will teach you how to bounce back from setbacks, cope with stress, and cultivate a positive outlook on life.";
    const empowermentOfferImg = getMediaUrl(data?.empowerment_offer_image, "https://peopleforhonor.com/wp-content/uploads/2024/02/What-we-offer.jpg");
    
    const empowermentFeatures = (data?.empowerment_features && data.empowerment_features.length > 0)
        ? data.empowerment_features.map(f => f.feature_text)
        : [
            "Personalized Guidance",
            "Skill Development",
            "Self-Discovery",
            "Resilience Building",
        ];

    // Mentorship Section
    const mentorshipTitle = data?.mentorship_section_title || "Mentorship: Guidance & Growth";
    const mentorshipDesc = data?.mentorship_section_desc || "We connect newcomers with mentors who guide them through the unspoken rules of Canadian life—career development, professional culture, leadership skills, and personal growth. Whether it’s building a career plan, shifting limiting beliefs, or learning how to lead in unfamiliar systems, we offer structured support that will speak to your challenges.";
    const mentorshipImg = getMediaUrl(data?.mentorship_section_image, "https://peopleforhonor.com/wp-content/uploads/2019/05/medium-shot-people-working-office-scaled.jpg");
    
    const mentorshipFeatures = (data?.mentorship_features && data.mentorship_features.length > 0)
        ? data.mentorship_features.map(f => f.feature_text)
        : [
            "Goal Setting",
            "Performance Enhancement",
            "Clarity and Focus",
        ];

    // Coaching Section
    const coachingTitle = data?.coaching_section_title || "Unlock Your Potential, Seize Control of Your Life";
    const coachingDesc = data?.coaching_section_desc || "We create intentional spaces where Black immigrant youths are seen, supported, and matched with mentors who reflect their realities. Through Career Guidance & Support workshops, one-on-one matching, and story-sharing, we help rebuild the self-confidence that often gets chipped away in the immigration process.\n\nOur mentors offer more than advice, they provide friendship, consistency, and a deep understanding of what it means to start over. Here, mentorship is not about fixing people. It's about helping them remember who they are.";
    const coachingImg = getMediaUrl(data?.coaching_section_image, "https://peopleforhonor.com/wp-content/uploads/2019/05/Empowerment-5.jpg");

    const coachingOfferHeading = data?.coaching_offer_heading || "What We Offer";
    const coachingOfferSubtitle = data?.coaching_offer_subtitle || "Life is full of ups and downs, but with the right mindset and support system, you can weather any storm. Our resilience building workshops will teach you how to bounce back from setbacks, cope with stress, and cultivate a positive outlook on life.";
    const coachingOfferImg = getMediaUrl(data?.coaching_offer_image, "https://peopleforhonor.com/wp-content/uploads/2024/02/What-we-offer.jpg");

    const coachingFeatures = (data?.coaching_features && data.coaching_features.length > 0)
        ? data.coaching_features.map(f => f.feature_text)
        : [
            "Personalized Guidance",
            "Skill Development",
            "Self-Discovery",
            "Resilience Building",
        ];

    // CTA
    const ctaTitle = data?.cta_starting_point_title || "Choose your starting point";
    const ctaDesc = data?.cta_starting_point_desc || "Many participants begin with Career Guidance & Support to build practical readiness and continue with Mentorship for guidance and accountability. We’ll help you tailor the path to your goals.";

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Single Hero for the combined page */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
                            <p className="text-lg md:text-xl opacity-90">
                                {heroSubtitle}
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
                                src={empowermentImg}
                                alt="Empowerment"
                                className="w-full h-64 md:h-80 object-cover rounded-xl"
                            />
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Briefcase className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        <CardTitle className="text-2xl">{empowermentTitle}</CardTitle>
                                    </div>
                                    <CardDescription className="text-base whitespace-pre-line">
                                        {empowermentDesc}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* What We Offer Section - Empowerment */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-8">
                                <h2 className="text-heading text-foreground mb-4">{empowermentOfferHeading}</h2>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {empowermentOfferSubtitle}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                                <img
                                    src={empowermentOfferImg}
                                    alt={empowermentOfferHeading}
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
                                        <CardTitle className="text-2xl">{mentorshipTitle}</CardTitle>
                                    </div>
                                    <CardDescription className="text-base whitespace-pre-line">
                                        {mentorshipDesc}
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
                                src={mentorshipImg}
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
                                src={coachingImg}
                                alt="Coaching"
                                className="w-full h-64 md:h-80 object-cover rounded-xl"
                            />
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Target className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        <CardTitle className="text-2xl">{coachingTitle}</CardTitle>
                                    </div>
                                    <CardDescription className="text-base whitespace-pre-line">
                                        {coachingDesc}
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
                                <h2 className="text-heading text-foreground mb-4">{coachingOfferHeading}</h2>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {coachingOfferSubtitle}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                                <img
                                    src={coachingOfferImg}
                                    alt={coachingOfferHeading}
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
                            <CardTitle className="text-2xl mb-2">{ctaTitle}</CardTitle>
                            <CardDescription className="mb-4">
                                {ctaDesc}
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
