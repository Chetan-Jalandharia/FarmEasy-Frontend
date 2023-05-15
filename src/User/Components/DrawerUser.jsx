import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { FiChevronLeft } from "react-icons/fi";
import { FaTractor, FaHome } from "react-icons/fa";
import { GiFertilizerBag } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import React from "react";
import { useNavigate } from "react-router-dom";

const DrawerUser = ({ isOpen, setOpen }) => {
  const navigate = useNavigate();
  const [ListOpen, setListOpen] = React.useState(false);

  const handleListClick = () => {
    setListOpen(!ListOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#282A3A",
            color: "white",
            width: 300,
          },
        }}
        // variant="persistent"
        anchor="left"
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: 2,
            paddingBottom: 1,
          }}
        >
          {/* <IconButton>
            <FaTractor color="white" size={26} />
          </IconButton> */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", paddingTop: 0.8 }}
            onClick={() => {
              navigate("/");
              handleClose();
            }}
          >
            FarmEasy
          </Typography>
          <IconButton>
            <FiChevronLeft color="white" onClick={() => setOpen(false)} />
          </IconButton>
        </Box>

        <Divider />

        <List sx={{ paddingLeft: 4 }}>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("/");
              handleClose();
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <FaHome size={25} color="white" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => handleListClick()}>
            <ListItemButton>
              <ListItemIcon>
                <BiCategory size={25} color="white" />
              </ListItemIcon>
              <ListItemText primary="Categories" />
              {ListOpen ? <MdExpandLess /> : <MdExpandMore />}
            </ListItemButton>
          </ListItem>

          <Collapse in={ListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                disablePadding
                onClick={() => {
                  navigate("/product/categories");
                  handleClose();
                }}
              >
                <ListItemButton sx={{ pl: 8 }}>
                  <ListItemText primary="Product Category" />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                onClick={() => {
                  navigate("/commodity/categories");
                  handleClose();
                }}
              >
                <ListItemButton sx={{ pl: 8 }}>
                  <ListItemText primary="Commodity Category" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            disablePadding
            onClick={() => {
              navigate("/product/showall");
              handleClose();
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <FaTractor size={25} color="white" />{" "}
              </ListItemIcon>
              <ListItemText primary="Machines" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("/commodity/showall");
              handleClose();
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <GiFertilizerBag size={25} color="white" />
              </ListItemIcon>
              <ListItemText primary="Commodity" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default DrawerUser;
