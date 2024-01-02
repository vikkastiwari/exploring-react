const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d+$/;
const stringRegex = /^[a-zA-Z ]+$/;

export const ValidateEmail = (value) => {
    return emailRegex.test(value);
}

export const ValidatePhone = (value) => {
    return phoneRegex.test(value);
}

export const ValidateString = (value) => {
    return stringRegex.test(value);
}