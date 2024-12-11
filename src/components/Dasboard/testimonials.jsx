import React, { useState, useEffect } from 'react';
import Raj from '../../components/assets/Raj_Kumar.jpg';
import Neha from '../../components/assets/Neha_Sharma.jpg';
import Priya from '../../components/assets/Priya_Gupta.jpg';
import Sadiq from '../../components/assets/Sadiq_Basha.jpg';
import Nayum from '../../components/assets/Nayum.jpg';
import Aisha from '../../components/assets/Aisha.jpg';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSlider = () => {
    const testimonials = [
        {
            quote: "The Books Adda has a fantastic selection of books. I found everything I was looking for and more. The staff were very helpful and knowledgeable.",
            author: "Raj Kumar",
            city: "Delhi",
            image: Raj,
            rating: 4
        },
        {
            quote: "I love the cozy atmosphere of this Books Adda. It's my go-to place for finding new reads and getting recommendations from the friendly staff.",
            author: "Neha Sharma",
            city: "Mumbai",
            image: Neha,
            rating: 4.5
        },
        {
            quote: "The Books Adda's collection is impressive, and I always find what I need. The events they host are also a great way to meet fellow book lovers.",
            author: "Priya Gupta",
            city: "Punjab",
            image: Priya,
            rating: 5
        },

        {
            quote: "The Books Adda offers a wide range of genres and the staff's recommendations are always spot on. I always leave with a new favorite book.",
            author: "Sadiq Basha",
            city: "Bangalore",
            image: Sadiq,
            rating: 4.0
        },
        {
            quote: 'I had an incredible experience at the Books Adda. The personalized service and vast selection made my visit truly enjoyable. I highly recommend it to all book lovers.',
            author: "Nayum",
            city: "Hyderabad",
            image: Nayum,
            rating: 5
        },
        {
            quote: "The Books Adda's ambiance is perfect for spending a quiet afternoon reading. The staff is always ready to help and their book recommendations are great.",
            author: "Aisha Khan",
            city: "Vizag",
            image: Aisha,
            rating: 4.5
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="w-6 h-6 fill-current text-yellow-500" />);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<FaStarHalfAlt key={i} className="w-6 h-6 fill-current text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="w-6 h-6 fill-current text-yellow-500" />);
            }
        }
        return stars;
    };

    return (
        <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-300/20 to-blue-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto relative px-4">
                <div className="text-center mb-16 relative">
                    {/* <span className="text-sm font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 uppercase mb-4 block">
                        Testimonials
                    </span> */}
                    <h2 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6">
                        What Our Customers Say
                    </h2>
                    <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                        Discover why readers choose Books Adda for their literary journey
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl shadow-2xl backdrop-blur-sm bg-white/80">
                    <div
                        className="flex transition-transform ease-out duration-700"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-full flex-shrink-0 flex items-center justify-center p-12">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <div className="relative">
                                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl rotate-12 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                            <FaQuoteLeft className="text-white text-2xl -rotate-12 group-hover:rotate-45" />
                                        </div>
                                        <div className="flex items-center space-x-8 mb-8 ml-8">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-40 transition-opacity"></div>
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl transform hover:scale-105 transition-all duration-300 relative z-10"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                                    {testimonial.author}
                                                </h3>
                                                <p className="text-purple-600 font-medium text-lg">{testimonial.city}</p>
                                                <div className="flex space-x-1.5 mt-3">
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xl text-gray-700 leading-relaxed italic ml-8">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute top-1/2 -left-6 w-24 h-14 flex items-center justify-center bg-white/80 backdrop-blur-sm text-purple-600 rounded-2xl shadow-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300 focus:outline-none transform -translate-y-1/2"
                        onClick={prevSlide}
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        className="absolute top-1/2 -right-6 w-24 h-14 flex items-center justify-center bg-white/80 backdrop-blur-sm text-purple-600 rounded-2xl shadow-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300 focus:outline-none transform -translate-y-1/2"
                        onClick={nextSlide}
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center space-x-3 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`transition-all duration-300 ${currentSlide === index
                                    ? 'w-12 h-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full'
                                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSlider;
