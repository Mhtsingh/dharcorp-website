import React from 'react'
import Feature from './Feature'
import Hero from "./Hero"
import About from "./About"
import Process from './Process/Process'
import Team from './Team'

const home = () => {
    return (
        <div>
           <Hero/>
           <About/>
           <Feature/>
           <Process/>
           <Team/>
        </div>
    )
}

export default home
