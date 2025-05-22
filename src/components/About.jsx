import React from 'react'
import { aboutContent } from '../data/data'
import Button from './Button'
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <section className="section" id="about">
            <div className="container grid gap-12 md:grid-cols-2 md:items-center">
                {/* About content */}
                <div className="md:order-2">
                    <p className="subtitle">About us</p>
                    <h2 className="mt-2 mb-4 max-w-[470px]">Trusted Payment Solutions Since 2015</h2>
                    {aboutContent.map((content) => (
                        <p className="mb-5" key={content.id}>{content.text}</p>
                    ))}
                    <Button className="primary-btn">
                        Read more<ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
                {/* About banner */}
                 <figure>
                    <motion.img
                        src="/images/about-banner.webp"
                        alt="download app banner"
                        loading="lazy"
                        className="w-full"
                        whileHover={{
                            y: [-5, -10, -5],
                            transition: {
                                duration: 0.8,
                                repeat: Infinity,
                                repeatType: "mirror",
                            },
                        }}
                    />
                </figure>
            </div>
        </section>
    )
}

export default About