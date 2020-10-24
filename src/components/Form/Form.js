import React from 'react';
import Accordion from "../Accordion/Accordion";
import useFormValidation from "../helpers/useFormValidation";
import validateInput from "../helpers/validateInput";

const INITIAL_STATE = {
    firstName: "",
    surname: "",
    emailAddress: "",
    mobileNumber: ""
};


const Form = () => {

    const {values, handleChange, handleBlur, errors} = useFormValidation(INITIAL_STATE, validateInput)

    return (
        <Accordion>
            <label>First Name
                <input
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='firstName'
                    value={values.firstName}
                />
                {errors.email && <p>{errors.email}</p>}
            </label>
            <label>Surname
                <input type='text'
                       onChange={handleChange}
                       name='surname'
                       value={values.surname}
                />
            </label>
            <label>Email Address
                <input type='text'
                       onChange={handleChange}
                       name='emailAddress'
                       value={values.emailAddress}/>
            </label>
            <label>Mobile Number
                <input type='text'
                       onChange={handleChange}
                       name='mobileNumber'
                       value={values.mobileNumber}
                />
            </label>

            {/*gender*/}
            {/*date of birth*/}
            {/*comments*/}
        </Accordion>
    )
        ;
};

export default Form;
