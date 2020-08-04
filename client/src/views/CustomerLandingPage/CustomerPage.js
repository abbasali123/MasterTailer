import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import socketIOClient from "socket.io-client";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import Camera from "@material-ui/icons/Camera";
import PersonIcon from "@material-ui/icons/Person";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// core components

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Header from "components/Header/LoginHeader.js";

import HeaderLinks from "components/Header/LoginHeaderLinks.js";

import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import { SectionCarousel } from "views/Components/Sections/SectionCarousel.js";
import SectionCard from "views/Components/Sections/SectionCards.js";
import profile from "assets/img/faces/christian.jpg";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CategoryComponent from "./CategoryComponent";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import CartComponent from "./CartComponent";
import axios from "axios";
import { Table } from "reactstrap";
import Image from "material-ui-image";
import CustomerPastOrder from "./CustomersPastOrder";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function CustomerPage(props) {
  const [count, setcount] = useState(0);
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const [data, setdata] = useState([]);
  const [amount, setAmount] = useState(0);

  const renderItems = (itemName, itemPrice, itemStatus, itemId) => {
    var item = {};
    item.name = itemName;
    item.price = itemPrice;
    item.status = itemStatus;
    item._id = itemId;
    setItems((oldArray) => [...oldArray, item]);
    toaster.notify(
      <div style={{ color: "green", width: 200 }}>Item added to Cart</div>,
      {
        duration: 2000,
        position: "top",
      }
    );
    console.log(items);
  };

  var myModule = require("../database");
  const ENDPOINT = myModule.servername;

  const socket = socketIOClient(ENDPOINT);
  const renderDelete = (itemId) => {
    for (var i = items.length - 1; i >= 0; --i) {
      if (items[i]._id == itemId) {
        items.splice(i, 1);
      }
    }
    renderAmount();
    setItems(items);
    toaster.notify(
      <div style={{ color: "red", width: 200 }}>Item deleted from Cart</div>,
      {
        duration: 2000,
        position: "top",
      }
    );
    console.log(items);
  };
  useEffect(() => {
    renderAmount();
  }, [items]);
  const renderAmount = () => {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
      total += Number(items[i].price);
    }
    console.log(total);
    setAmount(total);
  };

  const PostOrder = async () => {
    console.log("In PostOrder");
    var myModule = require("../database");
    await axios
      .post(
        myModule.servername + "/api/users/PostOrder",
        {
          Order: items,
          OrderPrice: amount,
          OrderBy: window.localStorage.getItem("darziwebtoken"),
        },

        {
          headers: {
            "x-auth-token": window.localStorage.getItem("jsonToken"),
          },
        }
      )
      .then(function(response) {
        console.log(response);
      });
    toaster.notify("Order Created", {
      duration: 2000,
    });
    socket.emit("orderproceed", localStorage.getItem("darziwebtoken"));
  };

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Home"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />

      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Shopping",
                  tabIcon: ShoppingCartIcon,
                  tabContent: (
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12} lg={12}>
                        <NavPills
                          color="rose"
                          horizontal={{
                            tabsGrid: { xs: 12, sm: 4, md: 4 },
                            contentGrid: { xs: 12, sm: 8, md: 8 },
                          }}
                          tabs={[
                            {
                              tabButton: "Add Items",
                              tabIcon: ShoppingBasketIcon,
                              tabContent: (
                                <div>
                                  <div
                                    style={{
                                      alignItems: "center",
                                      justifyContent: "center",
                                      display: "flex",
                                      fontSize: 40,
                                      padding: 30,
                                    }}
                                  >
                                    <span style={{ lineHeight: 1 }}>
                                      Click On Any Category To Get Started
                                    </span>
                                  </div>
                                  <div>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "row",
                                        padding: 20,
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: "30%",
                                        }}
                                      >
                                        <Image src="https://ae01.alicdn.com/kf/HTB1MZE0LyLaK1RjSZFxq6ymPFXay/New-flower-pageant-dress-children-clothes-kids-garments-wholesale-flower-girl-dresses-party-embroidery-wedding.jpg" />{" "}
                                        <center>
                                          <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => setCategory("kid")}
                                            style={{ width: "75%" }}
                                          >
                                            Kids
                                          </Button>
                                        </center>
                                      </div>

                                      <div style={{ width: "30%" }}>
                                        <Image src="https://4.imimg.com/data4/UA/JU/MY-11498914/cotton-shirt-500x500.jpg" />{" "}
                                        <center>
                                          <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => setCategory("men")}
                                            style={{ width: "75%" }}
                                          >
                                            Gents
                                          </Button>
                                        </center>
                                      </div>

                                      <div style={{ width: "30%" }}>
                                        <Image src="https://ae01.alicdn.com/kf/HTB1qpiML9rqK1RjSZK9q6xyypXa1/Zuolunouba-Fall-Ladies-Loose-Irregular-Hooded-Long-Garments-Hat-Guards-Streetwear-Solid-Pullovers-Red-Hoodies-Women.jpg" />{" "}
                                        <center>
                                          <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => setCategory("Lady")}
                                            style={{ width: "75%" }}
                                          >
                                            Ladies
                                          </Button>
                                        </center>
                                      </div>
                                    </div>
                                    {category !== "" && (
                                      <CategoryComponent
                                        category={category}
                                        renderItems={renderItems}
                                      />
                                    )}
                                  </div>
                                </div>
                              ),
                            },
                            {
                              tabButton: "Cart",
                              tabIcon: AddShoppingCartIcon,
                              tabContent: (
                                <div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      justifyContent: "space-between",

                                      textAlign: "center",
                                    }}
                                  >
                                    <div style={{ flex: 2 }}>
                                      <span style={{ fontSize: 30 }}>
                                        {items.length >= 1
                                          ? "Items Currently in Cart"
                                          : "Cart is Empty"}
                                      </span>

                                      {items.length >= 1 && (
                                        <CartComponent
                                          data={items}
                                          renderDelete={renderDelete}
                                        />
                                      )}
                                    </div>
                                    <div
                                      style={{
                                        flex: 1,
                                        // borderWidth: 3,
                                        // borderColor: "black",
                                        // borderRadius: 5,
                                        // borderStyle: "Solid",
                                        // padding: 30,
                                        fontSize: 30,
                                      }}
                                    >
                                      <span style={{}}></span>
                                      Total Amount:
                                      <br />
                                      {
                                        /* {items.reduce((prev, next) => prev + Number(next.price), 0)} */ amount
                                      }
                                      <br />
                                      <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => PostOrder()}
                                        style={{ width: "75%" }}
                                      >
                                        Proceed To CheckOut
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              ),
                            },
                          ]}
                        />
                      </GridItem>
                    </GridContainer>
                  ),
                },
                {
                  tabButton: "Order Requested",
                  tabIcon: StorefrontIcon,
                  tabContent: <CustomerPastOrder />,
                },
              ]}
            />
          </GridItem>
        </GridContainer>

        <hr />
        <Footer />
      </div>
    </div>
  );
}
