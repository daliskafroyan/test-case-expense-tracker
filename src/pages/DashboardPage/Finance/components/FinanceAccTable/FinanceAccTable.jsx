import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import {
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";

const columns = [
  { id: "accountName", label: "Account Name", minWidth: 170 },
  {
    id: "accountType",
    label: "Account Type",
    minWidth: 100,
  },
  {
    id: "desc",
    label: "Description",
    minWidth: 170,
    align: "right",
  },
  {
    id: "buttonAction",
    label: "Action",
    minWidth: 170,
    align: "right",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const FinanceAccTable = ({ accounts }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { items, requestSort, sortConfig } = useSortableData(accounts);
  const sortingIcon = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? (
      sortConfig.direction === "ascending" ? (
        <ArrowDropDownIcon />
      ) : (
        <ArrowDropUpIcon />
      )
    ) : undefined;
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) =>
                column.id !== "buttonAction" ? (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <Button
                      size="small"
                      onClick={() => {
                        requestSort(column.id);
                      }}
                      endIcon={sortingIcon(column.id)}
                      style={{
                        textTransform: "none",
                      }}
                    >
                      {column.label}
                    </Button>
                  </TableCell>
                ) : (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  />
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                    {columns.map((column) => {
                      const value = item[column.id];
                      return column.id !== "buttonAction" ? (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      ) : (
                        <TableCell>
                          <Button
                            key={column.id}
                            aria-controls="fade-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            endIcon={<ArrowDropDownIcon />}
                          >
                            Action
                          </Button>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={accounts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />

      {/* popover menu on each data */}
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ minWidth: "30px" }}>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">View</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ minWidth: "30px" }}>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Edit</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ minWidth: "30px" }}>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Delete</Typography>
        </MenuItem>
      </Menu>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    accounts: state.account.accounts,
  };
};

export default connect(mapStateToProps)(FinanceAccTable);
