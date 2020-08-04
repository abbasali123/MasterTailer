import React, { useState, useEffect } from "react";
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
import OrderBooker from "./OrderBookerComponent/OrderbookerOrders";
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
  var myModule = require("views/database");
  const [key, setKey] = useState("personal");
  //Error
  const [fnameErr, setfnameErr] = useState("");
  const [lnameErr, setlnameErr] = useState("");
  const [frnameErr, setfrnameErr] = useState("");
  const [genErr, setgenErr] = useState("");
  const [mailErr, setmailErr] = useState("");
  const [addErr, setaddErr] = useState("");
  const [cityErr, setcityErr] = useState("");
  const [proErr, setproErr] = useState("");
  const [counErr, setcounErr] = useState("");
  const [zcodeErr, setzcodeErr] = useState("");
  const [dobErr, setdobErr] = useState("");
  const [cnicErr, setcnicErr] = useState("");
  const [qualErr, setqualErr] = useState("");
  const [relErr, setrelErr] = useState("");
  const [bnameErr, setbnameErr] = useState("");
  const [brnameErr, setbrnameErr] = useState("");
  const [brcityErr, setbrcityErr] = useState("");
  const [anameErr, setanameErr] = useState("");
  const [atypeErr, setatypeErr] = useState("");
  const [anoErr, setanoErr] = useState("");
  const [ibnErr, setibnErr] = useState("");
  const [selectedFileErr, setselectedFileErr] = useState("");
  const [selectedFile1Err, setselectedFile1Err] = useState("");

  const classes = useStyles();
  const [fname, setfname] = useState("");
  const [selectedFile, setselectedFile] = useState("");
  const [selectedFile1, setselectedFile1] = useState("");
  const [selectedFile2, setselectedFile2] = useState("");
  const [selectedFile3, setselectedFile3] = useState("");
  const [selectedFile4, setselectedFile4] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setlname] = useState("");
  const [fathername, setfathername] = useState("");
  const [gender, setgender] = useState("Male");

  const [ph, setph] = useState("");

  const [wnumber, setwnumber] = useState("");

  const [email, setemail] = useState("");
  const [altemail, setaltemail] = useState("");
  const [address, setaddress] = useState("");
  const [nlandmark, setnlandmark] = useState("");
  const [city, setcity] = useState("");
  const [zipcode, setzipcode] = useState("");

  const [province, setprovince] = useState("");
  const [country, setcountry] = useState("Pakistan");

  const [bday, setbday] = useState("");
  const [cnic, setcnic] = useState("");
  const [quli, setquli] = useState("Matric");
  const [bankname, setbankname] = useState("");
  const [branchname, setbranchname] = useState("");
  const [bankcity, setbankcity] = useState("");
  const [accountname, setaccountname] = useState("");
  const [type, settype] = useState("");
  const [relegion, setrelegion] = useState("");
  const [tab2, setTab2] = useState(true);
  const [tab3, setTab3] = useState(true);
  const [accountno, setaccountno] = useState("");
  const [ibn, setibn] = useState("");
  const [initialinfo, setinitialinfo] = useState("");

  const checkinitialinfo = async () => {
    const response = await fetch(
      myModule.servername + "/api/users/checkinitialinfo",
      {
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
          "x-auth-token": window.localStorage.getItem("jsonToken"),
        },
        body: `postedid=${window.localStorage.getItem("darziwebtoken")}`,
      }
    );
    const json = await response.json();
    setinitialinfo(json);
  };

  useEffect(() => {
    checkinitialinfo();
  }, []);

  const validfname = () => {
    console.log("inValidate");
    let fnameErr = "";
    if (!fname != "") {
      fnameErr = "invalid fname";
      console.log("inValidat");
    }

    if (fnameErr) {
      setfnameErr({ fnameErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validlname = () => {
    console.log("inValidate");
    let lnameErr = "";
    if (!lname != "") {
      lnameErr = "invalid lname";
      console.log("inValidat");
    }

    if (lnameErr) {
      setlnameErr({ lnameErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validfrname = () => {
    console.log("inValidate");
    let frnameErr = "";
    if (!fathername != "") {
      frnameErr = "invalid lname";
      console.log("inValidat");
    }

    if (frnameErr) {
      setfrnameErr({ frnameErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validgen = () => {
    console.log("inValidate");
    let genErr = "";
    if (!gender != "") {
      genErr = "invalid lname";
      console.log("inValidat");
    }

    if (genErr) {
      setgenErr({ genErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validmail = () => {
    console.log("inValidate");
    let mailErr = "";
    if (!altemail.includes("@")) {
      mailErr = "invalid mail";
      console.log("inValidat");
    }

    if (mailErr) {
      setmailErr({ mailErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validadd = () => {
    console.log("inValidate");
    let addErr = "";
    if (!address != "") {
      addErr = "invalid lname";
      console.log("inValidat");
    }

    if (addErr) {
      setaddErr({ addErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validcoun = () => {
    console.log("inValidate");
    let counErr = "";
    if (!country != "") {
      counErr = "invalid country";
      console.log("inValidat");
    }

    if (counErr) {
      setcounErr({ counErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validcity = () => {
    console.log("inValidate");
    let cityErr = "";
    if (!city != "") {
      cityErr = "invalid city";
      console.log("inValidat");
    }

    if (cityErr) {
      setcityErr({ cityErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validpro = () => {
    console.log("inValidate");
    let proErr = "";
    if (!province != "") {
      proErr = "invalid city";
      console.log("inValidat");
    }

    if (proErr) {
      setproErr({ proErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validdob = () => {
    console.log("inValidate");
    let dobErr = "";
    if (!bday != "") {
      dobErr = "invalid bday";
      console.log("inValidat");
    }

    if (dobErr) {
      setdobErr({ dobErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validzcode = () => {
    console.log("inValidate");
    let zcodeErr = "";
    if (!zipcode != "") {
      zcodeErr = "invalid zipcode";
      console.log("inValidat");
    }

    if (zcodeErr) {
      setzcodeErr({ zcodeErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validcnic = () => {
    console.log("inValidate");
    let cnicErr = "";
    if (!cnic != "") {
      cnicErr = "invalid cnic";
      console.log("inValidat");
    }

    if (cnicErr) {
      setcnicErr({ cnicErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validqual = () => {
    console.log("inValidate");
    let qualErr = "";
    if (!quli != "") {
      qualErr = "invalid qualification";
      console.log("inValidat");
    }

    if (qualErr) {
      setqualErr({ qualErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validrel = () => {
    console.log("inValidate");
    let relErr = "";
    if (!relegion != "") {
      relErr = "invalid rel";
      console.log("inValidat");
    }

    if (relErr) {
      setrelErr({ relErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validbname = () => {
    console.log("inValidate");
    let bnameErr = "";
    if (!bankname != "") {
      bnameErr = "invalid bankname";
      console.log("inValidat");
    }

    if (bnameErr) {
      setbnameErr({ bnameErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validbrname = () => {
    console.log("inValidate");
    let brnameErr = "";
    if (!branchname != "") {
      brnameErr = "invalid rel";
      console.log("inValidat");
    }

    if (brnameErr) {
      setbrnameErr({ brnameErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validbrcity = () => {
    console.log("inValidate");
    let brcityErr = "";
    if (!bankcity != "") {
      brcityErr = "invalid rel";
      console.log("inValidat");
    }

    if (brcityErr) {
      setbrcityErr({ brcityErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validaname = () => {
    console.log("inValidate");
    let anameErr = "";
    if (!accountname != "") {
      anameErr = "invalid anameErr";
      console.log("inValidat");
    }

    if (anameErr) {
      setanameErr({ anameErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validatype = () => {
    console.log("inValidate");
    let atypeErr = "";
    if (!type != "") {
      atypeErr = "invalid rel";
      console.log("inValidat");
    }

    if (atypeErr) {
      setatypeErr({ atypeErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validano = () => {
    console.log("inValidate");
    let anoErr = "";
    if (!accountno != "") {
      anoErr = "invalid anoErr";
      console.log("inValidat");
    }

    if (anoErr) {
      setanoErr({ anoErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validibn = () => {
    console.log("inValidate");
    let ibnErr = "";
    if (!ibn != "") {
      ibnErr = "invalid ibnErr";
      console.log("inValidat");
    }

    if (ibnErr) {
      setibnErr({ ibnErr });
      return false;
      console.log("inValid");
    }
    return true;
  };
  const validfile1 = () => {
    console.log("inValidate");
    let selectedFileErr = "";
    if (!selectedFile != "") {
      selectedFileErr = "invalid selectedFileErr";
      console.log("inValidat");
    }

    if (selectedFileErr) {
      setselectedFileErr({ selectedFileErr });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const validfile2 = () => {
    console.log("inValidate");
    let selectedFile1Err = "";
    if (!selectedFile1 != "") {
      selectedFile1Err = "invalid selectedFile1Err";
      console.log("inValidat");
    }

    if (selectedFile1Err) {
      setselectedFile1Err({ selectedFile1Err });
      return false;
      console.log("inValid");
    }
    return true;
  };

  const perNext = () => {
    let isValidfname = validfname();
    let isValidlname = validlname();
    let isValidfrname = validfrname();
    let isValidgen = validgen();
    let isValidmail = validmail();
    let isValidadd = validadd();
    let isValidcity = validcity();
    let isValidpro = validpro();
    let isValidcoun = validcoun();
    let isValidzcode = validzcode();
    let isValiddob = validdob();
    let isValidcnic = validcnic();
    let isValidqual = validqual();
    let isValidrel = validrel();

    // let isValidpass = validatePass();
    if (
      isValidfname &&
      isValidlname &&
      isValidfrname &&
      isValidgen &&
      isValidmail &&
      isValidadd &&
      isValidcity &&
      isValidpro &&
      isValidcoun &&
      isValidzcode &&
      isValiddob &&
      isValidcnic &&
      isValidqual &&
      isValidrel
    ) {
      setKey("upload");
      setTab2(false);
    }
    if (isValidfname) {
      var x = document.getElementById("myDIVfname");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVfname");
      x.style.display = "block";
    }
    if (isValidlname) {
      var x = document.getElementById("myDIVlname");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVlname");
      x.style.display = "block";
    }
    if (isValidfrname) {
      var x = document.getElementById("myDIVfrname");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVfrname");
      x.style.display = "block";
    }
    if (isValidgen) {
      var x = document.getElementById("myDIVgen");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVgen");
      x.style.display = "block";
    }
    if (isValidmail) {
      var x = document.getElementById("myDIVmail");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVmail");
      x.style.display = "block";
    }
    if (isValidadd) {
      var x = document.getElementById("myDIVadd");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVadd");
      x.style.display = "block";
    }
    if (isValidcity) {
      var x = document.getElementById("myDIVcity");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVcity");
      x.style.display = "block";
    }
    if (isValidpro) {
      var x = document.getElementById("myDIVpro");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVpro");
      x.style.display = "block";
    }
    if (isValidcoun) {
      var x = document.getElementById("myDIVcoun");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVcoun");
      x.style.display = "block";
    }
    if (isValidzcode) {
      var x = document.getElementById("myDIVzcode");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVzcode");
      x.style.display = "block";
    }
    if (isValiddob) {
      var x = document.getElementById("myDIVdob");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVdob");
      x.style.display = "block";
    }
    if (isValidcnic) {
      var x = document.getElementById("myDIVcnic");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVcnic");
      x.style.display = "block";
    }
    if (isValidqual) {
      var x = document.getElementById("myDIVqual");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVqual");
      x.style.display = "block";
    }
    if (isValidrel) {
      var x = document.getElementById("myDIVrel");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVrel");
      x.style.display = "block";
    }
  };

  const Upnext = () => {
    let isvalidfile1 = validfile1();
    let isvalidfile2 = validfile2();
    if (isvalidfile1 && isvalidfile2) {
      setKey("bank");
      setTab3(false);
    }
    if (isvalidfile1) {
      var x = document.getElementById("myDIVpic");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVpic");
      x.style.display = "block";
    }
    if (isvalidfile2) {
      var x = document.getElementById("myDIVid");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVid");
      x.style.display = "block";
    }
  };

  const UpBack = () => {
    setKey("personal");
  };

  const BankBack = () => {
    setKey("upload");
  };

  const handlegender = (e) => {
    setgender(e.target.value);
  };
  const handlequli = (e) => {
    setquli(e.target.value);
  };
  const handlecountry = (e) => {
    setcountry(e.target.value);
    console.log(country);
  };
  const handledate = (e) => {
    setbday(e);
  };

  const onChangeHandler = (e) => {
    setselectedFile(e.target.files[0]);
  };
  const onChangeHandler1 = (e) => {
    setselectedFile1(e.target.files[0]);
  };
  const onChangeHandler2 = (e) => {
    setselectedFile2(e.target.files[0]);
  };

  const onChangeHandler3 = (e) => {
    setselectedFile3(e.target.files[0]);
  };
  const onChangeHandler4 = (e) => {
    setselectedFile4(e.target.files);
  };

  const getalldata = async () => {
    alert(localStorage.getItem("darziwebtoken"));
    let isValidbname = validbname();
    let isValidbrname = validbrname();
    let isValidbrcity = validbrcity();
    let isValidaname = validaname();
    let isValidatype = validatype();
    let isValidano = validano();
    let isValidibn = validibn();

    // let isValidpass = validatePass();
    if (
      isValidbname &&
      isValidbrname &&
      isValidbrcity &&
      isValidaname &&
      isValidatype &&
      isValidano &&
      isValidibn
    ) {
      const data = new FormData();

      data.append("file", selectedFile);
      data.append("file", selectedFile1);

      data.append("file", selectedFile2);
      data.append("file", selectedFile3);

      for (var x = 0; x < selectedFile4.length; x++) {
        data.append("file", selectedFile4[x]);
      }

      data.append("uploderid", localStorage.getItem("darziwebtoken"));
      data.append("fname", fname);
      data.append("mname", mname);
      data.append("lname", lname);
      data.append("fathername", fathername);
      data.append("wnumber", wnumber);
      data.append("altemail", altemail);
      data.append("address", address);
      data.append("nlandmark", nlandmark);
      data.append("city", city);
      data.append("province", province);
      data.append("country", country);
      data.append("zipcode", zipcode);

      data.append("bday", bday);

      data.append("cnic", cnic);
      data.append("quli", quli);
      data.append("relegion", relegion);
      data.append("bankname", bankname);
      data.append("branchname", branchname);
      data.append("bankcity", bankcity);
      data.append("accountname", accountname);
      data.append("type", type);
      data.append("accountno", accountno);
      data.append("ibn", ibn);

      let res = await axios.post(
        myModule.servername + "/api/users/sendorderbookerdata",
        data,
        {
          headers: {
            "x-auth-token": window.localStorage.getItem("jsonToken"),
          },
        }
      );

      let respo = res.data;
      alert("Data Submitted");
      window.location = "/form";

      // const response = await fetch(
      //   myModule.servername + "/api/users/senddarzidata",
      //   {
      //     method: "post",
      //     headers: {
      //       "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      //     },
      //     body: `fname=${fname}&mname=${mname}&lname=${lname}&fathername=${fathername}
      //     &wnumber=${wnumber}}&altemail=${altemail}
      //     &address=${address}&nlandmark=${nlandmark}&city=${city}&province=${province}
      //     &country=${country}&zipcode=${zipcode}
      //     &bday=${bday}&cnic=${cnic}
      //     &quli=${quli}&relegion=${relegion}
      //     &bankname=${bankname}&branchname=${branchname}&bankcity=${bankcity}&accountname=${accountname}
      //     &type=${type}&accountno=${accountno}&ibn=${ibn}&data=${data}&orginalid=${window.localStorage.getItem('token')}`,
      //   }
      // );
      // const json = await response.json();
      // alert("thanks your all data submitted");
    }
    if (isValidbname) {
      var x = document.getElementById("myDIVbname");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVbname");
      x.style.display = "block";
    }
    if (isValidbrname) {
      var x = document.getElementById("myDIVbrname");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVbrname");
      x.style.display = "block";
    }
    if (isValidbrcity) {
      var x = document.getElementById("myDIVbrcity");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVbrcity");
      x.style.display = "block";
    }
    if (isValidaname) {
      var x = document.getElementById("myDIVaname");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVaname");
      x.style.display = "block";
    }
    if (isValidano) {
      var x = document.getElementById("myDIVano");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVano");
      x.style.display = "block";
    }
    if (isValidatype) {
      var x = document.getElementById("myDIVatype");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVatype");
      x.style.display = "block";
    }
    if (isValidibn) {
      var x = document.getElementById("myDIVibn");
      x.style.display = "none";
    } else {
      var x = document.getElementById("myDIVibn");
      x.style.display = "block";
    }
  };
  return (
    <div>
      {initialinfo == "completed" ? (
        <>
          <div>
            <h1 style={{ color: "black" }}>Dashboard</h1>

            <OrderBooker />
          </div>
        </>
      ) : (
        <>
          <div id="navigation-pills">
            <h1 className={classes.textCenter}>
              <small>Order Booker Registration</small>
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
              <Tab eventKey="personal" title="Personal Info">
                <div>
                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="First Name"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setfname(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVfname"
                        style={{ display: "none", color: "red" }}
                      >
                        First Name missing
                      </div>
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Middle Name"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setmname(e.target.value),
                        }}
                      />
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Last Name"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setlname(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVlname"
                        style={{ display: "none", color: "red" }}
                      >
                        Last Name missing
                      </div>
                    </GridItem>
                  </GridContainer>

                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Father Name"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setfathername(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVfrname"
                        style={{ display: "none", color: "red" }}
                      >
                        Father Name missing
                      </div>
                    </GridItem>

                    <GridItem xs={6} sm={2} md={2} lg={1.5}>
                      <h3 className="gander">
                        <small>Gender</small>
                      </h3>
                    </GridItem>

                    <GridItem xs={6} sm={2} md={2} lg={2}>
                      <div class="funkyradio">
                        <div class="funkyradio-primary">
                          <input
                            type="radio"
                            name="radio"
                            value="Male"
                            id="radio1"
                            onChange={handlegender}
                            checked
                          />
                          <label for="radio1">Male</label>
                        </div>
                      </div>
                    </GridItem>
                    <GridItem xs={6} sm={2} md={2} lg={2}>
                      <div class="funkyradio">
                        <div class="funkyradio-primary">
                          <input
                            type="radio"
                            name="radio"
                            value="Female"
                            onChange={handlegender}
                            id="radio2"
                          />
                          <label for="radio2">Female</label>
                        </div>
                      </div>
                    </GridItem>

                    <GridItem xs={6} sm={2} md={2} lg={2}>
                      <div class="funkyradio">
                        <div class="funkyradio-primary">
                          <input
                            type="radio"
                            name="radio"
                            value="other"
                            onChange={handlegender}
                            id="radio3"
                          />
                          <label for="radio3">Others</label>
                        </div>
                      </div>
                      <div
                        id="myDIVgen"
                        style={{ display: "none", color: "red" }}
                      >
                        Gender Selection Missing
                      </div>
                    </GridItem>
                  </GridContainer>
                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Alternative Email"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setaltemail(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVmail"
                        style={{ display: "none", color: "red" }}
                      >
                        Email missing
                      </div>
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Whatsapp Number"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setwnumber(e.target.value),
                        }}
                      />
                    </GridItem>
                  </GridContainer>

                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Address"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setaddress(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVadd"
                        style={{ display: "none", color: "red" }}
                      >
                        Address missing
                      </div>
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Nearest Land Mark"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setnlandmark(e.target.value),
                        }}
                      />
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
                          onChange: (e) => setcity(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVcity"
                        style={{ display: "none", color: "red" }}
                      >
                        City missing
                      </div>
                    </GridItem>
                  </GridContainer>

                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Province"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setprovince(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVpro"
                        style={{ display: "none", color: "red" }}
                      >
                        Province missing
                      </div>
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <FormGroup>
                        <Label for="Select">Select Country</Label>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect"
                          onChange={handlecountry}
                        >
                          <option value="Pakistan">Pakistan</option>
                          <option value="Afganistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antigua & Barbuda">
                            Antigua & Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bonaire">Bonaire</option>
                          <option value="Bosnia & Herzegovina">
                            Bosnia & Herzegovina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Ter">
                            British Indian Ocean Ter
                          </option>
                          <option value="Brunei">Brunei</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Canary Islands">Canary Islands</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Channel Islands">
                            Channel Islands
                          </option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">
                            Christmas Island
                          </option>
                          <option value="Cocos Island">Cocos Island</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote DIvoire">Cote DIvoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Curaco">Curacao</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="East Timor">East Timor</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">
                            Equatorial Guinea
                          </option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands">
                            Falkland Islands
                          </option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">
                            French Polynesia
                          </option>
                          <option value="French Southern Ter">
                            French Southern Ter
                          </option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Great Britain">Great Britain</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Hawaii">Hawaii</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="India">India</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Isle of Man">Isle of Man</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Korea North">Korea North</option>
                          <option value="Korea Sout">Korea South</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macau">Macau</option>
                          <option value="Macedonia">Macedonia</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">
                            Marshall Islands
                          </option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Midway Islands">Midway Islands</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Nambia">Nambia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherland Antilles">
                            Netherland Antilles
                          </option>
                          <option value="Netherlands">
                            Netherlands (Holland, Europe)
                          </option>
                          <option value="Nevis">Nevis</option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Niue">Niue</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>

                          <option value="Palau Island">Palau Island</option>
                          <option value="Palestine">Palestine</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">
                            Papua New Guinea
                          </option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Phillipines">Philippines</option>
                          <option value="Pitcairn Island">
                            Pitcairn Island
                          </option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Republic of Montenegro">
                            Republic of Montenegro
                          </option>
                          <option value="Republic of Serbia">
                            Republic of Serbia
                          </option>
                          <option value="Reunion">Reunion</option>
                          <option value="Romania">Romania</option>
                          <option value="Russia">Russia</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="St Barthelemy">St Barthelemy</option>
                          <option value="St Eustatius">St Eustatius</option>
                          <option value="St Helena">St Helena</option>
                          <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                          <option value="St Lucia">St Lucia</option>
                          <option value="St Maarten">St Maarten</option>
                          <option value="St Pierre & Miquelon">
                            St Pierre & Miquelon
                          </option>
                          <option value="St Vincent & Grenadines">
                            St Vincent & Grenadines
                          </option>
                          <option value="Saipan">Saipan</option>
                          <option value="Samoa">Samoa</option>
                          <option value="Samoa American">Samoa American</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome & Principe">
                            Sao Tome & Principe
                          </option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">
                            Solomon Islands
                          </option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syria">Syria</option>
                          <option value="Tahiti">Tahiti</option>
                          <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad & Tobago">
                            Trinidad & Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Turks & Caicos Is">
                            Turks & Caicos Is
                          </option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Erimates">
                            United Arab Emirates
                          </option>
                          <option value="United States of America">
                            United States of America
                          </option>
                          <option value="Uraguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Vatican City State">
                            Vatican City State
                          </option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Virgin Islands (Brit)">
                            Virgin Islands (Brit)
                          </option>
                          <option value="Virgin Islands (USA)">
                            Virgin Islands (USA)
                          </option>
                          <option value="Wake Island">Wake Island</option>
                          <option value="Wallis & Futana Is">
                            Wallis & Futana Is
                          </option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zaire">Zaire</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </Input>
                      </FormGroup>
                      <div
                        id="myDIVcoun"
                        style={{ display: "none", color: "red" }}
                      >
                        Country missing
                      </div>
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Zip Code"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setzipcode(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVzcode"
                        style={{ display: "none", color: "red" }}
                      >
                        Zipcode missing
                      </div>
                    </GridItem>
                  </GridContainer>

                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <FormControl fullWidth>
                        <Label for="Select">Select Date of Birth</Label>
                        <DatePicker
                          selected={bday}
                          onChange={handledate}
                          name="bday"
                          dateFormat="MM/dd/yyyy"
                        />
                      </FormControl>
                      <div
                        id="myDIVdob"
                        style={{ display: "none", color: "red" }}
                      >
                        D.O.B missing
                      </div>
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="CNIC"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setcnic(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVcnic"
                        style={{ display: "none", color: "red" }}
                      >
                        CNIC missing
                      </div>
                    </GridItem>
                  </GridContainer>

                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <FormGroup>
                        <Label for="Select">Select Qulification</Label>
                        <Input
                          type="select"
                          name="quli"
                          id="exampleSelect"
                          onChange={handlequli}
                        >
                          <option value="Matric">Matric</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Graduate">Graduate</option>
                          <option value="PHD/MPHIL">PHD/MPHIL</option>
                        </Input>
                      </FormGroup>
                      <div
                        id="myDIVqual"
                        style={{ display: "none", color: "red" }}
                      >
                        Qualification missing
                      </div>
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <CustomInput
                        labelText="Religion"
                        id="float"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (e) => setrelegion(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVrel"
                        style={{ display: "none", color: "red" }}
                      >
                        Religion missing
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
              <Tab eventKey="upload" title="Upload" disabled={tab2}>
                <div style={{ color: "black" }}>
                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <h2>
                        {" "}
                        <h2>Applicant’s profile photo*:s</h2>
                      </h2>
                      <p className={classes.textCenter}>
                        Must be a forward‑facing, centered photo including the
                        driver’s full face and top of shoulders, with no
                        sunglasses. Must be a photo only of the applicant with
                        no other subject in the frame, well‑lit, and in focus.
                        It cannot be an applicant’s CNIC photo or other printed
                        photograph
                      </p>
                      <Input
                        type="file"
                        name="selectedFile"
                        id="exampleFile"
                        onChange={onChangeHandler}
                      />
                      <div
                        id="myDIVpic"
                        style={{ display: "none", color: "red" }}
                      >
                        Photo missing
                      </div>
                    </GridItem>
                  </GridContainer>

                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <h2>Applicant’s ID*:</h2>
                      <p>
                        A valid National ID Card (Front & Back). Also a Valid
                        CNIC of one of the parent.
                      </p>
                      <Input
                        type="file"
                        name="selectedFile1"
                        id="exampleFile"
                        onChange={onChangeHandler1}
                      />
                      <div
                        id="myDIVid"
                        style={{ display: "none", color: "red" }}
                      >
                        ID Card Photo missing
                      </div>
                    </GridItem>
                  </GridContainer>

                  <br />

                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <h2>
                        Character Certificate/Police Verification Certificate*:
                      </h2>
                      <p>
                        Only Applies for (Order Booker – Darzi) Registration.
                        Can be obtained from Nearest Police station of
                        Applicant’s Residence. <br></br>
                        Required documents to get Police Character Certificate
                        Karachi:
                        <br></br> Copy of applicant’s CNIC
                        <br></br> Copy of applicant’s passport
                        <br></br> Copy of applicant’s PP Size Photographs (4
                        Nos.)
                        <br></br> Copy of father’s CNIC
                        <br></br> Copy of mother’s CNIC
                        <br></br> CNIC copy from any witness / reference /
                        neighbor
                      </p>
                      <Input
                        type="file"
                        name="selectedFile2"
                        id="exampleFile"
                        onChange={onChangeHandler2}
                      />
                    </GridItem>
                  </GridContainer>

                  <br />
                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <h2>References Form*:</h2>
                      <p>
                        Please download the form here. <br></br>
                        Fill all fields and get it signed by both references.
                        Also attach CNIC of both references. We will verify this
                        form with references as per requirement.
                      </p>
                      <Input
                        type="file"
                        name="selectedFile3"
                        id="exampleFile"
                        onChange={onChangeHandler3}
                      />
                    </GridItem>
                  </GridContainer>

                  <br />
                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <h2>Educational Documents*:</h2>
                      <p>
                        Upload Original Scan copies of Educational Documents:
                        <br></br> Matric
                        <br></br>  Intermediate
                        <br></br> Graduation
                        <br></br> Masters
                        <br></br> PHD/MPhil
                        <br></br> Any other courses
                        <br></br>
                        <b>Note:</b>Please first copy All your Documents in one
                        folder then select all files here
                      </p>
                      <Input
                        type="file"
                        multiple
                        name="file"
                        id="exampleFile"
                        onChange={onChangeHandler4}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <Button color="default" onClick={UpBack}>
                        Back
                      </Button>
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <Button color="info" onClick={Upnext}>
                        Next
                      </Button>
                    </GridItem>
                  </GridContainer>
                </div>
              </Tab>
              <Tab eventKey="bank" title="Bank Info" disabled={tab3}>
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
                          onChange: (e) => setbankname(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVbname"
                        style={{ display: "none", color: "red" }}
                      >
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
                          onChange: (e) => setbranchname(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVbrname"
                        style={{ display: "none", color: "red" }}
                      >
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
                          onChange: (e) => setbankcity(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVbrcity"
                        style={{ display: "none", color: "red" }}
                      >
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
                          onChange: (e) => setaccountname(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVaname"
                        style={{ display: "none", color: "red" }}
                      >
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
                          onChange: (e) => settype(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVatype"
                        style={{ display: "none", color: "red" }}
                      >
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
                          onChange: (e) => setaccountno(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVano"
                        style={{ display: "none", color: "red" }}
                      >
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
                          onChange: (e) => setibn(e.target.value),
                        }}
                      />
                      <div
                        id="myDIVibn"
                        style={{ display: "none", color: "red" }}
                      >
                        IBAN missing
                      </div>
                    </GridItem>
                  </GridContainer>

                  <GridContainer className="inputs">
                    <GridItem xs={12} sm={4} md={4} lg={3}>
                      <Button color="default" onClick={BankBack}>
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
        </>
      )}
    </div>
  );
}
