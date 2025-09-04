import React from 'react'

const CTA = ({ phoneNumber }) => {
    
    const handleCall = () => {
      window.location.href = `tel:${phoneNumber}`;
    };

    return (
      <div className='flex flex-col justify-center items-center gap-4 my-20 text-xl text-slate-700'>
        <p> Get Answers to your quick questions, Call us to solve your equiries.</p>
        <button 
          onClick={handleCall}
          className='p-4 px-8 bg-amber-300 border border-slate-700 text-black text-2xl rounded-md'>
          Call us Right Now!
        </button>
      </div>
    )
}

export default CTA;