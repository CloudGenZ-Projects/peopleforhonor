import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const CulturalDanceExchange = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">African Caribbean Cultural Dance Exchange</h1>
                            <p className="text-lg md:text-xl opacity-90">
                                In the heart of Ottawa, we come together to learn African dance as an expression of our roots,
                                connectedness and happiness.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Details */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <img
                                src="https://peopleforhonor.com/wp-content/uploads/2025/08/Subheading-2-819x1024.png"
                                alt="African Caribbean Cultural Dance Exchange"
                                className="w-full h-auto rounded-xl shadow-medium mb-8"
                            />
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Event Details</CardTitle>
                                    <CardDescription>
                                        Join our cultural dance exchange to celebrate community, culture, and joy.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Calendar className="h-5 w-5 text-primary" />
                                            <span>
                                                <strong>Date:</strong> September 6, 2025
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Clock className="h-5 w-5 text-primary" />
                                            <span>
                                                <strong>Time:</strong> 1:00 – 4:00 PM
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <MapPin className="h-5 w-5 text-primary" />
                                            <span>
                                                <strong>Venue:</strong> 33 Quill Street, Ottawa
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                        <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                                            <a href="/contact">
                                                Register Now
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <a href="/service/culture-and-community-ottawa-program">Back to Culture & Community</a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-4">
                                At People for Honor, we believe in the power of hope to transform lives.
                            </p>
                            <Button variant="link" className="text-primary hover:text-primary-hover font-semibold">
                                READ MORE
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CulturalDanceExchange;
