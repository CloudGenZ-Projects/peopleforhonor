import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useHomePageLive } from "@/hooks/usePayloadLive";
import { getMediaUrl } from "@/services/payloadApi";

const Hero = () => {
    const { data } = useHomePageLive();

    const heroBadge = data?.hero_badge;
    const heroTitle = data?.hero_title;
    const heroTitleHighlight = data?.hero_title_highlight;
    const heroSubtitle = data?.hero_subtitle;

    const primaryCtaText = data?.primary_cta_text;
    const primaryCtaLink = data?.primary_cta_link;

    const secondaryCtaText = data?.secondary_cta_text;
    const secondaryCtaLink = data?.secondary_cta_link;

    const thirdCtaText = data?.third_cta_text;
    const thirdCtaLink = data?.third_cta_link;

    const bgImageUrl = getMediaUrl(data?.hero_image, null);

    const stats = data?.hero_stats || [];

    const getStatIcon = (index) => {
        if (index === 0) return <Users className="h-8 w-8 text-secondary" />;
        if (index === 1) return <TrendingUp className="h-8 w-8 text-secondary" />;
        return <Heart className="h-8 w-8 text-secondary" />;
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-2 py-16 sm:px-6 lg:px-8"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                {bgImageUrl && (
                    <img
                        src={bgImageUrl}
                        alt="People for Honor Community"
                        className="w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/80"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-4xl mt-28 text-center">
                <div className="animate-fade-in">
                    {/* Badge */}
                    {heroBadge && (
                        <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-6 py-2 mb-1 border border-background/30">
                            <Heart className="h-4 w-4 text-secondary" />
                            <span className="text-white text-sm font-medium">{heroBadge}</span>
                        </div>
                    )}

                    {/* Main Heading */}
                    <h1 className="text-4xl font-extrabold text-white sm:text-3xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
                        {heroTitle}{" "}
                        {heroTitleHighlight && (
                            <span className="block text-secondary">{heroTitleHighlight}</span>
                        )}
                    </h1>

                    {/* Subheading */}
                    {heroSubtitle && (
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up">
                            {heroSubtitle}
                        </p>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
                        {primaryCtaText && primaryCtaLink && (
                            <Button asChild size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold px-8 py-4 text-lg hover-glow">
                                <Link to={primaryCtaLink}>
                                    {primaryCtaText}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        )}

                        {secondaryCtaText && secondaryCtaLink && (
                            <Button asChild size="lg" variant="outline" className="border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm font-semibold px-8 py-4 text-lg">
                                <Link to={secondaryCtaLink}>{secondaryCtaText}</Link>
                            </Button>
                        )}

                        {thirdCtaText && thirdCtaLink && (
                            <Button asChild size="lg" variant="outline" className="border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm font-semibold px-8 py-4 text-lg">
                                {thirdCtaLink.startsWith("http") ? (
                                    <a href={thirdCtaLink} target="_blank" rel="noopener noreferrer">
                                        {thirdCtaText}
                                    </a>
                                ) : (
                                    <Link to={thirdCtaLink}>{thirdCtaText}</Link>
                                )}
                            </Button>
                        )}
                    </div>

                    {/* Stats Section */}
                    {stats.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 animate-fade-in">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-background/20">
                                    <div className="flex items-center justify-center mb-4">
                                        {getStatIcon(idx)}
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">{stat.stat_number}</div>
                                    <div className="text-white/80">{stat.stat_label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
