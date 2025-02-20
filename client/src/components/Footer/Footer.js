/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);
var records = "";
export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <section id="footer" style={{ backgroundColor: "skyblue" }}>
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <h1 style={{ color: "white", cursor: "pointer" }}>MasterTailer</h1>
            Lets Start making your dream Clothes
          </div>

          <div className="col-xs-12 col-sm-2 col-md-2">
            <h5>About US</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Why it Works
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Why Us
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-2 col-md-2">
            <h5>MAKE MONEY WITH US</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Partner with Us
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Careers
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Pricing
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Payment Methods
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-2 col-md-2">
            <h5>CUSTOMER CARE</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  {records}
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  How to Order
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Corporate & Bulk Purchasing
                </a>
              </li>
              <li>
                <a href="javascript:void();">
                  <i className="fa fa-angle-double-right" />
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-double-right" />
                  Order Protection
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a href="javascript:void();">
                  <FacebookIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();">
                  <TwitterIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();">
                  <InstagramIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();">
                  <i class="fa fa-google-plus-official" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void();" target="_blank">
                  <EmailSharpIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <a href="">Mastertailor.pk</a>
              </u>{" "}
              Partners near you.
            </p>
            <p className="h6">
              © All right Reversed.
              <a className="text-green ml-2" href="" target="_blank"></a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
