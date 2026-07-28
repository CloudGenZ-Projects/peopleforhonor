import { Button } from "@/components/ui/button";
import { useHomePageLive } from "@/hooks/usePayloadLive";

const VideoSection = () => {
    const { data } = useHomePageLive();

    const heading = data?.impact_heading;
    const description = data?.impact_description;
    const subtext = data?.impact_subtext;

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-8 sm:mb-12 animate-fade-in">
                        {heading && (
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                                {heading}
                            </h2>
                        )}
                        {description && (
                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 sm:mt-8 text-center animate-fade-in">
                        {subtext && (
                            <p className="text-sm sm:text-base text-muted-foreground mb-4">
                                {subtext}
                            </p>
                        )}
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
