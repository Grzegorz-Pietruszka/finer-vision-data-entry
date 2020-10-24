import React from "react";

const useFormValidation = (initialState, validate) => {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
        console.log(values)
    }

    function handleBlur() {
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }

    return {values, handleChange, handleBlur, errors}
};

export default useFormValidation;
