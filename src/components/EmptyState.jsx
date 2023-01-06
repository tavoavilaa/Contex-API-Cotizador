import React from 'react'
import empty from '../img/empty.svg'
const EmptyState = () => {
  return (
    <>
        <img className='w-3/5 mx-auto' src={empty} alt="empty" />
        <p className='text-white text-center text-2xl mt-8'>Selecciona una marca de auto</p>
    </>
  )
}

export default EmptyState