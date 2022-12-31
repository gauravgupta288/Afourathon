import React from "react"
import {createRoot} from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PersonalSkills, TeamSkills } from "./pages"
import { ThemeProvider } from "@mui/material/styles"
import { globalTheme } from "./golbalTheme"


const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <ThemeProvider theme={globalTheme}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='/personal' element={<PersonalSkills/>}/>
                    <Route path='/team' element={<TeamSkills/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
    
)