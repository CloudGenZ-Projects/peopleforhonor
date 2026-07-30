import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Services",
            links: [
                { name: "Career Guidance & Support", href: "/programs/empowerment" },
                { name: "Mentorship Program", href: "/programs/mentorship" },
                { name: "Personal Coaching", href: "/programs/coaching" },
                { name: "Culture & Community", href: "/service/culture-and-community-ottawa-program" },
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Programs", href: "/programs" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
            ]
        },
        {
            title: "Quick Links",
            links: [
                { name: "Home", href: "/" },
                { name: "Join Us", href: "/join" },
                { name: "Contact Us", href: "/contact" },
                { name: "Culture & Community", href: "/service/culture-and-community-ottawa-program" },
            ]
        }
    ];

    const socialLinks = [
        { name: "Facebook", icon: Facebook, href: "https://facebook.com/peopleforhonor" },
        { name: "Twitter", icon: Twitter, href: "https://twitter.com/peopleforhonor" },
        { name: "Instagram", icon: Instagram, href: "https://instagram.com/peopleforhonor" },
        { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/peopleforhonor" },
    ];

    return (
        <footer className="bg-foreground text-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
                    {/* Company Info */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="inline-block mb-4 sm:mb-6 hover:opacity-80 transition-opacity">
                            <img
                                src="https://peopleforhonor.com/wp-content/uploads/2024/11/People-For-Honour-1.png"
                                alt="People for Honor Logo"
                                className="h-10 sm:h-12 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-background/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            Empowering newcomers to Canada with support, mentorship,
                            and community connections to help them thrive in their new home.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 sm:space-y-3">
                            <a
                                href="tel:6136727062"
                                className="flex items-center gap-2 sm:gap-3 text-background/80 hover:text-primary transition-colors"
                            >
                                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                                <span className="text-xs sm:text-sm">613 672 7062</span>
                            </a>
                            <a
                                href="mailto:info@peopleforhonor.com"
                                className="flex items-center gap-2 sm:gap-3 text-background/80 hover:text-primary transition-colors"
                            >
                                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                                <span className="text-xs sm:text-sm break-all">info@peopleforhonor.com</span>
                            </a>
                            <a
                                href="https://maps.google.com/?q=1505+Laperriere+Ave+Suite+506+Ottawa+ON+K1Z+7T1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-2 sm:gap-3 text-background/80 hover:text-primary transition-colors"
                            >
                                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm">1505 laperrieve Ave Suite 506<br />Ottawa, ON, K127T1</span>
                            </a>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-base sm:text-lg font-semibold text-background mb-3 sm:mb-4">
                                {section.title}
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.href}
                                            className="text-background/80 hover:text-primary transition-colors duration-200 text-xs sm:text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-background/20 pt-6 sm:pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                        {/* Copyright */}
                        <div className="text-background/60 text-xs sm:text-sm text-center md:text-left">
                            {currentYear} People for Honor. All rights reserved. Built with{" "}
                            <Heart className="inline h-3 w-3 sm:h-4 sm:w-4 text-red-500 mx-1" />
                            for newcomers to Canada.
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 sm:w-10 sm:h-10 bg-background/10 rounded-full flex items-center justify-center text-background/80 hover:text-primary hover:bg-primary/20 transition-all duration-200"
                                        aria-label={social.name}
                                    >
                                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
