import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Image as ImageIcon, Video, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const Gallery = () => {
    // Gallery items for images - Real People for Honor events
    const imageItems = [
        {
            id: 2797,
            title: "IMG-20241215-WA0038",
            category: "gallery",
            type: "image",
            image: "https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0038.jpg",
            description: "Year-end celebration",
            date: "December 2024",
            location: "People for Honor"
        },
        {
            id: 2798,
            title: "IMG-20241215-WA0037",
            category: "gallery",
            type: "image",
            image: "https://peopleforhonor.com/wp-content/uploads/2024/12/IMG-20241215-WA0037.jpg",
            description: "Year-end celebration",
            date: "December 2024",
            location: "People for Honor"
        }
    ];

    // Gallery items for videos - from PFH Gallery page
    const videoItems = [
        {
            id: 1,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/L8tsLvAhXYQ/maxresdefault.jpg",
            videoUrl: "https://youtu.be/L8tsLvAhXYQ",
            videoId: "L8tsLvAhXYQ",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 2,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/MCi493kuCtg/maxresdefault.jpg",
            videoUrl: "https://youtu.be/MCi493kuCtg",
            videoId: "MCi493kuCtg",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 3,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/mJ41FnYfi1M/maxresdefault.jpg",
            videoUrl: "https://youtu.be/mJ41FnYfi1M",
            videoId: "mJ41FnYfi1M",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 4,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/r8Z0QHQY_Bk/maxresdefault.jpg",
            videoUrl: "https://www.youtube.com/watch?v=r8Z0QHQY_Bk",
            videoId: "r8Z0QHQY_Bk",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 5,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/CeBroypqQLQ/maxresdefault.jpg",
            videoUrl: "https://youtu.be/CeBroypqQLQ",
            videoId: "CeBroypqQLQ",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 6,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/I8B-j-UBFzs/maxresdefault.jpg",
            videoUrl: "https://youtu.be/I8B-j-UBFzs",
            videoId: "I8B-j-UBFzs",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 7,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/2Azj1KLcz_o/maxresdefault.jpg",
            videoUrl: "https://youtu.be/2Azj1KLcz_o",
            videoId: "2Azj1KLcz_o",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 8,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/2FHO9-0mGzc/maxresdefault.jpg",
            videoUrl: "https://youtu.be/2FHO9-0mGzc",
            videoId: "2FHO9-0mGzc",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 9,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/wc7qLue8JiA/maxresdefault.jpg",
            videoUrl: "https://youtu.be/wc7qLue8JiA",
            videoId: "wc7qLue8JiA",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 10,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/EuqJ_fj4nlk/maxresdefault.jpg",
            videoUrl: "https://youtu.be/EuqJ_fj4nlk",
            videoId: "EuqJ_fj4nlk",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 11,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/vx_riA-W03Q/maxresdefault.jpg",
            videoUrl: "https://youtu.be/vx_riA-W03Q",
            videoId: "vx_riA-W03Q",
            description: "",
            date: "",
            location: ""
        },
        {
            id: 12,
            title: "Gallery Video",
            category: "gallery",
            type: "video",
            thumbnail: "https://img.youtube.com/vi/OB-0fGkGFK4/maxresdefault.jpg",
            videoUrl: "https://youtu.be/OB-0fGkGFK4",
            videoId: "OB-0fGkGFK4",
            description: "",
            date: "",
            location: ""
        }
    ];

    const renderMediaGrid = (items, isVideo = false) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
                <Dialog key={item.id}>
                    <DialogTrigger asChild>
                        <Card className="group cursor-pointer overflow-hidden hover:shadow-strong transition-shadow duration-300">
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={isVideo ? item.thumbnail : item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {isVideo && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="h-6 w-6 text-primary-foreground ml-1" />
                                        </div>
                                    </div>
                                )}
                                <div className="absolute top-2 left-2">
                                    <Badge variant="secondary" className="text-xs capitalize">
                                        {item.category.replace('-', ' ')}
                                    </Badge>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </Card>
                    </DialogTrigger>

                    <DialogContent className="max-w-5xl p-0 overflow-hidden">
                        <div className="aspect-video w-full">
                            {isVideo ? (
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );

    const ImageSlider = ({ items }) => {
        const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
        const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
        const scrollNext = () => emblaApi && emblaApi.scrollNext();

        return (
            <div className="relative max-w-3xl md:max-w-4xl mx-auto">
                <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                    <div className="flex">
                        {items.map((item) => (
                            <div className="flex-[0_0_100%]" key={item.id}>
                                <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    aria-label="Previous"
                    onClick={scrollPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/70 backdrop-blur border border-border p-1.5 shadow hover:bg-background"
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                    type="button"
                    aria-label="Next"
                    onClick={scrollNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/70 backdrop-blur border border-border p-1.5 shadow hover:bg-background"
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-32">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-primary text-primary-foreground">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Our Community Voice
                            </h1>
                            <p className="text-xl leading-relaxed opacity-90">
                                Real voices. Real stories. Our community is at the heart of everything we do, built by them, for them.
                                Explore the videos and images below to hear their stories and experiences of our community members.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tabs for Images and Videos */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <Tabs defaultValue="all" className="w-full">
                            <div className="flex flex-col items-center mb-8">
                                <TabsList className="mb-6 grid w-full max-w-md grid-cols-3 h-12">
                                    <TabsTrigger value="all" className="text-sm sm:text-base">
                                        <Users className="h-4 w-4 mr-2" />
                                        All
                                    </TabsTrigger>
                                    <TabsTrigger value="images" className="text-sm sm:text-base">
                                        <ImageIcon className="h-4 w-4 mr-2" />
                                        Images
                                    </TabsTrigger>
                                    <TabsTrigger value="videos" className="text-sm sm:text-base">
                                        <Video className="h-4 w-4 mr-2" />
                                        Videos
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="all" className="mt-8">
                                    <div className="mb-12">
                                        <ImageSlider items={imageItems} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                            <Video className="h-6 w-6 text-primary" />
                                            Videos
                                            <Badge variant="outline">{videoItems.length}</Badge>
                                        </h2>
                                        {renderMediaGrid(videoItems, true)}
                                    </div>
                                </TabsContent>

                                <TabsContent value="images" className="mt-8">
                                    <div className="mb-6 text-center">
                                        <p className="text-muted-foreground">
                                            Showing {imageItems.length} {imageItems.length === 1 ? 'image' : 'images'}
                                        </p>
                                    </div>
                                    <ImageSlider items={imageItems} />
                                </TabsContent>

                                <TabsContent value="videos" className="mt-8">
                                    <div className="mb-6 text-center">
                                        <p className="text-muted-foreground">
                                            Showing {videoItems.length} {videoItems.length === 1 ? 'video' : 'videos'}
                                        </p>
                                    </div>
                                    {renderMediaGrid(videoItems, true)}
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <Card className="p-8 bg-gradient-card border-0 shadow-strong">
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    Be Part of Our Story
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    Every photo and video represents a life transformed, a connection made,
                                    and a step toward a brighter future. Join us and become part of these amazing stories.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-gradient-primary hover:bg-primary-hover" asChild>
                                        <a href="/programs">Join Our Programs</a>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <a href="/join">Volunteer With Us</a>
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Gallery;
