import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Contact: {
        mailMe: function (name, email, message) {
            return axios.post('/api/contact/mailMe', { name, email, message });
        }
    }
}