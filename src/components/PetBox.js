import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'

export function PetBox() {
    return (
        <View style={styles.buttonBoxPet}>
            <Image />
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Time_Line')}><Text>Home1</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Time_Line')}><Text>Home2</Text></TouchableOpacity>
            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    buttonBoxPet: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 336,
        height: 437,
        backgroundColor: "#F5F5F5",
        marginTop: 70,
        marginBottom: 70,
        borderRadius: 22,
        borderWidth: 1,
    },
})