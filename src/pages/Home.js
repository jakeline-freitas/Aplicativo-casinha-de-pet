import React from 'react'
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native'
import HomeStyle from '../styles/HomeStyle'



export default function Home( { navigation} ){
    return(
        
        <View style={HomeStyle.container}>
            <StatusBar  backgroundColor="#EEEEEE"/>
            <View style={HomeStyle.box_img}>
                <Image source={require('../images/logo.png')} style={HomeStyle.img}/>
            </View>
            <View>
               
                <View style={HomeStyle.box_img_section}>
                    <TouchableOpacity onPress={() => navigation.navigate('Time_Line')}>
                        <View style={[HomeStyle.img_section, {marginRight:10}]}>
                            <Text style={HomeStyle.text}>Cachorros</Text>
                            <Image source={require('../images/img_tela_selecao/dog.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[HomeStyle.img_section, {marginLeft:10}]}>
                            <Text style={HomeStyle.text}>Gatos</Text>
                            <Image source={require('../images/img_tela_selecao/cat.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[HomeStyle.box_img_section, {marginTop:20}]}>
                    <TouchableOpacity>
                        <View style={HomeStyle.img_section}>
                            <Image source={require('../images/img_tela_selecao/all.png')}/>
                            <Text style={HomeStyle.text}>Todos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={HomeStyle.box_btn_login}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[HomeStyle.text, {fontSize:17}]}>Fazer Login</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
    )
}