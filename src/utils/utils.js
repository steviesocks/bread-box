import { v4 as uuidv4 } from 'uuid';

export const createKey = () => {
    return uuidv4();
};