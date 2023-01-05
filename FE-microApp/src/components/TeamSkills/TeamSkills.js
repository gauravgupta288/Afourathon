import React, { useEffect } from 'react'

import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExportContainer,
    GridCsvExportMenuItem
} from '@mui/x-data-grid'
import { TeamStyles } from './style'


function EditToolbar() {
  
    const csvOptions={
      fileName: 'TeamSkills',
      utf8WithBom: true,
    }
  
    return (
      <GridToolbarContainer>
        <GridToolbarExportContainer >
          <GridCsvExportMenuItem options={csvOptions}/>
        </GridToolbarExportContainer>
      </GridToolbarContainer>
    )
  }

export default function TeamSkills() {
  const [rows, setRows] = React.useState([
    {
      empId: 419,
      id:13,
      name:"",
      skill: '',
      domain: '', 
      yearsOfExperience: '',
    }])

  useEffect(() =>  {
    fetch('http://54.199.238.206:8080/employee/team/Resolve')
      .then((response) => response.json())
      .then((json) => {
          setRows(json.map( value => ({...value, id: Math.random()})))
      }
         )
      .catch(error => console.log(error))
    }, [])

  const columns = [
    { 
        field: 'name', 
        headerName: 'Member', 
        width: 155,
        headerAlign: 'left',
        align: 'left',
        renderCell: (params) => {
            return (
                <Tooltip title={params.row.name}>
                    <Chip
                        avatar={<Avatar alt={params.row.name} src="/broken-image.jpg" />}
                        label={params.row.name}
                        variant="outlined"
                        color="primary"
                        size="medium"
                    />
                </Tooltip>     
            )
        }
    },
    { 
        field: 'skill', 
        headerName: 'Skill Name', 
        width: 100,
        editable: true,
        headerAlign: 'left',
        align: 'left'
    },
    {
        field: 'doamin',
        headerName: 'Domain',
        width: 100,
        headerAlign: 'left',
        align: 'left'
    },
    {
        field: 'skill-level',
        headerName: 'Level',
        width: 100,
        headerAlign: 'left',
        align: 'left'
    },
    {
        field: 'years of experience',
        headerName: 'Experience',
        type: 'number',
        width: 100,
        editable: true,
        headerAlign: 'left',
        align: 'left',        
    },
    
  ]

  return (
    <Box 
      sx={TeamStyles.box}
    >
      <DataGrid
        loading={!(rows.length>1)}
        rows={rows}
        columns={columns}
        autoPageSize = {true}
        components={{Toolbar: EditToolbar}}
        sx={TeamStyles.dataGrid}   
        disableSelectionOnClick  
      />
    </Box>
  )
}
