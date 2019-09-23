import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import logo from "../ustraa_2.png";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import useStyles from "../styles/Menustyle";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="USTRAA"
                height="30"
                image={logo}
                title="Ustraa"
              />{" "}
            </CardActionArea>
          </div>
          <div className={classes.icons}>
            <div className={classes.sectionDesktop}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <div>
                <IconButton aria-label="show 4 new mails" color="primary">
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </div>
              <div>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="primary"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </div>{" "}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
