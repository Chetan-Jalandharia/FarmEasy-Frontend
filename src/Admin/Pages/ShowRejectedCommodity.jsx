import { Avatar, Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Actions from "../Actions/CommodityRejectActions";
import AdminApis from "../../api/AdminApis";
import DataGridTable from "../Components/DataGridTable";
import { deleteContext } from "../Context/DeleteContext";
import { RefreshContext } from "../../Common/Context/RefreshData";

export default function ShowRejectedCommodity() {
  const { List } = useContext(deleteContext);
  const { Update, setUpdate } = useContext(RefreshContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    AdminApis.showRejectedCommodity()
      .then((val) => {
        setData(val.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Update]);

  const DeleteSelected = () => {
    AdminApis.deleteSelectedCommodity(List).then((val) => {
      console.log(val);
    });
  };
  
  const columns = [
    {
      field: "imgPath",
      headerName: "Image",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Avatar
          src={
            params.row.imgPath
          }
          variant="rounded"
          sx={{ height: "95%" }}
        />
      ),
    },
    {
      field: "commodityName",
      headerName: "Name",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "commodityDescription",
      headerName: "Description",
      width: 450,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "commodityPrice",
      headerName: "Price",
      width: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Actions params={params} setUpdate={setUpdate} />
      ),
    },
  ];

  return (
    <div>
      <h3 className="text-center m-4  ">commodity Requests</h3>
      <Button onClick={DeleteSelected}>Delete</Button>
      <DataGridTable columns={columns} data={data} />
    </div>
  );
}
