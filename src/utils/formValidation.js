import moment from "moment";

export const email = value => value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
export const phone = (phoneNumberLength, countryCode) => {
    switch (countryCode) {

        case '+65':
            return phoneNumberLength === 8

        case '+880':
            return phoneNumberLength === 8

        default:
            return false
    }
}

export const validationForRequired = (text) => {
    return text.length > 0;
}

export const validationForTextField = (text) => {
    return text.length > 0 && text.length <= 255;
}

export const validationForDate = (day) => {
    const formatedDate = moment(day).format("DD/MM/YYYY"); // when date is rendered it looks like dd/mm/yyyy, but it's real type is yyyy-mm-dd
    return moment(formatedDate, 'DD/MM/YYYY', true).isValid();
}

export const validationForNumber = (num, length) => {
    return num.length === length;
}

export const validationForVehicle = (vehicle) => {
    return vehicle.length <= 255;
}

export const validationForVehiclePrice = (price) => {
    return price > 0;
}

export const validationForDownPayment = (num, totalCost) => {
    return 0 <= num && num <= totalCost;
}

export const validationForUtilizationRate = (num, rateType) => {
    return rateType === "flat" ? num >= 12 && num <= 100 : num >= 21 && num <= 100;
}