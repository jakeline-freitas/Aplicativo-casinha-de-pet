import React from 'react';
import { Button } from 'react-native';

import Home from './pages/Home';
import TimeLine from './pages/TimeLine';
import Cadastro from './pages/DonationRegistration';
import Mensagens from './pages/Message';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();


export function Routes() {
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
                headerStyle: {backgroundColor:"#382116"},
                headerRight: () => (
                    <Button
                      onPress={() => alert('This is a button!')}
                      title="Info"
                      color="#fff"
                    />
                  ),
            }}/>
            <Stack.Screen name="Doar" component={Cadastro} options={{
               headerTintColor: '#382116',
               headerTitle: false, 
            //    headerTransparent: true,
               headerStyle: {backgroundColor:"#EEEEEE"},
            }}/>
            <Stack.Screen name="Mensagens" component={Mensagens} />
        </Stack.Navigator>
    );
}