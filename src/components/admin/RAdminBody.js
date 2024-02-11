"use client"

import { useAtom, useAtomValue } from "jotai"
import RAdminBanner from "./RAdminBanner"
import RAdminSection from "./RAdminSection"
import { adminContext } from "@/app/admin/layout"
import { useEffect } from "react"

const RAdminBody = ({children, data}) => {

  const [pageData, setPageData] = useAtom(adminContext)

  useEffect(()=> {
    setPageData(data)
  }, [])

  return (
    <>
        <RAdminBanner 
            title={pageData?.title}
            breadcrumbData={pageData?.breadcrumb}
        />
        <RAdminSection>
            {children}
        </RAdminSection>
    </>
  )
}

export default RAdminBody