import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'

import { PetBox } from '../components/PetBox'
import { Button } from '../components/ButtonLowerMenu'

export default function TimeLine({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.boxes}>
                    <PetBox/>
                    <PetBox/>
                    <PetBox/>
                </View>

            </ScrollView>
            <View style={styles.lowerMenu}>
                <Button/>
                <Button/>
                <Button/>
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
        justifyContent:'space-evenly',
        alignItems: 'center',
        backgroundColor: "#382116",
        width: 306,
        height: 100,
        borderTopLeftRadius: 39,
        borderTopRightRadius: 39
    },
   
})