import React, { useCallback } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { addGold, removeGold } from '../store/actions/goldActions';
import { changeColor } from '../store/actions/colorsActions';
import reactotron from 'reactotron-react-native';

const AddGoldComponent = () => {
    const userGold = useSelector(state => state.gold.gold)
    const dispatch = useDispatch();
    const increaseGold = useCallback(() => {

        dispatch(addGold(userGold))
    }, [dispatch, userGold])
    return (
        <TouchableOpacity
            onPress={increaseGold}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Add Gold</Text>
        </TouchableOpacity>
    )
}

const RemoveGoldComponent = () => {
    const userGold = useSelector(state => state.gold.gold)
    const dispatch = useDispatch();
    const decreaseGold = useCallback(() => {

        dispatch(removeGold(userGold))
    }, [dispatch, userGold])
    return (
        <TouchableOpacity
            onPress={decreaseGold}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Remove Gold</Text>
        </TouchableOpacity>
    )
}

const ChangeColorComponent = () => {
    const ghostColor = useSelector(state => state.color.color)
    reactotron.log(ghostColor, 'ghostColor sus sus')
    const dispatch = useDispatch();
    const changeGhostColor = useCallback(() => {

        dispatch(changeColor(ghostColor))
    }, [dispatch, ghostColor])
    return (
        <TouchableOpacity
            style={styles.openButton}
            onPress={changeGhostColor}
        >
            <Text style={styles.textStyle}>Change my color</Text>
        </TouchableOpacity>
    )
}

const GhostColorComponent = () => {
    const ghostColor = useSelector(state => state.color.color);
    return (
        <FontAwesome5 name="ghost" size={24} color={ghostColor} />
    )
}

///reactotron.log(ghostColor, 'ghostColor')

export class NotificationsScreen extends React.Component {
    state = {
        modalVisible: false,
    }
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar hidden />
                <View>
                    <Header />
                </View>
                <View style={styles.body}>
                    <View style={styles.centeredView}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <AddGoldComponent />
                            <RemoveGoldComponent />
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
                        >
                            <View style={styles.centeredView}>
                                <View style={{ ...styles.modalView, position: 'relative' }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <GhostColorComponent />
                                        <Text style={styles.modalText}>BOOOO!</Text>
                                    </View>
                                    <ChangeColorComponent />
                                    <TouchableOpacity
                                        style={{ ...styles.openButton, position: 'absolute', bottom: 10 }}
                                        onPress={() => {
                                            this.setState({ modalVisible: !this.state.modalVisible });
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Hide Modal</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                        <TouchableOpacity
                            style={styles.openButton}
                            onPress={() => {
                                this.setState({ modalVisible: true });
                            }}
                        >
                            <Text style={styles.textStyle}>Show Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Footer navigation={this.props.navigation} />
                </View>
            </SafeAreaView>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#6495ED',
        width: 150,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18
    },
    centeredView: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        height: '50%',
        width: '90%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
    },
    openButton: {
        backgroundColor: '#F194FF',
        width: 200,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 5,
        elevation: 2
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});