import * as httpRequest from '~/utils/httpRequest';

export const showAll = async () => {
    try {
        const res = await httpRequest.get('/');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};