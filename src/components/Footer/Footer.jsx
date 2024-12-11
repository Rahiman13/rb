import React, { useState, useContext } from 'react';
import logo from '../assets/logo2.png'
import FeedbackModal from '../Navbar/Feedbackmodal';


export default function Component() {
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

    const navigationLinks = ["Home", "Bestsellers", "Categories", "About Us"];
    const socialLinks = [
        { Icon: FacebookIcon, href: "#", label: "Facebook" },
        { Icon: TwitterIcon, href: "#", label: "Twitter" },
        { Icon: InstagramIcon, href: "#", label: "Instagram" },
        { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/rahiman-shaik/", label: "LinkedIn" },
        { Icon: GithubIcon, href: "https://github.com/Rahiman13", label: "GitHub" }
    ];

    return (
        <footer className="relative">
            {/* Fancy Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-950 via-indigo-900 to-blue-900">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h1 className="font-cursive text-5xl bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent 
                                     animate-gradient-x backdrop-blur-sm">
                            Books Adda
                        </h1>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Discover new authors, genres, and captivating stories in our carefully curated collection.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg relative group">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </h4>
                        <nav className="grid gap-3">
                            {navigationLinks.map(item => (
                                <a key={item} 
                                   className="text-gray-300 hover:text-white text-sm flex items-center gap-3 group transition-all duration-300" 
                                   href="#">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full transition-all duration-300 
                                                   group-hover:w-3 group-hover:bg-blue-300"></span>
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg relative group">
                            Contact
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </h4>
                        <div className="space-y-4">
                            <a href="mailto:rahimanshaik13@gmail.com" 
                               className="text-sm text-gray-300 hover:text-white flex items-center gap-3 group transition-all duration-300">
                                <InboxIcon className="h-4 w-4 group-hover:text-blue-400" />
                                <span className="hover:translate-x-1 transition-transform duration-300">
                                    rahimanshaik13@gmail.com
                                </span>
                            </a>
                            <a href="tel:+917995436372" 
                               className="text-sm text-gray-300 hover:text-white flex items-center gap-3 group transition-all duration-300">
                                <PhoneIcon className="h-4 w-4 group-hover:text-blue-400" />
                                <span className="hover:translate-x-1 transition-transform duration-300">
                                    +91 799-543-6372
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg relative group">
                            Connect
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </h4>
                        <div className="flex gap-5">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a key={label}
                                   href={href}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                                   aria-label={label}>
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="text-center text-sm text-gray-400">
                        <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                            © 2024 Books Adda
                        </span>
                        <span className="mx-2">•</span>
                        <span className="hover:text-white transition-colors duration-300">
                            All Rights Reserved
                        </span>
                    </div>
                </div>
            </div>
            
            {showFeedbackModal && <FeedbackModal onClose={() => setShowFeedbackModal(false)} />}
        </footer>
    );
}

function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InboxIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
    );
}

function InstagramIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function LinkedinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.46 4 9 9 0 0 1 19.5 5a4.48 4.48 0 0 0-7.86 3A12.7 12.7 0 0 1 1.64 4.16a4.48 4.48 0 0 0 1.39 6A4.42 4.42 0 0 1 .88 9.6v.05a4.48 4.48 0 0 0 3.6 4.4 4.48 4.48 0 0 1-2 .08 4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 0 19.54a12.73 12.73 0 0 0 6.88 2 12.72 12.72 0 0 0 12.82-13.21 9.14 9.14 0 0 0 2.25-2.32 9.72 9.72 0 0 1-2.75.75z" />
        </svg>
    );
}


function GithubIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 1C5.373 1 0 6.373 0 13c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583 0-.288-.01-1.049-.015-2.057-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.833 2.809 1.304 3.495.997.108-.776.42-1.304.762-1.604-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.504 11.504 0 0 1 3-.404 11.504 11.504 0 0 1 3 .404c2.292-1.553 3.3-1.23 3.3-1.23.653 1.652.242 2.873.118 3.176.768.84 1.234 1.911 1.234 3.221 0 4.61-2.803 5.625-5.472 5.921.43.372.823 1.102.823 2.222 0 1.605-.015 2.896-.015 3.287 0 .322.192.699.8.581C20.565 22.797 24 18.302 24 13c0-6.627-5.373-12-12-12z" />
        </svg>
    );
}
