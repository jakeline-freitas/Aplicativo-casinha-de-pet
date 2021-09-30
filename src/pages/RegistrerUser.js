import React, { useState } from "react";
import { View, Text, StatusBar, Image, Alert, Keyboard, TextInput, StyleSheet } from "react-native";

//import component
import { Input } from '../components/Input'
import { ButtonSmall } from "../components/Button";
import { TextInputMask } from 'react-native-masked-text'
//import style
import LoginStyle from "../styles/LoginStyle";
//import context
import { useLogin } from '../context/authenticationProvide';
//import form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from "../services/Api";


const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().required().email(),
    // phone: yup.number().required(),
    senha: yup.string().min(8, "Senha deve conter pelo menos 8 caracteres").required("Informe a senha"),
    confirmarSenha: yup.string().oneOf([yup.ref('senha'), null], "Senhas não conferem").required("Confirme a senha")


});

export default function RegisterUser({navigation}) {

    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const [cel, setCel] = useState("")

    async function Register(data) {
        Keyboard.dismiss();

        if(cel != ""){
        
            var params = new FormData();
            params.append('email', data.email);
            params.append('username', data.username);
            params.append('phone', cel);
            params.append('password', data.senha);
            params.append('password_confirm', data.confirmarSenha);



            try {

                const response = await api.post('users/', params);
                    
                
                console.log(response)
                navigation.navigate('Login');

            } catch(error){
                console.log(error.message)
            }
        }else{
            Alert.alert("cadastre um telefone para contato");
        }
        
    }


    return (
        <View style={LoginStyle.container}>
            <StatusBar backgroundColor="#EEEEEE" />
            <View style={LoginStyle.box_img}>
                <Image source={require('../images/logo.png')} style={LoginStyle.img} />
            </View>
            <View style={LoginStyle.box_inputs}>
                <Input label='Nome' name='username'
                    control={control}
                    error={errors.username && errors.username.message} />

                <Input label='E-mail' name='email'
                    control={control}
                    error={errors.email && errors.email.message} />
                <View style={styles.container}>
                    <Text style={styles.text}> Contato </Text>
                    <TextInputMask
                        style={styles.textInput}
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={cel}
                        onChangeText={text => setCel(text)}
                    />
                </View>
                <Input label='Senha' name='senha' secureTextEntry={true}
                    control={control}
                    error={errors.senha && errors.senha.message} />
                <Input label='Confirmar Senha' name='confirmarSenha' secureTextEntry={true}
                    control={control}
                    error={errors.confirmarSenha && errors.confirmarSenha.message} />



                <ButtonSmall label='Cadastrar' click={handleSubmit(Register)} />

            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        // flex: 1,    
    },
    textInput: {
        justifyContent: "center",
        // alignItems: "center",
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
    text: {
        // textAlign:'center',
        color: '#616161',
        fontSize: 18,
        marginBottom: 5

    },


})