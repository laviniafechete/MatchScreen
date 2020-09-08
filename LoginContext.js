import React from 'react';
import reactotron from 'reactotron-react-native';
const { Provider, Consumer } = React.createContext();

class LoginContextProvider extends React.Component {
    state = {
        isLoggedIn: true
    };

    getData = async () => {
        reactotron.log('intra in getData din LOGIN')
        let value
        try {
            reactotron.log('intra in TRY')
            value = await AsyncStorage.getItem('userIsLoggin')
            reactotron.log(value, 'VALUE IN CONTEXT')
            if (value === 'true')
                this.setState({
                    isLoggedIn: true,
                })

        } catch (e) {
            return;
        }
    }

    userIsLoggedInToggle = () => {
        this.setState(prevState => {
            return {
                isLoggedIn: prevState.isLoggedIn === true ? false : true
            };
        });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        reactotron.log('intra in context')
        return (
            <Provider
                value={{ isLoggedIn: this.state.isLoggedIn, userIsLoggedInToggle: this.userIsLoggedInToggle }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { LoginContextProvider, Consumer as LoginContextConsumer };