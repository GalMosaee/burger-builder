import axios from 'axios';

const instance = axios.create({
    //This URL took from our Firebase project.
    baseURL: 'https://react-my-burger-caed4.firebaseio.com/'
});

export default instance;