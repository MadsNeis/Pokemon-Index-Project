'use client'

import { TableCell, tableCellClasses } from '@mui/material'
import { styled } from '@mui/system'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#003366',
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        padding: "12px",
    },
}));

export default StyledTableCell;