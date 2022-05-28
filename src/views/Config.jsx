import React , {useEffect, useState} from 'react'
import { FormControl, InputLabel, MenuItem, Select, Backdrop, CircularProgress, Alert, Snackbar} from '@mui/material';
import { Box } from '@mui/system';
import { NavBar } from '../components/NavBar';
import { getDrinks } from '../services/drinksService';

export const Config = () => {
  const [responseError, setResponseError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [availableDrinks,setAvailableDrinks] = useState(JSON.parse(localStorage.getItem("availableDrinks")));

  useEffect(() => {
    if(availableDrinks===null){
      setLoading(true)

      getDrinks()
      .then(response => {
        localStorage.setItem("availableDrinks",JSON.stringify(response));
        setAvailableDrinks(response); 
        setLoading(false);
      })
      .catch(error => {
        setResponseError(error.message);
        setLoading(false);
      })
    }
  },[availableDrinks])

  let selectedDrinks = localStorage.getItem("selectedDrinks");

  if(selectedDrinks!==null){
    selectedDrinks=JSON.parse(selectedDrinks);
  }else{
    selectedDrinks=[null,null,null,null];
  }

  const [drink, setDrink] = useState(selectedDrinks);
  const handleChange = (slot, item) => {
    let d = drink;
    d[slot] = item;
    localStorage.setItem("selectedDrinks", JSON.stringify(d));
    setDrink(d);
  };

  return (
    <>
    {
      loading?
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop> 
      :
        null
    }
    {
      responseError?
      <Snackbar open={true}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {responseError}
        </Alert>
      </Snackbar>
      :
        null
    }
    <NavBar/>
    <Box sx={{ minWidth: 120, padding: 2}} display='flex'>
      <FormControl fullWidth>
        <InputLabel id="label-drink0">Bebida 1</InputLabel>
        <Select
          labelId="drink0"
          id="drink0"
          label="Bebida 1"
          defaultValue={drink[0]?.name || '-- Vacio --'}
          onChange={(_, el)=>{handleChange(0, el.props.item)}} 
        >
          <MenuItem key={"d0null"} value={"-- Vacio --"} item={null}>-- Vacio --</MenuItem>
          {
            availableDrinks?.map((item)=>{
              return <MenuItem key={"d0"+item.id} value={item.name} item={item}>{item.name}</MenuItem>
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
          defaultValue={drink[1]?.name || '-- Vacio --'}
          onChange={(_, el)=>{handleChange(1, el.props.item)}} 
        >
          <MenuItem key={"d1null"} value={"-- Vacio --"} item={null}>-- Vacio --</MenuItem>
          {
            availableDrinks?.map((item)=>{
              return <MenuItem key={"d1"+item.id} value={item.name} item={item}>{item.name}</MenuItem>
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
          defaultValue={drink[2]?.name || '-- Vacio --'}
          onChange={(_, el)=>{handleChange(2, el.props.item)}} 
        >
          <MenuItem key={"d2null"} value={"-- Vacio --"} item={null}>-- Vacio --</MenuItem>
          {
            availableDrinks?.map((item)=>{
              return <MenuItem key={"d2"+item.id} value={item.name} item={item}>{item.name}</MenuItem>
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
          defaultValue={drink[3]?.name || '-- Vacio --'}
          onChange={(_, el)=>{handleChange(3, el.props.item)}} 
        >
          <MenuItem key={"d3null"} value={"-- Vacio --"} item={null}>-- Vacio --</MenuItem>
          {
            availableDrinks?.map((item)=>{
              return <MenuItem key={"d3"+item.id} value={item.name} item={item}>{item.name}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
    </>
  );
}