import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'


export function ButtonSmall(props) {
    return (
        <View style={styles.buttonSmall}>
            <TouchableOpacity onPress={props.click}  style={styles.buttonSmall}>
                {/* <Icon name={props.icone} size={27} color='#fff'/> */}
                <Text style={styles.text}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    buttonSmall: {
        justifyContent:'center',
        alignItems:'center',
        width: 150,
        height: 45,
        margin:20,
        backgroundColor: '#382116',
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
        color:"#fff",
        textAlign:'center'
        // fontSize:10
    }
})