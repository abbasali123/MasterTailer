import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
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
import { Table } from "reactstrap";

export default function Cart(props) {
  console.log(props.data);
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
            width: "75%",
            borderWidth: "2px",
            borderColor: "black",
            borderStyle: "solid",
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          <thead style={{ backgroundColor: "#3399ff", color: "white" }}>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, idx) => {
              return (
                item.name && (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <Button
                        onClick={() => props.renderDelete(item._id)}
                        style={{ backgroundColor: "#C0392B" }}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </Button>
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
