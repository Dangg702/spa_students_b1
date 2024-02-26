import * as httpRequest from '~/utils/httpRequest';

export const createStudent = async (formData) => {
    try {
        const res = await httpRequest.post('/create', formData);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};