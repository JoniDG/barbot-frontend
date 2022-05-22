import { Button, Toolbar, Typography, Box, Container} from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import LiquorIcon from '@mui/icons-material/Liquor';
import { useNavigate } from 'react-router-dom';



export const NavBar = () => {
const opc = [
    {
        name:'Configuración',
        url:'/settings'
    },
    {
        name:'Ayuda',
        url:'/help'
    }

];

const navigate = useNavigate();
  return (
      <AppBar position="static">
          <Container maxWidth='x1'>
            <Toolbar disableGutters>
                <Button key="home" disableRipple={true} color="inherit" underline="none" display='flex' sx={{alignItems:"center"}} onClick={()=>navigate("/")}>
                    <LiquorIcon sx={{display:{xs: 'none', md:'flex'}, mr:1}} fontSize="large"/>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                        mr: 3,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none'
                        }}
                    >
                    APPBAR
                    </Typography>
                </Button>
                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {
                    opc.map((item)=>{
                    return (
                        <Button 
                            key={item.name} 
                            onClick= {()=>navigate(item.url)}
                            sx={{color:'white',my:'2', display:'block'}}
                        >    
                            {item.name}
                        </Button>
                    )
                    })
                }
                </Box>
            </Toolbar>
          </Container>        
      </AppBar>
  )
}
