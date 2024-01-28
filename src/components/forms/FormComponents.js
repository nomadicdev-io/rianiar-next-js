import { useState } from 'react';
import Select from 'react-select';
import './FormComponents.scss';
import { useId } from 'react';
import { FaCheck } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { LuCalendarDays } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";

export const RInput = ({title, type, controller, cssClass})=> {
    const id = useId();
    return (
        <div className={`r_input_field ${cssClass}`}>
            <label htmlFor={id} >{title}</label>
            <input type={type} {...controller} id={id}/>
        </div>
    )
}

export const RRadio = ({title, type, controller, cssClass, data})=> {
    return (
        <div className={`r_input_field ${cssClass}`}>
            <label>{title}</label>
            <div className='radio_group'>

                {
                    data?.map((e, i)=> (
                        <div className='radio_' key={`genderID${i}`}>
                            <input type={type} name={title} value={e.value} {...controller}/>
                            <span>{e.name}</span>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export const RSelect = ({title, controller, cssClass, data, placeholder, onValueChanged, isLoading})=> {

    const id = useId();
    const [selectedOption, setSelectedOption] = useState(null);

    const selectChange = (el)=> {
        console.log(el)
    }

    return (
        <div className={`r_input_field ${cssClass}`}>
            <label htmlFor={id} >{title}</label>
            {
                data ? (
                    <Select
                        options={data}
                        className="r_select"
                        placeholder={placeholder}
                        classNamePrefix={'r_select_pre'}
                        {...controller}
                        onChange={el => onValueChanged ? onValueChanged(el) : null}
                    />
                ) : (
                    <div className='placeholder_' />
                )
            }
        </div>
    )
}

export const RCheckbox = ({children, cssClass, controller})=> {
    const id = useId();
    return (
        <div className={`r_input_field ${cssClass}`}>
            <div className='r_checkbox'>
                <input type='checkbox' id={id} {...controller}/>
                <span><FaCheck /></span>
                <label htmlFor={id}>{children}</label>
            </div>
        </div>
    )
}

export const RDatepicker = ({title, controller, cssClass})=> {

    const id = useId();

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className={`r_input_field ${cssClass}`}>
            <label htmlFor={id} >{title}</label>
            <div className='datepicker_'>
                <DatePicker {...controller} selected={startDate} onChange={(date) => setStartDate(date)} />
                <div className='icon_'>
                    <LuCalendarDays />
                </div>
            </div>
        </div>
    )
}

export const RTextArea = ({title, type, controller, cssClass})=> {
    const id = useId();
    return (
        <div className={`r_input_field ${cssClass}`}>
            <label htmlFor={id} >{title}</label>
            <textarea type={type} {...controller} id={id}/>
        </div>
    )
}