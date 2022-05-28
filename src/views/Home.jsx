import { Alert, Backdrop, CircularProgress, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { MixedDrinksList } from '../components/MixedDrinksList';
import { NavBar } from '../components/NavBar';
import { getMixedDrinks } from '../services/mixedDrinksService';

export const Home = () => {
	const [responseError, setResponseError] = useState(null);
    const [loading, setLoading] = useState(true);
	const [mixedDrinks, setMixedDrinks] = useState(null);

	useEffect(() => {
		getMixedDrinks()
        .then(response => {
            setLoading(false);
			setMixedDrinks(response);
        })
        .catch(error => {
            setResponseError(error.message);
            setLoading(false)
        })
	}, [])
	
	return (
		<>	
			{responseError?
				<Snackbar open={true}>
					<Alert severity="error" sx={{ width: '100%' }}>
					{responseError}
					</Alert>
				</Snackbar>
				:null}
			{loading? 
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <CircularProgress color="inherit" />
                </Backdrop> 
            	:null}
			<NavBar/>
			<div style={{justifyContent: 'center'}}>
			{mixedDrinks?<MixedDrinksList mixedDrinks={mixedDrinks}/>:null}
			</div>
		</>
	)
	/* return (
		<>
		{
			loading?(
				<Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <CircularProgress color="inherit" />
                </Backdrop> 
			) : error ? (
				<Alert severity="error">Ocurrio un error al mostrar sus bebidas</Alert>
			) : (
				<>
					<NavBar/>
					<div style={{justifyContent: 'center'}}>
					<MixedDrinksList mixedDrinks={mixedDrinks}/>
					</div>
				</>
			)
		}
		</>
	) */
}


