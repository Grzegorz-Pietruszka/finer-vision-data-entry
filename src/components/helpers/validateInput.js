const mobileNumberRegex = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

export default function validateInput(values) {
    let errors = {};

    // First name Errors
    if (!values.firstName.inputValue) {
        errors.firstName = "Please provide your name";
    }

    // Surname Errors
    if (!values.surname.inputValue) {
        errors.surname = "Please provide your surname";
    }

    // Email Errors
    if (!values.emailAddress.inputValue) {
        errors.email = "Please provide email address";
    } else if (!emailRegex.test(values.emailAddress.inputValue)) {
        errors.email = "Invalid email address";
    }

    // Mobile number Errors
    if (!values.mobileNumber.inputValue) {
        errors.mobileNumber = "Please provide your mobile number";
    } else if (!mobileNumberRegex.test(values.mobileNumber.inputValue)) {
        errors.mobileNumber = "Please provide correct number e.g. 07000000000"
    }

    // Birthday errors
    if (!values.birthDate.inputValue) {
        errors.birthDate = "Please provide your date of birth"
    } else if (!dateRegex.test(values.birthDate.inputValue)) {
        errors.birthDate = "Please provide correct date of birth dd/mm/yyyy"
    }

    // Gender Errors
    if (!values.gender.inputValue) {
        errors.gender = "Please select your gender"
    }

    return errors;
}


