  
import React,{useContext} from 'react';
import { LoginRoutes } from './login.routes';
import { AppRoutes } from './app.routes'
import { useLogin } from '../context/authenticationProvide';

export function MainRoutes(){
    
    const {userLoading} = useLogin()
    // console.log(tokenLogged)
    return userLoading ? <AppRoutes/>: <LoginRoutes/>;
}