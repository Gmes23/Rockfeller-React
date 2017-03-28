import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from '../../utils/authConstant/constant';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}
export function login(data) {
    return dispatch => {
        return axios.post('/api/auth', data).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token)
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
            console.log(jwt.decode(token));
        });
    }
}