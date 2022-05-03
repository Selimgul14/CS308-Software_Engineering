import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { Popper, Stack } from "@mui/material";
import DropDownMenu from "./categories/DropDownMenu";

const ResponsiveAppBar = () => {
  const [pages, setData] = useState([]);
  const getData = async () => {
    //const { data } = await axios.get("http://localhost:8000/customMockData/1");

    const { data } = await axios.get(
      "http://164.92.208.145/api/v1/categories/?skip=0&limit=100",
      {
        headers: {
          "Access-Control-Allow-Origin":
            "http://164.92.208.145/api/v1/categories/?skip=0&limit=100",
        },
      }
    );

    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  /*
  const [myStyle, setStyle] = React.useState({ display: "none" });
  
  const [open, openHandler] = React.useState(false);
  const handleDropDownMenuOpen = () => {
    if (open) {
      setStyle({ display: "none" });
      openHandler(false);
    } else {
      setStyle({ display: "block" });
      openHandler(true);
    }
  };


  const handleDropDownMenuClose = () => {
    console.log("handleDropDownMenuClose")
    setStyle({ display: "none" });
  };

  

  const handleClickAwayDropDown = () => {
    openHandler(false);
    setStyle({ display: "none" });
  };

  */

  /*
  //Drop down menu button handlers (Popover)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(document.getElementById("myStack"));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [img, setImg] = React.useState();
  const [subs, setSubs] = React.useState();
  const HandleClick = (props) => {
    console.log(props.imga);
    setImg(props.imga);
  };

  const handleClick = (imga, sub) => {
    setAnchorEl(anchorEl ? null : document.getElementById("myStack"));
    setImg(imga);
    setSubs(sub);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <div>
      <AppBar position="static" color="inherit" id="myStack">
        <Container maxWidth="false">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              ></IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  // todo : handleCloseNavMenu
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                paddingBottom: 0,
                display: { xs: "none", md: "inline" },
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-around"
                paddingBottom="0"
              >
                {pages.map((page, i) => (
                  <Button
                    aria-describedby={id}
                    onClick={() => {
                      handleClick(page.image_url, page.subcategories);
                    }}
                    key={i}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.title}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{ display: "block", width: "100%" }}
      >
        <DropDownMenu img={img} sub={subs} />
      </Popper>
    </div>
  );
};
export default ResponsiveAppBar;

/*
      <Popover
        gutterBottom="False"
        sx={{ padding: 0 }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <DropDownMenu></DropDownMenu>
      </Popover>

      */
