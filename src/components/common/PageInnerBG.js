import Image from 'next/image'
import React from 'react'

const PageInnerBG = () => {
  return (
    <div className='page_inner_bg'>
      <div className='top_'>
        <Image src={'/pageBG.png'} width={1920} height={1280} alt='pagebg'/>
      </div>
      {/* <div className='bottom_'>
        <Image src={'/airport-bg.png'} width={1920} height={1280} alt='pagebg'/>
      </div> */}
    </div>
  )
}

export default PageInnerBG