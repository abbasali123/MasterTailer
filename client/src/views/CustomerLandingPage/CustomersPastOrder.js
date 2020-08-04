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

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import socketIOClient from "socket.io-client";
export default function CustomerPastOrders(props) {
  const [data, setData] = useState([]);
  const [Details, setDetails] = useState([]);
  var myModule = require("../database");
  const ENDPOINT = myModule.servername;

  const socket = socketIOClient(ENDPOINT);
  useEffect(async () => {
    socket.on("customerpastorder", (myalldata) => {
      console.log("call from client ");

      setData(myalldata);
    });

    var myModule = require("../database");
    const result = await axios(myModule.servername + "/api/users/getOrder", {
      method: "post",
      headers: {
        "x-auth-token": window.localStorage.getItem("jsonToken"),
      },
    });
    // const result = await axios.post(

    //   {
    //     headers: {
    //       "x-auth-token": window.localStorage.getItem("jsonToken"),
    //     },
    //   }
    // );

    console.log(result);
    setData(result.data);
  }, []);

  const handleDetails = (id) => {
    if (Details.includes(id)) {
      console.log(id);
      setDetails(Details.filter((item) => item !== id));
    } else {
      setDetails((oldArray) => [...oldArray, id]);
    }
  };

  return (
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
          }}
        >
          <Thead style={{ backgroundColor: "#3399ff", color: "white" }}>
            <Tr>
              <Th>Order By</Th>
              <Th>Order Price</Th>
              <Th>Order Status</Th>
              <Th>Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, idx) => {
              return (
                item.CustomerName &&
                item.CustomerId ===
                  window.localStorage.getItem("darziwebtoken") && (
                  <Tr key={item._id}>
                    <Td>{item.CustomerName.split("@")[0]}</Td>
                    <Td>{item.OrderPrice}</Td>
                    <Td>
                      {item.OrderStatus === "Requested" &&
                        "Order is bieng Requested"}
                      {item.OrderStatus === "Cutting" &&
                        "Order is in Cutting Phase"}
                      {item.OrderStatus === "Stitching" &&
                        "Order is bieng Stictched"}
                      {(item.OrderStatus === "Completed" ||
                        item.OrderStatus === "Request Delivery" ||
                        item.OrderStatus === "Accept Delivery") &&
                        "Order is bieng Processed for delivery"}
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
