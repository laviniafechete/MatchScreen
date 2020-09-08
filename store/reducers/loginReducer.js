
import { TOGGLE_LOGIN } from '../actions/loginActions';
import reactotron from 'reactotron-react-native';



const initialState = {
    login: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOGIN:
            const existingStatusLogin = state.login.login
            reactotron.log(existingStatusLogin, 'existingStatusLogin')
            if (existingStatusLogin === true) {
                return {
                    ...state, login: false
                }
            } else {
                return {
                    ...state, login: true
                }
            }
        default: return state;
    }
    return state;
}