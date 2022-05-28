import React, { useContext, useState } from 'react'
import { Button, Container, Stack, TextField } from '@mui/material';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const userContext = useContext(AuthContext);

    const [user, setUser] = useState(userContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const login = () =>{
        localStorage.setItem("user",JSON.stringify(user));
        navigate('/',{
            replace: true,
        });
    }

    return (
        <Container maxWidth="xs" sx={{marginTop: 3}}>
            <Stack spacing={4}>
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
                <Button variant='contained' onClick={login}>Login</Button>
            </Stack>
        </Container>
        
    )
}
