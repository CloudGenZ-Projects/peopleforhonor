import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
    return (
        <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-heading text-foreground mb-3">Get Involved</h2>
                    <p className="text-subheading text-muted-foreground">
                        Be part of our mission to restore honor and help newcomers thrive in Canada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Donate */}
                    <Card className="bg-gradient-card border-0 shadow-medium">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                    <Heart className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <CardTitle>Donate</CardTitle>
                            </div>
                            <CardDescription className="text-base leading-relaxed mt-2">
                                Your donations help us make an impact. Together we can support more immigrants to navigate their life in Canada.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full bg-gradient-primary hover:bg-primary-hover">
                                <Link to="/join#donate">Donate Now</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Volunteer */}
                    <Card className="bg-gradient-card border-0 shadow-medium">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                                    <Users className="h-5 w-5 text-secondary-foreground" />
                                </div>
                                <CardTitle>Volunteer</CardTitle>
                            </div>
                            <CardDescription className="text-base leading-relaxed mt-2">
                                It takes a village. Join us as a volunteer and help build the community you want to see.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild variant="outline" className="w-full">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSeoVDTZ9VLLCRIP-0twZo8urDmzM6VLAhC-QQ2rHOoeyVce4w/viewform?usp=header"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Become a Volunteer
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
