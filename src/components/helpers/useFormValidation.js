import {useEffect, useState} from "react";

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
        setIsSubmittable(!Object.values(inputValues).some(value => value === ""));
    }

    function handleSubmit(event) {
        console.log(errors);
        event.preventDefault();
        const validationErrors = validate(inputValues);
        setErrors(validationErrors);
        if (isSubmittable) {
            console.log('submited')
        } else {
            console.log('not submited')
        }
    }

    return {inputValues, handleChange, errors, handleSubmit, isSubmittable}
}

export default useFormValidation;
