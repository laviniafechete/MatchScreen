import React from 'react';
import { View } from 'react-native';

import { Top } from './Top';
import { Banner } from './Banner';

export class Header2 extends React.Component {
    render() {
        return (
            <View>
                <Top navigation={this.props.navigation} />
                <Banner />
            </View >
        );
    }
}
