import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, Heart, ArrowRight, Scissors, Shirt, Lightbulb, Music, GraduationCap, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useProgramsPageLive } from "@/hooks/usePayloadLive";

const safeText = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') {
        return val.text || val.label || val.title || '';
    }
    return String(val);
};

const getProgramIcon = (index) => {
    switch (index % 6) {
        case 0: return Scissors;
        case 1: return Scissors;
        case 2: return Heart;
        case 3: return Shirt;
        case 4: return Lightbulb;
        case 5: return Music;
        default: return Scissors;
    }
};

const Programs = () => {
    const { data } = useProgramsPageLive();

    // 1. Hero Section
    const heroTitle = data?.hero_title;
    const heroSubtitle = data?.hero_subtitle;

    // 2. Culture & Community Programs
    const cultureHeading = data?.culture_heading;
    const cultureDescription = data?.culture_description;
    const culturePrograms = data?.culture_programs || [];

    // 3. Coaching Program
    const coachingSectionHeading = data?.coaching_section_heading;
    const coachingSectionSubtitle = data?.coaching_section_subtitle;
    const coachingTitle = data?.coaching_title;
    const coachingDesc = data?.coaching_desc;
    const coachingCareerTitle = data?.coaching_career_title;
    const coachingCareerItems = data?.coaching_career_items || [];
    const coachingLifeTitle = data?.coaching_life_title;
    const coachingLifeItems = data?.coaching_life_items || [];
    const coachingBtnApplyText = data?.coaching_btn_apply_text;
    const coachingBtnApplyLink = data?.coaching_btn_apply_link;
    const coachingBtnVolunteerText = data?.coaching_btn_volunteer_text;
    const coachingBtnVolunteerUrl = data?.coaching_btn_volunteer_url;

    // 4. Mentorship Program
    const mentorshipTitle = data?.mentorship_title;
    const mentorshipDesc = data?.mentorship_desc;
    const mentorshipForTitle = data?.mentorship_for_title;
    const mentorshipForItems = data?.mentorship_for_items || [];
    const mentorshipWorksTitle = data?.mentorship_works_title;
    const mentorshipWorksItems = data?.mentorship_works_items || [];
    const mentorshipBtnApplyText = data?.mentorship_btn_apply_text;
    const mentorshipBtnApplyLink = data?.mentorship_btn_apply_link;
    const mentorshipBtnVolunteerText = data?.mentorship_btn_volunteer_text;
    const mentorshipBtnVolunteerUrl = data?.mentorship_btn_volunteer_url;
    const mentorshipBtnCircleText = data?.mentorship_btn_circle_text;

    // 5. Bottom CTA Section
    const ctaHeading = data?.cta_heading;
    const ctaDescription = data?.cta_description;
    const ctaBtn1Text = data?.cta_btn1_text;
    const ctaBtn1Link = data?.cta_btn1_link;
    const ctaBtn2Text = data?.cta_btn2_text;
    const ctaBtn2Link = data?.cta_btn2_link;

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            {heroTitle && <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroTitle}</h1>}
                            {heroSubtitle && <p className="text-xl leading-relaxed opacity-90">{heroSubtitle}</p>}
                        </div>
                    </div>
                </section>

                {/* Culture & Community Programs */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            {cultureHeading && <h2 className="text-3xl font-bold text-foreground mb-4">{cultureHeading}</h2>}
                            {cultureDescription && (
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    {cultureDescription}
                                </p>
                            )}
                        </div>

                        {culturePrograms.length > 0 && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {culturePrograms.map((program, index) => {
                                    const Icon = getProgramIcon(index);
                                    return (
                                        <Card key={index} className="p-6 hover:shadow-strong transition-shadow duration-300">
                                            <CardHeader className="pb-4">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Icon className="h-7 w-7 text-primary-foreground" />
                                                    </div>
                                                    <div className="text-right">
                                                        {program.duration && <div className="text-sm font-semibold text-primary">{program.duration}</div>}
                                                        {program.capacity && <div className="text-xs text-muted-foreground">{program.capacity}</div>}
                                                    </div>
                                                </div>
                                                {program.title && <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>}
                                            </CardHeader>
                                            <CardContent>
                                                {program.description && (
                                                    <CardDescription className="text-base leading-relaxed mb-4">
                                                        {program.description}
                                                    </CardDescription>
                                                )}
                                                {program.highlights && program.highlights.length > 0 && (
                                                    <div className="space-y-2 mb-6">
                                                        {program.highlights.map((highlight, idx) => {
                                                            const text = safeText(highlight);
                                                            if (!text) return null;
                                                            return (
                                                                <div key={idx} className="flex items-start gap-2">
                                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                                    <span className="text-sm text-muted-foreground">{text}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                                {program.link && (
                                                    <Button asChild className="bg-gradient-primary hover:bg-primary-hover w-full">
                                                        <Link to={program.link}>
                                                            Register Now
                                                            <ArrowRight className="ml-2 h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                )}
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>

                {/* Coaching & Mentorship */}
                <section id="coaching" className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            {coachingSectionHeading && <h2 className="text-3xl font-bold text-foreground mb-4">{coachingSectionHeading}</h2>}
                            {coachingSectionSubtitle && (
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                    {coachingSectionSubtitle}
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Coaching Card */}
                            <Card className="p-8 hover:shadow-strong transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Target className="h-8 w-8 text-primary-foreground" />
                                </div>
                                {coachingTitle && <h3 className="text-2xl font-bold text-center mb-4">{coachingTitle}</h3>}
                                {coachingDesc && (
                                    <p className="text-muted-foreground text-center mb-6">
                                        {coachingDesc}
                                    </p>
                                )}

                                <div className="space-y-6 mb-8">
                                    {coachingCareerTitle && (
                                        <div className="bg-muted/50 p-5 rounded-lg">
                                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <Briefcase className="h-5 w-5 text-primary" />
                                                {coachingCareerTitle}
                                            </h4>
                                            {coachingCareerItems.length > 0 && (
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {coachingCareerItems.map((item, idx) => {
                                                        const text = safeText(item);
                                                        if (!text) return null;
                                                        return (
                                                            <li key={idx} className="flex items-start gap-2">
                                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                                {text}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    {coachingLifeTitle && (
                                        <div className="bg-muted/50 p-5 rounded-lg">
                                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <Heart className="h-5 w-5 text-primary" />
                                                {coachingLifeTitle}
                                            </h4>
                                            {coachingLifeItems.length > 0 && (
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {coachingLifeItems.map((item, idx) => {
                                                        const text = safeText(item);
                                                        if (!text) return null;
                                                        return (
                                                            <li key={idx} className="flex items-start gap-2">
                                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                                {text}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3">
                                    {coachingBtnApplyText && coachingBtnApplyLink && (
                                        <Button className="bg-gradient-primary hover:bg-primary-hover w-full" asChild>
                                            <Link to={coachingBtnApplyLink}>
                                                {coachingBtnApplyText}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    )}
                                    {coachingBtnVolunteerText && (
                                        <Button variant="outline" className="w-full"
                                            onClick={() =>
                                                window.open(
                                                    coachingBtnVolunteerUrl || "https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform",
                                                    "_blank"
                                                )
                                            }
                                        >
                                            {coachingBtnVolunteerText}
                                        </Button>
                                    )}
                                </div>
                            </Card>

                            {/* Mentorship Card */}
                            <Card id="mentorship" className="p-8 hover:shadow-strong transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <UserCheck className="h-8 w-8 text-primary-foreground" />
                                </div>
                                {mentorshipTitle && <h3 className="text-2xl font-bold text-center mb-4">{mentorshipTitle}</h3>}
                                {mentorshipDesc && (
                                    <p className="text-muted-foreground text-center mb-6">
                                        {mentorshipDesc}
                                    </p>
                                )}

                                <div className="space-y-4 mb-8">
                                    {mentorshipForTitle && (
                                        <div className="bg-muted/50 p-5 rounded-lg">
                                            <h4 className="font-semibold text-foreground mb-2">{mentorshipForTitle}</h4>
                                            {mentorshipForItems.length > 0 && (
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {mentorshipForItems.map((item, idx) => {
                                                        const label = item?.label;
                                                        const text = safeText(item);
                                                        if (!text && !label) return null;
                                                        return (
                                                            <li key={idx} className="flex items-start gap-2">
                                                                <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                                <span>
                                                                    {label && <strong>{label} </strong>}
                                                                    {text}
                                                                </span>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    {mentorshipWorksTitle && (
                                        <div className="bg-muted/50 p-5 rounded-lg">
                                            <h4 className="font-semibold text-foreground mb-2">{mentorshipWorksTitle}</h4>
                                            {mentorshipWorksItems.length > 0 && (
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {mentorshipWorksItems.map((item, idx) => {
                                                        const text = safeText(item);
                                                        if (!text) return null;
                                                        return (
                                                            <li key={idx} className="flex items-start gap-2">
                                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                                                                {text}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3">
                                    {mentorshipBtnApplyText && mentorshipBtnApplyLink && (
                                        <Button className="bg-gradient-primary hover:bg-primary-hover w-full" asChild>
                                            <Link to={mentorshipBtnApplyLink}>
                                                {mentorshipBtnApplyText}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    )}
                                    {mentorshipBtnVolunteerText && (
                                        <Button variant="outline" className="w-full"
                                            onClick={() =>
                                                window.open(
                                                    mentorshipBtnVolunteerUrl || "https://docs.google.com/forms/d/e/1FAIpQLSfragX8BIMhxvgkFhyOc6nOJ7i8AJ9P8dl30OzlovYvCJ60zg/viewform",
                                                    "_blank"
                                                )
                                            }
                                        >
                                            {mentorshipBtnVolunteerText}
                                        </Button>
                                    )}
                                    {mentorshipBtnCircleText && (
                                        <Button variant="outline" className="w-full">
                                            {mentorshipBtnCircleText}
                                        </Button>
                                    )}
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
                                {ctaHeading && <h2 className="text-2xl font-bold text-foreground mb-4">{ctaHeading}</h2>}
                                {ctaDescription && (
                                    <p className="text-lg text-muted-foreground mb-8">
                                        {ctaDescription}
                                    </p>
                                )}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    {ctaBtn1Text && ctaBtn1Link && (
                                        <Button className="bg-gradient-primary hover:bg-primary-hover" size="lg" asChild>
                                            <Link to={ctaBtn1Link}>
                                                {ctaBtn1Text}
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    )}
                                    {ctaBtn2Text && ctaBtn2Link && (
                                        <Button variant="outline" size="lg" asChild>
                                            <Link to={ctaBtn2Link}>{ctaBtn2Text}</Link>
                                        </Button>
                                    )}
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
