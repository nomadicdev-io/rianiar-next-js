import Image from 'next/image'
import React from 'react'

const PageInnerBG = () => {
  return (
    <div className='page_inner_bg'>
      <Image src={'/pageBG.png'} width={1920} height={1280} alt='pagebg'/>
    </div>
  )
}

export default PageInnerBG