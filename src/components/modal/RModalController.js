"use client"

import { atom, useAtom } from "jotai"
import RModal from "./RModal"
import { AnimatePresence } from "framer-motion"

export const modalContext = atom({type: '', show: false, title: '', description: ''})

const RModalController = () => {
const [modal, setModal] = useAtom(modalContext)
  return (
    <>
        <AnimatePresence>
        {
            modal.show && 
            <RModal 
                type={modal.type}
                title={modal.title}
                description={modal.description}
                closeModal={()=> setModal({...modal, show: false})}
            />
        }
        </AnimatePresence>
    </>
  )
}

export default RModalController