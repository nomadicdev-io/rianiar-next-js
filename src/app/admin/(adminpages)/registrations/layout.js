"use client"

import RAdminTab from "@/components/admin/RAdminTab"
import { useAtomValue } from "jotai"
import { activeContext } from "../../layout"

const AdminLayout = ({children}) => {

  const tabData = useAtomValue(activeContext)

  return (
    <>
        <RAdminTab data={tabData?.children}/>
        {children}
    </>
  )
}

export default AdminLayout  