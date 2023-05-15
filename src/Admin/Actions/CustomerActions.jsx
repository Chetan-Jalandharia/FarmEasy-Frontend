import { Box, IconButton, Tooltip } from "@mui/material";
import { MdPreview, MdDelete, MdEdit } from "react-icons/md";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert, DeleteAlert } from "../../Common/Alert";
import AdminApis from "../../api/AdminApis";

const CustomerActions = ({ params, setUpdate }) => {
  const navigate = useNavigate();
  const id = params.row._id;

  const DeleteCustomer = (id) => {
    try {
      DeleteAlert.fire({
        title: "Are you sure to Delete?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          AdminApis.deleteCustomer(id).then((val) => {
            setUpdate((pre) => pre + 1);
            Alert.fire("Deleted!", "Customer has been deleted", "success");
          });
        }
      });
    } catch (error) {
      console.log("message:" + error);
    }
  };
  return (
    <Box>
      <Tooltip title="View Customer">
        <IconButton
          onClick={() => {
            navigate(`/admin/showcustomer/${id}`);
          }}
        >
          <MdPreview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Update Customer">
        <IconButton
          onClick={() => {
            navigate(`/admin/updatecustomer/${id}`);
          }}
        >
          <MdEdit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete Customer">
        <IconButton
          onClick={() => {
            DeleteCustomer(id);
          }}
        >
          <MdDelete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default CustomerActions;
