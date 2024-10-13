import { useState, useEffect } from 'react'
import pakola from "../../assets/pakola.png"
import pasha from "../../assets/pasha.png"
import bykea from "../../assets/bykea.png"
import hbl from "../../assets/hbl.png"
import habibSirat from "../../assets/habibSirat.jfif"
import servicesImg from "../../assets/servicesImg.jfif"

const partners = [
    { name: 'HBL', logo: hbl },
    { name: 'BYKEA', logo: bykea },
    { name: 'Pakola', logo: pakola },
    { name: 'P@SHA', logo: pasha },
    { name: 'Sirat', logo: habibSirat },
]

export default function Partners() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
        }, 3000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-12 text-center">Proud partners of Saylani tech limited</h2>

            {/* Partners Slider */}
            <div className="relative overflow-hidden h-20">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                >
                    {partners.concat(partners).map((partner, index) => (
                        <div key={index} className="w-1/5 flex-shrink-0 px-4">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                width={150}
                                height={50}
                                className="mx-auto w-36 h-12"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Software Services Section */}
            <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <div className="flex items-center mb-4">
                        <svg className="w-8 h-8 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        <h3 className="text-2xl font-bold">Software Services</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is
                        eleifend porta arcu In hac habitasse the platea thelorem turpoi
                        dictumst. In lacus libero faucibus malesuada
                    </p>
                    <button className="text-primary hover:underline flex items-center">
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div>
                    <img
                        src={servicesImg}
                        alt="Software Services"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg w-[600] h-[400]"
                    />
                </div>
            </div>
        </div>
    )
}