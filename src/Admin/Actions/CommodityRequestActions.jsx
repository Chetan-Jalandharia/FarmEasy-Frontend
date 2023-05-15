import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material';
import { FaCheck } from "react-icons/fa";
import { MdClear, MdPreview } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Alert, DeleteAlert } from '../../Common/Alert';
import AdminApis from '../../api/AdminApis';

const CommodityRequestActions = ({ params, setUpdate }) => {
    const navigate = useNavigate()
    const id = params.row._id

    const AcceptCommodity = (id) => {
        // console.log(id);
        AdminApis.approveCommodity(id)
            .then((val) => {
                console.log(val);
                setUpdate((pre) => pre + 1)
                Alert.fire({
                    icon: 'success',
                    title: "Commodity Approved",
                })
            }).catch(error => {
                console.log("message:" + error);

            })

    }

    const RejectCommodity = (id) => {
        try {
            DeleteAlert.fire({
                title: 'Are you sure to Reject?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, Reject it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    AdminApis.rejectCommodity(id)
                        .then((val) => {
                            // console.log(val);
                            setUpdate((pre) => pre + 1)
                            Alert.fire(
                                'Deleted!',
                                'Commodity has been rejected',
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
        <Box >
            <Tooltip title="Accept Commodity">
                <IconButton onClick={() => { AcceptCommodity(id) }}>
                    <FaCheck color='green' />
                </IconButton>
            </Tooltip>
            <Tooltip title="View Commodity">
                <IconButton onClick={() => { navigate(`/admin/showcommodity/${id}`) }}>
                    <MdPreview />
                </IconButton>
            </Tooltip>
            <Tooltip title="Reject Commodity">
                <IconButton onClick={() => { RejectCommodity(id) }}>
                    <MdClear color='red' size={31} />
                </IconButton>
            </Tooltip>


        </Box>
    )
}

export default CommodityRequestActions;