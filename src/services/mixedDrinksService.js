import axios from "axios"

const baseUrl = "http://localhost:8080"

export const getMixedDrinks = async () => {
	try {
		const response = await axios.get(baseUrl + "/mixedDrinks");
		return response.data
	} catch (error) {
		throw error
	}
}
/*getAll() {
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
					"name":"Coca Cola",
					"percent":70
				}
			]
		},
		{
			"name": "Mojito",
			"image": avatarFernetCoca,
			"drinks": [
				{
					"name":"Agua con gas",
					"percent": 57
				},
				{
					"name":"Jugo de limón",
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
					"name":"Agua tónica",
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
}*/