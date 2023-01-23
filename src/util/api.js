import axios from 'axios';

export default axios.create({
    baseURL: 'https://long-blue-lemming-fez.cyclic.app/',
    headers: {"Access-Control-Allow-Origin": "*"}
});