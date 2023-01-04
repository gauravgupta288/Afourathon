import React from "react"
import {createRoot} from 'react-dom/client'
import App from './App'
import { HashRouter, Routes, Route } from "react-router-dom"
import { PersonalSkillsPage, TeamSkillsPage } from "./pages"
import { ThemeProvider } from "@mui/material/styles"
import { globalTheme } from "./golbalTheme"


const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <ThemeProvider theme={globalTheme}>
        <HashRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='/personal' element={<PersonalSkillsPage/>}/>
                    <Route path='/team' element={<TeamSkillsPage/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </ThemeProvider>
    
)