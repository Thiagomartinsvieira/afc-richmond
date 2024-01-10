import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    toast.success('We received your message', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    toast.success('thanks for your feedback', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <div className="flex justify-center items-center py-8">
      <form
        onSubmit={handlesubmit}
        className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
          text-white leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Thiago Martins"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
          text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="thiago@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
          text-white leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Your subject here"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message or Feedback
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 
          text-white leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Type your message or feedback here"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none 
          focus:shadow-outline w-full"
            type="submit"
          >
            Submit
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
