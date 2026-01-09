import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CultureCommunity = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <Link to="/african-caribbean-cultural-dance-exchange">Culture & Community</Link>
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Intro: Find your Community in Ottawa */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* Left side: YouTube Video */}
                            <div className="space-y-6">
                                <div className="aspect-video w-full rounded-xl overflow-hidden">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/HQ5mnZqWgMk?rel=0&modestbranding=1&playsinline=1"
                                        title="Culture & Community - People for Honor"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Right side: Card */}
                            <Card className="bg-gradient-card border-0 shadow-medium">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <Heart className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                        <CardTitle className="text-2xl">Find your Community in Ottawa</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <CardDescription className="text-base leading-relaxed">
                                        We host activities that bring people together because healing doesn’t always come from a workshop;
                                        sometimes, it comes from dancing, laughing, or cooking a familiar meal with someone who understands
                                        your story.
                                    </CardDescription>
                                    <CardDescription className="text-base leading-relaxed">
                                        Our cultural programming includes dance empowerment sessions, cooking classes, fun social gatherings,
                                        and other creative events that remind people they’re not alone. These are more than “extras”, they’re
                                        part of how we rebuild confidence, restore belonging, and create space for joy in the settlement journey.
                                    </CardDescription>
                                    <CardDescription className="text-base leading-relaxed">
                                        Because community isn’t something we talk about. It’s something we practice together.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Ways we Bring The Community Together */}
                <section className="py-10">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <h2 className="text-heading text-foreground mb-2">Ways we Bring The Community Together</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* African/Caribean Cultural Dance Exchange */}
                            <Card className="p-6 hover:shadow-strong transition-shadow duration-300 bg-background/60">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-xl">African/Caribean Cultural Dance Exchange</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <img
                                        src="https://peopleforhonor.com/wp-content/uploads/2025/07/IMG_0070-scaled-e1751908347505.jpeg"
                                        alt="Cultural Dance Exchange"
                                        className="w-full h-96 object-cover rounded-lg mb-4"
                                    />
                                    <CardDescription className="text-base leading-relaxed mb-4">
                                        We believe that joy, culture, and community can help carry us through. That’s why, once a month, we
                                        turn up the music and turn the room into a global dance floor.
                                    </CardDescription>
                                    <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                                        <Link to="/african-caribbean-cultural-dance-exchange">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* African/Caribean Domestic Empowerment */}
                            <Card className="p-6 hover:shadow-strong transition-shadow duration-300 bg-background/60">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-xl">African/Caribean Domestic Empowerment</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <img
                                        src="https://peopleforhonor.com/wp-content/uploads/2019/05/2ea79966-5fef-4dda-a4b0-9edbb87710a1.jpeg"
                                        alt="Domestic Empowerment"
                                        className="w-full h-96 object-cover rounded-lg mb-4"
                                    />
                                    <CardDescription className="text-base leading-relaxed mb-4">
                                        Learn recipes from around Africa and the Caribbean through our domestic empowerment program.
                                    </CardDescription>
                                    <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
                                        <Link to="/african-caribbean-cultural-dance-exchange">
                                            Learn More
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CultureCommunity;
