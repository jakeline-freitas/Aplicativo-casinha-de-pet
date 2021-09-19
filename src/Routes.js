import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Modal, Pressable, Alert } from 'react-native';


import Icon from 'react-native-vector-icons/Feather'

import Home from './pages/Home';
import TimeLine from './pages/TimeLine';
import Cadastro from './pages/DonationRegistration';
import Mensagens from './pages/Message';
import Login from './pages/Login';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();




export function Routes() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Time_Line" component={TimeLine} options={{
                headerTintColor: '#fff',
                headerTitle: false,
                headerStyle: { backgroundColor: "#382116" },
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        //   onPress={() => alert('This is a button!')}
                        style={styles.button}
                    >
                        <Icon name="search" size={25} color="#fff" />
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Hide Modal</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>

                ),
            }} />
            <Stack.Screen name="Doar" component={Cadastro} options={{
                headerTintColor: '#382116',
                headerTitle: false,
                //    headerTransparent: true,
                headerStyle: { backgroundColor: "#EEEEEE" },
            }} />
            <Stack.Screen name="Mensagens" component={Mensagens} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    button: {
        margin: 10
    },
    centeredView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})