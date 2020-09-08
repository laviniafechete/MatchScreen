export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

export const toggleLogin = (login) => {
    return {
        type: 'TOGGLE_LOGIN',
        isUserLoggin: login
    }
}