"use client"

import { usePathname, useSelectedLayoutSegments } from "next/navigation"
import PageInnerBG from "./PageInnerBG";

const Main = ({children}) => {

    const currentRoute = usePathname();
    const conditionalPath = useSelectedLayoutSegments();

    if(conditionalPath[0] == 'admin'){
      return (
        <main className={'main_ dashboard_'}>
          {children}
        </main>
      )
    }else if(currentRoute == '/'){
      return (
        <main className={'main_'}>
          {children}
        </main>
      )
    }

    return (
      <main className={`main_ ${currentRoute == '/' ? '' : 'inner_page'} ${conditionalPath[0] == 'admin' ? 'dashboard_' : undefined}`}>
        <PageInnerBG />
        {children}
      </main>
    )
 

}

export default Main