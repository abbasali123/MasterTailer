import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import GoogleLogin from "react-google-login";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import InputMask from "react-input-mask";

const useStyles = makeStyles(styles);
var dataResult = "t";
var myid = "";

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const [userName, setUsername] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [number, setnumber] = useState("");
  const [pass, setpass] = useState("");

  const [fname, setName] = useState("");

  const [femail, setEmail] = useState("");

  const [url, setUrl] = useState("");
  const [val, setValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    console.log(response);
  };

  const validate = () => {
    console.log("inValidate");
    let emailError = "";
    if (!userName.includes("@")) {
      emailError = "invalid email";
      console.log("inValidat");
    }

    if (emailError) {
      setEmailError({ emailError });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validatePass = () => {
    console.log("inValidate ");
    let passError = "";
    if (pass.length < 7) {
      passError = "invalid Password";
      console.log("inValidat pass");
    }

    if (passError) {
      setPassError({ passError });
      return false;
      console.log("inValid pass");
    }
    return true;
  };
  const option = {};
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  const logName = async () => {
    let isValidmail = validate();
    let isValidpass = validatePass();
    if (isValidmail && isValidpass) {
      var myModule = require("../database");
      console.log(myModule.servername);
      const response = await fetch(myModule.servername + "/api/users/login", {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `username=${userName}&pass=${pass}`,
      });
      console.log(response);
      const response1 = await response.json();
      console.log(response1);

      //console.log(json._id[0]);
      if (isEmpty(response1)) {
        alert("sorry you have no account please signup");
      } else if (response1 == "onlyemail") {
        alert("Your Email is registered but Wrong Pass Entered");
      } else {
        ///// console.log(json[0]._id);
        const data = response1.data;
        const token = response1.token;

        console.log(data);
        console.log(token);
        myid = data._id;
        window.localStorage.setItem("darziwebtoken", data._id);
        window.localStorage.setItem("jsonToken", token);
        console.log("jsonToken", window.localStorage.getItem("jsonToken"));
        if (data.role == "orderbooker") {
          window.location = "/form";
        } else if (data.role == "darzi") {
          window.location = "/landing-owner";
        } else if (data.role == "affialate") {
          window.location = "/affialate";
        } else if (data.role == "admin") {
          window.location = "/Admin";
        } else {
          window.location = "/customerpage";
        }
      }
    }
    if (isValidmail) {
      var x = document.getElementById("myDIVmail");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVmail");
      x.style.display = "block";
    }

    if (isValidpass) {
      var x = document.getElementById("myDIVpass");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVpass");
      x.style.display = "block";
    }
  };
  const handleLastNameInput = (e) => {
    setLastname(e.target.value);
  };

  const handlenumber = (e) => {
    setnumber(e.target.value);
  };

  const handlepass = (e) => {
    setpass(e.target.value);
  };
  //   useEffect(() => {
  //     fetch("http://localhost:3001/api/users/login/")
  //     console.log('haha')  }); // << super important array

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="MasterTailer"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <GoogleLogin
                        clientId="1093297451164-6d3mfddu3947dnf4ov4g87gjnlvcr778.apps.googleusercontent.com"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                    </div>
                  </CardHeader>
                  {/* <p className={classes.divider}>{dataResult}</p> */}
                  <CardBody>
                    {/* <input
      type="text"
      onChange={handleUserNameInput}
      value={userName}
      placeholder="username..."
    /> */}

                    <CustomInput
                      labelText="Email..."
                      id="email"
                      //onChange={handleFirstNameInput}
                      //   value={firstName}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        onChange: (e) => setUsername(e.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <div id="myDIVmail" style={{ display: "none" }}>
                      Invalid Email,missing '@' sign
                    </div>
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      onChange={handleLastNameInput}
                      value={lastName}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        onChange: (e) => setpass(e.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <div id="myDIVpass" style={{ display: "none" }}>
                      Invalid Password, Password must be greater than 7 digits
                    </div>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={logName}>
                      {" "}
                      Login{" "}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>{" "}
      <Footer whiteFont />
    </div>
  );
  module.exports = { variableName: "variableValue" };
}
