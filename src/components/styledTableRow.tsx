'use client'

import { TableRow } from "@mui/material"
import {styled} from "@mui/system"

const StyledTableRow = styled(TableRow)(({ theme })=> ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#f0f8ff',
    },
    '&:nth-of-type(even)':{
        backgroundColor: '#ffffff',
    }
}));

export default StyledTableRow;