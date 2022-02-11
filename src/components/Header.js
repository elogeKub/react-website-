import React from "react";
import {
  Badge,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Blogging site
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar
        style={{
          fontSize: 20,
          justifyContent: "center",
          fontFamily: "Montserrat",
        }}
      >
        Express your support...
      </Toolbar>
    </>
  );
};
export default Header;
