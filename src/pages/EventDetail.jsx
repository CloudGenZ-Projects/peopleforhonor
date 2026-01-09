// import { useParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Calendar, Clock, MapPin, ArrowRight, ArrowLeft } from "lucide-react";

// const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

// const EventDetail = () => {
//     const { slug } = useParams();
//     const [event, setEvent] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchEvent();
//     }, [slug]);

//     const fetchEvent = async () => {
//         try {
//             const response = await fetch(`${API_BASE}/events/read_by_slug.php?slug=${encodeURIComponent(slug)}`);
//             const data = await response.json();

//             if (response.ok && data.success) {
//                 setEvent(data.data);
//             } else {
//                 setError(data.message || 'Event not found');
//             }
//         } catch (err) {
//             setError('Failed to load event. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         const options = { month: 'long', day: 'numeric', year: 'numeric' };
//         return date.toLocaleDateString('en-US', options);
//     };

//     if (loading) {
//         return (
//             <div className="min-h-screen">
//                 <Header />
//                 <main className="pt-32 pb-16">
//                     <div className="container mx-auto px-4">
//                         <div className="text-center py-20">
//                             <p className="text-muted-foreground">Loading event details...</p>
//                         </div>
//                     </div>
//                 </main>
//                 <Footer />
//             </div>
//         );
//     }

//     if (error || !event) {
//         return (
//             <div className="min-h-screen">
//                 <Header />
//                 <main className="pt-32 pb-16">
//                     <div className="container mx-auto px-4">
//                         <div className="text-center py-20">
//                             <h1 className="text-3xl font-bold text-foreground mb-4">Event Not Found</h1>
//                             <p className="text-muted-foreground mb-8">{error || 'The event you are looking for does not exist.'}</p>
//                             <Button asChild>
//                                 <Link to="/">
//                                     <ArrowLeft className="mr-2 h-4 w-4" />
//                                     Back to Home
//                                 </Link>
//                             </Button>
//                         </div>
//                     </div>
//                 </main>
//                 <Footer />
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen">
//             <Header />
//             <main className="pt-32">
//                 {/* Hero */}
//                 <section className="py-20 bg-gradient-primary text-primary-foreground">
//                     <div className="container mx-auto px-4">
//                         <div className="max-w-4xl mx-auto text-center">
//                             <h1 className="text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>
//                             {event.description && (
//                                 <p className="text-lg md:text-xl opacity-90">
//                                     {event.description}
//                                 </p>
//                             )}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Details */}
//                 <section className="py-16">
//                     <div className="container mx-auto px-4">
//                         <div className="max-w-3xl mx-auto">
//                             <Card className="bg-gradient-card border-0 shadow-medium">
//                                 <CardHeader>
//                                     <CardTitle className="text-2xl">Event Details</CardTitle>
//                                     <CardDescription>
//                                         Join us for this special community event.
//                                     </CardDescription>
//                                 </CardHeader>
//                                 <CardContent className="space-y-4">
//                                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                                         {event.date && (
//                                             <div className="flex items-center gap-2 text-muted-foreground">
//                                                 <Calendar className="h-5 w-5 text-primary" />
//                                                 <span>
//                                                     <strong>Date:</strong> {formatDate(event.date)}
//                                                 </span>
//                                             </div>
//                                         )}
//                                         {event.time && (
//                                             <div className="flex items-center gap-2 text-muted-foreground">
//                                                 <Clock className="h-5 w-5 text-primary" />
//                                                 <span>
//                                                     <strong>Time:</strong> {event.time}
//                                                 </span>
//                                             </div>
//                                         )}
//                                         {event.location && (
//                                             <div className="flex items-center gap-2 text-muted-foreground">
//                                                 <MapPin className="h-5 w-5 text-primary" />
//                                                 <span>
//                                                     <strong>Venue:</strong> {event.location}
//                                                 </span>
//                                             </div>
//                                         )}
//                                     </div>
//                                     {event.cta1_label && event.cta1_url && (
//                                       <Button asChild className="w-full bg-gradient-primary hover:bg-primary-hover">
//                                         <a href={event.cta1_url} target="_blank" rel="noopener noreferrer">
//                                           {event.cta1_label}
//                                         </a>
//                                       </Button>
//                                     )}
//                                     {event.cta2_label && event.cta2_url && (
//                                       <Button asChild variant="outline" className="w-full">
//                                         <a href={event.cta2_url} target="_blank" rel="noopener noreferrer">
//                                           {event.cta2_label}
//                                         </a>
//                                       </Button>
//                                     )}

//                                     <div className="mt-6 flex flex-col sm:flex-row gap-3">
//                                        {!event.cta1_label || !event.cta1_url && (
//                                         <Button asChild className="bg-gradient-primary hover:bg-primary-hover">
//                                             <Link to="/contact">
//                                                 Register Now
//                                                 <ArrowRight className="ml-2 h-4 w-4" />
//                                             </Link>
//                                         </Button>
//                                     )}
//                                         <Button variant="outline" asChild>
//                                             <Link to="/">
//                                                 <ArrowLeft className="mr-2 h-4 w-4" />
//                                                 Back to Events
//                                             </Link>
//                                         </Button>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </div>
//                 </section>

