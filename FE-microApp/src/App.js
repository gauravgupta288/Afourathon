import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from "@mui/material/Grid"
import Alert from  "@mui/material/Alert"
import { Navbar, Header } from './components'

export default function App(){
    return (
        <Grid 
            container 
            alignItems="stretch" 
            spacing={3} 
            justifyContent="space-between"
        >   
            <Grid 
                item 
                xl={3}
                lg={4}
                md={4}
                xs={4}
            >
                <Navbar/>
                
            </Grid>
            <Grid 
                item  
                xl={9}
                lg={8}
                md={8}
                xs={8}
            >
                <Header/> 
                <Outlet/>      
            </Grid>       
        </Grid>
    )
}