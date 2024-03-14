import React from 'react'
import { Form } from 'react-router-dom'
import "../styles/Contact.css"

export default function Contact() {
  return (
    <section className='form-section'>
      <h1>Get in touch </h1>
      <Form className='contact-form'>
        <label htmlFor="firstName">First name</label>
        <input type="text" id='firstName' placeholder='Robert'/>
        <label htmlFor="lastName">Last name</label>
        <input type="text" id='lastName' placeholder='Fischer'/>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder='robert.fischer@numberone.com'/>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder='I would like to extend an offer on behalf...'></textarea>
        <button className="submitBtn">Send Message</button>
      </Form>
    </section>
    
  )
}
