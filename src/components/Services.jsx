import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Briefcase, Users, Target, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
    const services = [
        {
            id: "empowerment",
            title: "Career Guidance & Support",
            description: "We provide hands-on workshops, resume support, job search guidance, and relevant resources to help you understand the job market & build confidence in interviews.",
            icon: Briefcase,
            image: "https://peopleforhonor.com/wp-content/uploads/2019/05/students-studying-together-scaled.jpg",
            url: "/programs/empowerment",
            features: [
                "Resume writing & optimization",
                "Interview preparation",
                "Job search strategies",
                "Professional networking"
            ]
        },
        {
            id: "mentorship",
            title: "Mentorship",
            description: "We connect newcomers with mentors who guide them through the unspoken rules of Canadian life; career development, professional culture, leadership skills, and personal growth.",
            icon: Users,
            image: "https://peopleforhonor.com/wp-content/uploads/2019/05/medium-shot-people-working-office-scaled.jpg",
            url: "/programs/mentorship",
            features: [
                "One-on-one mentor matching",
                "Cultural integration support",
                "Professional development",
                "Leadership skills training"
            ]
        },
        {
            id: "coaching",
            title: "Coaching",
            description: "We facilitate Career Guidance & Support-focused group sessions and individual coaching that help participants build clarity, confidence, and emotional resilience.",
            icon: Target,
            image: "https://peopleforhonor.com/wp-content/uploads/2019/05/man-participation-training-after-being-hired-his-new-office-job-scaled.jpg",
            url: "/programs/coaching",
            features: [
                "Individual coaching sessions",
                "Group Career Guidance & Support workshops",
                "Confidence building",
                "Emotional resilience training"
            ]
        },
        {
            id: "community",
            title: "Culture & Community",
            description: "We host activities that bring people together because healing doesn't always come from a workshop; sometimes, it comes from dancing, laughing, or cooking a meal with people who understand your story.",
            icon: Heart,
            image: "https://peopleforhonor.com/wp-content/uploads/2025/07/IMG_0070-scaled-e1751908347505.jpeg",
            url: "/service/culture-and-community-ottawa-program",
            features: [
                "Cultural events & celebrations",
                "Community gatherings",
                "Social activities",
                "Peer support networks"
            ]
        }
    ];

    return (
        <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Restore Honor Tagline */}
                <div className="mb-10 sm:mb-12 animate-fade-in">
                    <div className="bg-gradient-card rounded-xl p-6 sm:p-8 border border-border/50 shadow-subtle">
                        <h2 className="text-heading text-foreground mb-4">
                            We Restore Honor through empowerment, coaching, and mentorship.
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                            At People for Honor, we believe every immigrant deserves more than just a fresh start, they deserve to belong.
                            We’re building a community in Ottawa where newcomers feel seen, supported, and empowered to thrive. We recognize
                            the strength, purpose, and potential each person carries, and we walk alongside them as they rebuild, rediscover,
                            and rise into the best version of themselves with dignity, not just survival.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                                Assisting in setting goals for your life in Canada.
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                                Working with you to take control of your life.
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                                Connecting you with experienced mentors and coaches.
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                                Supporting you to live a life of honor in Canada.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-3 sm:mb-4">
                        <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                        <span className="text-primary text-xs sm:text-sm font-medium">Our Services</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
                        Support for Your Journey
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                        We believe everyone has the potential to thrive. Our integrated approach combines practical
                        skills, mentorship, and community support to help you build a fulfilling life in Canada.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card
                                key={service.id}
                                className="group bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover-lift animate-scale-in overflow-hidden"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Image */}
                                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                </div>

                                <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                                    <CardTitle className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="pt-0 px-4 sm:px-6">
                                    {/* Features List */}
                                    <ul className="space-y-2 mb-4 sm:mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Drawer>
                                        <DrawerTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200 text-sm sm:text-base"
                                            >
                                                Learn More
                                                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                            </Button>
                                        </DrawerTrigger>
                                        <DrawerContent className="max-h-[85vh] sm:max-h-[80vh]">
                                            <DrawerHeader className="px-4 sm:px-6">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                                                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                                                    </div>
                                                    <DrawerTitle className="text-xl sm:text-2xl">{service.title}</DrawerTitle>
                                                </div>
                                                <DrawerDescription className="text-left text-sm sm:text-base">
                                                    {service.description}
                                                </DrawerDescription>
                                            </DrawerHeader>
                                            <div className="px-4 sm:px-6 pb-6 overflow-y-auto">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                                    <div>
                                                        <img
                                                            src={service.image}
                                                            alt={service.title}
                                                            className="w-full h-40 sm:h-48 object-cover rounded-lg"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-base sm:text-lg font-semibold mb-3">What You'll Get:</h4>
                                                        <ul className="space-y-2">
                                                            {service.features.map((feature, featureIndex) => (
                                                                <li key={featureIndex} className="flex items-start gap-2">
                                                                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                                                                    <span className="text-xs sm:text-sm">{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="mt-4 sm:mt-6">
                                                            <Link to={service.url}>
                                                                <Button className="w-full bg-gradient-primary hover:bg-primary-hover text-sm sm:text-base">
                                                                    Get Started with {service.title}
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </DrawerContent>
                                    </Drawer>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
