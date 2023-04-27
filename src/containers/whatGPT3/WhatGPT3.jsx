import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {

  const texts = [
    'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',
    'We so opinion friends me message as delight. Whole front do of plate heard oh ought. ',
    'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
  ]

  return (
    <div className='gpt3__whatgpt3 section__padding section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
         <Feature title='What is GPT-3' text={texts[0]} />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text={texts[1]} />
        <Feature title='Knowlegdebase' text={texts[2]} />
        <Feature title='Education' text={texts[2]} />
      </div>
    </div>
  )
}

export default WhatGPT3