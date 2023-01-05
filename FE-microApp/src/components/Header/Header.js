import React from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Tooltip  from '@mui/material/Tooltip'

import { headerStyles } from './style'

export default function Header() {

  return (
    // <Box sx={headerStyles.box}>
        <AppBar position="static" sx={headerStyles.appbar}>
            <Toolbar sx={headerStyles.toolbar} >           
                <Typography
                    variant="caption"
                    noWrap
                    sx={headerStyles.typography}
                >
                anonymous@email.com
                </Typography>
            
            
                <Tooltip title="Anonymous">
                    <Avatar
                        alt="Anonymous"
                        src="/broken-image.jpg"
                        variant=""
                    />
                </Tooltip>
            </Toolbar>
        </AppBar>
    // {/* </Box> */}
    )
}