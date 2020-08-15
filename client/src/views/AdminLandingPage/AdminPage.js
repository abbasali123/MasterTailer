import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
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

// import CategoryComponent from "./CategoryComponent";
import salesman from "assets/img/examples/salesman.png";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import CustomerTable from "./CustomerTable";
import axios from "axios";
import { Table } from "reactstrap";
import Image from "material-ui-image";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import OrderBookerTable from "./OrderBookerTable";
import DarziTable from "./DarziTable";

const useStyles = makeStyles(styles);

export default function AdminPage(props) {
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

    console.log(items);
  };

  const renderDelete = (itemId) => {
    for (var i = items.length - 1; i >= 0; --i) {
      if (items[i]._id == itemId) {
        items.splice(i, 1);
      }
    }
    renderAmount();
    setItems(items);
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
        brand="MasterTailer"
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
                  tabButton: "Customer's Order",
                  tabIcon: ShoppingCartIcon,
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
                        <span style={{ lineHeight: 1 }}>Customer's Orders</span>
                      </div>
                      <div>
                        <CustomerTable />
                      </div>
                    </div>
                  ),
                },
                {
                  tabButton: "Orderbooker's Order",
                  tabIcon: StorefrontIcon,
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
                          OrderBooker's Orders
                        </span>
                      </div>
                      <div>
                        <OrderBookerTable />
                      </div>
                    </div>
                  ),
                },
                {
                  tabButton: "Darzi's Order",
                  tabIcon: StorefrontIcon,
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
                        <span style={{ lineHeight: 1 }}>Darzi's Orders</span>
                      </div>
                      <div>
                        <DarziTable />
                      </div>
                    </div>
                  ),
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
