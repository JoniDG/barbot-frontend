import React from 'react'
import { MixedDrinksList } from '../components/MixedDrinksList';
import { avatarFernetCoca } from '../data/avatars';

// MixedDrinksRepository
class MixedDrinksAPI {
	constructor(baseURL){
		this.baseURL = baseURL;
	}
	getAll() {
		return [
			{
				"name": "Fernet Cola",
				"image": avatarFernetCoca,
				"drinks": [
					{
						"name":"Fernet",
						"percent":30
					},
					{
						"name":"Coca",
						"percent":70
					}
				]
			},
			{
				"name": "Mojito",
				"image": avatarFernetCoca,
				"drinks": [
					{
						"name":"Agua Gasificada",
						"percent": 57
					},
					{
						"name":"Jugo de Limon",
						"percent": 14
					},
          {
						"name":"Ron",
						"percent": 29
					},
				]
			},
			{
				"name": "Gin Tonic",
				"image": avatarFernetCoca,
				"drinks": [
					{
						"name":"Ginebra",
						"percent": 20
					},
					{
						"name":"Agua Tonica",
						"percent": 80
					}
				]
			},
      {
				"name": "Martini",
				"image": avatarFernetCoca,
				"drinks": [
					{
						"name":"Ginebra",
						"percent": 83
					},
					{
						"name":"Vermut",
						"percent": 17
					}
				]
			}
		]
	}
}

export const Home = () => {
	const mixedDrinksAPI = new MixedDrinksAPI(null);

	const mixedDrinks = mixedDrinksAPI.getAll();
	return (
		<div style={{justifyContent: 'center'}}>
			<MixedDrinksList mixedDrinks={mixedDrinks}/>
		</div>
	)
}


