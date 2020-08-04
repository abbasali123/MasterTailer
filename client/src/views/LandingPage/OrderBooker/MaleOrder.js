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

export default function MaleOrder(props) {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const classes = useStyles();
  var myModule = require("views/database");
  const [key, setKey] = useState("top");
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(true);
  //Error

  const [stosErr, setstosErr] = useState("");
  const [aneckErr, setaneckErr] = useState("");
  const [chestarErr, setchestarErr] = useState("");
  const [waistarErr, setwaistarErr] = useState("");
  const [shirtlenErr, setshirtlenErr] = useState("");
  const [arwaistErr, setarwaistErr] = useState("");
  const [bicepErr, setbicepErr] = useState("");
  const [armholeErr, setarmholeErr] = useState("");
  const [arnavelErr, setarnavelErr] = useState("");
  const [slevelenErr, setslevelenErr] = useState("");

  const [pinseamErr, setpinseamErr] = useState("");
  const [parkneeErr, setparkneeErr] = useState("");

  const [arwristErr, setarwristErr] = useState("");
  const [arhipErr, setarhipErr] = useState("");
  const [sherwanilenErr, setsherwanilenErr] = useState("");
  const [plenErr, setplenErr] = useState("");
  const [asnuErr, setasnuErr] = useState("");
  const [pwasitarErr, setpwasitarErr] = useState("");
  const [penthipErr, setpenthipErr] = useState("");
  const [parcalfErr, setparcalfErr] = useState("");
  const [parthighErr, setparthighErr] = useState("");
  const [parankleErr, setparankleErr] = useState("");

  const [stos, setstos] = useState("");
  const [aneck, setaneck] = useState("");
  const [chestar, setchestar] = useState("");
  const [waistar, setwaistar] = useState("");
  const [shirtlen, setshirtlen] = useState("");
  const [arwaist, setarwaist] = useState("");
  const [bicep, setbicep] = useState("");
  const [armhole, setarmhole] = useState("");
  const [arnavel, setarnavel] = useState("");
  const [slevelen, setslevelen] = useState("");

  const [pinseam, setpinseam] = useState("");
  const [parknee, setparknee] = useState("");

  const [arwrist, setarwrist] = useState("");
  const [arhip, setarhip] = useState("");
  const [sherwanilen, setsherwanilen] = useState("");
  const [plen, setplen] = useState("");
  const [asnu, setasnu] = useState("");
  const [pwasitar, setpwasitar] = useState("");
  const [penthip, setpenthip] = useState("");
  const [parcalf, setparcalf] = useState("");
  const [parthigh, setparthigh] = useState("");
  const [parankle, setparankle] = useState("");
  const [des, setdes] = useState("");
  const [selectedFile, setselectedFile] = useState("");

  const [anoErr, setanoErr] = useState("");
  const [ibnErr, setibnErr] = useState("");
  const [selectedFileErr, setselectedFileErr] = useState("");
  const [selectedFile1Err, setselectedFile1Err] = useState("");

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setselectedFile(e.target.files[0]);
  };

  const validstos = () => {
    console.log("inValidate");
    let stosErr = "";
    if (!stos != "") {
      stosErr = "invalid stosErr";
      console.log("inValidat");
    }

    if (stosErr) {
      setstosErr({ stosErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validaneck = () => {
    console.log("inValidate");
    let aneckErr = "";
    if (!aneck != "") {
      aneckErr = "invalid aneckErr";
      console.log("inValidat");
    }

    if (aneckErr) {
      setaneckErr({ aneckErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validchestar = () => {
    console.log("inValidate");
    let chestarErr = "";
    if (!chestar != "") {
      chestarErr = "invalid chestarErr";
      console.log("inValidat");
    }

    if (chestarErr) {
      setchestarErr({ chestarErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validwaistar = () => {
    console.log("inValidate");
    let waistarErr = "";
    if (!waistar != "") {
      waistarErr = "invalid waistarErr";
      console.log("inValidat");
    }

    if (waistarErr) {
      setwaistarErr({ waistarErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validshirtlen = () => {
    console.log("inValidate");
    let shirtlenErr = "";
    if (!shirtlen != "") {
      shirtlenErr = "invalid shirtlenErr";
      console.log("inValidat");
    }

    if (shirtlenErr) {
      setshirtlenErr({ shirtlenErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validarwaist = () => {
    console.log("inValidate");
    let arwaistErr = "";
    if (!arwaist != "") {
      arwaistErr = "invalid arwaistErr";
      console.log("inValidat");
    }

    if (arwaistErr) {
      setarwaistErr({ arwaistErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validbicep = () => {
    console.log("inValidate");
    let bicepErr = "";
    if (!bicep != "") {
      bicepErr = "invalid bicepErr";
      console.log("inValidat");
    }

    if (bicepErr) {
      setbicepErr({ bicepErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validarmhole = () => {
    console.log("inValidate");
    let armholeErr = "";
    if (!armhole != "") {
      armholeErr = "invalid armholeErr";
      console.log("inValidat");
    }

    if (armholeErr) {
      setarmholeErr({ armholeErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validarnavel = () => {
    console.log("inValidate");
    let arnavelErr = "";
    if (!arnavel != "") {
      arnavelErr = "invalid arnavelErr";
      console.log("inValidat");
    }

    if (arnavelErr) {
      setarnavelErr({ arnavelErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validslevelen = () => {
    console.log("inValidate");
    let slevelenErr = "";
    if (!slevelen != "") {
      slevelenErr = "invalid slevelenErr";
      console.log("inValidat");
    }

    if (slevelenErr) {
      setslevelenErr({ slevelenErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validpinseam = () => {
    console.log("inValidate");
    let pinseamErr = "";
    if (!pinseam != "") {
      pinseamErr = "invalid pinseamErr";
      console.log("inValidat");
    }

    if (pinseamErr) {
      setpinseamErr({ pinseamErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validparknee = () => {
    console.log("inValidate");
    let parkneeErr = "";
    if (!parknee != "") {
      parkneeErr = "invalid parkneeErr";
      console.log("inValidat");
    }

    if (parkneeErr) {
      setparkneeErr({ parkneeErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validarwrist = () => {
    console.log("inValidate");
    let arwristErr = "";
    if (!arwrist != "") {
      arwristErr = "invalid arwristErr";
      console.log("inValidat");
    }

    if (arwristErr) {
      setarwristErr({ arwristErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validarhip = () => {
    console.log("inValidate");
    let arhipErr = "";
    if (!arhip != "") {
      arhipErr = "invalid rel";
      console.log("inValidat");
    }

    if (arhipErr) {
      setarhipErr({ arhipErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validsherwanilen = () => {
    console.log("inValidate");
    let sherwanilenErr = "";
    if (!sherwanilen != "") {
      sherwanilenErr = "invalid sherwanilenErr";
      console.log("inValidat");
    }

    if (sherwanilenErr) {
      setsherwanilenErr({ sherwanilenErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validplen = () => {
    console.log("inValidate");
    let plenErr = "";
    if (!plen != "") {
      plenErr = "invalid plenErr";
      console.log("inValidat");
    }

    if (plenErr) {
      setplenErr({ plenErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validasnu = () => {
    console.log("inValidate");
    let asnuErr = "";
    if (!asnu != "") {
      asnuErr = "invalid asnuErr";
      console.log("inValidat");
    }

    if (asnuErr) {
      setasnuErr({ asnuErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validpwasitar = () => {
    console.log("inValidate");
    let pwasitarErr = "";
    if (!pwasitar != "") {
      pwasitarErr = "invalid pwasitarErr";
      console.log("inValidat");
    }

    if (pwasitarErr) {
      setpwasitarErr({ pwasitarErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validpenthip = () => {
    console.log("inValidate");
    let penthipErr = "";
    if (!penthip != "") {
      penthipErr = "invalid penthipErr";
      console.log("inValidat");
    }

    if (penthipErr) {
      setpenthipErr({ penthipErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validparcalf = () => {
    console.log("inValidate");
    let parcalfErr = "";
    if (!parcalf != "") {
      parcalfErr = "invalid parcalfErr";
      console.log("inValidat");
    }

    if (parcalfErr) {
      setparcalfErr({ parcalfErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validparthigh = () => {
    console.log("inValidate");
    let parthighErr = "";
    if (!parthigh != "") {
      parthighErr = "invalid parthighErr";
      console.log("inValidat");
    }

    if (parthighErr) {
      setparthighErr({ parthighErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validparankle = () => {
    console.log("inValidate");
    let parankleErr = "";
    if (!parankle != "") {
      parankleErr = "invalid parankleErr";
      console.log("inValidat");
    }

    if (parankleErr) {
      setparankleErr({ parankleErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const perNext = () => {
    let isvalidstos = validstos();
    let isvalidaneck = validaneck();
    let isvalidchestar = validchestar();
    let isvalidwaistar = validwaistar();
    let isvalidshirtlen = validshirtlen();
    let isvalidslevelen = validslevelen();
    let isvalidarwaist = validarwaist();
    let isvalidbicep = validbicep();
    let isvalidarmhole = validarmhole();
    let isvalidarnavel = validarnavel();
    let isvalidarwrist = validarwrist();
    let isvalidarhip = validarhip();
    let isvalidsherwanilen = validsherwanilen();

    if (
      isvalidstos &&
      isvalidaneck &&
      isvalidchestar &&
      isvalidwaistar &&
      isvalidshirtlen &&
      isvalidslevelen &&
      isvalidarwaist &&
      isvalidbicep &&
      isvalidarmhole &&
      isvalidarnavel &&
      isvalidarwrist &&
      isvalidarhip &&
      isvalidsherwanilen
    ) {
      setKey("bottom");
      setTab1(false);
    }
    if (isvalidstos) {
      var x = document.getElementById("myDIVsts");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVsts");
      x.style.display = "block";
    }
    if (isvalidaneck) {
      var x = document.getElementById("myDIVan");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVan");
      x.style.display = "block";
    }
    if (isvalidchestar) {
      var x = document.getElementById("myDIVca");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVca");
      x.style.display = "block";
    }
    if (isvalidwaistar) {
      var x = document.getElementById("myDIVwa");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVwa");
      x.style.display = "block";
    }
    if (isvalidshirtlen) {
      var x = document.getElementById("myDIVsl");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVsl");
      x.style.display = "block";
    }
    if (isvalidslevelen) {
      var x = document.getElementById("myDIVsll");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVsll");
      x.style.display = "block";
    }
    if (isvalidarwaist) {
      var x = document.getElementById("myDIVarw");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVarw");
      x.style.display = "block";
    }
    if (isvalidbicep) {
      var x = document.getElementById("myDIVbicep");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVbicep");
      x.style.display = "block";
    }
    if (isvalidarmhole) {
      var x = document.getElementById("myDIVah");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVah");
      x.style.display = "block";
    }
    if (isvalidarnavel) {
      var x = document.getElementById("myDIVnavel");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVnavel");
      x.style.display = "block";
    }
    if (isvalidarwrist) {
      var x = document.getElementById("myDIVarw");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVarw");
      x.style.display = "block";
    }
    if (isvalidarhip) {
      var x = document.getElementById("myDIVarh");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVarh");
      x.style.display = "block";
    }
    if (isvalidsherwanilen) {
      var x = document.getElementById("myDIVshl");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVshl");
      x.style.display = "block";
    }
  };

  const Upnext = () => {
    setKey("bank");
    // setTab3(false);
    // }
    // if (isvalidfile1) {
    //   var x = document.getElementById("myDIVpic");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVpic");
    //   x.style.display = "block";
    // }
    // if (isvalidfile2) {
    //   var x = document.getElementById("myDIVid");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVid");
    //   x.style.display = "block";
    // }
  };

  const botback = () => {
    setKey("top");
  };

  const desback = () => {
    setKey("bottom");
  };

  const botnext = () => {
    let isvalidplen = validplen();
    let isvalidasnu = validasnu();
    let isvalidpwasitar = validpwasitar();
    let isvalidpinseam = validpinseam();
    let isvalidpenthip = validpenthip();
    let isvalidparcalf = validparcalf();
    let isvalidparthigh = validparthigh();
    let isvalidparknee = validparknee();
    let isvalidparankle = validparankle();
    if (
      isvalidplen &&
      isvalidasnu &&
      isvalidpwasitar &&
      isvalidpinseam &&
      isvalidpenthip &&
      isvalidparcalf &&
      isvalidparthigh &&
      isvalidparknee &&
      isvalidparankle
    ) {
      setKey("des");
    }

    if (isvalidplen) {
      var x = document.getElementById("myDIVlength");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVlength");
      x.style.display = "block";
    }
    if (isvalidasnu) {
      var x = document.getElementById("myDIVfly");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVfly");
      x.style.display = "block";
    }
    if (isvalidpwasitar) {
      var x = document.getElementById("myDIVwar");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVwar");
      x.style.display = "block";
    }
    if (isvalidpinseam) {
      var x = document.getElementById("myDIVInseam");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVInseam");
      x.style.display = "block";
    }
    if (isvalidpenthip) {
      var x = document.getElementById("myDIVhips");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVhips");
      x.style.display = "block";
    }
    if (isvalidparcalf) {
      var x = document.getElementById("myDIVcalf");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVcalf");
      x.style.display = "block";
    }
    if (isvalidparthigh) {
      var x = document.getElementById("myDIVarth");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVarth");
      x.style.display = "block";
    }
    if (isvalidparknee) {
      var x = document.getElementById("myDIVknee");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVknee");
      x.style.display = "block";
    }
    if (isvalidparankle) {
      var x = document.getElementById("myDIVaran");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVaran");
      x.style.display = "block";
    }
  };

  const getalldata = async () => {
    var measure = {
      stos: stos,
      aneck: aneck,
      chestar: chestar,
      waistar: waistar,
      arwaist: arwaist,
      bicep: bicep,
      armhole: armhole,
      arnavel: arnavel,
      arwrist: arwrist,
      arhip: arhip,
      sherwanilen: sherwanilen,
      plen: plen,
      asnu: asnu,
      pwasitar: pwasitar,
      pinseam: pinseam,
      penthip: penthip,
      parcalf: parcalf,
      parthigh: parthigh,
      parknee: parknee,
      parankle: parankle,
    };

    var completeInfo = {
      measure: measure,
      gender: props.gender,
    };

    props.setdata((searches) => [...searches, completeInfo]);
    console.log(props.data);
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
        variant="pills"
        style={{
          paddingTop: "45px",
          border: "none",
          color: "red",
        }}
      >
        <Tab
          eventKey="top"
          title="Shirt/Kurta/Sherwani/Waist Coat Measurements"
          activeKey
        >
          <div>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Shoulder to Shoulder"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setstos(e.target.value),
                  }}
                />
                <div id="myDIVsts" style={{ display: "none", color: "red" }}>
                  Shoulder to Shoulder Value missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Around Neck"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setaneck(e.target.value),
                  }}
                />
                <div id="myDIVan" style={{ display: "none", color: "red" }}>
                  Around Neck Value missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Chest around"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setchestar(e.target.value),
                  }}
                />
                <div id="myDIVca" style={{ display: "none", color: "red" }}>
                  Chest around Value missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Waist around"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setwaistar(e.target.value),
                  }}
                />
                <div id="myDIVwa" style={{ display: "none", color: "red" }}>
                  Waist around Value missing
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Shirt Length"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setshirtlen(e.target.value),
                  }}
                />
                <div id="myDIVsl" style={{ display: "none", color: "red" }}>
                  Shirt Length missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Sleeves Length"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setslevelen(e.target.value),
                  }}
                />
                <div id="myDIVsll" style={{ display: "none", color: "red" }}>
                  Sleeves Length missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Around Waist"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setarwaist(e.target.value),
                  }}
                />
                <div id="myDIVarw" style={{ display: "none", color: "red" }}>
                  Around Waist missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Bicep "
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setbicep(e.target.value),
                  }}
                />
                <div id="myDIVbicep" style={{ display: "none", color: "red" }}>
                  Bicep Value missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Arm Hole"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setarmhole(e.target.value),
                  }}
                />
                <div id="myDIVah" style={{ display: "none", color: "red" }}>
                  Arm Hole Value missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Around Navel"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setarnavel(e.target.value),
                  }}
                />
                <div id="myDIVnavel" style={{ display: "none", color: "red" }}>
                  Around Navel Value missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Around Wrist"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setarwrist(e.target.value),
                  }}
                />
                <div id="myDIVarw" style={{ display: "none", color: "red" }}>
                  Around Wrist Value missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Around hip"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setarhip(e.target.value),
                  }}
                />
                <div id="myDIVarh" style={{ display: "none", color: "red" }}>
                  Around hip missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Sherwani Length"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setsherwanilen(e.target.value),
                  }}
                />
                <div id="myDIVshl" style={{ display: "none", color: "red" }}>
                  Sherwani Length missing
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
                <Button color="info" onClick={perNext}>
                  Next
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Tab>
        <Tab
          eventKey="bottom"
          title="Shalwar/Pant/Plazzo/Trouser Measurement"
          disabled={tab1}
        >
          <div>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Length"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setplen(e.target.value),
                  }}
                />
                <div id="myDIVlength" style={{ display: "none", color: "red" }}>
                  Length missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Asun/Fly"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setasnu(e.target.value),
                  }}
                />
                <div id="myDIVfly" style={{ display: "none", color: "red" }}>
                  Asun/Fly Value missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Waist around"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setpwasitar(e.target.value),
                  }}
                />
                <div id="myDIVwar" style={{ display: "none", color: "red" }}>
                  Waist around Value missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Inseam"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setpinseam(e.target.value),
                  }}
                />
                <div id="myDIVInseam" style={{ display: "none", color: "red" }}>
                  Inseam Value missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Hips"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setpenthip(e.target.value),
                  }}
                />
                <div id="myDIVhips" style={{ display: "none", color: "red" }}>
                  hips value missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Around Calf"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setparcalf(e.target.value),
                  }}
                />
                <div id="myDIVcalf" style={{ display: "none", color: "red" }}>
                  Around Calf Value missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Around thigh"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setparthigh(e.target.value),
                  }}
                />
                <div id="myDIVarth" style={{ display: "none", color: "red" }}>
                  Around thigh Value missing
                </div>
              </GridItem>
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Around knee"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setparknee(e.target.value),
                  }}
                />
                <div id="myDIVknee" style={{ display: "none", color: "red" }}>
                  Around knee Value missing
                </div>
              </GridItem>
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Around ankle"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setparankle(e.target.value),
                  }}
                />
                <div id="myDIVaran" style={{ display: "none", color: "red" }}>
                  Around ankle Value missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="default" onClick={botback}>
                  Back
                </Button>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="info" onClick={botnext}>
                  Next
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Tab>
        <Tab eventKey="des" title="Description" disabled={tab2}>
          <div>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="description"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setdes(e.target.value),
                  }}
                />
                <div id="myDIVdes" style={{ display: "none", color: "red" }}>
                  description missing
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <h2>
                  {" "}
                  <h2>Upload Description's Photo</h2>
                </h2>
                <p className={classes.textCenter}>
                  Must be a forward‑facing, centered photo including the
                  driver’s full face and top of shoulders, with no sunglasses.
                  Must be a photo only of the applicant with no other subject in
                  the frame, well‑lit, and in focus. It cannot be an applicant’s
                  CNIC photo or other printed photograph
                </p>
                <Input
                  type="file"
                  name="selectedFile"
                  id="exampleFile"
                  onChange={onChangeHandler}
                />
                <div id="myDIVpic" style={{ display: "none", color: "red" }}>
                  Photo missing
                </div>
              </GridItem>
            </GridContainer>

            <br />
            <br />
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="default" onClick={desback}>
                  Back
                </Button>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="info" onClick={getalldata}>
                  Save Measurements
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
