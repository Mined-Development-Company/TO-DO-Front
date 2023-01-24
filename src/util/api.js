import axios from 'axios';

const token = localStorage.getItem('token');

export default axios.create({
    baseURL: 'https://long-blue-lemming-fez.cyclic.app/',
    headers: { Authorization: `Bearer ${token}` }
});