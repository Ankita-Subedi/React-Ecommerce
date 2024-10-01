import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, aut!</p>

        <form className='w-full sm:w-1/2 flex gap-3 items-center mx-auto my-3 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter you email here' required/>
            <button onSubmit={onSubmitHandler} type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox