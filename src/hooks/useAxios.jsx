import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const AxiosInstance = axios.create(
    {
        baseURL: 'https://lost-found-server-side.vercel.app',
        withCredentials: true
    }
)
const useAxios = () => {
    const {userLogout} = useContext(AuthContext)
    useEffect(()=>{
        AxiosInstance.interceptors.response.use(response=> {
            return response;
        }, error=>{
            if(error.status === 401 || error.status === 403)
                {
                    userLogout()
                }
                return Promise.reject()
        })
    }, [])
    return AxiosInstance
};

export default useAxios;