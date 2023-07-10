import React, { useState } from "react";
import { Drawer, IconButton, Stack, Box, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const menuLinks = [
  {
    text: "HOME",
    href: "#home",
  },
  {
    text: "ABOUT",
    href: "#about",
  },
  {
    text: "SKILLS",
    href: "#skills",
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

const MobileNav = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <Box width={300}>
          <div className="flex items-center px-4 py-4">
            <div className="text-3xl ">JB</div>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ marginLeft: "auto" }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-400">
                <CloseIcon />
              </div>
            </IconButton>
          </div>
          <Stack direction={"column"} spacing={5} sx={{ alignItems: "center" }}>
            {menuLinks.map((link, index) => (
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                key={index}
                className="text-[#321E1E] text-sm"
              >
                {link.text}
              </Link>
            ))}
          </Stack>

          <div className="">
            <h4 className="text-black text-center pt-8 text-2xl underline-offset-4 underline">
              Let's connect
            </h4>
            <div className="flex items-center justify-center pt-4">
              <IconButton
                href="https://www.linkedin.com/in/biyinzika-joshua-j"
                target="__blank"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-400">
                  <LinkedInIcon className="text-[#4E3636]" />
                </div>
              </IconButton>

              <IconButton href="https://github.com/Biyinzika-Joshua-J" target="__blank">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-400">
                  <GitHubIcon className="text-[#4E3636]" />
                </div>
              </IconButton>

              <IconButton href="https://twitter.com/JoshJosephB" target="__blank">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-400">
                  <TwitterIcon className="text-[#4E3636]" />
                </div>
              </IconButton>
              <IconButton href="mailto:joshuabiyinzika22@gmail.com" target="__blank">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl shadow-gray-400">
                  <EmailIcon className="text-[#4E3636]" />
                </div>
              </IconButton>
            </div>
          </div>
        </Box>
      </Drawer>
      <IconButton className="text-white" onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default MobileNav;
