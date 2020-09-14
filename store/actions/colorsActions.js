import reactotron from "reactotron-react-native";

export const CHANGE_COLOR = 'CHANGE_COLOR';

export const changeColor = (color) => {
    reactotron.log('intra in colorsActions')
    return {
        type: 'CHANGE_COLOR',
        color: color
    }
}
