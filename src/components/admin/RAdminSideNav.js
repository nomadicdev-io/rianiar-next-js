"use client"

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiFileText, FiSettings } from "react-icons/fi";
import { TbPlaneInflight } from "react-icons/tb";
import { PiLinkSimpleHorizontalBold } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { TbUsersPlus } from "react-icons/tb";
import { LuFileBox } from "react-icons/lu";
import { useRouter } from 'next/navigation'

const RAdminSideNav = () => {

    const currentRoute = usePathname();
    const router = useRouter()

    const redirect = (value)=> {
        router.push(value, { scroll: true })
    }

    const menuItem = [
        {
            name: 'Dashboard',
            slug: '/admin',
            icon: <MdOutlineSpaceDashboard />
        },
        {
            name: 'Registraions',
            slug: '/admin/registrations',
            icon: <TbUsersPlus />
        },
        {
            name: 'Questions',
            slug: '/admin/questions',
            icon: <FiFileText />
        },
        {
            name: 'Programs',
            slug: '/admin/programs',
            icon: <TbPlaneInflight />
        },
        {
            name: 'Assistance',
            slug: '/admin/assistance',
            icon: <LuFileBox />
        },
        {
            name: 'Social Llinks',
            slug: '/admin/social-links',
            icon: <PiLinkSimpleHorizontalBold />
        }
    ]

  return (
    <div className='r_admin_side_nav'>
        <div className="r_admin_side_nav_top flex_1">
            <ul>
                {
                    menuItem.map((item, index)=> (
                        <li key={`topMenuItem${index}`}>
                            <button onClick={()=> redirect(item.slug)} className={currentRoute == item.slug ? 'active_' : undefined}><i>{item.icon}</i><span>{item.name}</span></button>
                        </li>
                    ))
                }
            </ul>
        </div>

        <div className="r_admin_side_nav_top">
            <ul>
                <li>
                    <button onClick={()=> redirect('/admin/settings')} className={currentRoute == '/admin/settings' ? 'active_' : undefined}><i><FiSettings /></i><span>Settings</span></button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default RAdminSideNav