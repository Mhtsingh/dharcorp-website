import React from 'react'
import Card from './Card'

import Story from './Story'

import Team from './Team1'
import Crumb from './Crumb'
import Reason from './Reason'

const about = () => {
    return (
        <div>
        <Crumb/>
          <Story/>
          <Card/>
          {/* <Reason/> */}
          <Team/>
        </div>
    )
}

export default about
