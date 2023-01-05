import React from "react"
import Grid from "@mui/material/Grid"
import { TeamSkills } from "../components"
import { employees } from "../constants/data"
import { Typography } from "@mui/material"
export default function TeamSkillsPage(){
    const [rows] = employees.map(employee => employee.skills)
    return (
        // <Grid style={{border: "20px solid black"}}item xs={8}>
            <>
                <Typography variant="h5">Team Skills</Typography>
                <TeamSkills tableRows={rows}/>
            </>
        // {/* </Grid> */}
    )
}