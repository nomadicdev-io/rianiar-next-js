import Link from 'next/link'
import './AdminHeader.scss'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { PiSignOutBold } from "react-icons/pi";
import { useRouter } from 'next/navigation'
import { account } from '@/app/appwrite';
import { useSetAtom } from 'jotai';
import { formLoaderContext } from '../forms/FormLoaderController';


const AdminHeaderProfile = ()=> {

    const [isVisible, setIsVisible] = useState(false)
    const router = useRouter()
    const setFormLoader = useSetAtom(formLoaderContext)

    const redirect = (value)=> {
        router.push(value, { scroll: true })
    }

    const logOut = async ()=> {
        try{
            setFormLoader(true)
            const res = await account.deleteSession('current');
            redirect('/login')
            setFormLoader(false)
        }catch(error){
            console.log(error)
            setFormLoader(false)
        }
    }

    return (
        <div className='r_admin_header_user'>
            <div className='r_admin_header_user_profile' onClick={()=> setIsVisible(!isVisible)}>
                <div className='r_admin_header_user_profile_inner'>
                    <div className='icon_'><span>R</span></div>
                    <div className='info_'>
                        <div className='user_'>
                            <h4>RianAir</h4>
                            <p>admin@rainair.in</p>
                        </div>
                        <div className='arrow_'><IoIosArrowDown /></div>
                    </div>
                </div>
            </div>
            {
                isVisible &&
                <div className='r_admin_header_user_dropdown'>
                    <div className='user_details'>
                        <p>RianAir</p>
                        <div className='tag_'>Super Admin</div>
                    </div>
                    <div className='user_links'>
                        <ul onClick={()=> setIsVisible(!isVisible)}>
                            <li>
                                <button onClick={()=> redirect('/admin/account')}><span>Your Account</span></button>
                            </li>
                            <li>
                                <button onClick={()=> redirect('/admin/settings')}><span>Settings</span></button>
                            </li>
                            <li>
                                <button onClick={()=> logOut()}><span>Sign out</span><i><PiSignOutBold/></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

const AdminHeader = () => {
  return (
    <header className='r_admin_header'>
        <div className='r_admin_header_wrapper'>
            <div className='r_admin_header_logo'>
                <Link href={'/admin'} title='Admin | RianAir' className='r_admin_header_logo_link'>
                    <Image src="/logo_admin.svg" alt='RianAir Admin' width={190} height={38} />
                </Link>
            </div>

            <AdminHeaderProfile />
        </div>
    </header>
  )
}

export default AdminHeader