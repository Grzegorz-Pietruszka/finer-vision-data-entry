import React, {useState} from 'react';
import Accordion from "../Accordion/Accordion";
import useFormValidation from "../helpers/useFormValidation";
import validateInput from "../helpers/validateInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from './Form.module.scss'

const INITIAL_STATE = {
    firstName: "",
    surname: "",
    emailAddress: "",
    mobileNumber: "",
    gender: "",
    birthDate: ""
};

const Form = () => {
    const [activeAccordion, setActiveAccordion] = useState('Step 1: Your details');
    const {
        inputValues,
        handleChange,
        errors,
        handleSubmit,
    } = useFormValidation(INITIAL_STATE, validateInput);

    return (
        <form onSubmit={handleSubmit}>
            <Accordion accordionTitle={"Step 1: Your details"}
                       active={activeAccordion}
                       setActive={setActiveAccordion}
            >
                <div className={style.formInputs}>
                    <label className={errors.firstName && style.inputError}>
                        First Name
                        <input
                            type='text'
                            onChange={handleChange}
                            name='firstName'
                            value={inputValues.firstName}
                        />
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </label>
                    <label className={errors.surname && style.inputError}>Surname
                        <input type='text'
                               onChange={handleChange}
                               name='surname'
                               value={inputValues.surname}
                        />
                        {errors.surname && <p>{errors.surname}</p>}
                    </label>
                    <label className={errors.email && style.inputError}>Email Address
                        <input type='text'
                               onChange={handleChange}
                               name='emailAddress'
                               value={inputValues.emailAddress}/>
                        {errors.email && <p>{errors.email}</p>}
                    </label>

                    <label className={errors.mobileNumber && style.inputError}>Mobile Number
                        <input type='text'
                               onChange={handleChange}
                               name='mobileNumber'
                               value={inputValues.mobileNumber}
                        />
                        {errors.mobileNumber && <p>{errors.mobileNumber}</p>}
                    </label>

                    {/*gender*/}
                    <label>Male
                        <input type="radio"
                               value="male"
                               name="gender"
                               onChange={handleChange}
                        />
                    </label>
                    <label>Female
                        <input type="radio"
                               value="female"
                               name="gender"
                               onChange={handleChange}
                        />
                    </label>
                    <label>Other
                        <input type="radio"
                               value="other"
                               name="gender"
                               onChange={handleChange}
                        />
                    </label>
                    {errors.gender && <p>{errors.gender}</p>}

                    {/*date of birth*/}
                    <label className={errors.birthDate && style.inputError}>Date of birth
                        <DatePicker selected={inputValues.birthDate}
                                    name="date"
                                    onChange={handleChange}
                                    dateFormat="dd/MM/yyyy"/>
                        {errors.birthDate && <p>{errors.birthDate}</p>}

                    </label>
                    <button type={"button"} onClick={() => setActiveAccordion('Step 2: More comments')}>
                        Next
                    </button>
                    {/*comments*/}
                </div>
            </Accordion>
            <Accordion accordionTitle={"Step 2: More comments"}
                       active={activeAccordion}
                       setActive={setActiveAccordion}>another accordion

                <button type={"button"} onClick={() => setActiveAccordion('Summary')}>
                    Next
                </button>
            </Accordion>

            <Accordion accordionTitle={"Summary"}
                       active={activeAccordion}
                       setActive={setActiveAccordion}>
                Summary
                <button type="submit">
                    Submit
                </button>
                {Object.keys(errors).length !== 0 && <p>Provide your correct details</p>}
            </Accordion>
        </form>
    );
};

export default Form;
