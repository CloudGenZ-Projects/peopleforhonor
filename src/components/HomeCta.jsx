import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useHomePageLive } from "@/hooks/usePayloadLive";

const HomeCta = () => {
    const { data } = useHomePageLive();

    const heading = data?.cta_heading;
    const description = data?.cta_description;

    const primaryText = data?.cta_primary_text;
    const primaryLink = data?.cta_primary_link;

    const secondaryText = data?.cta_secondary_text;
    const secondaryLink = data?.cta_secondary_link;

    return (
        <section className="py-16 sm:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center bg-gradient-card rounded-2xl p-8 sm:p-10 border border-border/50 shadow-medium">
                    {heading && <h2 className="text-heading text-foreground mb-4">{heading}</h2>}
                    {description && (
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            {description}
                        </p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        {primaryText && primaryLink && (
                            <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                                <Link to={primaryLink}>
                                    {primaryText}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                        {secondaryText && secondaryLink && (
                            <Button asChild variant="outline">
                                <Link to={secondaryLink}>{secondaryText}</Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCta;
