import React , {useState} from 'react'
import { FormControl, InputLabel, MenuItem, Button , Select} from '@mui/material';
import { Box } from '@mui/system';
import { NavBar } from './NavBar';


const handleFactoryReset = (e) =>{
  localStorage.clear();
}

export const Config = () => {
  

  let availableDrinks = localStorage.getItem("availableDrinks");

  if(availableDrinks===null){
    // Response from GET /drinks
    availableDrinks= [
      {"id": 0, "name": "Fernet"},
      {"id": 1, "name": "Coca Cola"},
      {"id": 2, "name": "Agua con gas"},
      {"id": 3, "name": "Jugo de limón"},
      {"id": 4, "name": "Ron"},
      {"id": 5, "name": "Ginebra"},
      {"id": 6, "name": "Agua tónica"},
      {"id": 7, "name": "Vermut"}
    ]
    localStorage.setItem("availableDrinks",JSON.stringify(availableDrinks));
  }else{
    availableDrinks=JSON.parse(availableDrinks);
  }

  let selectedDrinks = localStorage.getItem("selectedDrinks");

  if(selectedDrinks!==null){
    selectedDrinks=JSON.parse(selectedDrinks);
  }else{
    selectedDrinks=[null,null,null,null];
  }

  const [drink, setDrink] = useState(selectedDrinks);
  const handleChange = (slot, drinkName) => {
    let d = drink;
    d[slot] = drinkName;
    localStorage.setItem("selectedDrinks", JSON.stringify(d));
    setDrink(d);
  };
  

  return (
    <>
    <NavBar/>
    <Box sx={{ minWidth: 120, padding: 2}} display='flex'>
      <FormControl fullWidth>
        <InputLabel id="label-drink0">Bebida 1</InputLabel>
        <Select
          labelId="drink0"
          id="drink0"
          label="Bebida 1"
          defaultValue={drink[0] || ''}
          renderValue={()=>drink[0] || ''}
          onChange={(e)=>{handleChange(0, e.target.value)}} 
        >
        {
          availableDrinks.map((item)=>{
            return <MenuItem key={"d0"+item.id} value={item.name}>{item.name}</MenuItem>
          })
        }
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="label-drink1">Bebida 2</InputLabel>
        <Select
          labelId="drink1"
          id="drink1"
          label="Bebida 2"
          defaultValue={drink[1] || ''}
          renderValue={()=>drink[1] || ''}
          onChange={(e)=>{handleChange(1, e.target.value)}} 
        >
        {
          availableDrinks.map((item)=>{
            return <MenuItem key={"d1"+item.id} value={item.name}>{item.name}</MenuItem>
          })
        }
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="label-drink2">Bebida 3</InputLabel>
        <Select
          labelId="drink2"
          id="drink2"
          label="Bebida 3"
          defaultValue={drink[2] || ''}
          renderValue={()=>drink[2] || ''}
          onChange={(e)=>{handleChange(2, e.target.value)}} 
        >
        {
          availableDrinks.map((item)=>{
            return <MenuItem key={"d2"+item.id} value={item.name}>{item.name}</MenuItem>
          })
        }
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="label-drink3">Bebida 4</InputLabel>
        <Select
          labelId="drink3"
          id="drink3"
          label="Bebida 4"
          defaultValue={drink[3] || ''}
          renderValue={()=>drink[3] || ''}
          onChange={(e)=>{handleChange(3, e.target.value)}} 
        >
        {
          availableDrinks.map((item)=>{
            return <MenuItem key={"d3"+item.id} value={item.name}>{item.name}</MenuItem>
          })
        }
        </Select>
      </FormControl>
      <Button onClick={handleFactoryReset}>Reiniciar a Valores de Fabrica</Button>
    </Box>
    </>
  );
}