import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
// core components
import Header from "components/Header/Header.js";

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import { SectionCarousel } from "views/Components/Sections/SectionCarousel.js";
import SectionCard from "views/Components/Sections/SectionCards.js";
import profile from "assets/img/faces/christian.jpg";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { LineStyle } from "@material-ui/icons";
import { Link, withRouter } from "react-router-dom";

function OrderBookerOrders(props) {
  const [data, setData] = useState([]);
  const [Details, setDetails] = useState([]);
  const [orderBooker, setOrderBooker] = useState([]);
  const [booker, setBooker] = useState("");
  const [id, setId] = useState("");
  const [id1, setId1] = useState([]);
  const [user1, setUser1] = useState("");
  useEffect(async () => {
    var myModule = require("views/database");
    const result = await axios(myModule.servername + "/api/users/getOrder", {
      method: "post",
      headers: {
        "x-auth-token": window.localStorage.getItem("jsonToken"),
      },
    });
    const user = await axios(myModule.servername + "/api/users/getusers", {
      method: "post",
      headers: {
        "x-auth-token": window.localStorage.getItem("jsonToken"),
      },
    });
    console.log(result);
    setData(result.data);

    console.log(user);

    for (var i = 0; i < result.data.length; i++) {
      if (result.data[i].OrderBookerId) {
        setId1((oldArray) => [...oldArray, result.data[i]._id]);
        console.log(result.data[i]._id);
      }
    }

    setOrderBooker(user.data);
  }, []);

  const handleOrderBooker = (e) => {
    console.log(e.target.value);
    let OrderData = e.target.value;
    setId(OrderData.split(",")[0]);

    setBooker(OrderData.split(",")[1]);
  };

  const handleOrderStatus = async () => {
    var myModule = require("views/database");
    const user = await axios.post(
      myModule.servername + "/api/users/UpdateOrder/",
      {
        OrderBookerId: booker,
        OrderId: id,
      },
      {
        headers: {
          "x-auth-token": window.localStorage.getItem("jsonToken"),
        },
      }
    );
    console.log(user);

    if (user.data == "order updated!") {
      console.log("hello");
      setId1((oldArray) => [...oldArray, id]);
    }
  };

  const handleDetails = (id) => {
    if (Details.includes(id)) {
      console.log(id);
      setDetails(Details.filter((item) => item !== id));
    } else {
      setDetails((oldArray) => [...oldArray, id]);
    }
  };

  const handleOrder = async (
    Itemid,
    orderbookerId,
    status,
    OrderBookerName
  ) => {
    console.log(Itemid, orderbookerId, status, OrderBookerName);
    var myModule = require("views/database");
    const user = await axios.post(
      myModule.servername + "/api/users/UpdateOrderBooker/",
      {
        OrderBookerId: orderbookerId,
        OrderId: Itemid,
        status: status,
        OrderBookerName: OrderBookerName,
      },
      {
        headers: {
          "x-auth-token": window.localStorage.getItem("jsonToken"),
        },
      }
    );
    console.log(user);
    console.log(Itemid, orderbookerId, status, OrderBookerName);

    if (user.data == "order updated!") {
      if (status === "Cutting") {
        alert("Order Sucessfully Accepted");
      } else {
        alert("Order Sucessfully Rejected");
      }
      setUser1(user);
    }

    window.location = "/form";
  };

  return (
    <div style={{ color: "black" }}>
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
          <Thead style={{ backgroundColor: "#3399ff", color: "white" }}>
            <Tr>
              <Th>Order By</Th>
              <Th>Order Price</Th>
              <Th>Order Status</Th>
              <Th>Details</Th>
              <Th>Actions</Th>
              <Th>Pickup</Th>
              <Th>Delivery</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, idx) => {
              return (
                item.OrderBookerId ===
                  localStorage.getItem("darziwebtoken") && (
                  <Tr key={item._id}>
                    <Td>{item.CustomerName}</Td>
                    <Td>{item.OrderPrice}</Td>
                    <Td>
                      {item.OrderStatus === "Requested" &&
                        "Order to Accept Or Reject"}{" "}
                      {item.OrderStatus === "Cutting" &&
                        "Order is not accepted by Darzi yet"}{" "}
                      {item.OrderStatus === "Stitching" &&
                        "Order is not Completed yet"}{" "}
                      {item.OrderStatus === "Completed" &&
                        "Order is Completed Goto Pick the Order"}
                      {item.OrderStatus === "Request Delivery" &&
                        "Delivery to Accept"}
                      {item.OrderStatus === "Accept Delivery" &&
                        "Delivery accepted"}
                    </Td>
                    <Td>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleDetails(item._id)}
                      >
                        View Details
                      </Button>
                      {Details.includes(item._id) &&
                        item.Order.map((ord) => {
                          return (
                            <ul key={ord._id}>
                              <li>{ord.name}</li>
                              <li>{ord.price} pkr</li>
                            </ul>
                          );
                        })}
                    </Td>
                    <Td>
                      {item.OrderStatus === "Cutting" ||
                      item.OrderStatus === "Stitching" ||
                      item.OrderStatus === "Completed" ||
                      item.OrderStatus === "Request Delivery" ||
                      item.OrderStatus === "Accept Delivery" ? (
                        "Order Accepted"
                      ) : (
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                              handleOrder(
                                item._id,
                                item.OrderBookerId,
                                "Cutting",
                                item.OrderBookerName
                              )
                            }
                            style={{
                              backgroundColor: "green",
                              borderRadius: 20,
                            }}
                          >
                            <CheckCircleIcon /> Accept
                          </Button>
                          <Button
                            variant="contained"
                            // color="secondary"
                            onClick={() =>
                              handleOrder(item._id, null, "Requested", null)
                            }
                            style={{
                              backgroundColor: "#FF6347",
                              borderRadius: 20,
                            }}
                          >
                            <CancelIcon /> Reject
                          </Button>
                        </div>
                      )}
                    </Td>
                    <Td>
                      {item.OrderStatus === "Requested" &&
                        "Order not Completed"}
                      {item.OrderStatus === "Cutting" &&
                        "Order is not accepted by Darzi yet"}{" "}
                      {item.OrderStatus === "Stitching" &&
                        "Order is not Completed yet"}{" "}
                      {item.OrderStatus === "Completed" &&
                        "Order is Completed Goto Pick the Order"}
                      {item.OrderStatus === "Request Delivery" &&
                        "Delivery to Accept from darzi"}
                      {item.OrderStatus === "Accept Delivery" &&
                        "Delivery accepted from darzi"}
                    </Td>
                    <Td>
                      {item.OrderStatus === "Request Delivery" && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() =>
                            handleOrder(
                              item._id,
                              item.OrderBookerId,
                              "Accept Delivery",
                              item.OrderBookerName
                            )
                          }
                          style={{
                            backgroundColor: "green",
                            borderRadius: 20,
                          }}
                        >
                          <CheckCircleIcon /> Accept Delivery
                        </Button>
                      )}
                      {item.OrderStatus === "Accept Delivery" && (
                        <div>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                              handleOrder(
                                item._id,
                                item.OrderBookerId,
                                "Accept Delivery",
                                item.OrderBookerName
                              )
                            }
                            style={{
                              backgroundColor: "green",
                              borderRadius: 20,
                            }}
                          >
                            <CheckCircleIcon /> Deliver To Customer
                          </Button>
                        </div>
                      )}
                    </Td>
                  </Tr>
                )
              );
            })}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}

export default OrderBookerOrders;
