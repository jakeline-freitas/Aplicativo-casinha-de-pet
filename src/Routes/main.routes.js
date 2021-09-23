  
import React,{useContext} from 'react';
import { LoginRoutes } from './login.routes';
import { AppRoutes } from './app.routes'
import { useLogin } from '../context/authenticationProvide';

export function MainRoutes(){
    
    const {tokenLogged} = useLogin()
    console.log(tokenLogged)
    return tokenLogged.token ? <AppRoutes/>: <LoginRoutes/>;
}