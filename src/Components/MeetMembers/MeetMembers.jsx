import { useState, useEffect, useCallback } from 'react'
import man1 from "../../assets/TeamMembers/man1.png";
import man2 from "../../assets/TeamMembers/man2.png";
import man3 from "../../assets/TeamMembers/man3.png";
import man4 from "../../assets/TeamMembers/man4.png";

const experts = [
    { id: 1, src: man1, alt: 'Expert 1' },
    { id: 2, src: man2, alt: 'Expert 2' },
    { id: 3, src: man3, alt: 'Expert 3' },
    { id: 4, src: man4, alt: 'Expert 4' }
];

export default function MeetMembers() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleExperts, setVisibleExperts] = useState(3);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experts.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + experts.length) % experts.length);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setVisibleExperts(window.innerWidth >= 768 ? 5 : 3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let intervalId = null;
        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                nextSlide();
            }, 3000); // Change slide every 3 seconds
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isAutoPlaying, nextSlide]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <div className="bg-black text-white py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">Meet Our Experts</h2>
                <p className="text-center mb-8 max-w-3xl mx-auto">
                    While vulnerability can help build trust, it's not the only way. Trust also grows through reliability, clear communication,
                    and consistent actions, allowing team members to feel secure without needing to expose personal vulnerabilities.
                </p>
                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleExperts)}%)` }}
                        >
                            {experts.map((expert) => (
                                <div
                                    key={expert.id}
                                    className="w-full sm:w-1/3 md:w-1/5 flex-shrink-0 px-2"
                                >
                                    <img
                                        src={expert.src}
                                        alt={expert.alt}
                                        className="rounded-lg object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-black hover:bg-opacity-75 transition-all"
                        aria-label="Previous slide"
                    >
                        {/* <ChevronLeft className="w-6 h-6" /> */}
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 text-black hover:bg-opacity-75 transition-all"
                        aria-label="Next slide"
                    >
                        {/* <ChevronRight className="w-6 h-6" /> */}
                    </button>
                </div>
            </div>
        </div>
    );
}
