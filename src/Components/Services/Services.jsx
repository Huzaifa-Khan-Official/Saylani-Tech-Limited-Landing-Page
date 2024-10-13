import React from 'react'
import servicesImg from "../../assets/servicesImg.jfif"


function Services() {
    return (
        <div className='px-4 md:px-8 py-12'>
            <div className="mt-16 grid md:grid-cols-2 gap-8 items-center" >
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
            </div >

            {/* 2nd Service */}
            <div className="mt-16 grid md:grid-cols-2 gap-8 items-center" >
                <div>
                    <img
                        src={servicesImg}
                        alt="Software Services"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg w-[600] h-[400]"
                    />
                </div>
                <div>
                    <div className="flex items-center mb-4">
                        <svg className="w-8 h-8 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        <h3 className="text-2xl font-bold">Cloud Services</h3>
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
            </div >
        </div>
    )
}

export default Services