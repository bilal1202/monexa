import React from 'react'
import { statsItems } from '../data/data'


const Stats = () => {
  return (
    <section className="py-20">
        <div className="container flex flex-wrap gap-8 items-center justify-center md:gap-16">
            {statsItems.map((item)=>(
                <div className="text-center" key={item.id}>
                    <h3 className="text-3xl md:text-4xl">{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Stats