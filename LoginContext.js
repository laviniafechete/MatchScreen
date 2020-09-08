import React from 'react';
const { Provider, Consumer } = React.createContext();
import reactotron from 'reactotron-react-native';

class LoginContextProvider extends React.Component {
    state = {
        isLoggedIn: true
    };

    getData = async () => {
        let value
        try {
            value = await AsyncStorage.getItem('userIsLoggin')
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