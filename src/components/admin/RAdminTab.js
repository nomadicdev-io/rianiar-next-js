"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const RAdminTab = ({data}) => {

    const currentPath = usePathname()

  return (
    <div className="r_admin_tab">
        <ul>
            {
                data?.map((item, index)=> (
                    <li key={`rChildSlug${index}`}>
                        <Link className={currentPath == item.slug ? 'active_' : null} href={item.slug} title={item.title}>{item.title}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default RAdminTab