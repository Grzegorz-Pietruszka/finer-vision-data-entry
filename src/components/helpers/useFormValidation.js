import React from "react";

const useFormValidation = (initialState, validate) => {
    const [values, setValues] = React.useState(initialState);

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }
};

export default useFormValidation;
