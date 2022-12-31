import React from 'react'

import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { navbarItems } from '../../constants/navbarItems'
import { navbarStyles } from './styles'
import { useNavigate } from 'react-router-dom'


export default function Navbar(){

    const navigate = useNavigate()
    return(
        <Drawer
            sx={navbarStyles.drawer}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {navbarItems.map((item) => (
                <ListItem 
                    key={item.id} 
                    button
                    onClick={()=>navigate(item.route)}
                >
                    <ListItemButton>
                        <ListItemIcon sx={navbarStyles.icons}>
                        {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                            primary={item.label} 
                            sx={navbarStyles.text}
                        />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Drawer>
    )
}