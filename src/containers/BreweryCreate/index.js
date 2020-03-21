import React from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import Modal from "react-modal";
import Checkbox from "rc-checkbox";

import ProductDetailInfo from "../../components/ProductDetailInfo";
import ImagesModal from "../../components/ImagesModal";
import { IconStar, IconThumbFilled } from "../../components/Icon";

import "rc-checkbox/assets/index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./styles.scss";

Modal.setAppElement("#root");
const AddInfo = styled.div`
  width: 175px;
  height: 22px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 18px;
  line-height: 1.57;
  font-size: 14px;
  padding-bottom: 3px;
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
    title: "Images"
  },
  {
    title: "Reviews"
  }
];
const data = ["Filter1", "Filter2", "Filter3", "Filter3"];

class BreweryCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      tabIndex: 0,
      onCheck: 0,
      switchLang: false,
      name: "",
      shortDescription: "",
      longDescription: "",
      owner: "",
      address: "",
      lat: "",
      long: "",
      country: "",
      province: "",
      city: "",
      postcode: "",
      maplocation: "",
      telephone: "",
      fax: "",
      openfrom: "00:00 AM",
      opentill: "00:00 AM",
      url: "",
      videourl: "",
      email: "",
      languages: "",
      visit: "",
      establish: "",
      otherinfos: "",
      salescenter: false,
      tasting: false,
      openpublic: false,
      tour: false,
      reservation: false,
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
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
      name,
      shortDescription,
      longDescription,
      owner,
      address,
      lat,
      long,
      country,
      province,
      city,
      postcode,
      maplocation,
      telephone,
      fax,
      openfrom,
      opentill,
      url,
      videourl,
      email,
      languages,
      visit,
      establish,
      otherinfos,
      salescenter,
      tasting,
      openpublic,
      tour,
      reservation,
      switchLang
    } = this.state;
    const { classes } = this.props;
    return (
      <div className="breweryCreate">
        {modalIsOpen && (
          <ImagesModal
            text=""
            isBreweryCreate={true}
            data={data}
            closeModal={() => this.setState({ modalIsOpen: false })}
          />
        )}
        <div className="breweryCreate__title">
          <p>breweryCreate details</p>
        </div>
        <div className="breweryCreate__tabs">
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
          <div className="breweryCreate__main">
            <div className="breweryCreate__main__title">
              <div className="breweryCreate__main__title__switch">
                <p
                  className={
                    switchLang
                      ? "breweryCreate__main__title__switch__select"
                      : null
                  }
                  onClick={() => this.setState({ switchLang: !switchLang })}
                >
                  English
                </p>
                <p
                  className={
                    !switchLang
                      ? "breweryCreate__main__title__switch__select"
                      : null
                  }
                  onClick={() => this.setState({ switchLang: !switchLang })}
                >
                  Japanese
                </p>
              </div>
            </div>
            <div className="breweryCreate__main__header">
              <p>Information</p>
              <div className="breweryCreate__main__header__button">
                Add image
              </div>
            </div>
            <div className="breweryCreate__main__body">
              <div className="breweryCreate__main__body__infos">
                <ProductDetailInfo
                  text="Name"
                  required={true}
                  inputType={true}
                  dropdownType={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="name"
                  value={name}
                  data={data}
                />
                <ProductDetailInfo
                  text="Short description"
                  required={true}
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
                  required={true}
                  inputType={false}
                  dropdownType={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="longDescription"
                  value={longDescription}
                  data={data}
                />
                <p className="breweryCreate__main__body__infos__text">
                  Information
                </p>
                <ProductDetailInfo
                  text="Brewery owner"
                  required={true}
                  inputType={true}
                  dropdownType={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="owner"
                  value={owner}
                  data={data}
                />
                <ProductDetailInfo
                  text="Address"
                  required={true}
                  inputType={true}
                  dropdownType={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="address"
                  value={address}
                  data={data}
                />

                <ProductDetailInfo
                  text="Latitude"
                  required={true}
                  inputType={true}
                  dropdownType={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="lat"
                  value={lat}
                  data={data}
                />

                <ProductDetailInfo
                  text="Longitude"
                  required={true}
                  inputType={true}
                  dropdownType={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="long"
                  value={long}
                  data={data}
                />

                <ProductDetailInfo
                  text="Country of origin"
                  required={false}
                  inputType={true}
                  dropdownType={true}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="country"
                  value={country}
                  data={data}
                />

                <ProductDetailInfo
                  text="Province"
                  required={false}
                  inputType={true}
                  dropdownType={true}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="province"
                  value={province}
                  data={data}
                />
                <div className="breweryCreate__main__body__infos__two">
                  <ProductDetailInfo
                    text="Prefecture/City"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="city"
                    value={city}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Postcode"
                    required={false}
                    inputType={true}
                    dropdownType={false}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="postcode"
                    value={postcode}
                    data={data}
                  />
                </div>
                <ProductDetailInfo
                  text="Map location"
                  required={false}
                  inputType={true}
                  dropdownType={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="maplocation"
                  value={maplocation}
                  data={data}
                />
                <div className="breweryCreate__main__body__infos__map">
                  <GoogleMapReact
                    bootstrapURLKeys={{}}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                  />
                </div>
                <div className="breweryCreate__main__body__infos__two">
                  <ProductDetailInfo
                    text="Telephone"
                    required={false}
                    inputType={true}
                    dropdownType={false}
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
                    dropdownType={false}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="fax"
                    value={fax}
                    data={data}
                  />
                </div>
                <div className="breweryCreate__main__body__infos__two">
                  <ProductDetailInfo
                    text="Open from"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="openfrom"
                    value={openfrom}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Open till"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="opentill"
                    value={opentill}
                    data={data}
                  />
                </div>
                <ProductDetailInfo
                  text="Website URL"
                  required={false}
                  inputType={true}
                  dropdownType={false}
                  onlyView={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="url"
                  value={url}
                  data={data}
                />
                <ProductDetailInfo
                  text="Video URL"
                  required={false}
                  inputType={true}
                  dropdownType={false}
                  onlyView={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="videourl"
                  value={videourl}
                  data={data}
                />
                <ProductDetailInfo
                  text="Email"
                  required={false}
                  inputType={true}
                  dropdownType={false}
                  onlyView={false}
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
                  onlyView={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="languages"
                  value={languages}
                  data={data}
                />
                <div className="breweryCreate__main__body__infos__two">
                  <ProductDetailInfo
                    text="Visit per year"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={false}
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
                    onlyView={false}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="establish"
                    value={establish}
                    data={data}
                  />
                </div>
                <ProductDetailInfo
                  text="Other infos"
                  required={true}
                  inputType={false}
                  dropdownType={false}
                  onCheck={onCheck}
                  itemChange={(id, value) => this.itemChange(id, value)}
                  id="otherinfos"
                  value={otherinfos}
                  data={data}
                />
              </div>
              <div className="breweryCreate__main__body__images">
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
            <div className="breweryCreate__main__checks">
              <div>
                <AddInfo
                  onClick={() => this.setState({ salescenter: !salescenter })}
                >
                  <Checkbox name="my-checkbox" checked={salescenter} />
                  Sales center
                </AddInfo>
                <AddInfo onClick={() => this.setState({ tasting: !tasting })}>
                  <Checkbox name="my-checkbox" checked={tasting} />
                  Tasting on site
                </AddInfo>
                <AddInfo
                  onClick={() => this.setState({ openpublic: !openpublic })}
                >
                  <Checkbox name="my-checkbox" checked={openpublic} />
                  Open to public
                </AddInfo>
              </div>
              <div>
                <AddInfo onClick={() => this.setState({ tour: !tour })}>
                  <Checkbox name="my-checkbox" checked={tour} />
                  Tour available
                </AddInfo>
                <AddInfo
                  onClick={() => this.setState({ reservation: !reservation })}
                >
                  <Checkbox name="my-checkbox" checked={reservation} />
                  Reservatioin
                </AddInfo>
              </div>
            </div>
          </div>
        )}
        {tabIndex === 1 && (
          <div className="breweryCreate__products">
            <PerfectScrollbar style={{ height: "500px" }}>
              <div className="breweryCreate__products__images">
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
          <div className="breweryCreate__reviews">
            {Array(5)
              .fill(1)
              .map((el, i) => (
                <div key={i}>
                  <div className="breweryCreate__reviews__reviewer">
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
                  <div className="breweryCreate__reviews__text">
                    "Sophisticated fresh aroma and short texture after taste.
                    Little taste of Japanese dishes are recommended for its
                    pairing."
                  </div>
                </div>
              ))}
            <div className="breweryCreate__reviews__bottom" />
          </div>
        )}
        <div className="breweryCreate__buttons">
          <span>Cancel</span>
          <span>Save changes</span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BreweryCreate);
