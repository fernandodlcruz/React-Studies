import axios from 'axios';

const KEY = 'AIzaSyAFUUkUTdo7K29GcNATIqu1dqSP1la3HEM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});