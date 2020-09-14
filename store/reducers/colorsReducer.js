
import { CHANGE_COLOR } from '../actions/colorsActions';
import reactotron from 'reactotron-react-native';



const initialState = {
    color: '#000'
}

export const colorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COLOR:
            const initialColor = state.color
            reactotron.log(initialColor, 'initialColor aici')
            if (initialColor === '#000') {
                return {
                    ...state, color: 'red'
                }
            } else if (initialColor === 'red') {
                return {
                    ...state, color: 'orange'
                }
            } else {
                return {
                    ...state, color: '#000'
                }
            }
        default: return state;
    }
}