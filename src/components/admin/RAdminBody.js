"use client"

import { useAtomValue } from "jotai"
import RAdminBanner from "./RAdminBanner"
import RAdminSection from "./RAdminSection"
import { pageContext } from "@/app/admin/layout"

const RAdminBody = ({children, data}) => {

    const getPageData = useAtomValue(pageContext)

  return (
    <>
        <RAdminBanner 
            title={getPageData.title}
            breadcrumbData={getPageData.breadcrumb}
        />
        <RAdminSection>
            {children}
        </RAdminSection>
    </>
  )
}

export default RAdminBody