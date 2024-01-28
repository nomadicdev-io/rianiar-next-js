import Image from 'next/image'
import './HomeBanner.scss'
import { RAButton, RButtonGroup } from '../buttons/Buttons'
import { FaArrowRight } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const BannerContent = ()=> {
    return (
        <div className='banner_content'>

            <div className='content_'>

                <div className='text_'>
                    <h2>Something <span>Big</span> is Coming in <span>2024</span></h2>
                    <p>Unlocking the Future: RianAir is cooking up something extraordinary!  Get ready for a digital revolution that will redefine your pilot training experience.</p>
                </div>

                <RButtonGroup cssClass={'mt_3 center_'}>
                    <RAButton 
                    title={'Begin Your Journey'}
                    href={'/apply'}
                    size={'lg_'}
                    icon={<FaArrowRight />} 
                    /> 
                    <RAButton 
                    title={'WhatsApp Us'}
                    href={'/apply'}
                    size={'lg_'}
                    theme={'whatsapp'}
                    icon={<FaWhatsapp />} 
                    /> 


                </RButtonGroup>
                
               
            </div>

            {/* <div className='banner_disclaimer'>
                <p> Please note that our website is currently undergoing a transformation to bring you an enhanced and innovative online experience. During this period, certain features and content may be unavailable. We appreciate your patience and eagerly anticipate sharing our new digital space with you soon. Stay tuned for the big reveal! Thank you for your understanding.</p>
            </div> */}

            
        </div>
    )
}

const HomeBanner = () => {
  return (
    <section id='home-banner' className='home_banner'>
        <div className='banner_bg'>
            {/* <div className='banner_video'>
                <Image src={'/banner-image.jpg'} width={1920} height={1280} alt='pagebg'/>
            </div> */}
            <div className='overlay_'>
                <Image src={'/pageBG.png'} width={1920} height={1280} alt='pagebg'/>
            </div>
        </div>

        <BannerContent />
    </section>
  )
}

export default HomeBanner