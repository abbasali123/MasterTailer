import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import socketIOClient from "socket.io-client";
import Camera from "@material-ui/icons/Camera";
import PersonIcon from "@material-ui/icons/Person";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
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

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";

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
import toaster from "toasted-notes";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MaleOrder from "views/LandingPage/OrderBooker/MaleOrder";
import FemaleOrder from "views/LandingPage/OrderBooker/FemaleOrder";

import axios from "axios";
import { Table } from "reactstrap";
import Image from "material-ui-image";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Form, FormGroup, Label, Input } from "reactstrap";

const useStyles = makeStyles(styles);

export default function CustomerPage(props) {
  const [count, setcount] = useState(0);
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const [Details, setDetails] = useState([]);
  const [data, setdata] = useState([]);
  const [amount, setAmount] = useState(0);
  const [gender, setGender] = useState("Male");
  var myModule = require("../database");
  const handleGender = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };

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
      .post(myModule.servername + "/api/users/PostOrder", {
        Order: items,
        OrderPrice: amount,
        OrderBy: window.localStorage.getItem("darziwebtoken"),
      })
      .then(function(response) {
        console.log(response);
      });
    toaster.notify("Order Created", {
      duration: 2000,
    });
    socket.emit("orderproceed", localStorage.getItem("darziwebtoken"));
  };

  const handleDetails = (id) => {
    if (Details.includes(id)) {
      console.log(id);
      setDetails(Details.filter((item) => item !== id));
    } else {
      setDetails((oldArray) => [...oldArray, id]);
    }
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
                  tabButton: "Take Measurements",
                  tabIcon: AccessibilityNewIcon,
                  tabContent: (
                    <div>
                      <center>
                        <GridContainer className="inputs">
                          <GridItem xs={12} sm={4} md={4} lg={3}>
                            <FormGroup>
                              <Label for="Select" style={{ color: "black" }}>
                                Select Gender
                              </Label>
                              <Input
                                type="select"
                                name="quli"
                                id="exampleSelect"
                                onChange={handleGender}
                              >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </Input>
                            </FormGroup>
                          </GridItem>
                        </GridContainer>
                      </center>
                      {gender === "Male" && (
                        <MaleOrder
                          setdata={setdata}
                          gender={gender}
                          data={data}
                        />
                      )}
                      {gender === "Female" && (
                        <FemaleOrder setdata={setdata} gender={gender} />
                      )}
                    </div>
                  ),
                },
                {
                  tabButton: "Saved Measurements",
                  tabIcon: AssignmentIcon,
                  tabContent: (
                    // <div>
                    //   {data !== null &&
                    //     data.map((item) => (
                    //       <div>
                    //         {item.measure.map((det) => (
                    //           <ul>
                    //             <li>{det}</li>
                    //           </ul>
                    //         ))}
                    //       </div>
                    //     ))}
                    // </div>
                    <div>
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <Table
                          className="table"
                          striped
                          responsive
                          bordered
                          hover
                          style={{
                            width: "90%",
                            borderWidth: "2px",
                            borderColor: "black",
                            borderStyle: "solid",
                            textAlign: "center",
                            borderRadius: 10,
                            marginLeft: 70,
                            marginRight: 20,
                          }}
                        >
                          <thead
                            style={{
                              backgroundColor: "#3399ff",
                              color: "white",
                            }}
                          >
                            <tr>
                              <th>Measurements By</th>
                              <th>Gender</th>

                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item, idx) => {
                              return (
                                <tr key={item._id}>
                                  <td> </td>
                                  <td>{item.gender}</td>
                                  <td>
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      onClick={() => handleDetails(item._id)}
                                    >
                                      View Details
                                    </Button>
                                    {Details.includes(item._id) &&
                                      Object.keys(item.measure).map((ord) => {
                                        return (
                                          <ul>
                                            <li>{item.measure[ord]}</li>
                                          </ul>
                                        );
                                      })}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
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
