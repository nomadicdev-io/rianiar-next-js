"use client"

import { useForm, Controller } from "react-hook-form"
import { RCheckbox, RDatepicker, RInput, RRadio, RSelect, RTextArea } from "./FormComponents"
import { RButton, RButtonGroup } from "../buttons/Buttons"
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ID, databeses, db_collection } from "@/app/appwrite";
import { getAllCountries, educationdata, programsData } from "@/store";
import SkeletonLoader from "../common/SkeletonLoader";
import { useAtom, useSetAtom } from "jotai";
import { countryArray } from "@/app/apply/page";
import { modalContext } from "../modal/RModalController";
import { formLoaderContext } from "./FormLoaderController";

const RRegistrationForm = () => {

    const { reset, register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          address: '',
          terms: ''
        },
    });
    const [countries, setCountries] = useAtom(countryArray);
    const setModal = useSetAtom(modalContext)
    const setFormLoader = useSetAtom(formLoaderContext)
    const [skeletonLoader, setSkeletonLoader] = useState(false)

    const years = (new Array(2008 - 1984 + 1)).fill(undefined).map((_, i) => i + 1984)


    useEffect(()=> {

        if(countries.length) return;

        setSkeletonLoader(true)
        getAllCountries().then(res=> {
            setCountries(res)
            setSkeletonLoader(false)
        });
    }, [])

    const onSubmit = async (data) => {
       try{
            setFormLoader(true);

            const postData = await {
                ...data,
                submission_date: new Date(),
                country: data.country.label,
                programs: data.programs.label,
                qualification: data.qualification.label,
                age: Math.floor((new Date() - new Date(data.dob).getTime()) / 3.15576e+10),
            }

            const res = await databeses.createDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
                db_collection.registration,
                ID.unique(),
                postData
            );

            setFormLoader(false);

            reset();

            setModal({
                type: 'success',
                show: true,
                title: 'Thank You!',
                description: "We've received your submission and we'll be in touch soon!"
            })
             
       }catch(err){

            setFormLoader(false);

            setModal({
                type: 'danger',
                show: true,
                title: 'Whoops!',
                description: err.message
            })
       }
    }

    return (
        <>
            {
                skeletonLoader ?

                <SkeletonLoader /> :

                <form onSubmit={handleSubmit(onSubmit)} className="register_form_grid">

                    <Controller
                        name="first_name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <RInput 
                                title={'First Name'}
                                cssClass={'half_'}
                                type={'text'}
                                controller={{...field}}
                                error={errors.first_name}
                            />

                        )}
                    />

                    <Controller
                        name="last_name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <RInput 
                                title={'Last Name'}
                                cssClass={'half_'}
                                type={'text'}
                                controller={{...field}}
                                error={errors.last_name}
                            />
                        )}
                    />

                    <RRadio 
                        title={'Gender'}
                        cssClass={'full_'}
                        type={'radio'}
                        rules={{ required: true }}
                        data={[{name: 'Male', value: 'male'}, {name: 'Female', value: 'female'}, {name: 'Others', value: 'others'}]}
                        error={errors.gender}
                        controller={{...register("gender", { required: true })}}
                    /> 

                    <Controller
                        name="country"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=""
                        render={({ field }) => (
                            <RSelect 
                                title={'Country'}
                                cssClass={'half_'}
                                placeholder={'Choose Country'}
                                controller={{...field}}
                                data={countries}
                                error={errors.country}
                            />

                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true, pattern:  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ }}
                        render={({ field }) => (
                            <RInput 
                                title={'Email'}
                                cssClass={'half_'}
                                type={'email'}
                                controller={{...field}}
                                error={errors.email}
                            />

                        )}
                    />

                    <Controller
                        name="phone"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <RInput 
                                title={'Phone Number'}
                                cssClass={'half_'}
                                type={'number'}
                                controller={{...field}}
                                error={errors.phone}
                            />

                        )}
                    />

                    <Controller
                        name="dob"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <RDatepicker 
                                title={'Date of Birth'}
                                cssClass={'half_'}
                                customHeader={true}
                                years={years}
                                controller={{...field}}
                                error={errors.dob}
                            />

                        )}
                    />

                    <Controller
                        name="qualification"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=""
                        render={({ field }) => (
                            <RSelect 
                                title={'Education Qualification'}
                                cssClass={'full_'}
                                placeholder={'Choose Qualification'}
                                controller={{...field}}
                                data={educationdata}
                                error={errors.qualification}
                            />

                        )}
                    />

                    <Controller
                        name="programs"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=""
                        render={({ field }) => (
                            <RSelect 
                                title={'Programs'}
                                cssClass={'full_'}
                                placeholder={'Choose Program'}
                                controller={{...field}}
                                data={programsData}
                                error={errors.programs}
                            />

                        )}
                    />

                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                            <RTextArea 
                                title={'Address'}
                                cssClass={'full_'}
                                type={'text'}
                                controller={{...field}}
                            />

                        )}
                    />

                    <RCheckbox cssClass={'full_'} controller={{...register("terms", { required: true })}} error={errors.terms}>
                        <p>I have read, understood and accept the <Link href={'/terms'}>terms and conditions.</Link></p>
                    </RCheckbox>


                    <RButtonGroup cssClass={'full_'}>
                        <RButton 
                            title={'Apply'}
                            type={'submit'}
                            icon={<FaCheck />}
                        />
                    </RButtonGroup>

                </form>
            }

        </>
    )
}

export default RRegistrationForm  