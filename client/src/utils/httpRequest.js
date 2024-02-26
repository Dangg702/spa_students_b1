import axios from 'axios';
// create an axios instance
const httpRequest = axios.create({
    baseURL: 'http://localhost:5000/student/',
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export const post = async (path, data = {}, options = {}) => {
    const response = await httpRequest.post(path, data, options);
    return response.data;
};

export const del = async (path, options = {}) => {
    const response = await httpRequest.delete(path, options);
    return response.data;
};

export const put = async (path, data = {}, options = {}) => {
    const response = await httpRequest.put(path, data, options);
    return response.data;
};

export default httpRequest;
