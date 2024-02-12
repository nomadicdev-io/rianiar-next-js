"use client"

import { useAtom } from "jotai"
import { useEffect } from "react"
import { adminContext } from "../admin/layout"

const RAdminDataContext = ({data}) => {

    const [adminData, setAdminData] = useAtom(adminContext)

    useEffect(()=> {
        setAdminData({
            ...adminData,
            data: data
        })
    }, [])

    return true
}

export default RAdminDataContext