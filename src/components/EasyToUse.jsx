import React from 'react'
import { etuItems } from '../data/data'
import { motion } from 'framer-motion';

const EasyToUse = () => {
    return (

        <section className='section mb-[120px] md:mb-[150px]'>
            <div className='container grid gap-12 md:grid-cols-2'>
                {/* etu content  */}
                <div>
                    <p className='subtitle'>Easy to use</p>
                    <h2 className=''>Payments Made Simple</h2>
                    <p className='mt-3 mb-5 '>No complicated steps. No technical knowledge required. Just sign up, link your payment method, and start sending or receiving money. We’ve built our platform with user-friendliness as a top priority, so anyone can get started in minutes.
                    </p>
                    <ol className='list-decimal px-6  grid gap-2  '>
                        {etuItems.map((item) => (
                            <li
                                key={item.id}>
                                <p>{item.text}</p>
                            </li>
                        ))

                        }
                    </ol>
                </div>
                {/* etu banner */}
                <figure>
                   
                   <motion.img
                        src="/images/etu-banner.jpg"
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

export default EasyToUse