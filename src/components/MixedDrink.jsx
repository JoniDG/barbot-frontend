import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export const MixedDrink = ({image,name,drinks,disabled}) => {
	let drinksString = "";
	drinks.forEach((item)=>{
		drinksString += item.name + ", ";
	})
		
	return (
		<ListItem alignItems="flex-start" divider= {true}>
			<ListItemButton disabled={disabled} onClick={() => {alert(`Preparando ${name}`);}}>
				<ListItemAvatar>
					<Avatar alt="?" src={image} />
				</ListItemAvatar>
				<ListItemText
					primary={name}
					secondary={drinksString.slice(0, -2)}
				/>
			</ListItemButton>
		</ListItem>
	)
}
