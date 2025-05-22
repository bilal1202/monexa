import React from 'react'
import { motion } from 'framer-motion';


const DownloadApp = () => {
    return (
        <section className="section pb-[120px] md:pb-[150px]" id="download-app">
            <div className="container grid gap-10 md:grid-cols-[0.7fr_1fr] md:items-center">
                {/* content */}
                <div>
                    <p className="subtitle">Download App</p>
                    <h2>Manage your money from your phone</h2>
                    <p className="mt-3 mb-8">Manage your finances on the go with our secure and easy-to-use mobile app. Send, receive, and top up anytime — right from your pocket.</p>

                    {/* buttons */}
                    <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                        <button className="flex items-center gap-3 border border-gray-200 p-3 rounded-md hover:border-purple-600 transition-colors hover:text-purple-600">
                            <img src="/images/play-store.svg" alt="play store icon" width={40} height={40} />
                            <a href="#">Play Store</a>
                        </button>
                        <button className="flex items-center gap-3 border border-gray-200 p-3 rounded-md hover:border-purple-600 transition-colors hover:text-purple-600">
                            <img src="/images/app-store.svg" alt="App store icon" width={40} height={40} />
                            <a href="#">App Store</a>
                        </button>
                    </div>
                </div>
                {/* banner */}
                <figure>
                    <motion.img
                        src="/images/download-app-banner.png"
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

export default DownloadApp