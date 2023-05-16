// import axios from 'axios'
import React, { useState, useEffect, useMemo, useContext } from "react";
import { Avatar, Button } from "@mui/material";
import AdminApis from "../../api/AdminApis";
import DataGridTable from "../../Admin/Components/DataGridTable";
import ProductActions from "../../Admin/Actions/ProductActions";
import { RefreshContext } from "../Context/RefreshData";

export default function ProductPage() {
  const { Update, setUpdate } = useContext(RefreshContext);

  const [data, setdata] = useState([]);

  useEffect(() => {
    AdminApis.showAllProduct()
      .then((val) => {
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
          sx={{ width: 100, height: "85%" }}
        />
      ),
    },
    {
      field: "productName",
      headerName: "Name",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "productDescription",
      headerName: "Description",
      width: 450,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "productType",
      headerName: "Type",
      width: 80,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "productPrice",
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
        <ProductActions params={params} setUpdate={setUpdate} />
      ),
    },
  ];

  return (
    <>
      <h3 className="text-center m-4  ">All Products</h3>
      <Button onClick={() => setUpdate(true)}>refresh</Button>
      <DataGridTable columns={columns} data={data} />
    </>
  );
}
