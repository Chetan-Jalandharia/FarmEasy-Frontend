import { Box, IconButton, Tooltip } from '@mui/material';
import { MdPreview, MdDelete, MdEdit } from "react-icons/md";
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Alert, DeleteAlert } from '../../Common/Alert';
import AdminApis from '../../api/AdminApis';

const ProductActions = ({ params, setUpdate }) => {
    const navigate = useNavigate()
    const id = params.row._id

    const DeleteProduct = (id) => {
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
                    AdminApis.deleteProduct(id)
                        .then((val) => {
                            setUpdate((pre) => pre + 1)
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
            <Tooltip title="View Product">
                <IconButton onClick={() => { navigate(`/admin/showproduct/${id}`) }}>
                    <MdPreview />
                </IconButton>
            </Tooltip>
            <Tooltip title="Update Product">
                <IconButton onClick={() => { navigate(`/admin/updateproduct/${id}`) }}>
                    <MdEdit />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete Product">
                <IconButton onClick={() => { DeleteProduct(id) }}>
                    <MdDelete />
                </IconButton>
            </Tooltip>

        </Box>
    )
}

export default ProductActions;