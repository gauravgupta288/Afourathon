import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
import SelectCell from '../SelectCell/SelectCell'
import { domain } from '../../constants/domain'
import { level } from '../../constants/level'
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridCsvExportMenuItem,
  GridToolbarExportContainer
} from '@mui/x-data-grid'
import { randomId } from '@mui/x-data-grid-generator'


function EditToolbar(props) {
    const { setRows, setRowModesModel } = props

    const handleClick = () => {
    const id = randomId()
    setRows(oldRows => [
         
        { 
            id, 
            skill: '',
            domain: '', 
            yearsOfExperience: '', 
            isNew: true 
        },
        ...oldRows
    ])
    setRowModesModel(oldModel => ({
        
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
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

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
}

export default function PersonalSkills({ tableRows }) {
  const [rows, setRows] = React.useState(tableRows)
  const [rowModesModel, setRowModesModel] = React.useState({})

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
    setRows(rows.filter((row) => row.id !== id))
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
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)))
    return updatedRow
  }

  const columns = [
    { 
        field: 'skill', 
        headerName: 'Skill Name', 
        minWidth: 100,
        editable: true
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
        renderEditCell: (params) => <SelectCell {...params} options = {level}/>,
        minWidth: 100,
        editable: true
    },
    {
        field: 'yearsOfExperience',
        headerName: 'Experience',
        type: 'number',
        minWidth: 100,
        editable: true
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ]
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
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
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        experimentalFeatures={{ newEditingApi: true }}
        autoPageSize = {true}
      
        
      />
    </Box>
  )
}