//                 {/* CTA */}
//                 <section className="py-12 bg-muted/30">
//                     <div className="container mx-auto px-4">
//                         <div className="max-w-4xl mx-auto text-center">
//                             <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-4">
//                                 At People for Honor, we believe in the power of hope to transform lives.
//                             </p>
//                             <Button asChild className="bg-primary hover:bg-primary-hover">
//                                 <Link to="/about">Learn More About Us</Link>
//                             </Button>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default EventDetail;

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowLeft, ExternalLink, Share2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

const EventDetail = () => {
    const { slug } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEvent();
        // Scroll to top when opening detail page
        window.scrollTo(0, 0);
    }, [slug]);

    const fetchEvent = async () => {
        try {
            const response = await fetch(`${API_BASE}/api/events/read_by_slug.php?slug=${encodeURIComponent(slug)}`);
            const data = await response.json();

            if (response.ok && data.success) {
                setEvent(data.data);
            } else {
                setError(data.message || 'Event not found');
            }
        } catch (err) {
            setError('Failed to load event. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    // Loading Skeleton
    if (loading) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <Header />
                <main className="flex-grow pt-32 pb-16 container mx-auto px-4">
                    <div className="animate-pulse space-y-8 max-w-5xl mx-auto">
                        <div className="h-8 w-32 bg-muted rounded" />
                        <div className="h-12 w-3/4 bg-muted rounded" />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-4">
                                <div className="h-64 bg-muted rounded-xl" />
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-muted rounded" />
                                    <div className="h-4 w-full bg-muted rounded" />
                                    <div className="h-4 w-2/3 bg-muted rounded" />
                                </div>
                            </div>
                            <div className="h-64 bg-muted rounded-xl" />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Error State
    if (error || !event) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow pt-32 pb-16 flex items-center justify-center">
                    <div className="text-center max-w-md px-4">
                        <div className="bg-destructive/10 text-destructive p-4 rounded-full inline-block mb-4">
                            <MapPin className="h-8 w-8" />
                        </div>
                        <h1 className="text-2xl font-bold mb-2">Event Not Found</h1>
                        <p className="text-muted-foreground mb-6">{error || 'The event you are looking for does not exist.'}</p>
                        <Button asChild variant="default">
                            {/* UPDATED: Points back to /join with hash */}
                            <Link to="/join#upcoming-events">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
                            </Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-grow pt-28 pb-16">
                
                {/* Breadcrumb / Back - UPDATED */}
                <div className="container mx-auto px-4 mb-6">
                    <Link to="/join#upcoming-events" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to events list
                    </Link>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        
                        {/* Left Column: Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                                    {event.title}
                                </h1>
                                <div className="flex flex-col gap-2 text-muted-foreground lg:hidden mb-6">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" /> {formatDate(event.date)}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" /> {event.location}
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                                {event.description ? (
                                    <p>{event.description}</p>
                                ) : (
                                    <p className="italic text-muted-foreground/60">No description available for this event.</p>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Sticky Sidebar Card */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <Card className="border shadow-lg overflow-hidden">
                                    <div className="h-2 w-full bg-gradient-to-r from-primary to-purple-600" />
                                    <CardHeader>
                                        <CardTitle className="text-xl">Event Details</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        
                                        {/* Date */}
                                        {event.date && (
                                            <div className="flex items-start gap-4">
                                                <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                                                    <Calendar className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Date</p>
                                                    <p className="font-medium text-foreground">{formatDate(event.date)}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Time */}
                                        {event.time && (
                                            <div className="flex items-start gap-4">
                                                <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                                                    <Clock className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Time</p>
                                                    <p className="font-medium text-foreground">{event.time}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Location */}
                                        {event.location && (
                                            <div className="flex items-start gap-4">
                                                <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                                                    <MapPin className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Location</p>
                                                    <p className="font-medium text-foreground">{event.location}</p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="h-px bg-border my-4" />

                                        {/* Action Buttons */}
                                        <div className="space-y-3 pt-2">
                                            {event.cta1_label && event.cta1_url && (
                                                <Button asChild className="w-full text-lg py-6 shadow-md hover:shadow-lg transition-all">
                                                    <a href={event.cta1_url} target="_blank" rel="noopener noreferrer">
                                                        {event.cta1_label} <ExternalLink className="ml-2 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            )}

                                            {event.cta2_label && event.cta2_url && (
                                                <Button asChild variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                                                    <a href={event.cta2_url} target="_blank" rel="noopener noreferrer">
                                                        {event.cta2_label}
                                                    </a>
                                                </Button>
                                            )}

                                            {(!event.cta1_label || !event.cta1_url) && (
                                                <Button asChild className="w-full py-6">
                                                    <Link to="/contact">
                                                        Register Now <Share2 className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="bg-muted/30 p-4 justify-center">
                                        <p className="text-xs text-muted-foreground text-center">
                                            Need help? <Link to="/contact" className="text-primary underline">Contact us</Link>
                                        </p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA - UPDATED Back Link */}
                <section className="mt-24 py-12 bg-muted/30 border-y">
                    <div className="container mx-auto px-4 text-center max-w-2xl">
                        <Button asChild variant="outline" size="lg">
                            <Link to="/join#upcoming-events">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Events List
                            </Link>
                        </Button>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default EventDetail;