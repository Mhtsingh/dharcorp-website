import React, { useState } from "react";
import "./index.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import pic1 from '../../../Images/contact.jpg'
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container" id="contact">
        <div className="form-content-left">
          <img className='form-img' src={pic1} alt='contact' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
