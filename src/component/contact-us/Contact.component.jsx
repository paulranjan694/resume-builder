import React, { useState } from "react";
import { firestore } from "../../firebase/config";
import ToastNotification from "../../utils/toastNotificationUtils";
import Button from "../button/Button.component";
import FormInput from "../form-input/FormInput.component";
import FormTextArea from "../form-textarea/FormTextArea.component";

import "./Contact.style.scss";

function Contact() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setInputValue({
      ...inputValue,
      [name]:value}
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {name, email, phone, query} = inputValue;
    if(!name || !email || !phone || !query ){
      ToastNotification('error', "Please fill the details!");
      return;
    }
    try {
      const ref = firestore.collection('queries');
      const craetedAt = new Date();
      const response = await ref.add({
        name, email, phone, query, craetedAt
      });

      if(response.id){
        setInputValue({
          ...inputValue,
          name :'',
          email:'',
          phone:'',
          query:'',
        });
        ToastNotification('success', 'Thank You for reaching us. We have received your query, we will shortly contact you!!');
      }
        
    } catch (error) {
      console.log(`error occured at sending queries... ${error}`);
    }
  }
  return (
    <div className="contact__wrapper">
      <h3 className="section__title">Mail yOur qUerY</h3>
      <div className="contact-form__container">
        <form onSubmit={handleSubmit} mathod="post" className="contactForm__wrapper">
          <FormInput title="Name" type="text" name="name" handleChange={handleChange} value={inputValue['name']}/>
          <FormInput title="Email" type="email" name="email" handleChange={handleChange} value={inputValue['email']}/>
          <FormInput title="Phone" type="text" name="phone" handleChange={handleChange} value={inputValue['phone']}/>
          <FormTextArea title="Query" name="query" col="30" row="1" handleChange={handleChange} value={inputValue['query']}/>
          <Button title="Send" style="regular" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
