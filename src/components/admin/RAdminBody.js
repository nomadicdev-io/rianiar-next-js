"use client"

import { useAtom, useAtomValue } from "jotai"
import RAdminBanner from "./RAdminBanner"
import RAdminSection from "./RAdminSection"
import { activeContext, adminContext } from "@/app/admin/layout"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const RAdminBody = ({children}) => {

  const resData = useAtomValue(adminContext);
  const currentPath = usePathname();
  const [pageData, setPageData] = useAtom(activeContext)

  useEffect(()=> {

    if(!resData?.data?.pages) return;

    const resArray = resData?.data?.pages;

    resArray.map(item=> item.slug == currentPath && setPageData(item))
  

  }, [resData.data, currentPath])

  return (
    <>
        {
          pageData &&
          <RAdminBanner 
            title={pageData.title}
            breadcrumbData={pageData.breadcrumb}
          /> 
        }
        <RAdminSection>
          {children}
        </RAdminSection>
    </>
  )
}

export default RAdminBody