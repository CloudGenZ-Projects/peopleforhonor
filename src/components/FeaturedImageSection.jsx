import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHomePageLive } from "@/hooks/usePayloadLive";
import { getYouTubeVideoId } from "@/services/payloadApi";

const FeaturedImageSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { data } = useHomePageLive();

    const badge = data?.featured_badge;
    const heading = data?.featured_heading;
    const p1 = data?.featured_paragraph_1;
    const p2 = data?.featured_paragraph_2;

    const primaryText = data?.featured_primary_cta_text;
    const primaryLink = data?.featured_primary_cta_link;

    const secondaryText = data?.featured_secondary_cta_text;
    const secondaryLink = data?.featured_secondary_cta_link;

    const rawVideoInput = data?.featured_video_id || "https://www.youtube.com/watch?v=MlBTjyV_ado";
    const videoId = getYouTubeVideoId(rawVideoInput);

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
                            {badge && (
                                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                    <span className="text-primary text-sm font-medium">{badge}</span>
                                </div>
                            )}

                            {heading && (
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                                    {heading}
                                </h2>
                            )}

                            {p1 && (
                                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                                    {p1}
                                </p>
                            )}

                            {p2 && (
                                <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {p2}
                                </p>
                            )}

                            <div className="flex flex-col sm:flex-row gap-4">
                                {primaryText && primaryLink && (
                                    <Button asChild size="lg" className="bg-gradient-primary hover:bg-primary-hover">
                                        <Link to={primaryLink}>
                                            {primaryText}
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                )}

                                {secondaryText && secondaryLink && (
                                    <Button asChild size="lg" variant="outline">
                                        <Link to={secondaryLink}>{secondaryText}</Link>
                                    </Button>
                                )}
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
                                                alt={heading || "Do more than survive in Canada"}
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
                                            title={heading || "Do more than survive in Canada"}
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
