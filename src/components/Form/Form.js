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
                    <label className={errors.firstName && style.inputError}>First Name</label>
                    <input
                        type='text'
                        onChange={handleChange}
                        name='firstName'
                        value={inputValues.firstName}/>
                    {errors.firstName && <p>{errors.firstName}</p>}

                    <label className={errors.surname && style.inputError}>Surname</label>
                    <input type='text'
                           onChange={handleChange}
                           name='surname'
                           value={inputValues.surname}/>
                    {errors.surname && <p>{errors.surname}</p>}

                    <label className={errors.email && style.inputError}>Email Address</label>
                    <input type='text'
                           onChange={handleChange}
                           name='emailAddress'
                           value={inputValues.emailAddress}/>
                    {errors.email && <p>{errors.email}</p>}

                    <label className={errors.mobileNumber && style.inputError}>Mobile Number</label>
                    <input type='text'
                           onChange={handleChange}
                           name='mobileNumber'
                           value={inputValues.mobileNumber}/>
                    {errors.mobileNumber && <p>{errors.mobileNumber}</p>}

                    <label>Select your gender</label>
                    <label>
                        <input type="radio"
                               value="male"
                               name="gender"
                               onChange={handleChange}/>
                        Male
                    </label>
                    <label>
                        <input type="radio"
                               value="female"
                               name="gender"
                               onChange={handleChange}/>
                        Female
                    </label>
                    <label>
                        <input type="radio"
                               value="other"
                               name="gender"
                               onChange={handleChange}/>
                        Other
                    </label>
                    {errors.gender && <p>{errors.gender}</p>}

                    {/*date of birth*/}
                    <label className={errors.birthDate && style.inputError}>Date of birth </label>
                    <DatePicker selected={inputValues.birthDate}
                                name="date"
                                onChange={handleChange}
                                dateFormat="dd/MM/yyyy"/>
                    {errors.birthDate && <p>{errors.birthDate}</p>}

                    <button type={"button"} onClick={() => setActiveAccordion('Step 2: More comments')}>
                        Next
                    </button>
                </div>
            </Accordion>
            <Accordion accordionTitle={"Step 2: More comments"}
                       active={activeAccordion}
                       setActive={setActiveAccordion}>

                <textarea name="comments" maxlength="100" cols="30" rows="10"
                          onChange={handleChange}>Your comments</textarea>
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
