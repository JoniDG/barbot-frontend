import React from 'react'
import List from '@mui/material/List';
import { MixedDrink } from './MixedDrink';

const isAvailable = (selectedDrinks, drinks)=>{
	if(selectedDrinks===null){
		return false
	}
	for (let i = 0; i < drinks.length; i++) {
		const drink = drinks[i];
		const exists = selectedDrinks.filter(selectedDrink=>selectedDrink===drink.name);
		if(exists.length===0){
			return false
		}
	}
	return true
}

export const MixedDrinksList = ({mixedDrinks}) => {
	let selectedDrinks = localStorage.getItem("selectedDrinks");
	if(selectedDrinks!==null){
		selectedDrinks=JSON.parse(selectedDrinks);
	}
	return (
		<List sx={{
			maxWidth: 800,
			margin: '0 auto'
    	}}>
		{
			mixedDrinks.map((item)=>{
				const disabled = !isAvailable(selectedDrinks,item.drinks);
				return <MixedDrink key={item.name} image={item.image} name={item.name} drinks={item.drinks} disabled={disabled}/>
			})
		}  
		</List>
	)
}
