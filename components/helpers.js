import Reactotron from "reactotron-react-native"

export const logUnequalProps = (prevProps, props) => {
    // eslint-disable-next-line no-unused-vars
    for (const key of Object.keys(prevProps)) {
        if (props[key] !== prevProps[key]) {
            Reactotron.log(key, prevProps[key], props[key]);
        }
    }
};