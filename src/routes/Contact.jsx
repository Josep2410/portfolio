import React , {useState , useEffect } from 'react'
import "../styles/Contact.css"
import emailjs from 'emailjs-com'

export default function Contact() {

  const [formData , setFormData] = useState({from_FullName : "" , reply_to_email : "" , subject : "", message : ""})
  const [isDisable, setIsDisable] = useState(true)

  //check to disable button
  useEffect(() => {
    const {from_FullName , reply_to_email , subject , message} = formData 
    if(!from_FullName || !reply_to_email || !subject || !message) setIsDisable(true)
    else setIsDisable(false)

  }, [formData.from_FullName , formData.reply_to_email, formData.subject , formData.message])

  //handle changes in the form's input elements
  const handleChange = (e) => {
    const {name , value} = e.target
    setFormData(prev => ({...prev , [name] : value}))
  }

  //handle when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({from_FullName : "" , reply_to_email : "" , subject : "", message : ""})
    try{
      const response = emailjs.sendForm( "service_5g74ohl", "portfolio_form" , e.target , "C865dYJwizaxcQPPT")
      console.log('sent')
    }catch(err){
      console.log(err)
    }
    
  }


  return (
    <section className='form-section'>
      <h1 className='getInTouch'>Get in touch </h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full name :</label>
        <input 
          type="text" 
          id='fullName' 
          name="from_FullName"
          placeholder='Robert Fischer'
          onChange={handleChange}
          value={formData.from_FullName}
          required
        />
        <label htmlFor="email"> Email :</label>
        <input 
          type="email" 
          id="email"
          name="reply_to_email"
          placeholder='robert.fischer@numberone.com'
          onChange={handleChange}
          value={formData.reply_to_email}
          required
          />
        <label htmlFor="subject">Subject : </label>
        <input 
          type="text" 
          id='subject' 
          placeholder='Daily remainder' 
          name="subject"  
          onChange={handleChange}
          value={formData.subject}
          required
        />
        <label htmlFor="message">Message :  </label>
        <textarea 
          name="message" 
          id="message" 
          onChange={handleChange}
          cols="30" rows="5" 
          placeholder='Did you take out the trash this morning?'
          value={formData.message}
          required
          ></textarea>
        <button 
          className="submitBtn"
          disabled={isDisable}
          >Send Message</button>
      </form>
    </section>
    
  )
}
