import * as httpRequest from '~/utils/httpRequest';

export const deleteService = async (id) => {
    try {
        const res = await httpRequest.del(`/delete/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};