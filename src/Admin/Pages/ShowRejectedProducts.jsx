import { Avatar, Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Actions from '../Actions/ProductRejectActions'
import AdminApis from '../../api/AdminApis'
import DataGridTable from '../Components/DataGridTable'
import { RefreshContext } from '../../Common/Context/RefreshData'

export default function ShowRejectedProducts() {
  const { Update, setUpdate } = useContext(RefreshContext)

  const [data, setData] = useState([])
  useEffect(() => {
    AdminApis.showRejectedProduct()
      .then((val) => {
        console.log(val.data.data);
        setData(val.data.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [Update])

  const columns = [
    {
      field: 'imgPath',
      headerName: 'Image',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      renderCell: params => (
        <Avatar src={ params.row.imgPath} variant='rounded' sx={{ width: 100, height: "85%" }} />
      )
      ,
    }, {
      field: "productName", headerName: "Name", width: 200, headerAlign: 'center',
      align: 'center'
    },
    {
      field: "productDescription", headerName: "Description", width: 470, headerAlign: 'center',
      align: 'center',
    },
    {
      field: "productType", headerName: "Type", width: 90, headerAlign: 'center',
      align: 'center',
    },
    {
      field: "productPrice", headerName: "Price", width: 130, headerAlign: 'center',
      align: 'center'
    },

    {
      field: "actions", headerName: "Actions", width: 110, headerAlign: 'center',
      align: 'center', renderCell: (params) => <Actions params={params} setUpdate={setUpdate} />
    },
  ]


  return (
    <div>
      <h3 className='text-center m-4  '>Product Requests</h3>
      <DataGridTable columns={columns} data={data} />
    </div>
  )
}
