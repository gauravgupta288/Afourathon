import React from 'react'
import { Outlet } from 'react-router-dom'

import Grid from "@mui/material/Grid"

import { Navbar } from './components'
// import {PersonalSkills} from './pages'
import { employees } from './constants/data'
import {PerosnalSkillsPage} from './pages'
import { Header } from './components'
import { Stack } from '@mui/material'

export default function App(){

    const [rows] = employees.map(employee => employee.skills)
    return (
        <Grid container justifyContent="flex-end">   
            <Navbar/>  
            
            <Outlet/>             
        </Grid>
    )
}