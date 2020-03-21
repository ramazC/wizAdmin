import React from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import ReactTooltip from "react-tooltip";

import FilterItem from "../../components/FilterItem";
import {
  IconUsers,
  IconGreenProduct,
  IconVenues,
  IconDelete,
  IconArrowRight,
  IconArrowLeft
  // IconClose
} from "../../components/Icon";
import "./styles.scss";
// require("bootstrap/less/bootstrap.less");

const StatusOk = styled.p`
  width: 64px !important;
  border-radius: 14.5px;
  background-color: #5c9e68;
  font-size: 14px;
  font-weight: normal !important;
  color: #ffffff !important;
  margin-bottom: 0px;
`;

const StatusMiss = styled.p`
  width: 64px !important;
  border-radius: 14.5px;
  background-color: #d70000;
  font-size: 14px;
  font-weight: normal !important;
  color: #ffffff !important;
  margin-bottom: 0px;
`;

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 15
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  goProdcutDetails = () => {
    this.props.history.push("/products/detail");
  };

  render() {
    return (
      <div className="products">
        <div className="products__cards">
          <div className="products__cards__card">
            <div className="products__cards__card__icon">
              <img src={IconUsers} alt="" />
            </div>
            <div className="products__cards__card__info">
              <p>2370</p>
              <p>USERS</p>
            </div>
          </div>
          <div className="products__cards__card">
            <div className="products__cards__card__icon">
              <img src={IconGreenProduct} alt="" />
            </div>
            <div className="products__cards__card__info">
              <p>13660</p>
              <p>PRODUCTS</p>
            </div>
          </div>
          <div className="products__cards__card">
            <div className="products__cards__card__icon">
              <img src={IconVenues} alt="" />
            </div>
            <div className="products__cards__card__info">
              <p>3027</p>
              <p>VENUES</p>
            </div>
          </div>
        </div>
        <div className="products__search">
          <p>Product Management</p>
          <div className="products__search__filter">
            <FilterItem />
            <div className="products__search__filter__button">Search</div>
          </div>
        </div>
        <div className="products__table">
          <div className="products__table__header">
            <p>Name</p>
            <p>Brewing Year</p>
            <p>Classification</p>
            <p>Alcohol</p>
            <p>Label status</p>
            <p>Retailer only</p>
            <p>Availability</p>
            <p>Reviews</p>
            <div></div>
          </div>

          <div className="products__table__body">
            {Array(10)
              .fill(1)
              .map((el, i) => (
                <div key={i}>
                  <div className="products__table__item">
                    <p
                      data-tip
                      data-for="detailProduct"
                      onClick={() => this.goProdcutDetails()}
                    >
                      Juuyondai
                      <br />
                      Junmaidaiginjou11111111
                    </p>
                    <p>2019</p>
                    <p>Junmai Daigijoshu</p>
                    <p>12%</p>
                    <div>
                      <StatusOk>OK</StatusOk>
                    </div>
                    <p>Yes</p>
                    <p>Yamagata</p>
                    <p>4</p>
                    <IconDelete />
                  </div>
                  <ReactTooltip
                    place="bottom"
                    id="detailProduct"
                    type="light"
                    effect="solid"
                    className="tooltipProductName"
                  >
                    <div>
                      <p>Prodcut details</p>
                      {/* <IconClose /> */}
                    </div>
                    <div>
                      <img
                        alt=""
                        src={require("../../assets/images/product.png")}
                      />
                      <img
                        alt=""
                        src={require("../../assets/images/product.png")}
                      />
                      <img
                        alt=""
                        src={require("../../assets/images/product.png")}
                      />
                    </div>
                  </ReactTooltip>
                  <div className="products__table__item">
                    <p data-tip data-for="detailProduct">
                      Juuyondai
                      <br />
                      Junmaidaiginjou11111111
                    </p>
                    <p>2019</p>
                    <p>Junmai Daigijoshu</p>
                    <p>12%</p>
                    <div>
                      <StatusMiss>Missing</StatusMiss>
                    </div>
                    <p>Yes</p>
                    <p>Yamagata</p>
                    <p>4</p>
                    <IconDelete />
                  </div>
                </div>
              ))}
          </div>
          <div className="products__table__footer" />
        </div>
        <div className="products__pagination">
          <Pagination
            activePage={this.state.activePage}
            prevPageText={<IconArrowLeft />}
            nextPageText={<IconArrowRight />}
            hideFirstLastPages={true}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={pageNumber => this.handlePageChange(pageNumber)}
          />
        </div>
      </div>
    );
  }
}

export default Products;
