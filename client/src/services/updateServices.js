import * as httpRequest from '~/utils/httpRequest';

export const updateService = async (id, formData) => {
    try {
        const res = await httpRequest.put(`/update/${id}`, formData);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};