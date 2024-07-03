import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>
          Contact Us
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text_para'>
          Want to send feedback? Let us know.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label htmlFor='email' className='form_label'>
              Your Email
            </label>
            <input
              type="email"
              id='email'
              placeholder='yourmail@gmail.com'
              className='form_input mt-1'>
            </input>
            
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
