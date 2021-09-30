import React, { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, Linking, Pressable, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Paragraph, Dialog, Portal } from 'react-native-paper';

export function PetBox({ photo, name, city, phone, vacci }) {
    const [vacina, setVacina] = useState("sim")
    
    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.buttonBoxPet}>
            <View style={styles.boxImg}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image source={{ uri: photo }} style={styles.img} />
                </TouchableOpacity>

            </View>

            <View style={styles.boxButton}>
                <View>
                    <TouchableOpacity onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=55' + phone + '&text=Tenho interesse no animal.')} style={styles.buttonLike}>
                        {/* <Image source={getLike(likeado)} style={styles.like} /> */}
                        <Icon name="ios-logo-whatsapp" size={25} color="#fff" />
                        <Text style={styles.text}>Adotar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.textName}>{name}</Text>
                    <Text style={styles.textCity}>{city}</Text>

                </View>

                {/* <TouchableOpacity onPress={() => navigation.navigate('Time_Line')}><Text>Home1</Text></TouchableOpacity> */}

            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    buttonBoxPet: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: 336,
        height: 457,
        backgroundColor: "#F5F5F5",
        marginTop: 60,
        marginBottom: 70,
        borderRadius: 22,


        // borderWidth: 1,
    },
    boxImg: {

        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        width: 286,
        height: 370,
        borderRadius: 22,
        // borderWidth: 1,
    },
    img: {
        width: 286,
        height: 370,
        borderRadius: 22,
    },
    boxButton: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'pink',
        width: 286,
    },
    like: {
        width: 30,
        height: 30,
        // margin: 10
    },
    buttonLike: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F0A4A9',
        height: 42,
        width: 96,
        borderRadius: 21
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    textName: {
        color: '#707070',
        fontSize: 19,
        fontFamily: 'Montserrat, Regular'
    },
    textCity: {
        color: '#707070',
        fontSize: 10,
        fontFamily: 'Montserrat, Light'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

})