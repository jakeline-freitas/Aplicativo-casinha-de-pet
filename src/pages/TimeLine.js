import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function TimeLine({navigation}) {
    return (
        <View>
            <Text>******* Linha do tempo</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Time_Line')}><Text>Home</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Doar')}><Text>Doar</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Mensagens')}><Text>Mensagens</Text></TouchableOpacity>
        </View>
        
    )

}