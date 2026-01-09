import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-8 sm:mb-12 animate-fade-in">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                            See Our Impact in Action
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Watch how we're transforming lives and building a thriving community for immigrants in Canada.
                        </p>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 sm:mt-8 text-center animate-fade-in">
                        <p className="text-sm sm:text-base text-muted-foreground mb-4">
                            Join thousands of immigrants who have found the support they needed
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                                <a href="/programs">Explore Our Programs</a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="/gallery">View More Videos</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
