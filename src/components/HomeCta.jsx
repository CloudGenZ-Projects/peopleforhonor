import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeCta = () => {
    return (
        <section className="py-16 sm:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center bg-gradient-card rounded-2xl p-8 sm:p-10 border border-border/50 shadow-medium">
                    <h2 className="text-heading text-foreground mb-4">Building a life in a new country is not easy. We are here so you do not have to do it alone.</h2>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                        Join thousands of immigrants who have found needed help and community with People for Honor.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                            <Link to="/programs">
                                Find Support
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link to="/about">Learn About Our Approach</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCta;
