import React, { useEffect, useState } from 'react'
import { Alert, Backdrop, Button, CircularProgress, Container, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createSession, getSession } from '../services/sessionsService';

export const Login = () => {
    const [credentials, setCredentials] = useState({});
    const [responseError, setResponseError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token===null)return;
        getSession(token)
        .then(()=>{
            navigate('/',{replace: true});
        })
        .catch((error)=>{
            localStorage.removeItem("token");
        })
    }, [navigate])

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const handleLogin = () =>{
        //POST /auth  {email:string, password:string}
        //Response = JWT
        createSession(credentials)
        .then(response => {
            localStorage.setItem("token",response);
            navigate('/',{replace: true});
        })
        .catch(error => {
            setResponseError(error.message);
            setLoading(false)
        })
        setLoading(true);
    }

    return (
        <Container maxWidth="xs" sx={{marginTop: 3}}>
            {loading? 
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <CircularProgress color="inherit" />
                </Backdrop> 
            :null}

            <Stack spacing={4}>
            {responseError? <Alert severity="error">{responseError}</Alert>:null}
                <TextField
                    placeholder="Email"
                    type="email"
                    name='email'
                    required
                    variant='outlined'
                    onChange={handleChange}
                />
                <TextField
                    placeholder="Contraseña"
                    type="password"
                    name='password'
                    required
                    variant='outlined'
                    onChange={handleChange}
                />
                <Button variant='contained' onClick={handleLogin}>Ingresar</Button>
                <Button disableRipple={true} sx={{"&:hover": {backgroundColor: "transparent"}}} onClick={()=>navigate("/register")}>¿No tenes cuenta?</Button>
            </Stack>
        </Container>
    )
}
