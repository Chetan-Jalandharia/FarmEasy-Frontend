import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { lazy, useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import DrawerUser from "./DrawerUser";
import NavLinks from "./SubComponents/NavLinks";
import { useNavigate } from "react-router-dom";
import { RefreshContext } from '../../Common/Context/RefreshData';
const UserAvatar = lazy(() => import("./SubComponents/UserAvatar"));

const NavBar = () => {
  const auth = sessionStorage.getItem("auth");
  const { setUpdate } = useContext(RefreshContext)
  const navigate = useNavigate();
  const [DrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isFit = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "#8F00FF" }}>
        <Toolbar>
          <Container sx={{ display: "flex", justifyContent: "space-between" }}>
            {isFit ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FiMenu size={30} onClick={() => setDrawerOpen(true)} />

                <Box
                  onClick={() => navigate("/")}
                  sx={{
                    paddingLeft: 1
                  }}
                >
                  <img src="/Logo.png" alt="FarmEasy" width={110} height={45} />

                </Box>
              </Box>
            ) : (
              <Box
                onClick={() => navigate("/")}
              >
                <img src="/Logo.png" alt="FarmEasy" width={140} height={60} />
              </Box>
            )}

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {isFit ? (
                <DrawerUser isOpen={DrawerOpen} setOpen={setDrawerOpen} />
              ) : (
                <NavLinks />
              )}
              {!auth ? (
                <Box>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mx: 1 }}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ mx: 1 }}
                    size="small"
                    onClick={() => navigate("/signup")}
                  >
                    SignUp
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    gap: 3
                  }}
                >
                  <UserAvatar />
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      sessionStorage.removeItem("auth");
                      setUpdate((pre) => pre + 1);
                    }
                    }
                  >
                    Logout
                  </Button>
                </Box>
              )}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
