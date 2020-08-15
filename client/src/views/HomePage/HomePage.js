import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from "react-router-dom";
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

import Stitch from "assets/img/stichClothe.jpg";
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
import cus from "assets/img/cus.png";
// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "./Cards";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Carousel from "./Carousel";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
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

      <Parallax small filter image={require("assets/img/main3.jpg")} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{ backgroundColor: "#34495E", paddingTop: 30 }}>
          <div
            style={{
              color: "white",
              fontSize: 40,
              fontFamily: "helvetica",
              textAlign: "center",
              justifyContent: "center",
              marginBottom: 20,
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            What We Do
          </div>
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              marginBottom: 80,
              color: "white",
            }}
          >
            MasterTailer is a tool for making one simple Solution for managing
            <br />
            Clients.In this world of Ecommerce everybody want to have everything
            <br />
            at their doorstep, but one problem remain around here of sewing
            <br />
            clothes. So, We came up with this solution that the you place order
            <br />
            here and then we done everything for you and you will get your
            <br />
            clothes ready to wear
          </div>
          <div
            style={{
              color: "white",
              fontSize: 40,
              fontFamily: "helvetica",
              textAlign: "center",
              justifyContent: "center",
              marginBottom: 20,
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            Wear Clothes That Suit on You
          </div>

          <Carousel />
        </div>

        {/* <SectionCarousel /> */}
        <img src={cus} alt="Alt text" width="100%"></img>

        <div style={{ backgroundColor: "#C0392B", paddingTop: 30 }}>
          <div
            style={{
              color: "white",
              fontSize: 40,
              fontFamily: "helvetica",
              textAlign: "center",
              justifyContent: "center",
              marginBottom: 20,
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            What People Say About us
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card
                title={"New Inovations"}
                text={"It is a great idea to follow and develop"}
                image={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7TnHMovGef3_N2qV3uoQ8Tz-R5nbOTejjBw&usqp=CAU"
                }
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card
                title={"Want Clothes?"}
                text={"YOU will get 110% of what you want"}
                image={
                  "data:image/jpeg;base64,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"
                }
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card
                title={"Modern Styles?"}
                text={"You will get that"}
                image={
                  "data:image/jpeg;base64,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"
                }
              />
            </GridItem>
          </GridContainer>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#34495E",
            color: "white",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              flex: 2,
              marginBottom: 30,
              marginTop: 100,
              backgroundColor: "white",
              borderTopRightRadius: 100,
            }}
          >
            <img
              width="50%"
              src={Stitch}
              alt="Alt text"
              style={{ margin: 50 }}
            ></img>
          </div>
          <div
            style={{
              flexDirection: "row",
              flex: 2,
              marginBottom: 30,
              marginTop: 100,

              padding: 50,
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 40,
                fontFamily: "helvetica",
                textAlign: "center",
                justifyContent: "center",

                fontWeight: "bold",
                lineHeight: 1,
              }}
            >
              Join us Now
            </div>
            <div
              style={{
                paddingLeft: 90,
                paddingTop: 30,
              }}
            >
              <Button
                variant="contained"
                // color="primary"
                style={{
                  width: "75%",
                  backgroundColor: "#C0392B",
                  borderRadius: 50,
                  fontSize: 16,
                }}
              >
                <Link to="/Signup/customer" style={{ color: "white" }}>
                  Call a Darzi
                </Link>
              </Button>
              <br />
              <Button
                variant="contained"
                // color="primary"
                style={{
                  width: "75%",
                  backgroundColor: "#C0392B",
                  borderRadius: 50,
                  fontSize: 16,
                }}
              >
                <Link to="/Signup/customer" style={{ color: "white" }}>
                  Call a Designer
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <hr />
        <Footer />
      </div>
    </div>
  );
}
