import React, { useState, useEffect, useContext } from "react";
import AdminApis from "../../api/AdminApis";
import { Avatar } from "@mui/material";
import DataGridTable from "../../Admin/Components/DataGridTable";
import CommodityActions from "../../Admin/Actions/CommodityActions";
import { RefreshContext } from "../../Common/Context/RefreshData";

export default function commodityListPage() {
  const { Update, setUpdate } = useContext(RefreshContext);

  const [data, setdata] = useState([]);

  useEffect(() => {
    AdminApis.showAllCommodity()
      .then((val) => {
        console.log(val.data.data);
        setdata(val.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Update]);

  const columns = [
    {
      field: "imgPath",
      headerName: "Image",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Avatar
          src={params.row.imgPath}
          variant="rounded"
          sx={{ width: 75, height: "95%" }}
        />
      ),
    },
    {
      field: "commodityName",
      headerName: "Name",
      width: 180,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "commodityDescription",
      headerName: "Description",
      width: 420,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "commodityWeight",
      headerName: "Weight",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "commodityQuantity",
      headerName: "Quantity",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "commodityPrice",
      headerName: "Price",
      width: 100,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => "₹ " + params.row.commodityPrice,
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <CommodityActions params={params} setUpdate={setUpdate} />
      ),
    },
  ];
  return (
    <>
      <h3 className="text-center m-4  ">All Commodity List</h3>
      <DataGridTable columns={columns} data={data} />
    </>
  );
}
