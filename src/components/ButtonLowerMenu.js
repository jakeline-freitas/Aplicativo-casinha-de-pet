import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
export function Button() {
    return (
        <View style={styles.buttonLowerMenu}>
            <TouchableOpacity onPress={() => navigation.navigate('Time_Line')}><Text style={styles.text}>Home</Text></TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    buttonLowerMenu: {
        
    },
    text:{
        color:"#fff"
    }
})