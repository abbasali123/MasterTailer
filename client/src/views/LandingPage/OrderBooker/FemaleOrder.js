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

import { Form, FormGroup, Label, Input } from "reactstrap";
import Datetime from "react-datetime";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function FemaleOrder() {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  var myModule = require("views/database");
  const [key, setKey] = useState("top");
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
  const [des, setdes] = useState("");

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
  const [tab1, setTab1] = useState(true);
  const [accountno, setaccountno] = useState("");
  const [ibn, setibn] = useState("");

  const desback = () => {
    setKey("bottom");
  };
  //   const validfname = () => {
  //     console.log("inValidate");
  //     let fnameErr = "";
  //     if (!fname != "") {
  //       fnameErr = "invalid fname";
  //       console.log("inValidat");
  //     }

  //     if (fnameErr) {
  //       setfnameErr({ fnameErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };

  //   const validlname = () => {
  //     console.log("inValidate");
  //     let lnameErr = "";
  //     if (!lname != "") {
  //       lnameErr = "invalid lname";
  //       console.log("inValidat");
  //     }

  //     if (lnameErr) {
  //       setlnameErr({ lnameErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validfrname = () => {
  //     console.log("inValidate");
  //     let frnameErr = "";
  //     if (!fathername != "") {
  //       frnameErr = "invalid lname";
  //       console.log("inValidat");
  //     }

  //     if (frnameErr) {
  //       setfrnameErr({ frnameErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validgen = () => {
  //     console.log("inValidate");
  //     let genErr = "";
  //     if (!gender != "") {
  //       genErr = "invalid lname";
  //       console.log("inValidat");
  //     }

  //     if (genErr) {
  //       setgenErr({ genErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validmail = () => {
  //     console.log("inValidate");
  //     let mailErr = "";
  //     if (!altemail.includes("@")) {
  //       mailErr = "invalid mail";
  //       console.log("inValidat");
  //     }

  //     if (mailErr) {
  //       setmailErr({ mailErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validadd = () => {
  //     console.log("inValidate");
  //     let addErr = "";
  //     if (!address != "") {
  //       addErr = "invalid lname";
  //       console.log("inValidat");
  //     }

  //     if (addErr) {
  //       setaddErr({ addErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validcoun = () => {
  //     console.log("inValidate");
  //     let counErr = "";
  //     if (!country != "") {
  //       counErr = "invalid country";
  //       console.log("inValidat");
  //     }

  //     if (counErr) {
  //       setcounErr({ counErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };

  //   const validcity = () => {
  //     console.log("inValidate");
  //     let cityErr = "";
  //     if (!city != "") {
  //       cityErr = "invalid city";
  //       console.log("inValidat");
  //     }

  //     if (cityErr) {
  //       setcityErr({ cityErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validpro = () => {
  //     console.log("inValidate");
  //     let proErr = "";
  //     if (!province != "") {
  //       proErr = "invalid city";
  //       console.log("inValidat");
  //     }

  //     if (proErr) {
  //       setproErr({ proErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validdob = () => {
  //     console.log("inValidate");
  //     let dobErr = "";
  //     if (!bday != "") {
  //       dobErr = "invalid bday";
  //       console.log("inValidat");
  //     }

  //     if (dobErr) {
  //       setdobErr({ dobErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validzcode = () => {
  //     console.log("inValidate");
  //     let zcodeErr = "";
  //     if (!zipcode != "") {
  //       zcodeErr = "invalid zipcode";
  //       console.log("inValidat");
  //     }

  //     if (zcodeErr) {
  //       setzcodeErr({ zcodeErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validcnic = () => {
  //     console.log("inValidate");
  //     let cnicErr = "";
  //     if (!cnic != "") {
  //       cnicErr = "invalid cnic";
  //       console.log("inValidat");
  //     }

  //     if (cnicErr) {
  //       setcnicErr({ cnicErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validqual = () => {
  //     console.log("inValidate");
  //     let qualErr = "";
  //     if (!quli != "") {
  //       qualErr = "invalid qualification";
  //       console.log("inValidat");
  //     }

  //     if (qualErr) {
  //       setqualErr({ qualErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validrel = () => {
  //     console.log("inValidate");
  //     let relErr = "";
  //     if (!relegion != "") {
  //       relErr = "invalid rel";
  //       console.log("inValidat");
  //     }

  //     if (relErr) {
  //       setrelErr({ relErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validbname = () => {
  //     console.log("inValidate");
  //     let bnameErr = "";
  //     if (!bankname != "") {
  //       bnameErr = "invalid bankname";
  //       console.log("inValidat");
  //     }

  //     if (bnameErr) {
  //       setbnameErr({ bnameErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validbrname = () => {
  //     console.log("inValidate");
  //     let brnameErr = "";
  //     if (!branchname != "") {
  //       brnameErr = "invalid rel";
  //       console.log("inValidat");
  //     }

  //     if (brnameErr) {
  //       setbrnameErr({ brnameErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validbrcity = () => {
  //     console.log("inValidate");
  //     let brcityErr = "";
  //     if (!bankcity != "") {
  //       brcityErr = "invalid rel";
  //       console.log("inValidat");
  //     }

  //     if (brcityErr) {
  //       setbrcityErr({ brcityErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validaname = () => {
  //     console.log("inValidate");
  //     let anameErr = "";
  //     if (!accountname != "") {
  //       anameErr = "invalid anameErr";
  //       console.log("inValidat");
  //     }

  //     if (anameErr) {
  //       setanameErr({ anameErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validatype = () => {
  //     console.log("inValidate");
  //     let atypeErr = "";
  //     if (!type != "") {
  //       atypeErr = "invalid rel";
  //       console.log("inValidat");
  //     }

  //     if (atypeErr) {
  //       setatypeErr({ atypeErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validano = () => {
  //     console.log("inValidate");
  //     let anoErr = "";
  //     if (!accountno != "") {
  //       anoErr = "invalid anoErr";
  //       console.log("inValidat");
  //     }

  //     if (anoErr) {
  //       setanoErr({ anoErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validibn = () => {
  //     console.log("inValidate");
  //     let ibnErr = "";
  //     if (!ibn != "") {
  //       ibnErr = "invalid ibnErr";
  //       console.log("inValidat");
  //     }

  //     if (ibnErr) {
  //       setibnErr({ ibnErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };
  //   const validfile1 = () => {
  //     console.log("inValidate");
  //     let selectedFileErr = "";
  //     if (!selectedFile != "") {
  //       selectedFileErr = "invalid selectedFileErr";
  //       console.log("inValidat");
  //     }

  //     if (selectedFileErr) {
  //       setselectedFileErr({ selectedFileErr });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };

  //   const validfile2 = () => {
  //     console.log("inValidate");
  //     let selectedFile1Err = "";
  //     if (!selectedFile1 != "") {
  //       selectedFile1Err = "invalid selectedFile1Err";
  //       console.log("inValidat");
  //     }

  //     if (selectedFile1Err) {
  //       setselectedFile1Err({ selectedFile1Err });
  //       return false;
  //       console.log("inValid");
  //     }
  //     return true;
  //   };

  const perNext = () => {
    // let isValidfname = validfname();
    // let isValidlname = validlname();
    // let isValidfrname = validfrname();
    // let isValidgen = validgen();
    // let isValidmail = validmail();
    // let isValidadd = validadd();
    // let isValidcity = validcity();
    // let isValidpro = validpro();
    // let isValidcoun = validcoun();
    // let isValidzcode = validzcode();
    // let isValiddob = validdob();
    // let isValidcnic = validcnic();
    // let isValidqual = validqual();
    // let isValidrel = validrel();

    // // let isValidpass = validatePass();
    // if (
    //   isValidfname &&
    //   isValidlname &&
    //   isValidfrname &&
    //   isValidgen &&
    //   isValidmail &&
    //   isValidadd &&
    //   isValidcity &&
    //   isValidpro &&
    //   isValidcoun &&
    //   isValidzcode &&
    //   isValiddob &&
    //   isValidcnic &&
    //   isValidqual &&
    //   isValidrel
    // ) {
    setKey("bottom");
    setTab2(false);
    // }
    // if (isValidfname) {
    //   var x = document.getElementById("myDIVfname");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVfname");
    //   x.style.display = "block";
    // }
    // if (isValidlname) {
    //   var x = document.getElementById("myDIVlname");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVlname");
    //   x.style.display = "block";
    // }
    // if (isValidfrname) {
    //   var x = document.getElementById("myDIVfrname");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVfrname");
    //   x.style.display = "block";
    // }
    // if (isValidgen) {
    //   var x = document.getElementById("myDIVgen");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVgen");
    //   x.style.display = "block";
    // }
    // if (isValidmail) {
    //   var x = document.getElementById("myDIVmail");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVmail");
    //   x.style.display = "block";
    // }
    // if (isValidadd) {
    //   var x = document.getElementById("myDIVadd");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVadd");
    //   x.style.display = "block";
    // }
    // if (isValidcity) {
    //   var x = document.getElementById("myDIVcity");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVcity");
    //   x.style.display = "block";
    // }
    // if (isValidpro) {
    //   var x = document.getElementById("myDIVpro");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVpro");
    //   x.style.display = "block";
    // }
    // if (isValidcoun) {
    //   var x = document.getElementById("myDIVcoun");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVcoun");
    //   x.style.display = "block";
    // }
    // if (isValidzcode) {
    //   var x = document.getElementById("myDIVzcode");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVzcode");
    //   x.style.display = "block";
    // }
    // if (isValiddob) {
    //   var x = document.getElementById("myDIVdob");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVdob");
    //   x.style.display = "block";
    // }
    // if (isValidcnic) {
    //   var x = document.getElementById("myDIVcnic");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVcnic");
    //   x.style.display = "block";
    // }
    // if (isValidqual) {
    //   var x = document.getElementById("myDIVqual");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVqual");
    //   x.style.display = "block";
    // }
    // if (isValidrel) {
    //   var x = document.getElementById("myDIVrel");
    //   x.style.display = "none";
    // } else {
    //   var x = document.getElementById("myDIVrel");
    //   x.style.display = "block";
    // }
  };

  const Upnext = () => {
    // let isvalidfile1 = validfile1();
    // let isvalidfile2 = validfile2();
    // if (isvalidfile1 && isvalidfile2) {
    setKey("bank");
    setTab1(false);
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

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setselectedFile(e.target.files[0]);
  };

  const UpBack = () => {
    setKey("personal");
  };

  const botback = () => {
    setKey("top");
  };

  const botnext = () => {
    setKey("des");
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

  // const onChangeHandler = (e) => {
  //   setselectedFile(e.target.files[0]);
  // };
  // const onChangeHandler1 = (e) => {
  //   setselectedFile1(e.target.files[0]);
  // };
  // const onChangeHandler2 = (e) => {
  //   setselectedFile2(e.target.files[0]);
  // };

  // const onChangeHandler3 = (e) => {
  //   setselectedFile3(e.target.files[0]);
  // };
  // const onChangeHandler4 = (e) => {
  //   setselectedFile4(e.target.files);
  // };
  const getalldata = async () => {
    // var measure = {
    //   stos: stos,
    //   aneck: aneck,
    //   chestar: chestar,
    //   waistar: waistar,
    //   arwaist: arwaist,
    //   bicep: bicep,
    //   armhole: armhole,
    //   arnavel: arnavel,
    //   arwrist: arwrist,
    //   arhip: arhip,
    //   sherwanilen: sherwanilen,
    //   plen: plen,
    //   asnu: asnu,
    //   pwasitar: pwasitar,
    //   pinseam: pinseam,
    //   penthip: penthip,
    //   parcalf: parcalf,
    //   parthigh: parthigh,
    //   parknee: parknee,
    //   parankle: parankle,
    // };
    // var completeInfo = {
    //   measure: measure,
    //   gender: props.gender,
    // };
    // props.setdata((searches) => [...searches, completeInfo]);
    // console.log(props.data);
    // let isValidbname = validbname();
    // let isValidbrname = validbrname();
    // let isValidbrcity = validbrcity();
    // let isValidaname = validaname();
    // let isValidatype = validatype();
    // let isValidano = validano();
    // let isValidibn = validibn();
    // // let isValidpass = validatePass();
    // if (
    //   isValidbname &&
    //   isValidbrname &&
    //   isValidbrcity &&
    //   isValidaname &&
    //   isValidatype &&
    //   isValidano &&
    //   isValidibn
    // ) {
    // const data = new FormData();
    // const data1 = new FormData();
    // data.append("file", selectedFile);
    // data1.append("file1", selectedFile1);
    // const data2 = new FormData();
    // const data3 = new FormData();
    // data2.append("file2", selectedFile2);
    // data3.append("file3", selectedFile3);
    // const data4 = new FormData();
    // for (var x = 0; x < selectedFile4.length; x++) {
    //   data4.append("file4", selectedFile4[x]);
    // }
    // axios
    //   .post(myModule.servername + "/api/users/upload", data, {
    //     // receive two    parameter endpoint url ,form data
    //   })
    //   .then((res) => {
    //     // then print response status
    //     console.log(res.statusText);
    //   });
    // axios
    //   .post(myModule.servername + "/api/users/upload1", data1, {
    //     // receive two    parameter endpoint url ,form data
    //   })
    //   .then((res) => {
    //     // then print response status
    //     console.log(res.statusText);
    //   });
    // axios
    //   .post(myModule.servername + "/api/users/upload2", data2, {
    //     // receive two    parameter endpoint url ,form data
    //   })
    //   .then((res) => {
    //     // then print response status
    //     console.log(res.statusText);
    //   });
    // axios
    //   .post(myModule.servername + "/api/users/upload3", data3, {
    //     // receive two    parameter endpoint url ,form data
    //   })
    //   .then((res) => {
    //     // then print response status
    //     console.log(res.statusText);
    //   });
    // axios
    //   .post(myModule.servername + "/api/users/upload4", data4, {
    //     // receive two    parameter endpoint url ,form data
    //   })
    //   .then((res) => {
    //     // then print response status
    //     console.log(res.statusText);
    //   });
    // var parts = window.location.pathname.split("/");
    // var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash
    // const response = await fetch(
    //   myModule.servername + "/api/users/sendadmindata",
    //   {
    //     method: "post",
    //     headers: {
    //       "content-type": "application/x-www-form-urlencoded; charset=utf-8",
    //     },
    //     body: `fname=${fname}&mname=${mname}&lname=${lname}&fathername=${fathername}
    //       &wnumber=${wnumber}}&altemail=${altemail}
    //       &address=${address}&nlandmark=${nlandmark}&city=${city}&province=${province}
    //       &country=${country}&zipcode=${zipcode}
    //       &bday=${bday}&cnic=${cnic}
    //       &quli=${quli}&relegion=${relegion}
    //       &bankname=${bankname}&branchname=${branchname}&bankcity=${bankcity}&accountname=${accountname}
    //       &type=${type}&accountno=${accountno}&ibn=${ibn}&data=${data}&orginalid=${lastSegment}`,
    //   }
    // );
    // const json = await response.json();
    // alert("thanks your all data submitted");
    // // }
    // // if (isValidbname) {
    // //   var x = document.getElementById("myDIVbname");
    // //   x.style.display = "none";
    // // } else {
    // //   var x = document.getElementById("myDIVbname");
    // //   x.style.display = "block";
    // // }
    // // if (isValidbrname) {
    // //   var x = document.getElementById("myDIVbrname");
    // //   x.style.display = "none";
    // // } else {
    // //   var x = document.getElementById("myDIVbrname");
    // //   x.style.display = "block";
    // // }
    // // if (isValidbrcity) {
    // //   var x = document.getElementById("myDIVbrcity");
    // //   x.style.display = "none";
    // // } else {
    // //   var x = document.getElementById("myDIVbrcity");
    // //   x.style.display = "block";
    // // }
    // // if (isValidaname) {
    // //   var x = document.getElementById("myDIVaname");
    // //   x.style.display = "none";
    // // } else {
    // //   var x = document.getElementById("myDIVaname");
    // //   x.style.display = "block";
    // // }
    // // if (isValidano) {
    // //   var x = document.getElementById("myDIVano");
    // //   x.style.display = "none";
    // // } else {
    // //   var x = document.getElementById("myDIVano");
    // //   x.style.display = "block";
    // // }
    // // if (isValidatype) {
    // //   var x = document.getElementById("myDIVatype");
    // //   x.style.display = "none";
    // // } else {
    // //   var x = document.getElementById("myDIVatype");
    // //   x.style.display = "block";
    // // }
    // // if (isValidibn) {
    // //   var x = document.getElementById("myDIVibn");
    // //   x.style.display = "none";
    // // } else {
    // //   var x = document.getElementById("myDIVibn");
    // //   x.style.display = "block";
    // // }
  };
  return (
    <div id="navigation-pills">
      <h1 className={classes.textCenter}>
        <small>Female Measurement Form</small>
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
        <Tab eventKey="top" title="Shirt/Upper Measurements">
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
                    onChange: (e) => setfname(e.target.value),
                  }}
                />
                <div id="myDIVsts" style={{ display: "none", color: "red" }}>
                  Shoulder to Shoulder Value missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Single Shoulder"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setmname(e.target.value),
                  }}
                />
                <div id="myDIVsis" style={{ display: "none", color: "red" }}>
                  Single Shoulder Value missing
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
                    onChange: (e) => setlname(e.target.value),
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
                    onChange: (e) => setfathername(e.target.value),
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
                    onChange: (e) => setaltemail(e.target.value),
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
                    onChange: (e) => setwnumber(e.target.value),
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
                    onChange: (e) => setaddress(e.target.value),
                  }}
                />
                <div id="myDIVarw" style={{ display: "none", color: "red" }}>
                  Around Waist missing
                </div>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Front Neck depth"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setnlandmark(e.target.value),
                  }}
                />
                <div id="myDIVfneck" style={{ display: "none", color: "red" }}>
                  Front Neck depth Value missing
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
                    onChange: (e) => setcity(e.target.value),
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
                  labelText="Back Neck Depth"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setprovince(e.target.value),
                  }}
                />
                <div id="myDIVbneck" style={{ display: "none", color: "red" }}>
                  Back Neck Depth Value missing
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
                    onChange: (e) => setzipcode(e.target.value),
                  }}
                />
                <div id="myDIVarw" style={{ display: "none", color: "red" }}>
                  Around Wrist Value missing
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
                    onChange: (e) => setbankname(e.target.value),
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
                    onChange: (e) => setbranchname(e.target.value),
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
                    onChange: (e) => setbankcity(e.target.value),
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
                    onChange: (e) => setaccountname(e.target.value),
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
                    onChange: (e) => settype(e.target.value),
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
                  labelText="Mori"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setaccountno(e.target.value),
                  }}
                />
                <div id="myDIVmori" style={{ display: "none", color: "red" }}>
                  Mori Value missing
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
                    onChange: (e) => setibn(e.target.value),
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
                    onChange: (e) => setibn(e.target.value),
                  }}
                />
                <div id="myDIVknee" style={{ display: "none", color: "red" }}>
                  Around knee Value missing
                </div>
              </GridItem>
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Waist to crotch"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setibn(e.target.value),
                  }}
                />
                <div id="myDIVwtc" style={{ display: "none", color: "red" }}>
                  Waist to crotch Value missing
                </div>
              </GridItem>
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Width around the crotch"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setibn(e.target.value),
                  }}
                />
                <div id="myDIVwatc" style={{ display: "none", color: "red" }}>
                  Width around the crotch Value missing
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Width around the bottom seam"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setibn(e.target.value),
                  }}
                />
                <div id="myDIVwabs" style={{ display: "none", color: "red" }}>
                  Width around the bottom seam Value missing
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
