import React from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';

import { TableHeader } from './TableHeader';
import { Player } from './Player';

import players from './players.json'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export class Body2 extends React.Component {
    render() {
        const y = new Animated.Value(0);
        const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], { useNativeDriver: true });

        return (
            <View style={styles.bodyContainer}>
                <TableHeader />
                <AnimatedFlatList
                    style={{ backgroundColor: '#000' }}
                    scrollEventThrottle={16}
                    bounces={false}
                    data={players}
                    renderItem={({ item, index }) =>
                        <Player
                            key={index}
                            index={index}
                            data={item.player}
                            y={y}
                        />
                    }
                    keyExtractor={(item, index) => index.toString()}
                    {...{ onScroll }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
    },
});