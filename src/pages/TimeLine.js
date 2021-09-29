import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLogin } from '../context/authenticationProvide';
import { PetBox } from '../components/PetBox'
import { Button } from '../components/ButtonLowerMenu'
import api from '../services/Api';
import { set } from 'react-native-reanimated';



export default function TimeLine({ navigation }) {
    const { userLoading } = useLogin();

    const [pets, setPets] = useState({});
    
    async function getPets() {
        try {
            const response = await api.get('listPets/');
            const { data } = response;
            setPets(data)
            console.log(data)
        } catch (err) {
            console.error(err)
        }

    }

    async function verifyAuthenticationDoar(verify) {

        if (verify) {
            console.log("indo para cadastro" + verify)
            navigation.navigate('Doar');
            
        } else {
            navigation.navigate('Login');
        }

    }
    function verifyAuthenticationMsg(verify) {

        if (verify) {
            navigation.navigate('Mensagens')

        } else {
            navigation.navigate('Login');
        }

    }
    useEffect(() => {
        
        getPets()
    }, [])
    return (
        <View style={styles.container}>

            <View style={styles.boxes}>
                <FlatList data={pets}
                    keyExtractor={item => item.id_pet.toString()}
                    renderItem={({ item }) =>
                        <PetBox name={item.name} city={item.city} photo={item.photo} />
                    }
                />

                {/* <PetBox />
                    <PetBox />
                    <PetBox /> */}
            </View>


            <View style={styles.lowerMenu}>
                <Button label='Home' icone='home' click={() => navigation.navigate('Home')} />
                <View>
                    <View style={[styles.boxButtonDoar, {
                        transform: [{ translateY: -30 }]
                    }]}>
                        <TouchableOpacity onPress={() => verifyAuthenticationDoar(userLoading)} style={styles.buttonDoar}>
                            <Icon name='plus-square' size={45} color='#fff' />
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.text}>Doar</Text>
                </View>

                {/* <Button icone='plus-square' /> */}
                <Button label='Chat' icone='message-circle' click={() => verifyAuthenticationMsg(userLoading)} />
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
        transform: [{ translateY: -25 }]
        // fontSize:10
    }

})