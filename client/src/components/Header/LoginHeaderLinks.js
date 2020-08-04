/*eslint-disable*/
import React, { useState, useEffect } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import CreateIcon from "@material-ui/icons/Create";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
const fs = require("fs");
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [userName, setUsername] = useState("");
  const [number, setnumber] = useState("");
  const classes = useStyles();

  var email = "";

  async function signout() {
    localStorage.removeItem("darziwebtoken");
    window.location = "/";
  }

  async function fetchMyAPI() {
    console.log(window.location.pathname);
    console.log("fffffffffffffff");
    var parts = window.location.pathname.split("/");
    var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash

    console.log(lastSegment);
    var myModule = require("views/database");
    const response = await fetch(
      myModule.servername + "/api/users/getprofile",
      {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `id=${window.localStorage.getItem("darziwebtoken")}`,
      }
    );
    const json = await response.json();

    // console.log(json);

    email = json.number;
    setUsername(json.username);
    setnumber(json.number);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={
            // <NotificationsActiveIcon
            //   fontSize="large"
            //   style={{ width: "100%" }}
            // />
            <i className="material-icons" style={{ fontSize: 38 }}>
              notifications_none
            </i>
          }
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <div
              style={{
                width: "100%",
                height: 500,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "transparent",
              }}
            >
              <div style={{ flex: 7 }}>
                <ul style={{ listStyleType: "none" }}>
                  <li
                    style={{
                      listStyleType: "none",
                      marginLeft: "0px",
                      paddingLeft: "0px",
                      display: "inline-block",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={work5}
                      style={{ float: "left" }}
                    />
                    <p
                      style={{
                        textAlign: "right",
                        display: "inline-block",
                        padding: 0,
                      }}
                    >
                      Hello
                    </p>
                  </li>
                </ul>
              </div>
              <div style={{ flex: 1 }}>
                <Button style={{ backgroundColor: "skyblue", width: "100%" }}>
                  See All
                </Button>
              </div>
            </div>,
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={<Avatar alt="Remy Sharp" src={work5} />}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              <PersonIcon fontSize="small" /> Profile
            </Link>,
            <a href="" target="_blank" className={classes.dropdownLink}>
              <CreateIcon fontSize="small" /> Edit Profile
            </a>,
            <a onClick={signout} lassName={classes.dropdownLink}>
              <ExitToAppIcon fontSize="small" /> Sign Out
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          style={{ color: "skyblue", fontSize: 20 }}
        >
          {userName.substring(0, 5)}
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href=""
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href=""
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
