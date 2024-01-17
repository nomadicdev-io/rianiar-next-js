"use client"

import { useForm, Controller } from "react-hook-form"
import { RCheckbox, RDatepicker, RInput, RRadio, RSelect, RTextArea } from "./FormComponents"
import { RButton, RButtonGroup } from "../buttons/Buttons"
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";

const RRegistrationForm = () => {

    const { register, control, handleSubmit } = useForm();
    const [countries, setCountries] = useState(null);
    const [states, setStates] = useState(null)

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
        {label: 'Private Pilot License', name: 'Private Pilot License'},
        {label: 'Multi-Engine Rating', name: 'Multi-Engine Rating'},
        {label: 'Type Rating', name: 'Type Rating'},
        {label: 'Cabin Crew', name: 'Cabin Crew'},
        {label: 'Aircraft Maintenance Engineer', name: 'Aircraft Maintenance Engineer'}
    ]
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const getAllCountries = async ()=> {
        try{
            const headers = new Headers();
            headers.append("X-CSCAPI-KEY", process.env.NEXT_PUBLIC_COUNTRY_API_KEY);

            const requestOptions = {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
             };

            const res = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
            const data = await res.json();
            const countryArray = data.map(item=> {
                return {label: item.name, value: item.name}
            })

            setCountries(countryArray)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        getAllCountries();
    }, [])

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="register_form_grid">
            <RInput 
                title={'First Name'}
                cssClass={'half_'}
                type={'text'}
                controller={{...register("first_name", { required: true, maxLength: 20 })}}
            />

            <RInput 
                title={'Last Name'}
                cssClass={'half_'}
                type={'text'}
                controller={{...register("last_name", { required: true, maxLength: 20 })}}
            />

            <RRadio 
                title={'Gender'}
                cssClass={'full_'}
                type={'radio'}
                data={[{name: 'Male', value: 'male'}, {name: 'Female', value: 'female'}, {name: 'Others', value: 'others'}]}
                controller={{...register("gender", { required: true })}}
            /> 

            {
                countries && (
                    <>
                    <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                            <RSelect 
                                title={'Country'}
                                cssClass={'half_'}
                                placeholder={'Choose Country'}
                                required={true}
                                controller={{...field}}
                                data={countries}
                                onValueChanged={(el)=> console.log(el)}
                            />
        
                        )}
                    />
        
                    <Controller
                        name="state"
                        control={control}
                        render={({ field }) => (
                            <RSelect 
                                title={'State'}
                                cssClass={'half_'}
                                placeholder={'Choose State'}
                                required={true}
                                controller={{...field}}
                                data={states}
                            />
        
                        )}
                    />
                    </>
                )
            }

           

            <RInput 
                title={'Email'}
                cssClass={'half_'}
                type={'email'}
                controller={{...register("email", { required: true })}}
            />

            <RInput 
                title={'Phone'}
                cssClass={'half_'}
                type={'number'}
                controller={{...register("dob", { required: true})}}
            />

            <RInput 
                title={'Address'}
                cssClass={'half_'}
                type={'text'}
                controller={{...register("address", { required: true, maxLength: 13 })}}
            />

            <Controller
                name="dob"
                control={control}
                render={({ field }) => (
                    <RDatepicker 
                        title={'Date of Birth'}
                        cssClass={'half_'}
                        required={true}
                        controller={{...field}}
                    />

                )}
            />

            <Controller
                name="qualification"
                control={control}
                render={({ field }) => (
                    <RSelect 
                        title={'Education Qualification'}
                        cssClass={'full_'}
                        placeholder={'Choose Qualification'}
                        required={true}
                        controller={{...field}}
                        data={educationdata}
                    />

                )}
            />

            <Controller
                name="programs"
                control={control}
                render={({ field }) => (
                    <RSelect 
                        title={'Programs'}
                        cssClass={'full_'}
                        placeholder={'Choose Program'}
                        required={true}
                        controller={{...field}}
                        data={programsData}
                    />

                )}
            />

            <RTextArea 
                title={'Address'}
                cssClass={'full_'}
                type={'text'}
                controller={{...register("address", { required: true, maxLength: 200 })}}
            />


            <RCheckbox cssClass={'full_'} controller={{...register("terms", { required: true })}}>
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
    )
}

export default RRegistrationForm  