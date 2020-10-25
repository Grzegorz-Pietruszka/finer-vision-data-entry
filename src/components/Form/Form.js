import React from 'react';
import Accordion from "../Accordion/Accordion";
import useFormValidation from "../helpers/useFormValidation";
import validateInput from "../helpers/validateInput";

const INITIAL_STATE = {
    firstName: "",
    surname: "",
    emailAddress: "",
    mobileNumber: "",
    gender: ""
};

const Form = () => {
    const {inputValues, handleChange, errors, handleSubmit} = useFormValidation(INITIAL_STATE, validateInput)
    return (
        <form onSubmit={handleSubmit}>
            <Accordion>
                <label>First Name
                    <input
                        type='text'
                        onChange={handleChange}
                        name='firstName'
                        value={inputValues.firstName}
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </label>
                <label>Surname
                    <input type='text'
                           onChange={handleChange}
                           name='surname'
                           value={inputValues.surname}
                    />
                    {errors.surname && <p>{errors.surname}</p>}
                </label>
                <label>Email Address
                    <input type='text'
                           onChange={handleChange}
                           name='emailAddress'
                           value={inputValues.emailAddress}/>
                    {errors.email && <p>{errors.email}</p>}

                </label>

                <label>Mobile Number
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
                {/*comments*/}
            </Accordion>
            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Form;
