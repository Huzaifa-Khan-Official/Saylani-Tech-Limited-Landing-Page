import { useState, useEffect } from 'react'
import pakola from "../../assets/pakola.png"
import pasha from "../../assets/pasha.png"
import bykea from "../../assets/bykea.png"
import hbl from "../../assets/hbl.png"
import habibSirat from "../../assets/habibSirat.jfif"

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
                    className={`flex transition-transform duration-500 ease-in-out`}
                    style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                >
                    {partners.concat(partners).map((partner, index) => (
                        <div key={index} className="sm:w-1/5 flex-shrink-0 px-4">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="mx-auto w-36 h-12"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}