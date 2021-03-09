import React from 'react'
import Address from './Address'
import Form from './From'
import Breadcrum from '../Breadcrum'
import Contact from './ContactUs/Contact'

const contact = () => {
    return (
        <div>
            <Breadcrum/>
            <Address/>
            {/* <Form/> */}
            <Contact/>
        </div>
    )
}

export default contact
