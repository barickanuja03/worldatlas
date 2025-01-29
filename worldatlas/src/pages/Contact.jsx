import React from 'react'

function Contact() {
  const handleFormSubmit = (formData) =>{
   const formInputData = Object.fromEntries(formData.entries());
   console.log(formInputData);
  }
  return (
    <>
      <section className='main-container flex justify-center align-middle flex-col h-screen'>
        <h2 className='text-center text-3xl font-semibold my-5'>Contact Form</h2>
        <div className='flex flex-col justify-center items-center'>
        <form action={handleFormSubmit} className='flex flex-col gap-7 w-[30vw]'>
          <input 
            type='text'
            className='rounded-lg px-4 py-4 bg-transparent shadow-xl shadow-white/20 outline-none border-red-200 border-[2px]'
            placeholder='Enter Your Name'
            name='username'
            required
            autoComplete='false'
          />
          <input 
            type='text'
            className='rounded-lg px-4 py-4 bg-transparent shadow-xl shadow-white/20 outline-none border-red-200 border-[2px]'
            placeholder='Enter your mail'
            name='email'
            required
            autoComplete='false'
          />
          <textarea
          className='rounded-lg px-4 py-4 bg-transparent shadow-xl shadow-white/20 outline-none border-red-200 border-[2px]'
          rows="10"
          placeholder='Enter Your Message'
          name='message'
          required
          autoComplete='false'>
          </textarea>
          <button type='submit' value="send" className='border-2 border-red-200 py-3 px-3 text-xl rounded-xl'>Send</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
