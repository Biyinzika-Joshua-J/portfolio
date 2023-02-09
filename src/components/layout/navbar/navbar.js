import React from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  IconButton,
  MenuItem,
  Button,
  Typography,
  Box,
  Menu,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { fontWeight } from "@mui/system";
import DrawerComp from "../../drawer/drawer";

export const Navbar = () => {
    const theme = useTheme();

    const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));
    

  return (
    <>
      <AppBar color="transparent">
        <Toolbar>
          <Typography
            component={"div"}
            variant="h6"
            sx={{
              flexGrow: 1,
              alignSelf: "flex-end",
              fontWeight: "400",
              fontSize: "20px",
            }}
          >
            Joshua B
          </Typography>

          {
            isMobileSize ? <DrawerComp/>:<Stack direction={"row"} sx={{ alignSelf: "flex-end" }}>
          <Button href="#about" sx={{ marginLeft: "100px" }}>
            <Typography color={"#000"}>About</Typography>
          </Button>

          <Button href="#projects" sx={{ marginLeft: "100px" }}>
            <Typography color={"#000"}>Projects</Typography>
          </Button>

          <Button href="#contact" sx={{ marginLeft: "100px" }}>
            <Typography color={"#000"}>Contact</Typography>
          </Button>
          </Stack>
          }
        </Toolbar>
       
      </AppBar>
    </>
  );
};
