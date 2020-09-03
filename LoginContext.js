import React from 'react';
const { Provider, Consumer } = React.createContext();

class LoginContextProvider extends React.Component {
    state = {
        isLoggedIn: false
    };

    userIsLoggedInToggle = () => {
        this.setState(prevState => {
            return {
                isLoggedIn: prevState.isLoggedIn === false ? true : false
            };
        });
    };

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