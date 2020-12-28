import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Icon, List } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import dashboard from "../assets/images/dashboard.svg";
import finance from "../assets/images/finance.svg";

const useStyles = makeStyles({
  imageIcon: {
    display: "flex",
    height: "inherit",
    width: "inherit",
  },
  iconRoot: {
    textAlign: "center",
  },
});

const MainListItems = () => {
  const classes = useStyles();
  return (
    <>
      <List>
        <ListItem button component={Link} to={"/dashboard"}>
          <ListItemIcon>
            <Icon classes={{ root: classes.iconRoot }}>
              <img
                className={classes.imageIcon}
                src={dashboard}
                alt="dashboard icon"
              />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to={"/finance"}>
          <ListItemIcon>
            <Icon classes={{ root: classes.iconRoot }}>
              <img
                className={classes.imageIcon}
                src={finance}
                alt="finance icon"
              />
            </Icon>
          </ListItemIcon>
          <ListItemText primary="Finance" />
        </ListItem>
      </List>
    </>
  );
};

export default MainListItems;
