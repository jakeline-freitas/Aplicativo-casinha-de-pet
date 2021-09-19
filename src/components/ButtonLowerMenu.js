import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'


export function Button(props) {
    return (
        <View style={styles.buttonLowerMenu}>
            <TouchableOpacity onPress={props.click}  style={styles.buttonLowerMenu}>
                <Icon name={props.icone} size={27} color='#fff'/>
                <Text style={styles.text}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    buttonLowerMenu: {
        justifyContent:'center',
        alignItems:'center'
        
    },
    text:{
        color:"#fff",
        textAlign:'center'
        // fontSize:10
    }
})