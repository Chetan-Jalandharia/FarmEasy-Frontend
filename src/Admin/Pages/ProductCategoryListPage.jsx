import { useState, useEffect } from "react";
import AdminApis from "../../api/AdminApis";
import DataGridTable from "../Components/DataGridTable";
import { Avatar } from "@mui/material";
import CategoryActions from "../Actions/ProductCategoryActions";

export default function ProCatListPage() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    AdminApis.showProductCategory()
      .then((val) => {
        setdata(val.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          sx={{ width: 100, height: "85%" }}
        />
      ),
    },
    {
      field: "categoryName",
      headerName: "Name",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "categoryDesc",
      headerName: "Description",
      width: 450,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => <CategoryActions params={params} />,
    },
  ];

  return (
    <>
      <h3 className="text-center m-4  ">All Product Category</h3>

      <DataGridTable columns={columns} data={data} />
    </>
  );
}
