import { Avatar, Box, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import UserApis from "../../../api/UserApis";
import { useNavigate } from "react-router-dom";

const UserAvatar = () => {
    const navigate=useNavigate()
  const [data, setdata] = useState({});
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("tokenData"));
    UserApis.showSingleCustomer(user?.userId)
      .then((val) => {
        setdata(val.data.data);
      })
      .catch((err) => {
        console.log("message:" + err);
      });
  }, []);

  const img = data?.customerId?.imgPath;

  return (
    <Box onClick={()=>navigate(`/profile/${data._id}`)}>
      <Tooltip title={data?.customerId?.customerName}>
        <Avatar src={img} sx={{ marginLeft: 2 }}  />
      </Tooltip>
    </Box>
  );
};

export default UserAvatar;
