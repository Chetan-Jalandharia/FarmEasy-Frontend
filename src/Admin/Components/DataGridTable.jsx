import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useContext, useState } from 'react'
import {deleteContext} from '../Context/DeleteContext'

function DataGridTable({ columns, data }) {

    const {List,setList}=useContext(deleteContext)
    return (

        <>
            <Box
                sx={{
                    height: 560,
                    width: '100%'
                }}>


                <DataGrid
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowSelectionModelChange={(data) => {
                        setList(data)
                    }}
                    columns={columns}
                    rows={data}
                    rowHeight={70}
                    getRowId={(param) => param._id}
                    getRowSpacing={() => ({
                        top: 10,
                        bottom: 10
                    })} />
            </Box>
        </>
    )
}

export default DataGridTable