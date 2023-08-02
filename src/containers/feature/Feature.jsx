import React from 'react'
import '../feature/feature.css'
import { Features } from '..'

const FeatureData = [
    {
        text: "Improving end distrusts instantly ",
        title: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
        text: "Become the tended active ",
        title: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
        text: "Message or am nothing ",
        title: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
        text: "Really boy law county ",
        title: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    }
]
function Feature() {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>  
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {FeatureData.map((item, index) => (
            <Features title={item.text} text={item.title} key={item.title + index}></Features>
        ))}
      </div>
    </div>
  )
}

export default Feature
