import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';

import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/Api';


const LoginContext = createContext();

function AuthenticationProvider({ children }) {
    const [tokenLogged, setTokenLogged] = useState({});
    const [userLoading, setUserLoading] = useState(true);

    // const userStorageKey = '@casinhadepet:user';
    const accessStorageKey = '@casinhadepet:token';
    

    async function handleLogin(email, senha) {
        setUserLoading(true);
        // parametros da requisição
        var params = new URLSearchParams();
        params.append('email', email);
        params.append('password', senha);

        
        // armazena response com token
        try {

            const response = await api.post('api/token/', params);
            const { access } = response.data;
            
            const token = {
              token: access
            }

            setTokenLogged(token)
            
            await AsyncStorage.setItem(accessStorageKey, JSON.stringify(token));
            
        } catch (error) {
            setUserLoading(false);
            Alert.alert("Erro na autenticação", error);
        }

    }
     //**Função para apagar usuário  */
     async function logout(){
        setTokenLogged("")
        await AsyncStorage.removeItem(accessStorageKey);
    }

    useEffect(() => {
        async function loadTokenStorageDate() {
          const tokenStoraged = await AsyncStorage.getItem(accessStorageKey);
          console.log("logado")
          if(!tokenStoraged){
            console.log('deslogado')
            setUserLoading(false);
          }
        }
        
        loadTokenStorageDate();
        
      },[]);

      return(
        <LoginContext.Provider value={{handleLogin,logout,userLoading, tokenLogged}}>
            { children }
        </LoginContext.Provider>
        
    )

}
function useLogin(){
    const context= useContext(LoginContext);
    return context;
  }
  
export { AuthenticationProvider, useLogin }