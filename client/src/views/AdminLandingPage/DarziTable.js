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

export default function DarziTable(props) {
  const [data, setData] = useState([]);
  const [Details, setDetails] = useState([]);
  const [orderBooker, setOrderBooker] = useState([]);
  const [darzi, setDazri] = useState("");
  const [id, setId] = useState("");
  const [id1, setId1] = useState([]);
  const [DarziName, setDarziName] = useState("");
  const [darziOrder, setDarziOrder] = useState([]);
  useEffect(async () => {
    var myModule = require("../database");
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
      if (result.data[i].DarziId) {
        setId1((oldArray) => [...oldArray, result.data[i]._id]);
        console.log(result.data[i]._id);
      }
    }

    setDarziOrder(user.data);

    console.log(darziOrder);
  }, []);

  const handleOrderBooker = (e) => {
    console.log(e.target.value);
    let OrderData = e.target.value;
    setId(OrderData.split(",")[0]);

    setDazri(OrderData.split(",")[1]);
    setDarziName(OrderData.split(",")[2]);
  };

  const handleOrderStatus = async () => {
    var myModule = require("../database");
    const user = await axios.post(
      myModule.servername + "/api/users/UpdateDarziOrder/",
      {
        DarziId: darzi,
        OrderId: id,
        DarziName: DarziName,
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
            marginLeft: 70,
            marginRight: 20,
          }}
        >
          <Thead style={{ backgroundColor: "#3399ff", color: "white" }}>
            <Tr>
              <Th>Darzi Name</Th>
              <Th>Order Price</Th>
              <Th>Order Status</Th>
              <Th>Order By</Th>
              <Th>Details</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, idx) => {
              return (
                item.DarziId && (
                  <Tr key={item._id}>
                    <Td>{item.DarziName}</Td>
                    <Td>{item.OrderPrice}</Td>
                    <Td>
                      {" "}
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
                    <Td>{item.CustomerName.split("@")[0]}</Td>
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
                      {item.OrderStatus === "Cutting" ? (
                        "Order Not Accepted by Order Booker"
                      ) : id1.includes(item._id) ? (
                        "Order Booker Assigned"
                      ) : (
                        <div>
                          {item._id === id && (
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => handleOrderStatus()}
                            >
                              Assign
                            </Button>
                          )}
                        </div>
                      )}
                    </Td>
                    {/* <td>
                      {id1.includes(item._id) &&
                      item.OrderStatus === "Stitching"
                        ? "Verified"
                        : id1.includes(item._id)
                        ? "Requested"
                        : "none"}
                    </td> */}
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
