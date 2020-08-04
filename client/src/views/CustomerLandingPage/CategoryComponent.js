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
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default function Category(props) {
  const [data, setData] = useState([]);
  useEffect(async () => {
    var myModule = require("../database");
    const result = await axios(myModule.servername + "/api/users/categories", {
      headers: {
        "x-auth-token": window.localStorage.getItem("jsonToken"),
      },
    });
    console.log(result);
    setData(result.data);
  }, []);

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
          striped
          bordered
          hover
          style={{
            width: "95%",
            borderWidth: "2px",
            borderColor: "black",
            borderStyle: "solid",
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          <Thead style={{ backgroundColor: "#3399ff", color: "white" }}>
            <Tr>
              <Th>Item Name</Th>
              <Th>Item Price</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, idx) => {
              return (
                item.ItemName &&
                item.ItemStatus === props.category && (
                  <Tr>
                    <Td>{item.ItemName}</Td>
                    <Td>{item.ItemPrice}</Td>
                    <Td>
                      <Button
                        onClick={() =>
                          props.renderItems(
                            item.ItemName,
                            item.ItemPrice,
                            item.ItemStatus,
                            item._id
                          )
                        }
                        style={{ backgroundColor: "#3399ff" }}
                      >
                        <AddShoppingCartIcon fontSize="inherit" />
                      </Button>
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
