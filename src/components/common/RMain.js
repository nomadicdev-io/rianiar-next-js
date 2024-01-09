"use client"

import { usePathname } from "next/navigation"
import PageInnerBG from "./PageInnerBG";

const Main = ({children}) => {

    const currentRoute = usePathname();

  return (
    <main className={`main_ ${currentRoute == '/' ? '' : 'inner_page'}`}>

        {
            currentRoute != '/' && <PageInnerBG />
        }

        {children}
    </main>
  )
}

export default Main