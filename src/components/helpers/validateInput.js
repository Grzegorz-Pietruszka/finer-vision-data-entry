const mobileNumberRegex = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export default function validateInput(values) {
    let errors = {};
    // First name Errors
    if (!values.firstName) {
        errors.firstName = "You need provide your first name";
    }

    // Surname Errors
    if (!values.surname) {
        errors.surname = "You need provide your surname";
    }

    // Email Errors
    if (!values.emailAddress) {
        errors.email = "Required Email";
    } else if (!emailRegex.test(values.emailAddress)) {
        errors.email = "Invalid email address";
    }

    // Mobile number Errors
    if (!values.mobileNumber) {
        errors.mobileNumber = "You need provide your mobile number";
    } else if (!mobileNumberRegex.test(values.mobileNumber)) {
        errors.mobileNumber = "Please provide correct number e.g. 07000000000"
    }

    // Gender Errors
    if (!values.gender) {
        errors.gender = "Please choose your gender"
    }

    if (!values.birthDate) {
        errors.birthDate = "Please provide your date of birth"
    }


    return errors;
}


