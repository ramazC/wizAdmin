import React from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import Modal from "react-modal";

import ProductDetailInfo from "../../components/ProductDetailInfo";
import ImagesModal from "../../components/ImagesModal";
import { IconStar, IconThumbFilled } from "../../components/Icon";

import "./styles.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

Modal.setAppElement("#root");
const AddInfo = styled.div`
  width: 137px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14.5px;
  margin-right: 24px;
  font-size: 14px;
  border: solid 1px #5c9e68;
  padding-bottom: 3px;
  color: ${props => (props.selected ? " #ffffff" : "#5c9e68")};
  background-color: ${props => (props.selected ? "#5c9e68" : " #ffffff")};
`;

const styles = theme => ({
  tabsContainer: {
    justifyContent: "flex-start"
  },
  root: {
    width: "20%",
    maxWidth: "287px",
    fontSize: "16px"
  },
  selected: {
    color: "#5c9e68 !important",
    fontWeight: "bold !important",
    textTransform: "capitalize"
  },
  textColor: {
    color: "#434b56",
    opacity: 1,
    textTransform: "capitalize"
  }
});

const tabs = [
  {
    title: "Main details"
  },
  {
    title: "Products"
  },
  {
    title: "Reviews"
  }
];
const data = ["Filter1", "Filter2", "Filter3", "Filter3"];

