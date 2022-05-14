import React from 'react'
import List from '@mui/material/List';
import { MixedDrink } from './MixedDrink';

export const MixedDrinksList = ({mixedDrinks}) => {
	return (
		<List sx={{
			maxWidth: 800,
			margin: '0 auto'
    	}}>
		{
			mixedDrinks.map((item)=>{
				return <MixedDrink key={item.name} image={item.image} name={item.name} drinks={item.drinks}/>
			})
		}  
		</List>
	)
}
