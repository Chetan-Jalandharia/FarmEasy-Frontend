import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material';
import { FaCheck } from "react-icons/fa";
import { MdClear, MdPreview } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Alert, DeleteAlert } from '../../Common/Alert';
import AdminApis from '../../api/AdminApis';

const ProductRequestActions = ({ params, setUpdate }) => {
    const navigate = useNavigate()
    const id = params.row._id

    const AcceptProduct = (id) => {

        AdminApis.approveProduct(id)
            .then((val) => {
                setUpdate((pre) => pre + 1)
                Alert.fire({
                    icon: 'success',
                    title: "Product Approved",
                })
            }).catch(error => {
                console.log("message:" + error);

            })

    }

    // const RejectProduct = (id) => {
    //     try {
    //         DeleteAlert.fire({
    //             title: 'Are you sure to Reject?',
    //             icon: 'warning',
    //             showCancelButton: true,
    //             confirmButtonText: 'Yes, Reject it!',
    //             cancelButtonText: 'No, cancel!',
    //             reverseButtons: true
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 AdminApis.rejectProduct(id)
    //                     .then((val) => {
    //                         setUpdate((pre) => pre + 1)
    //                         Alert.fire(
    //                             'Deleted!',
    //                             'Product has been rejected',
    //                             'success'
    //                         )
    //                     })
    //             }
    //         })
    //     } catch (error) {
    //         console.log("message:" + error);
    //     }
    // }
    return (
        <Box >
            <Tooltip title="Accept Product">
                <IconButton onClick={() => { AcceptProduct(id) }}>
                    <FaCheck color='green' />
                </IconButton>
            </Tooltip>
            <Tooltip title="View Product">
                <IconButton onClick={() => { navigate(`/admin/showproduct/${id}`) }}>
                    <MdPreview />
                </IconButton>
            </Tooltip>
            {/* <Tooltip title="Reject Product">
                <IconButton onClick={() => { RejectProduct(id) }}>
                    <MdClear color='red' size={31} />
                </IconButton>
            </Tooltip> */}


        </Box>
    )
}

export default ProductRequestActions;