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

  const userStorageKey = '@casinhadepet:user';

  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);

  
  

  async function handleLogin(email, senha) {
    setUserLoading(true);
    // parametros da requisição
    var params = new URLSearchParams();
    params.append('email', email);
    params.append('password', senha);

    console.log('login' + email + senha) 

    // armazena response com token
    try {

      const { data } = await api.post('api/token/', params);
      const access = data.access;
      console.log("token" + access)
      const responseUser = await api.get('usersList/', {
        headers: {
          'authorization': 'Bearer ' + access,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
      
      const { id, username, email, phone } = responseUser.data[0];
    

      const userLogged = {
        'id': id,
        'name': username,
        'email': email,
        'phone': phone,
        'token': access
      };
      
      setUser(userLogged);
      
      console.log(userLogged, 'usuario')

      console.log(user, 'USER')

      await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));

    } catch (error) {
      setUserLoading(false);
      Alert.alert("Erro na autenticação", error);
    }


  }
  //**Função para apagar usuário  */
  async function logout() {
    setUser({});
    setUserLoading(false);
    await AsyncStorage.removeItem(userStorageKey);
  }

  useEffect(() => {
    async function loadTokenStorageDate() {

      const userStoraged = await AsyncStorage.getItem(userStorageKey);
      const u = JSON.parse(userStoraged)

      

      if (!userStoraged) {
        console.log('deslogado')
        setUserLoading(false);
      } else {
        setUserLoading(true);
        setUser(u)

      }
    }

    loadTokenStorageDate();

  }, []);

  return (
    <LoginContext.Provider value={{ handleLogin, logout, userLoading, user, userStorageKey, userStorageKey }}>
      {children}
    </LoginContext.Provider>

  )

}
function useLogin() {
  const context = useContext(LoginContext);
  return context;
}

export { AuthenticationProvider, useLogin }