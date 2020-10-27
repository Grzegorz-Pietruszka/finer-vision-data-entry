import React, {useState} from 'react';
import Accordion from "../Accordion/Accordion";
import useFormValidation from "../helpers/useFormValidation";
import validateInput from "../helpers/validateInput";
import style from "./Form.module.scss";



const INITIAL_STATE = {
    firstName: {inputValue: "", required: true},
    surname: {inputValue: "", required: true},
    emailAddress: {inputValue: "", required: true},
    mobileNumber: {inputValue: "", required: true},
    gender: {inputValue: "", required: true},
    birthDate: {inputValue: "", required: true},
    comments: {inputValue: "", required: false},
};

const Form = () => {
    const [activeAccordion, setActiveAccordion] = useState("Step 1: Your details");
    const {
        handleChange,
        errors,
        handleSubmit,
        formIsSubmitting,
        isSubmittable
    } = useFormValidation(INITIAL_STATE, validateInput);

    return (
        <form onSubmit={handleSubmit}>
            <Accordion accordionTitle={"Step 1: Your details"}
                       active={activeAccordion}
                       setActive={setActiveAccordion}>
                <div className={style.formInputs}>
                    <div className={(errors.firstName && style.error) + " " + style.inputWrapper}>
                        <label>First Name</label>
                        <input
                            type="text"
                            onChange={handleChange}
                            name="firstName"
                            />
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>

                    <div className={(errors.surname && style.error) + " " + style.inputWrapper}>
                        <label>Surname</label>
                        <input type="text"
                               onChange={handleChange}
                               name="surname"
                               />
                        {errors.surname && <p>{errors.surname}</p>}
                    </div>

                    <div className={(errors.email && style.error) + " " + style.inputWrapper}>
                        <label>Email Address</label>
                        <input type="text"
                               onChange={handleChange}
                               name="emailAddress"
                               />
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className={(errors.mobileNumber && style.error) + " " + style.inputWrapper}>
                        <label>Mobile Number</label>
                        <input type="text"
                               onChange={handleChange}
                               name='mobileNumber'
                               />
                        {errors.mobileNumber && <p>{errors.mobileNumber}</p>}
                    </div>

                    <div
                        className={(errors.birthDate && style.error) + " " + style.inputWrapper}>
                        <label>Date of birth </label>
                        <input
                               placeholder="dd/mm/yyyy"
                               type="text"
                               onChange={handleChange}
                               name="birthDate"
                        />
                        {errors.birthDate && <p>{errors.birthDate}</p>}
                    </div>

                    <div className={(errors.gender && style.error) + " " + style.inputWrapper}>
                        <span>Select your gender</span> <br/>
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


                    <button type={"button"} onClick={() => setActiveAccordion("Step 2: More comments")}>
                        Next &#62;
                    </button>
                </div>
            </Accordion>
            <Accordion accordionTitle={"Step 2: More comments"}
                       active={activeAccordion}
                       setActive={setActiveAccordion}>

                <div className={style.comments}>
                <textarea name="comments" maxLength="500" cols="20" rows="10" placeholder="Your comments"
                          onChange={handleChange}/>
                    <button type={"button"} onClick={() => setActiveAccordion("Step 3: Submit")}>
                        Next &#62;
                    </button>
                </div>
            </Accordion>

            <Accordion accordionTitle={"Step 3: Submit"}
                       active={activeAccordion}
                       setActive={setActiveAccordion}>
                <div className={style.submit}>
                    <p>Submit this form</p>
                    <button type="submit" disabled={formIsSubmitting}>
                        Submit
                    </button>
                    {!isSubmittable && <p>Provide your correct details</p> }
                </div>
            </Accordion>
        </form>
    );
};

export default Form;
