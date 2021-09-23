import React, { useState } from "react";
import { View, Text, StatusBar, Image, Alert, ActivityIndicator, Keyboard} from "react-native";

import { Input } from '../components/Input'
import { ButtonSmall } from "../components/Button";
import LoginStyle from "../styles/LoginStyle";
import { useLogin } from '../context/authenticationProvide';
import api from '../services/Api'

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const {handleLogin} = useLogin();
    const [isLoading, setIsLoading] = useState(false);

    async function Login() {
        Keyboard.dismiss();
        // verifica se os campos foram preenchidos
        if (!senha || !email) {
            Alert.alert("Informe todos os dados");
        }
        try {
            setIsLoading(true);
            return await handleLogin(email, senha);

        } catch (error) {
            Alert.alert("Erro na autenticação", error);
            setIsLoading(false);
        }

    }
    if(isLoading){
        return(
            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
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
                <ButtonSmall label='Entrar' click={Login} />

            </View>
            <View>
                <Text style={LoginStyle.text}>Ou faça login com</Text>
            </View>

        </View>
    )
}
