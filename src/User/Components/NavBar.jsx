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
const UserAvatar = lazy(() => import("./SubComponents/UserAvatar"));

const NavBar = () => {
  const auth = sessionStorage.getItem("auth");
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
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  paddingLeft={1}
                  onClick={() => navigate("/")}
                >
                  FarmEasy
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  FarmEasy
                </Typography>
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
                    sx={{mx:1}}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{mx:1}}
                    size="small"
                    onClick={() => navigate("/signup")}
                  >
                    SignUp
                  </Button>
                </Box>
              ) : (
                <UserAvatar />
              )}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
