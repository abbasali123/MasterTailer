import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import PersonIcon from "@material-ui/icons/Person";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CodeIcon from "@material-ui/icons/Code";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

// core components
import CountUp from "react-countup";
import Header from "components/Header/Header.js";

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import CustomInput from "components/CustomInput/CustomInput.js";

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

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function Affiliate(props) {
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
        brand="MasterTailer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Personal Info",
                      tabIcon: PersonIcon,
                      tabContent: (
                        <div>
                          <div className="well well-sm">
                            <h4>PERSONAL DATA</h4>
                          </div>
                          <table className="table bio-table">
                            <tbody>
                              <tr>
                                <td>Name: </td>
                                <td>Abbas</td>
                              </tr>
                              <tr>
                                <td>Mobile No: </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>Email Address: </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>Home Address: </td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ),
                    },
                    {
                      tabButton: "Affiliate Code",
                      tabIcon: CodeIcon,
                      tabContent: (
                        <div>
                          <div className="well well-sm">
                            <h4>Affiliate Code</h4>
                          </div>

                          <table className="table bio-table">
                            <tbody>
                              <tr>
                                <td>Code: </td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>How to use: </td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ),
                    },

                    {
                      tabButton: "Earnings",
                      tabIcon: MonetizationOnIcon,
                      tabContent: (
                        <div>
                          <div className="well well-sm">
                            <h4>Earnings</h4>
                          </div>

                          <table className="table bio-table">
                            <tbody>
                              <tr>
                                <td>Earning:</td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ),
                    },
                    {
                      tabButton: "Payment Details",
                      tabIcon: AccountBalanceIcon,
                      tabContent: (
                        <div>
                          <div id="other">
                            <div className="well well-sm">
                              <h4>EasyPaisa Details </h4>
                            </div>

                            <table className="table bio-table">
                              <tbody>
                                <tr>
                                  <td>Account Name: </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Account Number: </td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div id="bank" style={{ display: "none" }}>
                            <div className="well well-sm">
                              <h4>Bank Details </h4>
                            </div>

                            <table className="table bio-table">
                              <tbody>
                                <tr>
                                  <td>Bank Name: </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Branch Name: </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Branch City: </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Account Name: </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Account Type: </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>Account No: </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>IBAN: </td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ),
                    },
                    {
                      tabButton: "Change Password",
                      tabIcon: VpnKeyIcon,
                      tabContent: (
                        <div>
                          <div className="well well-sm">
                            <h4>Change Password</h4>
                          </div>

                          <table className="table bio-table">
                            <tbody>
                              <tr>
                                <td>
                                  <br />
                                  <br />
                                  Old Password:{" "}
                                </td>
                                <td>
                                  <CustomInput
                                    labelText=""
                                    id="float"
                                    formControlProps={{
                                      fullWidth: true,
                                    }}
                                    inputProps={{
                                      type: "email",
                                      // onChange: (e) => setbankname(e.target.value),
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <br />
                                  <br />
                                  New Password:{" "}
                                </td>
                                <td>
                                  <CustomInput
                                    labelText=""
                                    id="float"
                                    formControlProps={{
                                      fullWidth: true,
                                    }}
                                    inputProps={{
                                      type: "email",
                                      // onChange: (e) => setbankname(e.target.value),
                                    }}
                                  />
                                </td>
                              </tr>
                              <GridContainer
                                className="inputs"
                                justify="center"
                              >
                                <GridItem xs={12} sm={4} md={4} lg={3}>
                                  <Button color="info">Edit</Button>
                                </GridItem>
                              </GridContainer>
                            </tbody>
                          </table>
                        </div>
                      ),
                    },
                  ]}
                />
                <div className="well well-sm">
                  <h2 className={classes.title}>Withdrawal</h2>
                  <br />
                  Apply For Withdrawal
                </div>
                <table className="table bio-table">
                  <tbody>
                    <tr>
                      <td>Full Amount: </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Partial Amount: </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <GridContainer className="inputs" justify="center">
                  <GridItem xs={12} sm={4} md={4} lg={3}>
                    <Button color="success">Withdraw</Button>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
