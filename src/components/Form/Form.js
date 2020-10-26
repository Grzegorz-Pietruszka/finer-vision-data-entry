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
    birthDate: "",
    comments: ""
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
                       setActive={setActiveAccordion}>
                <div className={style.formInputs}>
                    <div className={errors.firstName && style.error}>
                        <label>First Name</label>
                        <input
                            type='text'
                            onChange={handleChange}
                            name='firstName'
                            value={inputValues.firstName}/>
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>

                    <div className={errors.surname && style.error}>
                        <label>Surname</label>
                        <input type='text'
                               onChange={handleChange}
                               name='surname'
                               value={inputValues.surname}/>
                        {errors.surname && <p>{errors.surname}</p>}

                        <label className={errors.email && style.error}>Email Address</label>
                        <input type='text'
                               onChange={handleChange}
                               name='emailAddress'
                               value={inputValues.emailAddress}/>
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className={errors.mobileNumber && style.error}>
                        <label>Mobile Number</label>
                        <input type='text'
                               onChange={handleChange}
                               name='mobileNumber'
                               value={inputValues.mobileNumber}/>
                        {errors.mobileNumber && <p>{errors.mobileNumber}</p>}
                        <div className={errors.gender && style.error}>


                            <p>Select your gender</p>
                            <label>Male</label>
                            <input type="radio"
                                   value="male"
                                   name="gender"
                                   onChange={handleChange}/>


                            <label>Female</label>
                            <input type="radio"
                                   value="female"
                                   name="gender"
                                   onChange={handleChange}/>


                            <label>Other</label>
                            <input type="radio"
                                   value="other"
                                   name="gender"
                                   onChange={handleChange}/>
                            {errors.gender && <p>{errors.gender}</p>}
                        </div>

                    </div>

                    {/*date of birth*/}
                    <div className={errors.birthDate && style.error}>
                        <label>Date of birth </label>
                        <DatePicker selected={inputValues.birthDate}
                                    name="date"
                                    onChange={handleChange}
                                    dateFormat="dd/MM/yyyy"/>
                        {errors.birthDate && <p>{errors.birthDate}</p>}
                    </div>

                    <button type={"button"} onClick={() => setActiveAccordion('Step 2: More comments')}>
                        Next
                    </button>
                </div>
            </Accordion>
            <Accordion accordionTitle={"Step 2: More comments"}
                       active={activeAccordion}
                       setActive={setActiveAccordion}>

                <textarea name="comments" maxLength="100" cols="30" rows="10" defaultValue='Your comments'
                          onChange={handleChange} />
                <button type={"button"} onClick={() => setActiveAccordion('Submit')}>
                    Next
                </button>
            </Accordion>

            <Accordion accordionTitle={"Submit"}
                       active={activeAccordion}
                       setActive={setActiveAccordion}>
                Submit this form
                <button type="submit">
                    Submit
                </button>
                {Object.keys(errors).length !== 0 && <p>Provide your correct details</p>}
            </Accordion>
        </form>
    );
};

export default Form;
