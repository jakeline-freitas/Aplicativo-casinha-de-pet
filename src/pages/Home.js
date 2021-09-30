import React, {useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import HomeStyle from '../styles/HomeStyle'
import api from '../services/Api';

import { useLogin } from '../context/authenticationProvide';

export default function Home({ navigation }) {
    const { userLoading, setPets } = useLogin();

    async function filterPets(tipoPet){
        if(tipoPet === "todos"){
            try {
                const response = await api.get('listPets/');
                const { data } = response;
                setPets(data)
                navigation.navigate('Time_Line')
                
            } catch (err) {
                console.error(err)
            }

        }else if(tipoPet === "cachorro" || tipoPet === "gato" ){
            try {
                const response = await api.get('listPets/?T='+tipoPet);
                const { data } = response;
                console.log(data)
                setPets(data)
                navigation.navigate('Time_Line')
                
            } catch (err) {
                console.error(err)
            }

        }
       
    }

    function displayLoginButton(verify) {
        if (!verify) {
            return (
                <View style={HomeStyle.box_btn_login}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={[{color:"#fff"}, { fontSize: 17 }, {fontFamily: 'Montserrat-Regular'}]}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterUser')}>
                        <Text style={[{color:"#fff"}, { fontSize: 17 }, {fontFamily: 'Montserrat-Regular'}]}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    // useEffect(() => {
    //     displayLoginButton(userLoading)
    // }, [])
    return (

        <View style={HomeStyle.container}>
            <StatusBar backgroundColor="#fff" />
            <View style={HomeStyle.box_img}>
                <Image source={require('../images/logo.png')} style={HomeStyle.img} />
            </View>
            <View>

                <View style={HomeStyle.box_img_section}>
                    <TouchableOpacity onPress={() => filterPets("cachorro")}>
                        <View style={[HomeStyle.img_section, { marginRight: 10 }]}>
                            <Text style={HomeStyle.text}>Cachorros</Text>
                            <Image source={require('../images/img_tela_selecao/dog.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => filterPets("gato")}>
                        <View style={[HomeStyle.img_section, { marginLeft: 10 }]}>
                            <Text style={HomeStyle.text}>Gatos</Text>
                            <Image source={require('../images/img_tela_selecao/cat.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[HomeStyle.box_img_section, { marginTop: 20 }]}>
                    <TouchableOpacity onPress={() => filterPets("todos")}>
                        <View style={HomeStyle.img_section}>
                            <Image source={require('../images/img_tela_selecao/all.png')} />
                            <Text style={HomeStyle.text}>Todos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {displayLoginButton(userLoading)}
            </View>



        </View>
    )
}