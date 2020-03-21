import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Tabs, Tab, withStyles } from "@material-ui/core";

import ProductDetailInfo from "../../components/ProductDetailInfo";
import ImagesModal from "../../components/ImagesModal";

import {
  IconCategory,
  IconCup,
  IconArrowLeft,
  IconArrowRight,
  IconThumbFilled,
  IconStar
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
const BigText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #434b56;
  margin-bottom: 0px;
`;

const tabs = [
  {
    title: "Product details"
  },
  {
    title: "Images"
  },
  {
    title: "Reviews"
  }
];
const data = ["Filter1", "Filter2", "Filter3", "Filter3"];
class ProductDetailView extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
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

  componentDidMount() {
    this.setState({
      name: "Senshohumasamune Junmai Daiginjoshu",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      longDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      country: "Japan",
      region: "Chubu",
      city: "Nagano",
      weight: "300 ML",
      weighttype: "Milliliters (ML)",
      sake: "Ginjoshu",
      polish: "60",
      meter: 30,
      alcohol: "14%",
      amino: "",
      acidity: "",
      koji: "",
      brewing: "2018",
      flavour: null,
      yeast: null,
      filtration: null,
      ricekoji: null,
      ricekake: null,
      sqeeze: null,
      tank: null
    });
  }

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
      modalIsOpen,
      imageIndex,
      tabIndex,
      onCheck,
      name,
      shortDescription,
      longDescription,
      country,
      region,
      city,
      weight,
      //   weighttype,
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
        {modalIsOpen && (
          <ImagesModal
            text="Senshohumasamune Junmai Daiginjoshu"
            data={data}
            closeModal={() => this.setState({ modalIsOpen: false })}
          />
        )}
        <div className="productDetailView__cards">
          <div className="productDetailView__cards__card">
            <div className="productDetailView__cards__card__icon">
              <img src={IconCategory} alt="" />
            </div>
            <div className="productDetailView__cards__card__info">
              <p>Sake (Nihonshu)</p>
              <p>CATEGORY</p>
            </div>
          </div>
          <div className="productDetailView__cards__card">
            <div className="productDetailView__cards__card__icon">
              <img src={IconCup} alt="" />
            </div>
            <div className="productDetailView__cards__card__info">
              <p>Available</p>
              <p>AVAILABILITY</p>
            </div>
          </div>
          <div className="productDetailView__cards__card">
            <div className="productDetailView__cards__card__icon">
              <img src={IconCup} alt="" />
            </div>
            <div className="productDetailView__cards__card__info">
              <p>Available</p>
              <p>IN STORES</p>
            </div>
          </div>
        </div>
        <div className="productDetailView__tabs">
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
            <div className="productDetailView__main">
              <div className="productDetailView__main__header">
                <p>{name}</p>
                <div className="productDetailView__main__header__button">
                  Edit Product
                </div>
              </div>
              <div className="productDetailView__main__body">
                <div className="productDetailView__main__body__infos">
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

                  <p className="productDetailView__main__body__infos__text">
                    Classification
                  </p>

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

                  <ProductDetailInfo
                    text="Region/State"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="region"
                    value={region}
                    data={data}
                  />

                  <ProductDetailInfo
                    text="Prefecture/City"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="city"
                    value={city}
                    data={data}
                  />

                  <ProductDetailInfo
                    text="Volume/Weight"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="weight"
                    value={weight}
                    data={data}
                  />

                  <ProductDetailInfo
                    text="Sake grade"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="sake"
                    value={sake}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Polish ratio %"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="polish"
                    value={polish}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Sake meter value"
                    //   processbar={true}
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={value => this.onChangeProcess(value)}
                    id="meter"
                    value={meter}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Alcohol %"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
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
                    dropdownType={true}
                    onlyView={true}
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
                    dropdownType={true}
                    onlyView={true}
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
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="koji"
                    value={koji}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="Brewing year"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="brewing"
                    value={brewing}
                    data={data}
                  />
                  <ProductDetailInfo
                    text="SSI flavour profile"
                    required={false}
                    inputType={true}
                    dropdownType={true}
                    onlyView={true}
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
                    onlyView={true}
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
                    onlyView={true}
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
                    onlyView={true}
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
                    onlyView={true}
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
                    onlyView={true}
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
                    onlyView={true}
                    onCheck={onCheck}
                    itemChange={(id, value) => this.itemChange(id, value)}
                    id="tank"
                    value={tank}
                    data={data}
                  />
                </div>
                <div className="productDetailView__main__body__images">
                  <img
                    alt=""
                    src={require("../../assets/images/mainProduct.png")}
                  />
                  <img
                    alt=""
                    src={require("../../assets/images/product.png")}
                  />
                  <div onClick={() => this.setState({ modalIsOpen: true })}>
                    <img
                      alt=""
                      src={require("../../assets/images/product.png")}
                    />
                    <div>+5</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabIndex === 1 && (
            <div className="productDetailView__images">
              <div className="productDetailView__images__title">
                <BigText>Main product images</BigText>
                <div>Add image</div>
              </div>
              <div className="productDetailView__images__slider">
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
              <div className="productDetailView__images__title">
                <BigText>Scanned label images</BigText>
              </div>
              <div className="productDetailView__images__slider">
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
          {tabIndex === 2 && (
            <div className="productDetailView__reviews">
              {Array(5)
                .fill(1)
                .map((el, i) => (
                  <div key={i}>
                    <div className="productDetailView__reviews__reviewer">
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
                    <div className="productDetailView__reviews__text">
                      "Sophisticated fresh aroma and short texture after taste.
                      Little taste of Japanese dishes are recommended for its
                      pairing."
                    </div>
                  </div>
                ))}
              <div className="productDetailView__reviews__bottom" />
            </div>
          )}

          <div className="productDetailView__buttons">
            <div className="productDetailView__buttons__delete">
              Delete product
            </div>
            <div
              className="productDetailView__buttons__save"
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

export default withStyles(styles)(ProductDetailView);
