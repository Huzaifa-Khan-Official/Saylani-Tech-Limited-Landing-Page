import { FaAngular, FaReact } from "react-icons/fa"
import { RiFlutterFill } from "react-icons/ri"
import { TbBrandCpp } from "react-icons/tb"

export default function TechShowcase() {
    return (
        <div className="bg-gray-900 text-white py-10 md:py-28 flex items-center justify-center p-2 overflow-hidden">
            <div className="max-w-7xl flex flex-col lg:flex-row items-center px-5 xlg:px-0">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                        We Use Top Notch
                        <br />
                        100% Technologies
                    </h1>
                    <p className="text-gray-400 mb-6">
                        We leverage cutting-edge, 100% reliable technologies to deliver robust,
                        high-performance solutions. Our focus on innovation ensures you get
                        the best tools and systems tailored to your needs, driving success and
                        efficiency.
                    </p>
                </div>
                <div className="lg:w-1/2 relative flex justify-center">
                    <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
                        <div className="absolute w-full h-full bg-gray-800 rounded-full"></div>
                        <div className="absolute inset-4 bg-gray-700 rounded-full"></div>
                        <div className="absolute inset-8 bg-gray-600 rounded-full flex items-center justify-center">
                            <span
                                className="bg-gradient-to-r from-pink-500 from-50% text-2xl to-white bg-clip-text text-transparent text-center">
                                Saylani <br /> Tech Limited
                            </span>
                        </div>
                        {/* Icons */}
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-lg shadow-lg`}>
                            <FaReact className="w-8 h-8 lg:w-10 lg:h-10" />
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg shadow-lg absolute bottom-0 right-1/2 translate-x-1/4 translate-y-1/4">
                            <FaAngular className="w-8 h-8 lg:w-10 lg:h-10" />
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg shadow-lg absolute bottom-1/3 left-5 -translate-x-1/2">
                            <TbBrandCpp className="w-8 h-8 lg:w-10 lg:h-10" />
                        </div>
                        <div className="bg-gray-800 p-2 rounded-lg shadow-lg absolute top-1/4 right-5 translate-x-1/2">
                            <RiFlutterFill className="w-8 h-8 lg:w-10 lg:h-10" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center translate-x-1/2 top-10">
                            <div className="w-3 h-3 bg-pink-500 rounded-full bubble2"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center rotate-45 -translate-x-1/2 top-0 -translate-y-1/4 left-10">
                            <div className="w-2 h-2 bg-pink-500 rounded-full bubble2"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center -rotate-45 -translate-x-1/2 translate-y-24 left-[4.7rem]">
                            <div className="w-4 h-4 bg-pink-500 rounded-full bubble2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
