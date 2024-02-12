"use client"

import Image from "next/image"
import { useState } from "react"
import FormLoader from "./FormLoader"
import { useForm, Controller } from "react-hook-form"
import { RButton, RButtonGroup } from "../buttons/Buttons"
import { FaArrowRight } from "react-icons/fa6";
import { RInput } from "./FormComponents"
import { useRouter } from 'next/navigation'
import RModal from "../modal/RModal";
import { AnimatePresence } from "framer-motion"
import { account } from "@/app/appwrite"

const LoginForm = ()=> {

    const router = useRouter()
    const [loader, setLoader] = useState(false)
    const [modal, setModal] = useState({type: '', show: false, title: '', description: ''})
    const { reset, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          email: '',
          password: ''
        },
    });

    const onSubmit = async (data) => {
        try{
            setLoader(true)

            const promise = await account.createEmailSession(data.email, data.password);
            console.log(promise)
            reset()
            router.push('/admin', { scroll: true })
            setLoader(false)

        }catch(error){
            setLoader(false)
            setModal({
                type: 'danger',
                show: true,
                title: 'Whoops!',
                description: error.message
            })
        }
        
    }

    return (
        <div className="r_login_form">

            <div className="r_login_form_icon">
                <div className="icon_">
                    <Image src={'/logo.svg'} width={120} height={120} alt='logo'/>
                </div>
            </div>

            <div className="r_login_form_title">
                <h2>Welcome Back !</h2>
                <p>Login here using your  username and password.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true, pattern:  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ }}
                    render={({ field }) => (
                        <RInput 
                            title={'Email'}
                            type={'email'}
                            controller={{...field}}
                            error={errors.email}
                        />

                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <RInput 
                            title={'Password'}
                            type={'password'}
                            controller={{...field}}
                            error={errors.password}
                        />

                    )}
                />

                <RButtonGroup cssClass={'mt_1'}>
                    <RButton 
                        title={'Sign In'}
                        type={'submit'}
                        icon={<FaArrowRight />}
                    />
                </RButtonGroup>

            </form>

            {
                loader && <FormLoader />
            }

            {
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
            }
            
        </div>
    )
}

const LoginBanner = ()=> {
    return (
        <div className="r_login_banner">
            <div className="r_login_banner_bg">
                <Image src={'/footer-bg.svg'} width={420} height={180} alt='RianAir'/>
            </div>
            <div className="r_login_banner_image">
                <Image src="/ai_robot.png" alt="AI Robot Image" width={335} height={436}/>
            </div>
            <div className="r_login_banner_partner">
                <Image src="/nomadic_logo.svg" alt="NomadicDev Logo" width={335} height={436}/>
            </div>
        </div>
    )
}

const RLoginForm = () => {
  return (
    <div className="r_login_grid">
        <LoginForm />
        <LoginBanner />
    </div>
  )
}

export default RLoginForm