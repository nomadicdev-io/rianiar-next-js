"use client"

import { useAtom } from "jotai"
import { useEffect } from "react"
import { adminContext } from "../admin/layout"

const RAdminDataContext = ({data}) => {

    const [adminData, setAdminData] = useAtom(adminContext)

    useEffect(()=> {

        const routeObj = {}
        const setRoutes = data.pages.map(item=> {
            routeObj[item.key] = item
        })

        setAdminData({
            ...adminData,
            data: data,
            allRoutes: routeObj,
        })
    }, [])

    return true
}

export default RAdminDataContext