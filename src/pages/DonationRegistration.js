import React, {useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import { Avatar } from 'react-native-paper';
import { RadioButton, } from 'react-native-paper';
import { Input } from '../components/Input';
import { ButtonSmall } from '../components/Button';
import { useLogin } from '../context/authenticationProvide';
import api from '../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    city: yup.string().required(),
    

});

export default function Cadastro({navigation}) {
    const { user } = useLogin();
    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    // const [resourcePath, setResourcePath] = useState({});
    const [checked, setChecked] = React.useState('sim');
    const [value, setValue] = React.useState('outros');

    const [imageURI, setImageURI] = useState("");
    const [imageFileName, setimageFileName] = useState("");
    const [imageType, setimageType] = useState("");

    const [idUser, setIdUser] = useState('');

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
            // setImage(response.assets[0].base64);
            if(response.assets[0].uri){
                setImageURI(response.assets[0].uri)
            }
            if(response.assets[0].fileName){
                setimageFileName(response.assets[0].fileName)
            }
            if(response.assets[0].type){
                setimageType(response.assets[0].type)
            }
            
            if (response.didCancel) {
                console.log("usuario cancelou seleção de imagem");
            }else if (response.errorCode = 'permission') {
                console.log(response.errorCode);
            } else if (response.errorCode = 'others') {
                console.log(response.errorMessage);
            }else if (response.assets[0].fileSize > 2097152) {
                Alert.alert(
                    'Tamanho maximo execidido',
                    'Por favor selecione imagens abaixo de 2 MB',
                    [{ text: 'OK' }],
                );
            }else {
                // const source = {uri: 'data:image/jpeg;base64,' + response.base64};
                // setImage(response.assets[0].base64);
                
            }
        })
    }

    async function handleCreatePet(data) {
        
        const headers = {
            'authorization': 'Bearer ' + user.token,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        };

        let vaccinado = true;

        if(checked === "nao"){
            vaccinado = false;
        }

        var body = new FormData();
        body.append('name', data.name);
        body.append('type', value);
        body.append('city', data.city);
        body.append('phoneOwner', user.phone);
        body.append('vacinne', vaccinado);
        body.append('owner', user.id);
        body.append('photo', {uri: imageURI, name: imageFileName, type: imageType});

        try {
            const responsePet = await api.post('createPets/', body, { headers});
            // console.log(responsePet, "Resposta")
            navigation.navigate('Time_Line');
        } catch (error) {
            console.error(error);
            Alert.alert('Error');
            
        }
    }
    useEffect(() => {
        console.log('tela de cadastro')
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>
                
                <Text style={styles.text_title}>Adicionar doação</Text>
                {/* <Avatar.Image size={200} source={{ uri: 'data:image/jpg;base64,' + image }} /> */}

                <View style={styles.viewBtnPhoto}>
                    <TouchableOpacity style={styles.btnPhoto} onPress={() => uploadImage()}>
                        <Text style={styles.text_}>Adicionar foto </Text>
                        <Icon name="camera" size={20} />
                    </TouchableOpacity>

                </View>
                <Input label='Nome para o feed'
                    name='name'
                    control={control}
                    error={errors.name && errors.name.message} />
                <Text style={styles.text_label}>Tipo</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton color='#F0A4A9' value="cachorro" />
                        <Text style={[styles.text_type, { marginTop: 6 }]}> Cachorro</Text>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton color='#F0A4A9' value="gato" />
                        <Text style={[styles.text_type, { marginTop: 6 }]}> Gato</Text>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton color='#F0A4A9' value="outros" />
                        <Text style={[styles.text_type, { marginTop: 6 }]}> Outro</Text>

                    </View>
                </RadioButton.Group>
                <Text style={styles.text_label}>Vacinado?</Text>
                <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton color='#F0A4A9' value="sim" />
                        <Text style={[styles.text_type, { marginTop: 6 }]}> Sim</Text>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton color='#F0A4A9' value="nao" />
                        <Text style={[styles.text_type, { marginTop: 6 }]}> Não</Text>

                    </View>
                </RadioButton.Group>
                <Input label='Cidade'
                    name='city'
                    control={control}
                    error={errors.city && errors.city.message} />
                
               
                <View style={{alignItems:'center'}}><ButtonSmall label='Cadastrar' click={handleSubmit(handleCreatePet)} /></View>
                

            </ScrollView>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
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
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
    btnPhoto: {
        flexDirection: "row",

    },
    text_title: {
        fontSize: 24,
        color: '#707070',
        fontWeight: '800',
        // margin:15,
        textAlign: 'center'
    },
    text_: {
        fontSize: 14,
        color: '#707070',
        fontWeight: '800',
        fontFamily: 'Montserrat',

    },
    text_type: {
        fontSize: 17,
        color: '#707070',
        fontWeight: '100',
        fontFamily: 'Light',

    },
    text_label:{
        fontSize: 17,
        color: '#707070',
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
    }
})