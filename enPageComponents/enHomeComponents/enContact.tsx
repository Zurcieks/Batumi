import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
    <section className='w-full h-auto flex flex-col sm:flex-row justify-center items-center text-center bg-white py-8 px-4'>
      {/* Main Text */}
      <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0 sm:mr-6'>
        Need more information or are you interested?
      </h2>

      {/* Contact Button */}
      <div>
        <Link href="/en/contact" className='inline-block px-5 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition duration-300'>
          Contact us!
        </Link>
      </div>
    </section>
  )
}

export default ContactSection;
