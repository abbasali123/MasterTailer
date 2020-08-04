import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import { Tabs, Tab, TabContainer, TabContent, TabPane } from "react-bootstrap";
import Button from "components/CustomButtons/Button.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import PersonInfo from "views/LandingPage/Sections/PersonInfo.js";
import Upload from "views/LandingPage/Sections/Upload.js";
import BankInfo from "views/LandingPage/Sections/BankInfo.js";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Datetime from "react-datetime";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function RegNavBar() {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const classes = useStyles();
  var myModule = require("views/database");
  const [key, setKey] = useState("personal");
  const [tab2, setTab2] = useState(true);
  const [tab3, setTab3] = useState(true);
  const [tab4, setTab4] = useState(true);
  const [tab5, setTab5] = useState(true);
  const [payment, setpayment] = useState("select");

  const handlepayment = (e) => {
    setpayment(e.target.value);
  };

  const pernext = () => {
    if (payment === "select") {
      var x = document.getElementById("myDIVpayment");
      x.style.display = "block";
    } else {
      setKey(payment);
      var x = document.getElementById("myDIVpayment");
      x.style.display = "none";
    }
  };

  const back = () => {
    setKey("personal");
  };

  const getalldata = async () => {
    // const response = await fetch(
    //   myModule.servername + "/api/users/sendordertime",
    //   {
    //     method: "post",
    //     headers: {
    //       "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    //     },
    //     body: `stos=${stos}&aneck=${aneck}&chestar=${chestar}&waistar=${waistar}
    //       &shirtlen=${shirtlen}}&slevelen=${slevelen}
    //       &arwaist=${arwaist}&bicep=${bicep}&armhole=${armhole}&arnavel=${arnavel}
    //       &arwrist=${arwrist}&arhip=${arhip}
    //       &sherwanilen=${sherwanilen}&plen=${plen}
    //       &asnu=${asnu}&pwasitar=${pwasitar}
    //       &pinseam=${pinseam}&penthip=${penthip}&parcalf=${parcalf}&parthigh=${parthigh}
    //       &parknee=${parknee}&parankle=${parankle}&orginalid=${window.localStorage.getItem(
    //       "token"
    //     )}`,
    //   }
    // );
    // const json = await response.json();
    // alert("thanks your all data submitted");
  };
  return (
    <div id="navigation-pills">
      <h1 className={classes.textCenter}>
        <small>Male Measurement Form</small>
      </h1>
      <br />

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        style={{
          paddingTop: "45px",
          border: "none",
          color: "red",
        }}
      >
        <Tab eventKey="personal" title="Personal Info" activeKey>
          <div>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Name"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "text",
                    // onChange: (e) => setName(e.target.value),
                  }}
                />
                <div id="myDIVname" style={{ display: "none", color: "red" }}>
                  Name missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Mobile No."
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setaneck(e.target.value),
                  }}
                />
                <div
                  id="myDIVmnumber"
                  style={{ display: "none", color: "red" }}
                >
                  Mobile Number missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Email Address"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setchestar(e.target.value),
                  }}
                />
                <div id="myDIVemail" style={{ display: "none", color: "red" }}>
                  Email Address missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Address Home"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setwaistar(e.target.value),
                  }}
                />
                <div id="myDIVadd" style={{ display: "none", color: "red" }}>
                  Home Address missing
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <FormGroup>
                  <Label for="Select">Select Promotion Method</Label>
                  <Input
                    type="select"
                    name="quli"
                    id="exampleSelect"
                    // onChange={handlequli}
                  >
                    <option value="Darzi">Darzi Promotion</option>
                    <option value="App">App Promotion Password</option>
                  </Input>
                </FormGroup>
                <div id="myDIVpromo" style={{ display: "none", color: "red" }}>
                  Promotion Method missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Retype Password"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setslevelen(e.target.value),
                  }}
                />
                <div id="myDIVpass" style={{ display: "none", color: "red" }}>
                  Confirm Password missing
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <FormGroup>
                  <Label for="Select">Select Payment Method</Label>
                  <Input
                    type="select"
                    name="quli"
                    id="exampleSelect"
                    onChange={handlepayment}
                  >
                    <option value="select">Select</option>
                    <option value="bank">Through Bank</option>
                    <option value="easy">Through EasyPaisa</option>
                    <option value="jazz">Through Jazz</option>
                    <option value="upaisa">Through UPaisa</option>
                  </Input>
                </FormGroup>
                <div
                  id="myDIVpayment"
                  style={{ display: "none", color: "red" }}
                >
                  Payment Method missing
                </div>
              </GridItem>
            </GridContainer>

            <br />
            <br />
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="default">Back</Button>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="info" onClick={pernext}>
                  Next
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Tab>
        <Tab eventKey="bank" title="Bank Info" disabled={tab2}>
          <div>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Bank Name"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setbankname(e.target.value),
                  }}
                />
                <div id="myDIVbname" style={{ display: "none", color: "red" }}>
                  Bank Name missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Branch Name"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setbranchname(e.target.value),
                  }}
                />
                <div id="myDIVbrname" style={{ display: "none", color: "red" }}>
                  Branch Name missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="City"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setbankcity(e.target.value),
                  }}
                />
                <div id="myDIVbrcity" style={{ display: "none", color: "red" }}>
                  Branch City missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Account Name"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setaccountname(e.target.value),
                  }}
                />
                <div id="myDIVaname" style={{ display: "none", color: "red" }}>
                  Account Name missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Type"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => settype(e.target.value),
                  }}
                />
                <div id="myDIVatype" style={{ display: "none", color: "red" }}>
                  Account Type missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Account No"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setaccountno(e.target.value),
                  }}
                />
                <div id="myDIVano" style={{ display: "none", color: "red" }}>
                  Account Number missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="IBAN"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setibn(e.target.value),
                  }}
                />
                <div id="myDIVibn" style={{ display: "none", color: "red" }}>
                  IBAN missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="default" onClick={back}>
                  Back
                </Button>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="info" onClick={getalldata}>
                  Next
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Tab>

        <Tab eventKey="jazz" title="Jazz Cash" disabled={tab3}>
          <div>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Account Name"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setplen(e.target.value),
                  }}
                />
                <div id="myDIVjan" style={{ display: "none", color: "red" }}>
                  Account Name
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Account Number"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setasnu(e.target.value),
                  }}
                />
                <div id="myDIVjacn" style={{ display: "none", color: "red" }}>
                  Account Number
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="default" onClick={back}>
                  Back
                </Button>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="info" onClick={getalldata}>
                  Next
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Tab>
        <Tab eventKey="easy" title="EasyPaisa" disabled={tab4}>
          <div>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Account Name"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setplen(e.target.value),
                  }}
                />
                <div id="myDIVean" style={{ display: "none", color: "red" }}>
                  Account Name
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Account Number"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setasnu(e.target.value),
                  }}
                />
                <div id="myDIVeacn" style={{ display: "none", color: "red" }}>
                  Account Number
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="default" onClick={back}>
                  Back
                </Button>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="info" onClick={getalldata}>
                  Next
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Tab>
        <Tab eventKey="upaisa" title="UPaisa" disabled={tab5}>
          <div>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Account Name"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setplen(e.target.value),
                  }}
                />
                <div id="myDIVuan" style={{ display: "none", color: "red" }}>
                  Account Name
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Account Number"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    // onChange: (e) => setasnu(e.target.value),
                  }}
                />
                <div id="myDIVuacn" style={{ display: "none", color: "red" }}>
                  Account Number
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="default" onClick={back}>
                  Back
                </Button>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="info" onClick={getalldata}>
                  Next
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Tab>
      </Tabs>
      <br />
      <br />
    </div>
  );
}
