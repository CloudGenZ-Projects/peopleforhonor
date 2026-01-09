import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FeaturedImageSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "MlBTjyV_ado";

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Content - Left Side */}
                        <div className="animate-slide-up">
                            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                <span className="text-primary text-sm font-medium">Building Community</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                                Do more than survive in Canada!
                            </h2>

                            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                                At People for Honor, our values guide our actions and shape our organizational culture.
                                We believe that everyone has the inherent potential to thrive and live a fulfilled life,
                                and that knowing your own worth enables you to better value others.
                            </p>

                            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                                We hold that giving back to your community not only strengthens those around you but
                                also helps you to flourish personally. Above all, we recognize that we are all connected—sowing
                                seeds today so that future generations may water the trees, and their descendants may one day
                                rest in the shade they provide.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-gradient-primary hover:bg-primary-hover">
                                    <Link to="/programs">
                                        Explore Our Programs
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link to="/about">Learn More About Us</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Video - Right Side */}
                        <div className="animate-fade-in">
                            <div className="relative rounded-2xl overflow-hidden shadow-strong">
                                <div className="aspect-video bg-muted">
                                    {!isPlaying ? (
                                        // Thumbnail with Play Button
                                        <div className="relative w-full h-full group cursor-pointer" onClick={handlePlayClick}>
                                            <img
                                                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                                alt="Do more than survive in Canada"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                                                    <Button
                                                        size="lg"
                                                        className="relative bg-primary hover:bg-primary-hover text-primary-foreground rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
                                                    >
                                                        <Play className="h-8 w-8 sm:h-10 sm:w-10 ml-1" fill="currentColor" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        // YouTube Embed
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                            title="Do more than survive in Canada"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedImageSection;