class Brewery extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      tabIndex: 0,
      onCheck: 0,
      shortDescription: "",
      longDescription: "",
      address: "",
      country: "",
      telephone: "",
      fax: "",
      url: "",
      email: "",
      languages: "",
      visit: "",
      establish: "",
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
  }

  componentDidMount() {
    this.setState({
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      address: "3 Chome-109 Nishiki Kuriyama-chō,  Hokkaidō 069-1521 Japan",
      country: "Japan",
      telephone: "+81 167 962125",
      fax: "",
      url: "",
      email: "",
      languages: "English, Japanese",
      visit: "",
      establish: ""
    });
  }

  handleTabChange = (e, index) => {
    this.setState({
      tabIndex: index
    });
  };

  itemChange = (id, value) => {
    this.setState({
      [id]: value
    });
  };

  render() {
    const {
      modalIsOpen,
      tabIndex,
      onCheck,
      shortDescription,
      longDescription,
      address,
      country,
      telephone,
      fax,
      url,
      email,
      languages,
      visit,
      establish
    } = this.state;
    const { classes } = this.props;
    return (
      <div className="brewery">
        {modalIsOpen && (
          <ImagesModal
            text="Kikusharazi Shuzu"
            data={data}
            closeModal={() => this.setState({ modalIsOpen: false })}
          />
        )}
        <div className="brewery__title">
          <p>kusharazi Shuzu</p>
          <div>
            <span>Edit details</span>
            <span>Book now</span>
          </div>
        </div>
        <div className="brewery__tabs">
          <Tabs
            indicatorColor="primary"
            value={tabIndex}
            onChange={this.handleTabChange}
            classes={{ flexContainer: classes.tabsContainer }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.title}
                classes={{
                  root: classes.root,
                  textColorInherit: classes.textColor,
                  //       label: classes.label,
                  selected: classes.selected
                }}
              />
            ))}
          </Tabs>
        </div>
        {tabIndex === 0 && (
          <div className="brewery__main">
            <div className="brewery__main__header">
              <p>Information</p>
            </div>
            <div className="brewery__main__body">
              <div className="brewery__main__body__infos">
                <ProductDetailInfo
                  text="Short description"
                  required={false}
                  inputType={false}
                  dropdownType={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="shortDescription"
                  value={shortDescription}
                  data={data}
                />
                <ProductDetailInfo
                  text="Long description"
                  required={false}
                  inputType={false}
                  dropdownType={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="longDescription"
                  value={longDescription}
                  data={data}
                />
                <ProductDetailInfo
                  text="Address"
                  required={false}
                  inputType={true}
                  dropdownType={true}
                  onlyView={true}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="address"
                  value={address}
                  data={data}
                />

                <ProductDetailInfo
                  text="Country of origin"
                  required={false}
                  inputType={true}
                  dropdownType={true}
                  onlyView={true}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="country"
                  value={country}
                  data={data}
                />
                <div className="brewery__main__body__infos__map">
                  <GoogleMapReact
                    bootstrapURLKeys={{}}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                  />
                </div>
                <div className="brewery__main__body__infos__two">
                  <ProductDetailInfo
                    text="Telephone"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="telephone"
                    value={telephone}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="FAX"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="fax"
                    value={fax}
                    data={data}
                  />
                </div>
                <ProductDetailInfo
                  text="Website URL"
                  required={false}
                  inputType={true}
                  dropdownType={true}
                  onlyView={true}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="url"
                  value={url}
                  data={data}
                />
                <ProductDetailInfo
                  text="Email"
                  required={false}
                  inputType={true}
                  dropdownType={true}
                  onlyView={true}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="email"
                  value={email}
                  data={data}
                />
                <ProductDetailInfo
                  text="Available languages"
                  required={false}
                  inputType={true}
                  dropdownType={true}
                  onlyView={true}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="languages"
                  value={languages}
                  data={data}
                />
                <div className="brewery__main__body__infos__two">
                  <ProductDetailInfo
                    text="Visit per year"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="visit"
                    value={visit}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Established in"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="establish"
                    value={establish}
                    data={data}
                  />
                </div>
              </div>
              <div className="brewery__main__body__images">
                <img
                  alt=""
                  src={require("../../assets/images/mainProduct.png")}
                />
                <img alt="" src={require("../../assets/images/product.png")} />
                <div onClick={() => this.setState({ modalIsOpen: true })}>
                  <img
                    alt=""
                    src={require("../../assets/images/product.png")}
                  />
                  <div>+5</div>
                </div>
              </div>
            </div>
            <div className="brewery__main__buttons">
              <AddInfo selected={true}>Tour available</AddInfo>
              <AddInfo selected={false}>Reservatioin</AddInfo>
              <AddInfo selected={true}>Sales center</AddInfo>
              <AddInfo selected={true}>Tasting on site</AddInfo>
              <AddInfo selected={true}>Open to public</AddInfo>
            </div>
          </div>
        )}
        {tabIndex === 1 && (
          <div className="brewery__products">
            <PerfectScrollbar style={{ height: "500px" }}>
              <div className="brewery__products__images">
                {Array(10)
                  .fill(1)
                  .map((el, i) => (
                    <div key={i}>
                      <img
                        key={i}
                        alt=""
                        src={require("../../assets/images/product.png")}
                      />
                      <p>Product name</p>
                    </div>
                  ))}
              </div>
            </PerfectScrollbar>
          </div>
        )}
        {tabIndex === 2 && (
          <div className="brewery__reviews">
            {Array(5)
              .fill(1)
              .map((el, i) => (
                <div key={i}>
                  <div className="brewery__reviews__reviewer">
                    <img
                      alt="avatar"
                      src={require("../../assets/icons/user.png")}
                    />
                    <div>
                      <p>
                        Catherine Elizabeth Thomas on
                        <span>Senshohumasamune Junmai Daiginjoshu</span>
                      </p>
                      <p>7:34 PM Jan 2nd, 2018</p>
                    </div>
                    <div>
                      <IconStar />
                      <span>4.0</span>
                    </div>
                    <div>
                      <img alt="" src={IconThumbFilled} />
                      <span>2</span>
                    </div>
                  </div>
                  <div className="brewery__reviews__text">
                    "Sophisticated fresh aroma and short texture after taste.
                    Little taste of Japanese dishes are recommended for its
                    pairing."
                  </div>
                </div>
              ))}
            <div className="brewery__reviews__bottom" />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Brewery);
