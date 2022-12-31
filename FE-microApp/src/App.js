import React from 'react'
import { Navbar } from './components'
import { PersonalSkills } from './pages'
import { Outlet } from 'react-router-dom'
import Grid from "@mui/material/Grid"

export default function App(){
    return (
        <Grid container>
            <Navbar/>
            <Outlet/>
        </Grid>
    )
}