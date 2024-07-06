import axios from '../axios';
let handleSignin = (userEmail, userPassword) => {
    return axios.post('/api/login',
        {
            email: userEmail,
            password: userPassword
        });
}

let handleSignUp = (data) => {
    return axios.post('/api/signup', data);
}

let handleChangePassword = (data) => {
    return axios.put('/api/change-passord', data);
}

export {
    handleSignin, handleSignUp,
    handleChangePassword
}