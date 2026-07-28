import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useHomePageLive } from "@/hooks/usePayloadLive";

const GetInvolved = () => {
    const { data } = useHomePageLive();

    const heading = data?.get_involved_heading;
    const subheading = data?.get_involved_subheading;

    const donateTitle = data?.donate_card_title;
    const donateDescription = data?.donate_card_description;
    const donateText = data?.donate_button_text;
    const donateLink = data?.donate_button_link;

    const volunteerTitle = data?.volunteer_card_title;
    const volunteerDescription = data?.volunteer_card_description;
    const volunteerText = data?.volunteer_button_text;
    const volunteerLink = data?.volunteer_button_link;

    return (
        <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12">
                    {heading && <h2 className="text-heading text-foreground mb-3">{heading}</h2>}
                    {subheading && <p className="text-subheading text-muted-foreground">{subheading}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Donate */}
                    <Card className="bg-gradient-card border-0 shadow-medium">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                    <Heart className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <CardTitle>{donateTitle}</CardTitle>
                            </div>
                            {donateDescription && (
                                <CardDescription className="text-base leading-relaxed mt-2">
                                    {donateDescription}
                                </CardDescription>
                            )}
                        </CardHeader>
                        {donateText && donateLink && (
                            <CardContent>
                                <Button asChild className="w-full bg-gradient-primary hover:bg-primary-hover">
                                    <Link to={donateLink}>{donateText}</Link>
                                </Button>
                            </CardContent>
                        )}
                    </Card>

                    {/* Volunteer */}
                    <Card className="bg-gradient-card border-0 shadow-medium">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                                    <Users className="h-5 w-5 text-secondary-foreground" />
                                </div>
                                <CardTitle>{volunteerTitle}</CardTitle>
                            </div>
                            {volunteerDescription && (
                                <CardDescription className="text-base leading-relaxed mt-2">
                                    {volunteerDescription}
                                </CardDescription>
                            )}
                        </CardHeader>
                        {volunteerText && volunteerLink && (
                            <CardContent>
                                <Button asChild variant="outline" className="w-full">
                                    {volunteerLink.startsWith("http") ? (
                                        <a href={volunteerLink} target="_blank" rel="noopener noreferrer">
                                            {volunteerText}
                                        </a>
                                    ) : (
                                        <Link to={volunteerLink}>{volunteerText}</Link>
                                    )}
                                </Button>
                            </CardContent>
                        )}
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
