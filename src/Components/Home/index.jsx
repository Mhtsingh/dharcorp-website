import React from 'react'
import Feature from './Feature'
import Hero from "./Hero1/Hero1"
import Card from './Card/Card'
import About from "./About"
import Process from './Process/Process'
import Team from './Team'

const home = () => {
    return (
        <div>
           <Hero/>
           <Card/>
           <About/>
           <Feature/>
           <Process/>
           <Team/>
        </div>
    )
}

export default home
