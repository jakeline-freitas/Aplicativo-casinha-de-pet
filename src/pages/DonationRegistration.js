import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import { Avatar } from 'react-native-paper';

export default function Cadastro() {

    // const [resourcePath, setResourcePath] = useState({});
    const [imageUri, setImageUri] = useState('');
    const uploadImage = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
            // storageOptions:{
            //     path: 'images',

            // },  
        };

        launchImageLibrary(options, response => {
            console.log("Response = ", response);
            setImageUri(response.assets[0].base64);
            if (response.didCancel) {
                console.log("usuario cancelou seleção de imagem");
            } else if (response.errorCode = 'permission') {
                console.log(response.errorCode);
            } else if (response.errorCode = 'others') {
                console.log(response.errorMessage);
            } else if (response.assets[0].fileSize > 2097152) {
                Alert.alert(
                    'Tamanho maximo execidido',
                    'Por favor selecione imagens abaixo de 2 MB',
                    [{ text: 'OK' }],
                );
            } else {
                // const source = {uri: 'data:image/jpeg;base64,' + response.base64};
                setImageUri(response.assets[0].base64);
            }
        })
    }
    // const selectFile = () => {
    //     var options = {
    //         title: 'Select Image',
    //         mediaType: 'photo',
    //         includeBase64: true,
    //         customButtons: [
    //             {
    //                 name: 'customOptionKey',
    //                 title: 'Choose file from Custom Option'
    //             },
    //         ],
    //         // storageOptions: {
    //         //     skipBackup: true,
    //         //     path: 'images',
    //         // },
    //     };


    //     launchImageLibrary(options, res => {
    //         console.log('Response = ', res);

    //         if (res.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (res.error) {
    //             console.log('ImagePicker Error: ', res.error);
    //         } else if (res.customButton) {
    //             console.log('User tapped custom button: ', res.customButton);
    //             alert(res.customButton);
    //         } else {
    //             let source = res;
    //             console.log(source)
    //             setResourcePath(source);

    //         }
    //     });
    // };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>Adcionar doação</Text>
                <Avatar.Image size={200} source={{ uri: 'data:image/jpg;base64,' + imageUri }} />

                <View style={styles.viewBtnPhoto}>
                    <TouchableOpacity style={styles.btnPhoto} onPress={() => uploadImage()}>
                        <Text>Adicionar foto </Text>
                        <Icon name="camera" size={20} />
                    </TouchableOpacity>
                    
                </View>
                <Text style={{ alignItems: 'center' }}>
                        {imageUri}
                </Text>

            </ScrollView>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#EEEEEE',
    },
    viewBtnPhoto: {
        justifyContent: "center",
        alignItems: "center",
        width: 324,
        height: 45,
        backgroundColor: '#FFF',
        borderRadius: 24,

    },
    btnPhoto: {
        flexDirection: "row",

    }
})