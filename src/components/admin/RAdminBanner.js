"use client"

import { useEffect } from "react"
import RAdminContainer from "../common/RAdminContainer"
import RAdminBreadcrumb from "./RAdminBreadcrumb"
import { usePathname } from "next/navigation"
import RAdminPageTitle from "./RAdminPageTitle"

const RAdminBanner = ({breadcrumbData, children, title, greetings}) => {

    const paths = usePathname()

    useEffect(()=> {
        console.log(paths)
    }, [])

  return (
    <div className='r_admin_banner'>
        <RAdminContainer>
            {
                breadcrumbData && <RAdminBreadcrumb data={breadcrumbData}/>
            }
            <div className="r_admin_banner_wrapper">
                {
                    title &&  <RAdminPageTitle title={title} greetings={greetings}/>
                }
                {children}
            </div>
        </RAdminContainer>
        
    </div> 
  )
}

export default RAdminBanner