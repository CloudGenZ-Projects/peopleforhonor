import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Sparkles } from "lucide-react";

const About = () => {
    const values = [
        {
            icon: Heart,
            title: "Know Your Worth",
            description: "We believe everyone has inherent potential to thrive and live a fulfilled life. Knowing your own worth enables you to better value others."
        },
        {
            icon: Users,
            title: "Community First",
            description: "Giving back to your community not only strengthens those around you but also helps you flourish personally."
        },
        {
            icon: Target,
            title: "Future Focused",
            description: "We are all connected—sowing seeds today so future generations may water the trees, and their descendants may rest in the shade."
        },
        {
            icon: Sparkles,
            title: "Career Guidance & Support",
            description: "We facilitate growth through practical support, mentorship, and community connection to help you thrive, not just survive."
        }
    ];

    return (
        <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="animate-fade-in">
                        <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-4 sm:mb-6">
                            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                            <span className="text-secondary text-xs sm:text-sm font-medium">About People for Honor</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                            Our Values Guide Our Actions
                        </h2>

                        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground">
                            <p className="leading-relaxed">
                                At People for Honor, our values guide our actions and shape our organizational culture.
                                We believe that everyone has the inherent potential to thrive and live a fulfilled life,
                                and that knowing your own worth enables you to better value others.
                            </p>

                            <p className="leading-relaxed">
                                We hold that giving back to your community not only strengthens those around you but
                                also helps you to flourish personally. Above all, we recognize that we are all connected—sowing
                                seeds today so that future generations may water the trees, and their descendants may one day
                                rest in the shade they provide.
                            </p>
                        </div>

                        {/* Mission Statement */}
                        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-card rounded-xl border border-border/50">
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Our Mission</h3>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                To empower newcomers to Canada with the tools, connections, and confidence they need
                                to not just survive, but thrive in their new home. We create pathways to success through
                                support, meaningful mentorship, and genuine community.
                            </p>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-slide-up">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <Card
                                    key={index}
                                    className="bg-gradient-card border-0 shadow-subtle hover:shadow-medium transition-all duration-300 hover-lift group"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <CardContent className="p-4 sm:p-6">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-200">
                                            {value.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Impact Section */}
                <div className="mt-12 sm:mt-16 lg:mt-20 text-center animate-fade-in">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-4">
                        Making a Real Impact
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4">
                        Every story matters. Every person we help represents a family finding their footing,
                        a dream taking shape, and a community growing stronger.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        <div className="bg-gradient-card rounded-xl p-4 sm:p-6 border border-border/50 hover-lift">
                            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">500+</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">People Empowered</div>
                        </div>
                        <div className="bg-gradient-card rounded-xl p-4 sm:p-6 border border-border/50 hover-lift">
                            <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">100+</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Mentor Matches</div>
                        </div>
                        <div className="bg-gradient-card rounded-xl p-4 sm:p-6 border border-border/50 hover-lift">
                            <div className="text-2xl sm:text-3xl font-bold text-success mb-1 sm:mb-2">200+</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Jobs Secured</div>
                        </div>
                        <div className="bg-gradient-card rounded-xl p-4 sm:p-6 border border-border/50 hover-lift">
                            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">Community Events</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
