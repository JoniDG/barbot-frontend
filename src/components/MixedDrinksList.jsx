import React from 'react'
import List from '@mui/material/List';
import { MixedDrink } from './MixedDrink';

const isAvailable = (selectedDrinks, drinks)=>{
	if(selectedDrinks===null){
		return false
	}
	for (let i = 0; i < drinks.length; i++) {
		const drink = drinks[i];
		const exists = selectedDrinks.filter(selectedDrink=>selectedDrink.id===drink.id);
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

	let availableMixedDrinks = [];
	let notAvailableMixedDrinks = [];

	for(let i=0; i<mixedDrinks.length; i++){
		const md = mixedDrinks[i]
		if(isAvailable(selectedDrinks, md.drinks)){
			availableMixedDrinks.push(<MixedDrink key={md.name} img={md.img} name={md.name} drinks={md.drinks}/>)
		} else {
			notAvailableMixedDrinks.push(<MixedDrink key={md.name} img={md.img} name={md.name} drinks={md.drinks} disabled={true}/>)
		}
	}

	return (
		<List sx={{
			maxWidth: 800,
			margin: '0 auto'
    	}}>
		{
			availableMixedDrinks.map((mixedDrink)=>{
				return mixedDrink
			})
		}
		{	
			notAvailableMixedDrinks.map((mixedDrink)=>{
				return mixedDrink
			})
		}  
		</List>
	)
}
