import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { TableHeader } from './TableHeader';
import { Player } from './Player';

import players from './players.json'

export class Body2 extends React.Component {
    render() {
        return (
            <View style={styles.bodyContainer}>
                <TableHeader />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={players}
                    renderItem={({ item, index }) =>
                        <Player
                            key={index}
                            index={index}
                            data={item.player}
                        />
                    }
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