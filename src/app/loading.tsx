import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <div className='flex justify-center mt-20'><Image
    alt='spinner'
    src='/spinner.svg'
    width={100}
    height={100}
    priority={true}
    
    /></div>
  )
}

export default loading