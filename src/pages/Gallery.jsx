import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Image as ImageIcon, Video, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { useGalleryPageLive } from "@/hooks/usePayloadLive";
import { getMediaUrl, getYouTubeVideoId } from "@/services/payloadApi";

const Gallery = () => {
    const { data } = useGalleryPageLive();

    const heroTitle = data?.hero_title;
    const heroSubtitle = data?.hero_subtitle;

    const rawImages = data?.images || [];
    const rawVideos = data?.videos || [];

    const ctaHeading = data?.cta_heading;
    const ctaDescription = data?.cta_description;
    const ctaBtn1Text = data?.cta_btn1_text;
    const ctaBtn1Link = data?.cta_btn1_link;
    const ctaBtn2Text = data?.cta_btn2_text;
    const ctaBtn2Link = data?.cta_btn2_link;

    // Process images dynamically from Payload CMS
    const imageItems = rawImages.map((item, idx) => {
        const imageSrc = getMediaUrl(item.image, item.imageUrl || item.image);
        return {
            id: item.id || idx + 1,
            title: item.title || '',
            category: item.category || 'gallery',
            type: 'image',
            image: imageSrc,
            description: item.description || '',
            date: item.date || '',
            location: item.location || '',
        };
    }).filter(img => Boolean(img.image));

    // Process YouTube videos dynamically from Payload CMS
    const videoItems = rawVideos.map((item, idx) => {
        const videoId = getYouTubeVideoId(item.youtube_url || item.videoUrl || item.videoId);
        const thumbnailSrc = item.thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        return {
            id: item.id || idx + 1,
            title: item.title || '',
            category: item.category || 'gallery',
            type: 'video',
            thumbnail: thumbnailSrc,
            videoUrl: item.youtube_url || `https://youtu.be/${videoId}`,
            videoId: videoId,
            description: item.description || '',
            date: item.date || '',
            location: item.location || '',
        };
    }).filter(vid => Boolean(vid.videoId));

    const renderMediaGrid = (items, isVideo = false) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
                <Dialog key={item.id}>
                    <DialogTrigger asChild>
                        <Card className="group cursor-pointer overflow-hidden hover:shadow-strong transition-shadow duration-300">
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={isVideo ? item.thumbnail : item.image}
                                    alt={item.title || 'Gallery item'}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {isVideo && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="h-6 w-6 text-primary-foreground ml-1" />
                                        </div>
                                    </div>
                                )}
                                {item.category && (
                                    <div className="absolute top-2 left-2">
                                        <Badge variant="secondary" className="text-xs capitalize">
                                            {item.category.replace('-', ' ')}
                                        </Badge>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                {item.title && (
                                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                                        {item.title}
                                    </h3>
                                )}
                                {item.description && (
                                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </Card>
                    </DialogTrigger>

                    <DialogContent className="max-w-5xl p-0 overflow-hidden">
                        <div className="aspect-video w-full">
                            {isVideo ? (
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                                    title={item.title || 'Video player'}
                                    frameBorder="0"
                                    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img
                                    src={item.image}
                                    alt={item.title || 'Gallery image'}
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

        if (!items || items.length === 0) return null;

        return (
            <div className="relative max-w-3xl md:max-w-4xl mx-auto">
                <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                    <div className="flex">
                        {items.map((item) => (
                            <div className="flex-[0_0_100%]" key={item.id}>
                                <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                                    <img src={item.image} alt={item.title || 'Gallery image'} className="h-full w-full object-cover" />
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
                            {heroTitle && <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroTitle}</h1>}
                            {heroSubtitle && <p className="text-xl leading-relaxed opacity-90">{heroSubtitle}</p>}
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

                                <TabsContent value="all" className="mt-8 w-full">
                                    {imageItems.length > 0 && (
                                        <div className="mb-12">
                                            <ImageSlider items={imageItems} />
                                        </div>
                                    )}
                                    {videoItems.length > 0 && (
                                        <div>
                                            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                                <Video className="h-6 w-6 text-primary" />
                                                Videos
                                                <Badge variant="outline">{videoItems.length}</Badge>
                                            </h2>
                                            {renderMediaGrid(videoItems, true)}
                                        </div>
                                    )}
                                </TabsContent>

                                <TabsContent value="images" className="mt-8 w-full">
                                    <div className="mb-6 text-center">
                                        <p className="text-muted-foreground">
                                            Showing {imageItems.length} {imageItems.length === 1 ? 'image' : 'images'}
                                        </p>
                                    </div>
                                    <ImageSlider items={imageItems} />
                                </TabsContent>

                                <TabsContent value="videos" className="mt-8 w-full">
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
                {(ctaHeading || ctaDescription) && (
                    <section className="py-20 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="max-w-2xl mx-auto text-center">
                                <Card className="p-8 bg-gradient-card border-0 shadow-strong">
                                    {ctaHeading && <h2 className="text-2xl font-bold text-foreground mb-4">{ctaHeading}</h2>}
                                    {ctaDescription && <p className="text-muted-foreground mb-6">{ctaDescription}</p>}
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        {ctaBtn1Text && ctaBtn1Link && (
                                            <Button className="bg-gradient-primary hover:bg-primary-hover" asChild>
                                                <Link to={ctaBtn1Link}>{ctaBtn1Text}</Link>
                                            </Button>
                                        )}
                                        {ctaBtn2Text && ctaBtn2Link && (
                                            <Button variant="outline" asChild>
                                                <Link to={ctaBtn2Link}>{ctaBtn2Text}</Link>
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Gallery;
