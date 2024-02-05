"use client"

import { useForm, Controller } from "react-hook-form"
import { RCheckbox, RDatepicker, RInput, RRadio, RSelect, RTextArea } from "./FormComponents"
import { RButton, RButtonGroup } from "../buttons/Buttons"
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";
import RModal from "../modal/RModal";

const RRegistrationForm = () => {

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          address: '',
          terms: ''
        },
    });
    const [countries, setCountries] = useState(null);
    const [states, setStates] = useState(null)

    const headers = new Headers();
    headers.append("X-CSCAPI-KEY", process.env.NEXT_PUBLIC_COUNTRY_API_KEY);

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    const educationdata = [
        {label: 'Senior School ', value: 'Senior School '},
        {label: 'Graduate Diploma', value: 'Graduate Diploma'},
        {label: 'Bachelor Degree', value: 'Bachelor Degree'},
        {label: 'Masters Degree', value: 'Masters Degree'},
        {label: 'Doctoral Degree', value: 'Doctoral Degree'}
    ]
    const programsData = [
        {label: 'Commercial Pilot License', value: 'Commercial Pilot License'},
        {label: 'Artificial Intelligence In Aerospace', value: 'Artificial Intelligence In Aerospace'},
        {label: 'Private Pilot License', value: 'Private Pilot License'},
        {label: 'Multi-Engine Rating', value: 'Multi-Engine Rating'},
        {label: 'Type Rating', value: 'Type Rating'},
        {label: 'Cabin Crew', value: 'Cabin Crew'},
        {label: 'Aircraft Maintenance Engineer', value: 'Aircraft Maintenance Engineer'}
    ]

    const getAllCountries = async ()=> {
        try{
            const res = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
            const data = await res.json();

            const countryArray = data.map(item=> {
                return {label: item.name, value: item.name, iso2: item.iso2}
            })

            setCountries(countryArray)

        }catch(error){
            console.log(error)
        }
    }

    const years = (new Array(2008 - 1984 + 1)).fill(undefined).map((_, i) => i + 1984)


    useEffect(()=> {
        getAllCountries();
    }, [])

    const onSubmit = async (data) => {
       try{
            const postData = await {
                ...data,
                submission_date: new Date(),
                country: data.country.label,
                programs: data.programs.label,
                qualification: data.qualification.label,
                age: Math.floor((new Date() - new Date(data.dob).getTime()) / 3.15576e+10),
            }

            console.log(postData)
       }catch(err){
            console.log(err)
       }
    }

    return (
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
                rules={{ required: true }}
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

            <RModal />

        </form>
    )
}

export default RRegistrationForm  