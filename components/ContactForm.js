import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

const ContactForm = () => {
  const router = useRouter();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


      const handleSend = (event) => {
        event.preventDefault()
        const url = "https://headlessnextjs.emilaragon.website/wp-json/contact-form-7/v1/contact-forms/94/feedback"
        const data = {
                yourName: {name},
                yourEmail: {email},
                yourSubject:{subject},
                yourMessage:{message}
        }

        const config = {
            headers: { "Content-Type": "multipart/form-data" }
          };


    axios.post(url, data, config)
  .then(res => {tyPage(res)})
  .catch(err => console.log(err))

  router.push('/thankyou');
        }

        console.log(name)
  return (
    <>
        <div>
        <form onSubmit={handleSend}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <br />
      <label htmlFor="subject">Subject:</label>
      <input type="text" id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
      <br />
      <button type="submit">Send</button>
    </form>
        </div>
    </>
  )
}

export default ContactForm