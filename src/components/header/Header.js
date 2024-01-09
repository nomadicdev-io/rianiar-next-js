"use client"

import Link from 'next/link';
import RContainer from '../common/RContainer';
import './Header.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { RAButton, RAIconButton } from '../buttons/Buttons';
import { FaRegPaperPlane } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";

const NavWrapper = ({children})=> {
    return (
        <div className='nav_wrapper'>
            {children}
        </div>
    )
}

const NavLogo = ()=> {
    return (
        <div className='nav_logo'>
            <Link href={'/'} className='nav_logo_link'>
                <Image src={'/logo.svg'} width={120} height={120}/>
            </Link>
        </div>
    )
}

const NavListing = ()=> {

    const currentRoute = usePathname();
    const navData = [
        {
            id: 'nav1',
            title: 'Home',
            slug: '/'
        },
        {
            id: 'nav2',
            title: 'About Us',
            slug: '/about-us'
        },
        {
            id: 'nav3',
            title: 'Assistance',
            slug: '/assistance'
        },
        {
            id: 'nav4',
            title: 'Programs',
            slug: '/programs'
        },
        {
            id: 'nav5',
            title: 'Media Center',
            slug: '/media-center'
        },
        {
            id: 'nav6',
            title: 'Contact',
            slug: '/contact'
        },
    ]

    return (
        <div className='nav_box'>
            <div className='nav_items_box'>
                <nav>
                    <ul>
                        {
                            navData.map(item=> (
                                <li key={item.id}><Link href={item.slug} className={`nav_link ${currentRoute == item.slug ? 'active_' : ''}`} title={item.title}>{item.title}</Link></li>
                            ))
                        }
                    </ul>
                </nav>
            </div>

            <div className='nav_action_box'>
                <RAIconButton 
                    title={'Dashboard'}
                    href={'/login'}
                    icon={<LuUser/>}
                    theme={'secondary'}
                />
                <RAButton 
                    title={'Apply Now'}
                    href={'/apply'}
                    icon={<FaRegPaperPlane />}
                />
            </div>
        </div>
    )
}

const Header = () => {
  return (
    <header>
        <RContainer>

            <NavWrapper>
                <NavLogo />
                <NavListing />
            </NavWrapper>

        </RContainer>
    </header>
  )
}

export default Header