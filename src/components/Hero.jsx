import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className="section pb-[120px] relative md:pb-[150px] md:pt-[180px] bg-purple-50 z-30" id="home">
            <div className="container grid gap-10 md:grid-cols-[0.8fr_1fr] md:items-center">
                {/* hero content */}
                <div className="max-w-[550px] text-center mx-auto md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl">Fast, Secure, and Effortless <span className="text-purple-400">Payments</span></h1>
                    <p className="mt-4 mb-6">Send, receive, and manage money with our secure payment platform. Join over 5 million businesses and individuals who trust us.</p>
                    {/* hero buttons */}
                    <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                        <Button className="primary-btn">Get Started</Button>
                        <Button className="secondary-btn">Learn More</Button>
                    </div>
                </div>
                {/* hero banner */}
                <figure>
                    <img src="/images/hero-banner.png" alt="hero banner" loading='lazy' />
                </figure>
            </div>

            {/* hero bg */}
            <div className="bg-purple-300 w-1/2 h-full absolute top-0 right-0 -z-10 hidden md:block"></div>
        </section>
    )
}

export default Hero