import React from 'react'
import { Outlet } from 'react-router-dom'

import Grid from "@mui/material/Grid"

import { Navbar } from './components'
// import {PersonalSkills} from './pages'
import { employees } from './constants/data'
import {PerosnalSkillsPage} from './pages'

export default function App(){

    const [rows] = employees.map(employee => employee.skills)
    return (
        <Grid container>
            <Grid item xs={4}><Navbar/></Grid>
            {/* <Grid item xs={6}><PersonalSkills/></Grid> */}
            {/* <Grid item xs={6}><PerosnalSkillsPage tableRows={rows}/></Grid> */}
            <Outlet/>
        </Grid>
    )
}