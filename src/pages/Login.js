import React, { useState } from "react";
import { View, Text, StatusBar, Image, Alert, ActivityIndicator, Keyboard, TextInput } from "react-native";
//import component
import { Input } from '../components/Input'
import { ButtonSmall } from "../components/Button";
//import style
import LoginStyle from "../styles/LoginStyle";
//import context
import { useLogin } from '../context/authenticationProvide';
//import form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
    email: yup.string().required().email(),
    senha: yup.string().required(),

});

export default function Login() {

    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const { handleLogin } = useLogin();
    const [isLoading, setIsLoading] = useState(false);

    async function Login(data) {
        Keyboard.dismiss();
        
        try {
            setIsLoading(true);
            return await handleLogin(data.email, data.senha);

        } catch (error) {
            Alert.alert("Erro na autenticação");
            setIsLoading(false);
        } 

    }
    // if (isLoading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" color="#0000ff" />
    //         </View>
    //     )
    // }

    return (
        <View style={LoginStyle.container}>
            <StatusBar backgroundColor="#EEEEEE" />
            <View style={LoginStyle.box_img}>
                <Image source={require('../images/logo.png')} style={LoginStyle.img} />
            </View>
            <View style={LoginStyle.box_inputs}>

                <Input label='E-mail' name='email'
                    control={control}
                    error={errors.email && errors.email.message} />

                <Input label='Senha' name='senha' secureTextEntry={true}
                    control={control}
                    error={errors.senha && errors.senha.message} />

                <ButtonSmall label='Entrar' click={handleSubmit(Login)} />

            </View>
            <View>
                <Text style={LoginStyle.text}>Ou faça login com</Text>
            </View>

        </View>
    )
}
