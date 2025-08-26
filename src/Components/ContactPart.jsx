import React from 'react'
import Form from './Form'

const ContactPart = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        
        {/* Left Side - Heading */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">Join With Us</h1>
          <p className="text-gray-600 mt-4">
            <p className="text-gray-700 text-lg md:text-xl mb-6">
  Become part of our growing community! Collaborate with passionate professionals, explore exciting opportunities, and contribute to building exceptional projects together. Gain hands-on experience, develop your skills, and be a part of innovative solutions that make a real difference. Join us to connect, learn, and grow while creating spaces that inspire and transform.
</p>

          </p>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1">
          <Form />
        </div>
        
      </div>
    </div>
  )
}

export default ContactPart
