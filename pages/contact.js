import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Contact = () => {
  const router = useRouter();


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


      const handleSend = (event) => {
        event.preventDefault()
        const url = "https://headlessnextjs.emilaragon.website/wp-json/contact-form-7/v1/contact-forms/94/feedback"
        const data = {
                yourName: {name},
                yourEmail: {email},
                phoneNumber:{phone},
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
    <form onSubmit={handleSend} className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className=' text-left'>Contact Us</h1>
    </div>
    <div className=" w-full mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Full Name</label>
            <input type="text" id="name" value={name} placeholder="Enter your full name" onChange={(event) => setName(event.target.value)}  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="text" id="email" placeholder='Enter your email address' value={email} onChange={(event) => setEmail(event.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="text" id="email" placeholder='Enter your phone number' value={phone} onChange={(event) => setPhone(event.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" placeholder='Write your message here ....' value={message} onChange={(event) => setMessage(event.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button type='submit' className="flex w-full justify-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
      </div>
    </div>
  </div>
</form>
        {/* <div>
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
        </div> */}
    </>
  )
}

export default Contact