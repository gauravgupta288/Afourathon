import React from "react"

import Grid from '@mui/material/Grid'

import { employees } from "../constants/data"

import {PerosnalSkills} from '../components'
import { Typography } from "@mui/material"

export default function PersonalSkillsPage(){
  const [rows] = employees.map(employee => employee.skills)
  return (
    <Grid item xs={6}>
      <Typography variant="h5">Personal Skills</Typography>
      <PerosnalSkills tableRows={rows}/>
    </Grid>
  )
}