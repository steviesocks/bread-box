import { v4 as uuidv4 } from 'uuid';

export const createKey = () => {
    return uuidv4();
};

export const fullDate = (dateObject) => {
    const year = dateObject.getFullYear();
    const mon = dateObject.getMonth();
    const date = dateObject.getDate();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${months[mon]} ${date}, ${year}`
}

export const formatDate = (dateString) => {
    return `${dateString.slice(4,10)},${dateString.slice(10,15)}`
}