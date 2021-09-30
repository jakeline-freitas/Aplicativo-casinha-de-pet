import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Modal, Pressable, Alert } from 'react-native';


import Icon from 'react-native-vector-icons/Feather'

import Home from '../pages/Home';
import TimeLine from '../pages/TimeLine';
import Login from '../pages/Login';
import RegisterUser from '../pages/RegistrerUser';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();


export function LoginRoutes() {

    return (
        <Stack.Navigator
            screenOptions={{
                // gestureEnabled: true,
                // gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options = {{
                headerTitle: false,
                headerStyle: { backgroundColor: "#EEEEEE" },
            }}/>
            <Stack.Screen name="RegisterUser" component={RegisterUser} options = {{
                headerTitle: false,
                headerStyle: { backgroundColor: "#EEEEEE" },
            }}/>
            <Stack.Screen name="Time_Line" component={TimeLine} options={{
                // headerShown: false,
                headerMode: 'none',
                headerTintColor: '#382116',
                headerTitle: false,
                headerStyle: { backgroundColor: "#382116" },
                headerRight: () => (
                    <TouchableOpacity
                        // onPress={}
                        //   onPress={() => alert('This is a button!')}
                        style={styles.button}
                    >
                        <Icon name="search" size={25} color="#fff" />
                        
                    </TouchableOpacity>

                ),
            }} />
            
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