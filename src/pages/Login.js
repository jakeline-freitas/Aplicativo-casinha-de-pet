import React, { useState } from "react";
import { View, Text, StatusBar, Image, Alert } from "react-native";

import { Input } from '../components/Input'
import { ButtonSmall } from "../components/Button";
import LoginStyle from "../styles/LoginStyle";

import api from '../services/Api'

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin() {
        // verifica se os campos foram preenchidos
        if (!senha || !email) {
            Alert.alert("Informe todos os dados");
        }
        // armazena response com token
        try {
            // parametros da requisição
            var params = new URLSearchParams();
            params.append('email', email);
            params.append('password', senha);
            
            const response = await api.post('api/token/', params);

            const { access } = response.data;
            console.log(access);

        } catch (error) {
            Alert.alert("Erro na autenticação", error);
        }

    }


    return (
        <View style={LoginStyle.container}>
            <StatusBar backgroundColor="#EEEEEE" />
            <View style={LoginStyle.box_img}>
                <Image source={require('../images/logo.png')} style={LoginStyle.img} />
            </View>
            <View style={LoginStyle.box_inputs}>
                <Input label='E-mail' onChangeText={e => setEmail(e)} />
                <Input label='Senha' senha={true} onChangeText={s => setSenha(s)} />
                <ButtonSmall label='Entrar' click={handleLogin} />

            </View>
            <View>
                <Text style={LoginStyle.text}>Ou faça login com</Text>
            </View>

        </View>
    )
}
