import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Briefcase, Users, Target, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useHomePageLive } from "@/hooks/usePayloadLive";
import { getMediaUrl } from "@/services/payloadApi";

const Services = () => {
    const { data } = useHomePageLive();

    const restoreHeading = data?.restore_honor_heading;
    const restoreParagraph = data?.restore_honor_paragraph;
    const restorePoints = data?.restore_honor_points || [];

    const servicesBadge = data?.services_badge;
    const servicesHeading = data?.services_heading;
    const servicesDescription = data?.services_description;

    const cmsServicesList = data?.services_list || [];

    const getIcon = (idx) => {
        if (idx === 0) return Briefcase;
        if (idx === 1) return Users;
        if (idx === 2) return Target;
        return Heart;
    };

    return (
        <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Restore Honor Tagline */}
                {restoreHeading && (
                    <div className="mb-10 sm:mb-12 animate-fade-in">
                        <div className="bg-gradient-card rounded-xl p-6 sm:p-8 border border-border/50 shadow-subtle">
                            <h2 className="text-heading text-foreground mb-4">
                                {restoreHeading}
                            </h2>
                            {restoreParagraph && (
                                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                    {restoreParagraph}
                                </p>
                            )}
                            {restorePoints.length > 0 && (
                                <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted-foreground">
                                    {restorePoints.map((pt, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                                            {pt.point_text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                )}

                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
                    {servicesBadge && (
                        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-3 sm:mb-4">
                            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                            <span className="text-primary text-xs sm:text-sm font-medium">{servicesBadge}</span>
                        </div>
                    )}
                    {servicesHeading && (
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
                            {servicesHeading}
                        </h2>
                    )}
                    {servicesDescription && (
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                            {servicesDescription}
                        </p>
                    )}
                </div>

                {/* Services Grid */}
                {cmsServicesList.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {cmsServicesList.map((service, index) => {
                            const Icon = getIcon(index);
                            const imgUrl = getMediaUrl(service.image, "");
                            const featuresList = service.features
                                ? service.features.map(f => typeof f === 'string' ? f : f.feature_text)
                                : [];

                            return (
                                <Card
                                    key={service.service_id || index}
                                    className="group bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover-lift animate-scale-in overflow-hidden"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Image */}
                                    {imgUrl && (
                                        <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                                            <img
                                                src={imgUrl}
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
                                    )}

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
                                        {featuresList.length > 0 && (
                                            <ul className="space-y-2 mb-4 sm:mb-6">
                                                {featuresList.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

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
                                                        {imgUrl && (
                                                            <div>
                                                                <img
                                                                    src={imgUrl}
                                                                    alt={service.title}
                                                                    className="w-full h-40 sm:h-48 object-cover rounded-lg"
                                                                />
                                                            </div>
                                                        )}
                                                        <div>
                                                            {featuresList.length > 0 && (
                                                                <>
                                                                    <h4 className="text-base sm:text-lg font-semibold mb-3">What You'll Get:</h4>
                                                                    <ul className="space-y-2">
                                                                        {featuresList.map((feature, featureIndex) => (
                                                                            <li key={featureIndex} className="flex items-start gap-2">
                                                                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                                                                                <span className="text-xs sm:text-sm">{feature}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </>
                                                            )}
                                                            <div className="mt-4 sm:mt-6">
                                                                <Link to={service.url || '#'}>
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
                )}
            </div>
        </section>
    );
};

export default Services;
