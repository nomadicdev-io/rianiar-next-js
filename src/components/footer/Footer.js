"use client"

import Link from 'next/link'
import RContainer from '../common/RContainer'
import './Footer.scss'
import Image from 'next/image'
import { FaRegPaperPlane } from "react-icons/fa6"
import { useState } from 'react'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const SubscribeNewsletter = ()=> {

    const [email, setEmail] = useState('')

    const onSubmit = (e)=> {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className='news_letter_wrapper'>
            <h4>Subscribe to Our Newsletter</h4>
            <p>Stay informed with our newsletter for updates, exclusive content. Stay informed and be part of our community.</p>

            <form className='subscribe_form' onSubmit={onSubmit}>
                <input type='text' placeholder='Your Email Address' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <button type='submit'>
                    <FaRegPaperPlane />
                </button>
            </form>

        </div>
    )
}

const Footer = () => {
  return (
    <footer className='r_footer'>

        <div className='footer_bg'>
            <Image src={'/footer-bg.svg'} width={1920} height={720} alt='RianAir'/>
        </div>

        <RContainer>
            <div className='footer_logo'>
                <Link href={'/'} title='RianAir'>
                    <Image src={'/logo-full.svg'} width={120} height={120} alt='RianAir'/>
                </Link>
            </div>

            <SubscribeNewsletter />

            <div className='footer_contact'>
                <ul>
                    <li>
                        <a href='tel:+917377877273' target='_blank' className='link_' title='RianAir | Phone'>
                            <div className='icon_'>
                                <FaPhoneAlt />
                            </div>
                            <span>+91 73778 77273</span>
                        </a>
                    </li>
                    <li>
                        <a href='tel:+917377577873' target='_blank' className='link_' title='RianAir | Phone'>
                            <div className='icon_'>
                                <FaPhoneAlt />
                            </div>
                            <span>+91 73775 77873</span>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:info@rianair.in' target='_blank' className='link_' title='RianAir | Email'>
                            <div className='icon_'>
                                <FaEnvelope />
                            </div>
                            <span>info@rianair.in</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='footer_links'>
                <ul>
                    <li>
                        <a href={"https://wa.me/+917377877273?text=I'm%20RianAir"} className='icon_link' target='_blank' title='RianAir | WhatsApp'>
                            <FaWhatsapp />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/Rian.aviation/' className='icon_link' target='_blank' title='RianAir | Facebook'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/rian_air/' className='icon_link' target='_blank' title='RianAir | Instagram'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/rian-air-7b5a29213/' className='icon_link' target='_blank' title='RianAir | LinkedIn'>
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/RianAir16?s=08' className='icon_link' target='_blank' title='RianAir | X'>
                            <FaXTwitter />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='footer_links'>
                <ul>
                    <li><Link href={'#'} className='link_' title='About Us'>About Us</Link></li>
                    <li><Link href={'#'} className='link_' title='FAQ'>FAQ</Link></li>
                    <li><Link href={'#'} className='link_' title='Terms & Conditions'>Terms & Conditions</Link></li>
                    <li><Link href={'#'} className='link_' title='Privacy Policy'>Privacy Policy</Link></li>
                    <li><Link href={'#'} className='link_' title='Career'>Career</Link></li>
                </ul>
            </div>
        </RContainer>

        <hr />

        <RContainer>
            <p className='footer_copyright'>&copy; RianAir {new Date().getFullYear()}. All rights reserved | Powered by <a href='#' title='nomadicdev'>nomadicdev.io</a></p>
        </RContainer>

        
    </footer>
  )
}

export default Footer