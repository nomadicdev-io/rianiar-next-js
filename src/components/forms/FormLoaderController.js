"use client"

import { atom, useAtomValue } from "jotai"
import FormLoader from "./FormLoader"

export const formLoaderContext = atom(false)

export const FormLoaderController = () => {

    const isVisible = useAtomValue(formLoaderContext)

  return (
    <>
        {
            isVisible && <FormLoader />
        }
    </>
  )
}
