import React, { useEffect } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
import { Tooltip,Chip,Avatar } from '@mui/material'
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridCsvExportMenuItem,
  GridToolbarExportContainer
} from '@mui/x-data-grid'
import { PersonalStyles } from './style'

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props

  const handleClick = () => {
    const id = Math.random()
    setRows(oldRows => [      
      { 
        empId: 419,
          id, 
          skill: '',
          domain: '', 
          yearsOfExperience: '', 
          isNew: true 
      },
      ...oldRows
    ])
    setRowModesModel(oldModel => ({    
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'skill' },
      ...oldModel,
    }))
  } 

  const csvOptions={
    fileName: 'PersonalSkills',
    utf8WithBom: true,
  }

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Skill
      </Button>
      <GridToolbarExportContainer >
        <GridCsvExportMenuItem options={csvOptions}/>
      </GridToolbarExportContainer>
    </GridToolbarContainer>
  )
}

export default function PersonalSkills() {
  const [rows, setRows] = React.useState([
    {
      empId: 419,
      id:"",
      skill: '',
      domain: '', 
      yearsOfExperience: '',
    }])
  const [rowModesModel, setRowModesModel] = React.useState({})
  const url = "http://54.199.238.206:8080/skills/419"

  useEffect(() =>  {
    fetch(url)
      .then(response => response.json())
      .then(json => setRows(json))
      .catch(error => console.log(error))
    }, [])

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true
  }

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true
  }

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = (id) => () => {
    const deletedRow = rows.filter((row) => {
      if (row.id == id) return  row.skill
    })
    setRows(rows.filter((row) => row.id !== id))
    fetch(`${url}/${deletedRow[0].skill}`, { method: 'DELETE' })
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    })

    const editedRow = rows.find((row) => row.id === id)
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id))
    }
  }

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedRow)
  };
  fetch(url, requestOptions)
      .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
          setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)))
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
    return updatedRow
  }

  const columns = [
    { 
        field: 'skill', 
        headerName: 'Skill Name', 
        width: 100,
        editable: true,
        headerAlign: 'left',
        align: 'left',
        renderCell: (params) => {
          console.log(params);
          return (
              <Tooltip title={params.row.skill}>
                  <Chip
                      
                      label={params.row.skill}
                      variant="outlined"
                      color="primary"
                      size="medium"
                  />
              </Tooltip>     
          )
      }
    },
    {
        field: 'domain',
        headerName: 'Domain',
        type:'singleSelect',
        valueOptions:['Tech','Business','Leadership'],
        editable: true,
        width: 100,
        headerAlign: 'left',
        align: 'left'
    },
    {
        field: 'skillLevel',
        headerName: 'Level',
        type:'singleSelect',
        valueOptions:['Basic','Intermediate','Advanced'],
        width: 100,
        editable: true,
        headerAlign: 'left',
        align: 'left'
    },
    {
        field: 'yearsOfExperience',
        headerName: 'Experience',
        type: 'number',
        width: 100,
        editable: true,
        headerAlign: 'left',
        align: 'left'

    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      headerAlign:"center",
      align: "center",
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon color='primary'/>}
              label="Save"
              color="primary"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon sx={PersonalStyles.delete} />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="disabled"
            />,
          ]
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon color="primary" />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            
          />,
          <GridActionsCellItem
            icon={<DeleteIcon sx={PersonalStyles.delete} />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ]
      },
    },
  ]

  return (
    <Box 
      sx={PersonalStyles.box}
    >
      <DataGrid
        loading={!(rows.length>1)}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        components={{Toolbar: EditToolbar}}
        componentsProps={{toolbar: { setRows, setRowModesModel }}}
        experimentalFeatures={{ newEditingApi: true }}
        autoPageSize = {true}
        sx={PersonalStyles.dataGrid}
        disableSelectionOnClick
      />
    </Box>
  )
}
