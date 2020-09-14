
import { ADD_GOLD, REMOVE_GOLD } from '../actions/goldActions';
import reactotron from 'reactotron-react-native';



const initialState = {
    gold: 10
}

export const goldReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOLD:
            return {
                ...state, gold: state.gold + 1
            }
        case REMOVE_GOLD:
            return {
                ...state, gold: state.gold - 1
            }
        default: return state;
    }
}