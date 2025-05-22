import React from 'react'
import { hiwCardItems } from '../data/data'


const HowItWorks = () => {
  return (
    <section className="section" id='how-it-works'>
        <div className="container">
            <p className="subtitle text-center">How it Works</p>
            <h2 className='text-center'>Getting Started is Easy</h2>
            {/* card wrapper */}
            <div className="grid gap-6 mt-10 md:grid-cols-3 xs:grid-cols-2">
                {hiwCardItems.map((item)=>(
                    <div className="border  border-neutral-600 rounded-lg p-6" key={item.id}>
                        {/* card icon */}
                        <div className="">
                            <h3 className="text-4xl">{item.step}</h3>
                            <img src={item.icon} alt={item.title} className='mx-auto' />
                        </div>
                        {/* card title */}
                        <h4 className="text-xl text-center mt-4 md:text-2xl">{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default HowItWorks