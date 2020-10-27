import {useEffect, useState} from "react";

function useFormValidation(initialState, validate) {
    const [inputValues, setInputValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmittable, setIsSubmittable] = useState(false)
    const [formIsSubmitting, setFormIsSubmitting] = useState(false)

    useEffect(() => {
        const requiredValuesProvided = Object.values(inputValues).filter(input => {
            return input.inputValue === "" && input.required;
        }).length === 0 && Object.values(errors).length === 0;
        setIsSubmittable(requiredValuesProvided);
    }, [errors, inputValues])

    function validateErrors() {
        const validationErrors = validate(inputValues);
        setErrors(validationErrors);
    }

    function handleChange(event) {
        const {name, value} = event.target;
        inputValues[name].inputValue = value
        setInputValues({
            ...inputValues,
        });
        validateErrors();
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormIsSubmitting(true);
        if (isSubmittable) {
            alert('Form has been submitted')
            setFormIsSubmitting(false);
        } else {
            console.log('not submitted')
            setFormIsSubmitting(false);
        }
    }

    return {handleChange, errors, handleSubmit, formIsSubmitting, isSubmittable}
}

export default useFormValidation;
