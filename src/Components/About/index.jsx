import React from 'react'
import Card from './Card'
import Work from './Work'
import Story from './Story'
import Counter from './Counter'
import Team from './Team'
import Crumb from './Crumb'

const about = () => {
    return (
        <div>
        <Crumb/>
          <Story/>
          <Card/>
          {/* <Work/> */}
          {/* <Counter/> */}
          <Team/>
        </div>
    )
}

export default about
