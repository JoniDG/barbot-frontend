import React, { useState } from 'react'
import { Alert, Backdrop, Button, CircularProgress, Container, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userService';

export const Register = () => {

    const [user, setUser] = useState({});
    const [responseError, setResponseError] = useState(null);
    const [loading, setLoading] = useState(false);

    
    //const [responseData, status, loading, error] = usePostData("http://localhost:8080/user",user);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    
    const handleRegister = () =>{
        //POST /user  {name:string, email:string, password:string}
        //Response = OK user created
        createUser(user)
        .then(response => {
            navigate("/login");
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
                    placeholder="Nombre"
                    type="text"
                    name='name'
                    required
                    variant='outlined'
                    onChange={handleChange}
                />
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
                <Button variant='contained' onClick={handleRegister}>Registro</Button>
                <Button disableRipple={true} sx={{"&:hover": {backgroundColor: "transparent"}}} onClick={()=>navigate("/login")}>Ya tengo una cuenta</Button>
            </Stack>
        </Container>
    )
}
