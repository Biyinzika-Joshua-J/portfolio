import React, { useState } from "react";
import { Drawer, IconButton, Stack, Box, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menuLinks = [
  {
    text: "ABOUT",
    href: "#about",
  },

  {
    text: "PROJECTS",
    href: "#projects",
  },

  {
    text: "CONTACT",
    href: "#contact",
  },
 
];

const DrawerComp = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <Box width={150}>
          <Stack direction={"row"}>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ marginLeft: "auto" }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack direction={"column"} spacing={5} sx={{ alignItems: "center" }}>
            {menuLinks.map((link, index) => (
              <Link href={link.href} onClick={() => setOpen(false)} key={index}>
                {link.text}
              </Link>
            ))}
          </Stack>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
