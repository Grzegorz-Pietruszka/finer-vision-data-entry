import React, {useState} from "react";

function useFormValidation(initialState, validate) {
    const [inputValues, setInputValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmittable, setIsSubmittable] = useState(false);

    function handleChange(event) {
        if (event && event.target) {
            const {name, value} = event.target;
            setInputValues({
                ...inputValues,
                [name]: value
            });
        } else {
            setInputValues({
                ...inputValues,
                birthDate: event
            });
        }
        setIsSubmittable(!Object.values(inputValues).every(value => value !== ""));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate(inputValues);
        setErrors(validationErrors);
        if (isSubmittable) {
            alert('Form has been submitted')
        }
    }

    return {inputValues, handleChange, errors, handleSubmit}
}

export default useFormValidation;
