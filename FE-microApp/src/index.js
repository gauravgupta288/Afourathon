import React from "react"
import {createRoot} from 'react-dom/client'
import App from './App'
import { HashRouter, Routes, Route } from "react-router-dom"
import { PersonalSkillsPage, TeamSkillsPage } from "./pages"

import { inputGlobalStyles } from "./golbalTheme"

if (typeof window !== 'undefined') {
    const rootElement = document.getElementById('root')
    const root = createRoot(rootElement)
    root.render(       
        <HashRouter>
            {inputGlobalStyles}
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='/personal' element={<PersonalSkillsPage/>}/>
                    <Route path='/team' element={<TeamSkillsPage/>}/>
                </Route>
            </Routes>
        </HashRouter>    
    )
}