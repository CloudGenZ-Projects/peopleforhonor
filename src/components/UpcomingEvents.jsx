import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation
import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // New hook to detect the URL hash (#upcoming-events)
    const location = useLocation();

    useEffect(() => {
        fetchEvents();
    }, []);

    // New Effect: Scroll to section if hash is present
    useEffect(() => {
        if (location.hash === '#upcoming-events' && !loading) {
            const element = document.getElementById('upcoming-events');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100); // Small delay to ensure DOM rendering
            }
        }
    }, [location, loading]);

    const fetchEvents = async () => {
        try {
            const response = await fetch(`${API_BASE}/api/events/read.php`);

            if (response.ok) {
                const data = await response.json();

                if (data.success && data.data && data.data.length > 0) {
                    // Format dates for display
                    const formattedEvents = data.data.map(event => ({
                        ...event,
                        displayDate: formatDate(event.date),
                        displayTime: event.time || ''
                    }));
                    setEvents(formattedEvents);
                }
            }
        } catch (error) {
            console.error('Failed to fetch events:', error);
            // Events remain empty if API fails
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        // Added ID here for the anchor link to work
        <section id="upcoming-events" className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Join us at our next events and be part of a supportive community.
                        </p>
                    </div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-80 rounded-xl bg-muted animate-pulse" />
                        ))}
                    </div>
                ) : events.length === 0 ? (
                    <div className="text-center py-16 bg-muted/20 rounded-2xl border border-dashed">
                        <p className="text-lg text-muted-foreground">No upcoming events at the moment.</p>
                        <p className="text-sm text-muted-foreground mt-2">Check back soon for updates!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {events.map((e) => (
                            <Card key={e.id} className="flex flex-col h-full border-muted hover:border-primary/50 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                                
                                <CardHeader className="relative pb-2">
                                    {/* Date Badge */}
                                    <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                        {e.displayDate || formatDate(e.date)}
                                    </div>
                                    
                                    <CardTitle className="text-xl font-bold leading-tight pr-8 group-hover:text-primary transition-colors">
                                        {e.title}
                                    </CardTitle>
                                    
                                    <div className="flex flex-col gap-1.5 pt-2 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 shrink-0" />
                                            <span>
                                                {e.displayDate} 
                                                {e.displayTime ? ` • ${e.displayTime}` : ''}
                                            </span>
                                        </div>
                                        {e.location && (
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 shrink-0" />
                                                <span className="truncate">{e.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </CardHeader>

                                <CardContent className="flex-grow py-4">
                                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                        {e.description}
                                    </p>
                                </CardContent>

                                <CardFooter className="flex flex-col gap-3 pt-0 pb-6">
                                    <div className="w-full grid grid-cols-1 gap-2">
                                        {/* 1. CTA 1 (External) */}
                                        {e.cta1_label && e.cta1_url && (
                                            <Button asChild className="w-full bg-primary hover:bg-primary/90 shadow-sm">
                                                <a href={e.cta1_url} target="_blank" rel="noopener noreferrer">
                                                    {e.cta1_label} <ExternalLink className="ml-2 h-3.5 w-3.5" />
                                                </a>
                                            </Button>
                                        )}

                                        {/* 2. Learn More (Internal) */}
                                        {e.href && (
                                            <Button asChild variant={e.cta1_label ? "outline" : "default"} className="w-full">
                                                <Link to={e.href}>
                                                    Learn More
                                                </Link>
                                            </Button>
                                        )}

                                        {/* 3. CTA 2 (External Secondary) */}
                                        {e.cta2_label && e.cta2_url && (
                                            <Button asChild variant="secondary" className="w-full">
                                                <a href={e.cta2_url} target="_blank" rel="noopener noreferrer">
                                                    {e.cta2_label}
                                                </a>
                                            </Button>
                                        )}

                                        {/* 4. Fallback Join Us */}
                                        {!e.cta1_label && !e.cta1_url && !e.href && (
                                            <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                <Link to="/join">
                                                    Join Us <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default UpcomingEvents;