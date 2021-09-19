import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { PetBox } from '../components/PetBox'
import { Button } from '../components/ButtonLowerMenu'

export default function TimeLine({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.boxes}>
                    <PetBox />
                    <PetBox />
                    <PetBox />
                </View>

            </ScrollView>
            <View style={styles.lowerMenu}>
                <Button label ='Home' icone='home' click={() => navigation.navigate('Time_Line')} />
                <View>
                    <View style={[styles.boxButtonDoar, {
                        transform: [{ translateY: -30 }]
                    }]}>
                        <TouchableOpacity onPress={() => navigation.navigate('Doar')} style={styles.buttonDoar}>
                            <Icon name='plus-square' size={45} color='#fff' />
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.text}>Doar</Text>
                </View>

                {/* <Button icone='plus-square' /> */}
                <Button label='Chat' icone='message-circle' click={() => navigation.navigate('Mensagens')} />
            </View>
        </View>

    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',

    },
    boxes: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:"blue"
    },
    lowerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "#382116",
        width: 306,
        height: 90,
        borderTopLeftRadius: 39,
        borderTopRightRadius: 39
    },
    boxButtonDoar: {
        backgroundColor: '#8F6139',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.20,
        height: Dimensions.get('window').width * 0.20,

    },
    buttonDoar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "#fff",
        textAlign: 'center',
        transform:[{translateY:-25}]
        // fontSize:10
    }

})