const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ValidateEmail = (value) => {
    return emailRegex.test(value);
}