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
  

  const [pets, setPets] = useState({});


  async function handleLogin(email, senha) {
    setUserLoading(true);
    // parametros da requisição
    var params = new URLSearchParams();
    params.append('email', email);
    params.append('password', senha);



    // armazena response com token
    try {

      const { data } = await api.post('api/token/', params);
      
      const access = data.access;
      const refresh = data.refresh;

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
        'token': access,
        'refreshToken': refresh
      };

      setUser(userLogged);

      // console.log(userLogged, 'usuario')


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
  async function refreshToken() {

    if (JSON.stringify(user) != JSON.stringify({})) {
      var success = true;

      try {
        const responseUser = await api.get('usersList/', {
          headers: {
            'authorization': 'Bearer ' + user.token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });

      } catch {
        success = false;
        console.log('error no Token');
      }

      if (!success) {
        try {
          var params = new URLSearchParams();
          params.append('refresh', user.refreshToken);

          const { data } = await api.post('api/token/refresh/', params);

          const userLogged = {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'phone': user.phone,
            'token': data.access,
            'refreshToken': user.refresh
          }

          setUser(userLogged);
          await AsyncStorage.removeItem(userStorageKey);
          await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));

        } catch {
          console.log('error no Refresh')
          logout();
        }
      }
    }
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
    <LoginContext.Provider value={{ handleLogin, logout, userLoading, user, pets,setPets, userStorageKey, userStorageKey,  refreshToken }}>
      {children}
    </LoginContext.Provider>

  )

}
function useLogin() {
  const context = useContext(LoginContext);
  return context;
}

export { AuthenticationProvider, useLogin }