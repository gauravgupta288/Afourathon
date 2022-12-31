import React from 'react'

import PersonSharpIcon from '@mui/icons-material/PersonSharp'
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp'

export const navbarItems = [
    {
        id: 0,
        icon: <PersonSharpIcon/>,
        label: 'Personal',
        route: 'personal'
    },
    {
        id: 1,
        icon: <GroupsSharpIcon/>,
        label: 'Team',
        route: 'team'
    }
]