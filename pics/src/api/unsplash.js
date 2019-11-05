import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 05152a137419bf041cd4a42120d8611e411cdb0d75c7226f9620c578f8b9c550'
    }
});