import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function Input(props) {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}> {props.label} </Text> 
            <TextInput style={ styles.textInput } secureTextEntry={props.senha} onChangeText={props.onChangeText} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin:10,
        // flex: 1,    
    },
    textInput: {
        justifyContent: "center",
        alignItems: "center",
        width: 324,
        height: 45,
        backgroundColor: '#FFF',
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,

    },
    text:{
        // textAlign:'center',
        color:'#616161',
        fontSize:18
        
    },
    
})