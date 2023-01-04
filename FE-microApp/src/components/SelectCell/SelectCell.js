import React from 'react'

// import PropTypes from 'prop-types'
import Select from '@mui/material/Select'
import { useGridApiContext } from '@mui/x-data-grid'

export default function SelectCell(props){
    const { id, value, field, options } = props
    const apiRef = useGridApiContext()

    const handleChange = async (event) => {
        await apiRef.current.setEditCellValue({ id, field, value: event.target.value })
        // apiRef.current.stopCellEditMode({ id, field })
    }
    return (
        <Select
            value={value}
            onChange={handleChange}
            size="small"
            sx={{ height: 1 }}
            native
            autoFocus
        >
          {console.log("this is domain",options)}
            {options.map( (option,index) => <option id={`${option}-${index}`}>{option}</option>)}
        </Select>
    )
}



// function SelectEditInputCell(props) {
//   const { id, value, field } = props;
//   const apiRef = useGridApiContext();

//   const handleChange = async (event) => {
//     await apiRef.current.setEditCellValue({ id, field, value: event.target.value });
//     apiRef.current.stopCellEditMode({ id, field });
//   };

//   return (
//     <Select
//       value={value}
//       onChange={handleChange}
//       size="small"
//       sx={{ height: 1 }}
//       native
//       autoFocus
//     >
//       <option>Back-end Developer</option>
//       <option>Front-end Developer</option>
//       <option>UX Designer</option>
//     </Select>
//   );
// }

// SelectEditInputCell.propTypes = {
//   /**
//    * The column field of the cell that triggered the event.
//    */
//   field: PropTypes.string.isRequired,
//   /**
//    * The grid row id.
//    */
//   id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//   /**
//    * The cell value.
//    * If the column has `valueGetter`, use `params.row` to directly access the fields.
//    */
//   value: PropTypes.any,
// };




