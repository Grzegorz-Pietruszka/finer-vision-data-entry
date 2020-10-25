// check if works, after that add rest of the input errors

export default function validateInput(values) {
    let errors = {};
    // First name Errors
    if (!values.firstName) {
        errors.firstName = "You need provide your frist name";
    }

    // Surname Errors
    if (!values.surname) {
        errors.surname = "You need provide your surname";
    }

    // Email Errors
    if (!values.emailAddress) {
        errors.email = "Required Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress.value) && values.emailAddress.touched) {
        errors.email = "Invalid email address";
    }

    // Mobile number Errors
    if (!values.mobileNumber) {
        errors.mobileNumber = "You need provide your mobile number";
    }
    // Add another validation
    // else if (english number) {
    //     errors.mobileNumber = "Please provide correct mobile number"
    // }

    // Gender Errors
    if (!values.gender) {
        errors.gender = "Please choose your gender"
    }

    return errors;
}


