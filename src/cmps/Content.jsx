import React from 'react'

export function Content({section, color}){

    const content = [
        {
          title: 'Exquisite dining since 1989',
          desc: "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.",
        },
        {
          title: 'Enjoyable place for all the family',
          desc: 'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.',
          decoration:true
        },
        {
          title: 'The most locally sourced food',
          desc: 'All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.',
          decoration:true
        },       
        {
          title: 'A few highlights from our menu',
          desc: 'We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.',
          decoration:true
        },
        {
          title: 'Family Gathering',
          desc: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
        }
      
      ]

    return (
        <div className={`content-container ${color==='light'?'light-txt-color':'dark-txt-color'}`}>
            {content[section].decoration&&<div className="decoration">
              <div className="circle"></div>
              <div className='line'></div>
            </div>}
            <div className={`title ${section===0?'header-title':''}`}>{content[section].title}</div>
            <div className="main-content">{content[section].desc}</div>
        </div>
    )
}
