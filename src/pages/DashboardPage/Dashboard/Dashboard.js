// Main Library
import React from "react";
import clsx from "clsx";

// Material UI Library
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccountCircle from "@material-ui/icons/AccountCircle";

import DashboardIcon from "@material-ui/icons/Dashboard";

import {
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  Grid,
  Container,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  Drawer,
  CssBaseline,
} from "@material-ui/core";

// Components
import Chart from "./Components/Chart";
import Deposits from "./Components/Balance";
import MainListItems from "../../../components/MainListItems";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "#F4F9FD",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#F4F9FD",
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    background:
      "transparent linear-gradient(96deg, #569AD3 0%, #488CC7 100%) 0% 0% no-repeat padding-box",
    color: "#fff",
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
    background:
      "transparent linear-gradient(96deg, #569AD3 0%, #488CC7 100%) 0% 0% no-repeat padding-box",
    color: "#fff",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    backgroundColor: "#F4F9FD",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    visibility: "visible",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    boxShadow: "0px 12px 20px #8D8D8D29",
  },
  fixedHeight: {
    height: 300,
  },
  halfFixedHeight: {
    height: 100,
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const halfFixedHeightPaper = clsx(classes.paper, classes.halfFixedHeight);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
          elevation={0}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon style={{ color: "#000" }} />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="secondary"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <Button
              color="transparent"
              startIcon={<DashboardIcon />}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              User
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <MainListItems />
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}

              <Grid item xs={12} md={8} lg={9}>
                <Box
                  fontWeight="fontWeightBold"
                  fontSize={16}
                  style={{ marginBottom: "8px" }}
                >
                  This Year
                </Box>
                <Paper className={fixedHeightPaper}>
                  <Chart />
                </Paper>
              </Grid>

              {/* Recent Balance */}
              <Grid item xs={12} md={4} lg={3}>
                <Box
                  fontWeight="fontWeightBold"
                  fontSize={16}
                  style={{ marginBottom: "8px" }}
                >
                  Recent Balance
                </Box>
                <Paper className={fixedHeightPaper}>
                  <Deposits />
                </Paper>
              </Grid>

              {/* Finance Account */}

              <Grid item xs={12}>
                <Box
                  fontWeight="fontWeightBold"
                  fontSize={16}
                  style={{ marginBottom: "8px" }}
                >
                  Finance Account
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Paper className={halfFixedHeightPaper}>
                      <Box display="flex" p={1}>
                        <Box p={1} flexGrow={1}>
                          <AccountCircle />
                        </Box>
                        <Box p={1} flexGrow={3}>
                          <Typography>Person</Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>

                  <Grid item xs={3}>
                    <Paper className={halfFixedHeightPaper}>
                      <Box display="flex" p={1}>
                        <Box p={1} flexGrow={1}>
                          <AccountCircle />
                        </Box>
                        <Box p={1} flexGrow={3}>
                          <Typography>Person</Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>

                  <Grid item xs={3}>
                    <Paper className={halfFixedHeightPaper}>
                      <Box display="flex" p={1}>
                        <Box p={1} flexGrow={1}>
                          <AccountCircle />
                        </Box>
                        <Box p={1} flexGrow={3}>
                          <Typography>Person</Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>

                  <Grid item xs={3}>
                    <Paper className={halfFixedHeightPaper}>
                      <Box display="flex" p={1}>
                        <Box p={1} flexGrow={1}>
                          <AccountCircle />
                        </Box>
                        <Box p={1} flexGrow={3}>
                          <Typography>Person</Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
