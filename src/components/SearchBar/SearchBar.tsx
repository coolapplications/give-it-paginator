import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./SearchBar.styles";
import { apiRequest } from "../../apiService";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import RedeemIcon from "@material-ui/icons/Redeem";
import Badge from "@material-ui/core/Badge";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { RootState } from "../../store";
import Login from "../Login/Login";

function SearchBar() {
  const [newText, onChangeText] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const counter = useSelector(
    (store: RootState) => store.myProductListReducer.result.length
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.toolbar}>
          <div className={classes.sectionDesktop}>
            <IconButton component={Link} to="/home" color="inherit">
              <AccountBalanceIcon />
            </IconButton>
            <IconButton component={Link} to="/gifts" color="inherit">
              <Badge badgeContent={counter} showZero={true}>
                <RedeemIcon />
              </Badge>
            </IconButton>
          </div>

          <Button
            component={Link}
            to="/gifts"
            disableElevation
            className={classes.button}
          >
            My gifts
          </Button>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={event => {
                const newText = event.target.value;
                onChangeText(newText);
                dispatch(apiRequest(newText));
              }}
              onKeyPress={event => {
                if (event.key === "Enter" && newText) {
                  onChangeText(newText);
                  dispatch(apiRequest(newText));
                  history.push("/home");
                }
              }}
              classes={{
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Login />
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default SearchBar;
