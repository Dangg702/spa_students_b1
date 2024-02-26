import * as httpRequest from '~/utils/httpRequest';

export const search = async (id) => {
    try {
        const res = await httpRequest.get(`/search/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};