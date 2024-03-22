import { Menu, MenuItem, Tab, Tabs } from "@mui/material";
import { common } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavLinks = () => {
  const [Value, setValue] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const linkTab = (e) => {
    const link = e.target.attributes.link.value;
    navigate(link);
  };

  const showMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenu = (e) => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu open={open} id="catMenu" onClose={closeMenu} anchorEl={anchorEl}>
        <MenuItem
          onClick={() => {
            setTimeout(() => {
              navigate("/product/categories");
            }, 500);
            closeMenu();
          }}
        >
          Product Category
        </MenuItem>
        <MenuItem
          onClick={() => {
            setTimeout(() => {
              navigate("/commodity/categories");
            }, 500);
            closeMenu();
          }}
        >
          Commodity Category
        </MenuItem>
      </Menu>

      <Tabs
        value={Value}
        onChange={(e, value) => {
          setValue(value);
        }}
        textColor={common.white}
        TabIndicatorProps={{
          sx: { backgroundColor: "#FFDCB6" },
        }}
      >
        <Tab value={1} onClick={linkTab} label="Home" link="/" />

        <Tab id="catMenu" value={2} onClick={showMenu} label="Category" />

        <Tab
          id="proMenu"
          value={3}
          onClick={linkTab}
          label="Machines"
          link="/product/showall"
        />
        <Tab
          value={4}
          onClick={linkTab}
          label="Commodity"
          link="/commodity/showall"
        />
      </Tabs>
    </>
  );
};

export default NavLinks;
