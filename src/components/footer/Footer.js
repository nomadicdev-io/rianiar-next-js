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
                        <a href='tel:+917377877273' target='_blank' className='link_'>
                            <div className='icon_'>
                                <FaPhoneAlt />
                            </div>
                            <span>+91 73778 77273</span>
                        </a>
                    </li>
                    <li>
                        <a href='tel:+917377577873' target='_blank' className='link_'>
                            <div className='icon_'>
                                <FaPhoneAlt />
                            </div>
                            <span>+91 73775 77873</span>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:info@rianair.in' target='_blank' className='link_'>
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
                        <a href='#' className='icon_link' target='_blank'>
                            <FaWhatsapp />
                        </a>
                    </li>
                    <li>
                        <a href='#' className='icon_link' target='_blank'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href='#' className='icon_link' target='_blank'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href='#' className='icon_link' target='_blank'>
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a href='#' className='icon_link' target='_blank'>
                            <FaXTwitter />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='footer_links'>
                <ul>
                    <li><Link href={'#'} className='link_' title=''>About Us</Link></li>
                    <li><Link href={'#'} className='link_' title=''>FAQ</Link></li>
                    <li><Link href={'#'} className='link_' title=''>Terms & Conditions</Link></li>
                    <li><Link href={'#'} className='link_' title=''>Privacy Policy</Link></li>
                    <li><Link href={'#'} className='link_' title=''>Career</Link></li>
                </ul>
            </div>
        </RContainer>

        <hr />

        <RContainer>
            <p className='footer_copyright'>&copy; RianAir {new Date().getFullYear()}. All rights reserved | Powered by <a href='#'>nomadicdev.io</a></p>
        </RContainer>

        
    </footer>
  )
}

export default Footer