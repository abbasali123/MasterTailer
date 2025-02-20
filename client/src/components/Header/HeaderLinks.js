/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Join Us As"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/Signup/customer" className={classes.dropdownLink}>
              Customer
            </Link>,
             <Link to="/Signup/darzi" className={classes.dropdownLink}>
            Master Darzi
           </Link>,
            <a href="/Signup/orderbooker"  className={classes.dropdownLink}>
              Order Bookeer
            </a>,
             <a href="/Signup/affialate"  className={classes.dropdownLink}>
             Affialate person
           </a>,
            <a href="/Signup/support"  className={classes.dropdownLink}>
            Customer Support
          </a>,
          ]}
       
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/Signup"
          color="transparent"
          className={classes.navLink}
        >
          About us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/Signup"
          color="transparent"
          className={classes.navLink}
        >
          Track Your Order
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/Signup"
          color="transparent"
          className={classes.navLink}
        >
          Request a Call Back
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/Signin"
          color="transparent"
          className={classes.navLink}
        >
         Signin
        </Button>
      </ListItem>
      {/* <CustomDropdown
          noLiPadding
          buttonText="Join Us As"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/Signup/customer" className={classes.dropdownLink}>
              Customer
            </Link>,
             <Link to="/Signup/darzi" className={classes.dropdownLink}>
            Master Darzi
           </Link>,
            <a href="/Signup/orderbooker"  className={classes.dropdownLink}>
              Order Bookeer
            </a>,
          ]}
        /> */}

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
