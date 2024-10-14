import React from 'react'
import Layout from '../Components/Layout/Layout'
import video from "../assets/video.mp4"
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import Partners from '../Components/Partners/Partners'
import Testimonial from '../Components/Testimonial/Testimonial'
import TechShowcase from '../Components/TechShowcase/TechShowcase'
import Services from '../Components/Services/Services'
import MeetMembers from '../Components/MeetMembers/MeetMembers'

function Home() {
    return (
        <div className=''>
            <Layout>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='absolute inset-0 bg-black bg-opacity-50'>
                    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Saylani Tech Limited</h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
                            Transforming businesses with custom software solutions and innovation technology expertise.
                        </p>
                        <div className="flex items-center flex-col justify-center">
                            <span className="text-white">Your Vision, Our Code</span>
                        </div>
                        <div className="absolute flex items-center gap-2 bottom-10 text-gray-300 hover:text-white cursor-pointer">
                            Scroll more, learn more <MdKeyboardDoubleArrowDown />
                        </div>
                    </main>
                    <Partners />
                    <Services />
                    <Testimonial />
                    <TechShowcase />
                    <MeetMembers />
                </div>
            </Layout>
        </div>
    )
}

export default Home