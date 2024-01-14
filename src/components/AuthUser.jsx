import axios from 'axios';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function AuthUser() {
    const navigate = useNavigate()
    
    const getToken=()=> {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
    const getUser=()=> {
        const userString = sessionStorage.getItem('user');
        const userData = JSON.parse(userString);
        return userData;
    }

    const [token, setToken] = useState(getToken());
    const [user,setUser]= useState(getUser());

    
    
    const saveToken = (user,token)=> {
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/FileUpload')
    }

    const logout=()=> {
        sessionStorage.clear();
        navigate('/AppLogin');
    }

    const http = axios.create({
        //http://localhost:8000/api/v1/admin/signIn
        baseURL: "http://localhost:8000/api/v1"  
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout
    }

}