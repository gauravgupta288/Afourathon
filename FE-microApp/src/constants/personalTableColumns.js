import React from 'react'
import { SelectCell } from "../components";
import { domain } from './domain';

export const personalTableColumns = [
    { 
        field: 'skill', 
        headerName: 'Skill Name', 
        minWidth: 100
    },
    {
        field: 'domain',
        headerName: 'Domain',
        renderEditCell: (params) => <SelectCell {...params} options = {domain}/>,
        editable: true,
        minWidth: 100
    },
    {
        field: 'skillLevel',
        headerName: 'Level',
        minWidth: 100
    },
    {
        field: 'yearsOfExperience',
        headerName: 'Experience',
        type: 'number',
        minWidth: 100
    },
]