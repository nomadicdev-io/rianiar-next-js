import { useState } from 'react';
import Select from 'react-select';
import './FormComponents.scss';
import { useId } from 'react';
import { FaCheck } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { LuCalendarDays } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear } from "date-fns";

export const RInput = ({title, type, controller, cssClass, error})=> {
    const id = useId();
    return (
        <div className={`r_input_field ${cssClass} ${error ? 'error_' :  undefined}`}>
            <label htmlFor={id} >{title}</label>
            <input type={type} {...controller} id={id}/>
        </div>
    )
}

export const RRadio = ({title, type, controller, cssClass, data, error})=> {
    return (
        <div className={`r_input_field ${cssClass} ${error ? 'error_' :  undefined}`}>
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

export const RSelect = ({title, controller, cssClass, data, placeholder, isSearchable, error})=> {

    const id = useId();

    return (
        <div className={`r_input_field ${cssClass} ${error ? 'error_' :  undefined}`}>
            <label htmlFor={id} >{title}</label>
            {
                data ? (
                    <Select
                        options={data}
                        className="r_select"
                        placeholder={placeholder}
                        classNamePrefix={'r_select_pre'}
                        {...controller}
                        id={id}
                        instanceId={id}
                        isSearchable={isSearchable ? isSearchable : true}
                    />
                ) : (
                    <div className='placeholder_' />
                )
            }
        </div>
    )
}

export const RCheckbox = ({children, cssClass, controller, error})=> {
    const id = useId();
    return (
        <div className={`r_input_field ${cssClass} ${error ? 'error_' :  undefined}`}>
            <div className='r_checkbox'>
                <input type='checkbox' id={id} {...controller}/>
                <span><FaCheck /></span>
                <label htmlFor={id}>{children}</label>
            </div>
        </div>
    )
}

export const RDatepicker = ({title, controller, cssClass, customHeader, years, error})=> {

    const id = useId();
    const [date] = useState(years ? new Date(years[0], 0) : new Date());

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

    const datePickerHeader = ({ date,changeYear,changeMonth,decreaseMonth,increaseMonth,prevMonthButtonDisabled,nextMonthButtonDisabled,}) => (
        <div className="custom_datepicker_header">
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select value={months[getMonth(date)]} onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
    )

    return (
        <div className={`r_input_field ${cssClass} ${error ? 'error_' :  undefined}`}>
            <label htmlFor={id} >{title}</label>
            <div className='datepicker_'>
                <DatePicker 
                renderCustomHeader={customHeader ? datePickerHeader : null}
                {...controller} 
                selected={controller.value ? controller.value : date}
                />
                <div className='icon_'>
                    <LuCalendarDays />
                </div>
            </div>
        </div>
    )
}

export const RTextArea = ({title, type, controller, cssClass, error})=> {
    const id = useId();
    return (
        <div className={`r_input_field ${cssClass} ${error ? 'error_' :  undefined}`}>
            <label htmlFor={id} >{title}</label>
            <textarea type={type} {...controller} id={id}/>
        </div>
    )
}