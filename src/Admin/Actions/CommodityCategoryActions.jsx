import { Box, IconButton, Tooltip } from '@mui/material';
import { MdPreview, MdDelete, MdEdit } from "react-icons/md";
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Alert, DeleteAlert } from '../../Common/Alert';
import AdminApis from '../../api/AdminApis';

const CommodityCategoryActions = ({params}) => {
    const navigate=useNavigate()
    // console.log(params);
    const id=params.row._id

    const DeleteCategory=(id)=>{
        try {
            DeleteAlert.fire({
                title: 'Are you sure to Delete?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    AdminApis.deleteCommodityCategory(id)
                        .then((val) => {
                            Alert.fire(
                                'Deleted!',
                                'Product has been deleted',
                                'success'
                            )
                        })
                }
            })
        } catch (error) {
            console.log("message:" + error);
        }
    }
    return (
        <Box>
            <Tooltip title="View Product category">
                <IconButton onClick={() => { navigate(`/admin/showcommoditycategory/${id}`)}}>
                    <MdPreview />
                </IconButton>
            </Tooltip>
            <Tooltip title="Update Product">
                <IconButton onClick={() => { navigate(`/admin/commodity/category/update/${id}`)}}>
                    <MdEdit />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete Product">
                <IconButton onClick={() => {DeleteCategory(id) }}>
                    <MdDelete />
                </IconButton>
            </Tooltip>

        </Box>
    )
}

export default CommodityCategoryActions;