import React from "react";
import Checkbox from "rc-checkbox";
import styled from "styled-components";
import Slider from "react-slick";
import { Tabs, Tab, withStyles } from "@material-ui/core";

import SelectServing from "../../components/SelectServing";
import ProductDetailInfo from "../../components/ProductDetailInfo";

import {
  IconCategory,
  IconCup,
  IconReject,
  IconApprove,
  IconArrowLeft,
  IconArrowRight
} from "../../components/Icon";
import "rc-checkbox/assets/index.css";
import "./styles.scss";
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
    title: "Product details"
  },
  {
    title: "Images"
  },
  {
    title: "Observation groups"
  }
];
const BigText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #434b56;
  margin-bottom: 0px;
`;

const data = ["Filter1", "Filter2", "Filter3", "Filter3"];
const data1 = ["Mililiters (ML)", "Kilolitters (KL)"];
class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
      availavilityCheck: false,
      storesCheck: true,
      tabIndex: 0,
      switchLang: false,
      selectServing: 0,
      onCheck: false,
      name: "",
      shortDescription: "",
      longDescription: "",
      country: null,
      region: null,
      city: null,
      weight: 300,
      weighttype: "Milliliters (ML)",
      sake: null,
      polish: "60",
      meter: 30,
      alcohol: "",
      amino: "",
      acidity: "",
      koji: "",
      brewing: "",
      flavour: null,
      yeast: null,
      filtration: null,
      ricekoji: null,
      ricekake: null,
      sqeeze: null,
      tank: null
    };
  }

  handleTabChange = (e, index) => {
    this.setState({
      tabIndex: index
    });
  };

  onSaveHandle = () => {
    // const {
    //   name,
    //   shortDescription,
    //   longDescription,
    //   country,
    //   region,
    //   city,
    //   weight,
    //   weighttype,
    //   sake,
    //   polish,
    //   meter,
    //   alcohol,
    //   amino,
    //   acidity,
    //   koji,
    //   brewing,
    //   flavour,
    //   yeast,
    //   filtration,
    //   ricekoji,
    //   ricekake,
    //   sqeeze,
    //   tank
    // } = this.state;
    this.setState({ onCheck: true });
    // if (
    //   name &&
    //   shortDescription &&
    //   longDescription &&
    //   country &&
    //   region &&
    //   city &&
    //   weight &&
    //   sake &&
    //   alcohol &&
    //   brewing &&
    //   flavour
    // ) {
    //   //  this.props.function();
    // }
  };

  itemChange = (id, value) => {
    this.setState({
      [id]: value
    });
  };
  onChangeProcess = value => {
    this.setState({
      meter: value
    });
  };

  render() {
    const {
      imageIndex,
      availavilityCheck,
      storesCheck,
      tabIndex,
      switchLang,
      selectServing,
      onCheck,
      name,
      shortDescription,
      longDescription,
      country,
      region,
      city,
      weight,
      weighttype,
      sake,
      polish,
      meter,
      alcohol,
      amino,
      acidity,
      koji,
      brewing,
      flavour,
      yeast,
      filtration,
      ricekoji,
      ricekake,
      sqeeze,
      tank
    } = this.state;
    const { classes } = this.props;
    function NextArrow(props) {
      const { onClick } = props;
      return <IconArrowRight className="slick-next" onClick={onClick} />;
    }
    function PrevArrow(props) {
      const { onClick } = props;
      return <IconArrowLeft className="slick-prev" onClick={onClick} />;
    }
    return (
      <div className="productDetail">
        <div className="productDetail__cards">
          <div className="productDetail__cards__card">
            <div className="productDetail__cards__card__icon">
              <img src={IconCategory} alt="" />
            </div>
            <div className="productDetail__cards__card__info">
              <p>Sake (Nihonshu)</p>
              <p>CATEGORY</p>
            </div>
          </div>
          <div className="productDetail__cards__card">
            <Checkbox
              name="my-checkbox"
              checked={availavilityCheck}
              onChange={() =>
                this.setState({ availavilityCheck: !availavilityCheck })
              }
            />
            <div className="productDetail__cards__card__icon">
              <img src={IconCup} alt="" />
            </div>
            <div className="productDetail__cards__card__info">
              <p>Available</p>
              <p>AVAILABILITY</p>
            </div>
          </div>
          <div className="productDetail__cards__card">
            <Checkbox
              name="my-checkbox"
              checked={storesCheck}
              onChange={() => this.setState({ storesCheck: !storesCheck })}
            />
            <div className="productDetail__cards__card__icon">
              <img src={IconCup} alt="" />
            </div>
            <div className="productDetail__cards__card__info">
              <p>Available</p>
              <p>IN STORES</p>
            </div>
          </div>
        </div>
        <div className="productDetail__tabs">
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
        <form>
          {tabIndex === 0 && (
            <div className="productDetail__main">
              <div className="productDetail__main__header">
                <p>Main details</p>
                <div className="productDetail__main__header__switch">
                  <p
                    className={
                      switchLang
                        ? "productDetail__main__header__switch__select"
                        : null
                    }
                    onClick={() => this.setState({ switchLang: !switchLang })}
                  >
                    English
                  </p>
                  <p
                    className={
                      !switchLang
                        ? "productDetail__main__header__switch__select"
                        : null
                    }
                    onClick={() => this.setState({ switchLang: !switchLang })}
                  >
                    Japanese
                  </p>
                </div>
              </div>
              <div className="productDetail__main__body">
                <div className="productDetail__main__body__infos">
                  <ProductDetailInfo
                    text="Name"
                    longDescription={false}
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

                  <p className="productDetail__main__body__infos__text">
                    Classification
                  </p>

                  <ProductDetailInfo
                    text="Country of origin"
                    required={true}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="country"
                    value={country}
                    data={data}
                  />

                  <ProductDetailInfo
                    text="Region/State"
                    required={true}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="region"
                    value={region}
                    data={data}
                  />

                  <ProductDetailInfo
                    text="Prefecture/City"
                    required={true}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="city"
                    value={city}
                    data={data}
                  />

                  <div className="productDetail__main__body__infos__weight">
                    <ProductDetailInfo
                      text="Volume/Weight"
                      required={true}
                      inputType={true}
                      dropdownType={false}
                      onCheck={onCheck}
                      itemChange={(id, value) => this.itemChange(id, value)}
                      id="weight"
                      value={weight}
                      data={data}
                    />
                    <ProductDetailInfo
                      text=""
                      required={false}
                      inputType={true}
                      dropdownType={true}
                      onCheck={onCheck}
                      itemChange={(id, value) => this.itemChange(id, value)}
                      id="weighttype"
                      value={weighttype}
                      data={data1}
                    />
                  </div>
                  <ProductDetailInfo
                    text="Sake grade"
                    required={true}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="sake"
                    value={sake}
                    data={data}
                  />
                  <div className="productDetail__main__body__infos__short">
                    <ProductDetailInfo
                      text="Polish ratio %"
                      required={false}
                      inputType={true}
                      dropdownType={false}
                      onCheck={onCheck}
                      itemChange={(id, value) => this.itemChange(id, value)}
                      id="polish"
                      value={polish}
                      data={data}
                    />
                    <ProductDetailInfo
                      text="Sake meter value"
                      processbar={true}
                      required={false}
                      inputType={true}
                      dropdownType={false}
                      onCheck={onCheck}
                      itemChange={value => this.onChangeProcess(value)}
                      id="meter"
                      value={meter}
                      data={data}
                    />
                    <ProductDetailInfo
                      text="Alcohol %"
                      required={true}
                      inputType={true}
                      dropdownType={false}
                      onCheck={onCheck}
                      itemChange={(id, value) => this.itemChange(id, value)}
                      id="alcohol"
                      value={alcohol}
                      data={data}
                    />
                    <ProductDetailInfo
                      text="Amino acid level"
                      required={false}
                      inputType={true}
                      dropdownType={false}
                      onCheck={onCheck}
                      itemChange={(id, value) => this.itemChange(id, value)}
                      id="amino"
                      value={amino}
                      data={data}
                    />
                    <ProductDetailInfo
                      text="Acidity"
                      required={false}
                      inputType={true}
                      dropdownType={false}
                      onCheck={onCheck}
                      itemChange={(id, value) => this.itemChange(id, value)}
                      id="acidity"
                      value={acidity}
                      data={data}
                    />
                    <ProductDetailInfo
                      text="Koji ratio"
                      required={false}
                      inputType={true}
                      dropdownType={false}
                      onCheck={onCheck}
                      itemChange={(id, value) => this.itemChange(id, value)}
                      id="koji"
                      value={koji}
                      data={data}
                    />
                    <ProductDetailInfo
                      text="Brewing year"
                      required={true}
                      inputType={true}
                      dropdownType={false}
                      onCheck={onCheck}
                      itemChange={(id, value) => this.itemChange(id, value)}
                      id="brewing"
                      value={brewing}
                      data={data}
                    />
                  </div>
                  <ProductDetailInfo
                    text="SSI flavour profile"
                    required={true}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="flavour"
                    value={flavour}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Yeast used"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="yeast"
                    value={yeast}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Filtration method"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="filtration"
                    value={filtration}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Rice Koji"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="ricekoji"
                    value={ricekoji}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Rice Kake"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="ricekake"
                    value={ricekake}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Press and sqeeze method"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="sqeeze"
                    value={sqeeze}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Pastorization and Tank storage"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="tank"
                    value={tank}
                    data={data}
                  />

                  <SelectServing
                    selected={selectServing}
                    onChangeSelect={select =>
                      this.setState({ selectServing: select })
                    }
                  />
                </div>
                <div className="productDetail__main__body__images">
                  <p>Main Product image</p>
                  <img
                    alt=""
                    src={require("../../assets/images/mainProduct.png")}
                  />
                  <p>Scanning label</p>
                  <img
                    alt=""
                    src={require("../../assets/images/product.png")}
                  />
                  <div>
                    <p>Live status</p>
                    <p>Not live</p>
                  </div>
                  <div style={{ marginTop: "11px" }}>
                    <p>Create status</p>
                    <p>Sub-mandatory</p>
                  </div>
                  <div>
                    <div>
                      <IconReject /> Reject
                    </div>
                    <div>
                      <IconApprove /> Approve
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabIndex === 1 && (
            <div className="productDetail__images">
              <div className="productDetail__images__title">
                <BigText>Main product images</BigText>
                <div>Add image</div>
              </div>
              <div className="productDetail__images__slider">
                <Slider
                  dots={false}
                  slidesToShow={3.8}
                  slidesToScroll={1}
                  prevArrow={<PrevArrow />}
                  nextArrow={<NextArrow />}
                  infinite={false}
                  //   className={classes.root}
                >
                  {Array(10)
                    .fill(1)
                    .map((el, i) => (
                      <div
                        key={i}
                        className="productImageSlider"
                        onClick={() => this.setState({ imageIndex: i })}
                      >
                        <img
                          src={require("../../assets/images/product.png")}
                          alt=""
                          style={
                            imageIndex === i
                              ? { border: "solid 2px #5c9e68" }
                              : null
                          }
                        />
                        <p>Select as main image</p>
                      </div>
                    ))}
                </Slider>
              </div>
              <div className="productDetail__images__title">
                <BigText>Scanned label images</BigText>
              </div>
              <div className="productDetail__images__slider">
                <Slider
                  dots={false}
                  slidesToShow={3.8}
                  slidesToScroll={1}
                  prevArrow={<PrevArrow />}
                  nextArrow={<NextArrow />}
                  infinite={false}
                  //   className={classes.root}
                >
                  {Array(10)
                    .fill(1)
                    .map((el, i) => (
                      <div
                        key={i}
                        className="productImageSlider"
                        //    onClick={() => this.setState({ imageIndex: i })}
                      >
                        <img
                          src={require("../../assets/images/product.png")}
                          alt=""
                          style={
                            {
                              /* imageIndex === i
                              ? { border: "solid 2px #5c9e68" }
                              : null */
                            }
                          }
                        />
                        <div>
                          <p>Live status</p>
                          <p>Not live</p>
                        </div>
                        <div>
                          <p>Create status</p>
                          <p>Sub-mandatory</p>
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          )}

          <div className="productDetail__buttons">
            <div className="productDetail__buttons__delete">Delete product</div>
            <div
              className="productDetail__buttons__save"
              onClick={this.onSaveHandle}
            >
              Save product
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ProductDetail);
