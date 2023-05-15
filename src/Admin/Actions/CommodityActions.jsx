import { Box, IconButton, Tooltip } from "@mui/material";
import { MdPreview, MdDelete, MdEdit } from "react-icons/md";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, DeleteAlert } from "../../Common/Alert";
import AdminApis from "../../api/AdminApis";
const CommodityActions = ({ params, setUpdate }) => {
  const navigate = useNavigate();
  const id = params.row._id;

  const DeleteCommodity = (id) => {
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
          AdminApis.deleteCommodity(id).then((val) => {
            setUpdate((pre) => pre + 1);
            Alert.fire("Deleted!", "Product has been deleted", "success");
          });
        }
      });
    } catch (error) {
      console.log("message:" + error);
    }
  };
  return (
    <Box>
      <Tooltip title="View Product">
        <IconButton
          onClick={() => {
            navigate(`/admin/showcommodity/${id}`);
          }}
        >
          <MdPreview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Update Product">
        <IconButton
          onClick={() => {
            navigate(`/admin/updatecommodity/${id}`);
          }}
        >
          <MdEdit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete Product">
        <IconButton
          onClick={() => {
            DeleteCommodity(id);
          }}
        >
          <MdDelete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default CommodityActions;
