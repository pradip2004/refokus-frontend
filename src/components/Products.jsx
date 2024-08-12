import React from 'react'
import Product from './Product'

function Products() {
      const data = [
            {
                  title: "Arqitel",
                  desc: "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
                  live: true,
                  caseStudy: false
            },
            {
                  title: "BCG Platinion",
                  desc: "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
                  live: true,
                  caseStudy: false
            },
            {
                  title: "Cula",
                  desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
                  live: true,
                  caseStudy: false
            },
            {
                  title: "Singularity",
                  desc: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
                  live: true,
                  caseStudy: false
            },
            {
                  title: "Showcase",
                  desc: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
                  live: true,
                  caseStudy: true
            },
      ]
  return (
    <div className='mt-10'>
      {data.map((elem, index)=><Product val={elem}/>)}
    </div>
  )
}

export default Products