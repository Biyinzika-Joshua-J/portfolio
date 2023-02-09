import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import HeaderImage from "../../assests/header-image.png";
import HeaderImageMobile from "../../assests/jb-small-screens.png";

import { HeaderText } from "./headerText";

import { motion, m, LazyMotion, domAnimation } from "framer-motion";

import "./header.css";

export const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isVisible = true;
  return (
  
      <Grid container spacing={2} id='about'>
        <Grid
          item
          md="6"
          sx={{ marginTop: "100px", order: isSmallScreen ? "2" : "1" }}
        >
          <HeaderText />
        </Grid>

        <Grid
          item
          md="6"
          sx={{ marginTop: "100px", order: isSmallScreen ? "1" : "2" }}
        >
          <div className="header-image">
            {isSmallScreen ? (
              <img src={HeaderImageMobile} alt="Joshua" />
            ) : (
              <img src={HeaderImage} alt="Joshua" />
            )}
          </div>
        </Grid>
      </Grid>
  
  );
};
