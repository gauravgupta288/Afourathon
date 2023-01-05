import React from "react"

import Grid from '@mui/material/Grid'

import { employees } from "../constants/data"

import {PerosnalSkills} from '../components'
import { Typography } from "@mui/material"
import { Header } from "../components"

export default function PersonalSkillsPage(){
  const [rows] = employees.map(employee => employee.skills)
  return (
    <Grid style={{border: "5px solid black"}} item xs={9}>
      <>
      <Header />
      {/* <Typography style={{border: "2px solid blue"}} variant="h5">Personal Skills</Typography> */}
      <PerosnalSkills tableRows={rows}/></>
     </Grid>
  )
}