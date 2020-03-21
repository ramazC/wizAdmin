import React from "react";
import Pagination from "react-js-pagination";

import FilterItem from "../../components/FilterItem";
import InfoCard from "../../components/InfoCard";
import BreweryProductModal from "../../components/BreweryProductModal";
import BreweryReviewModal from "../../components/BreweryReviewModal";

import {
  IconArrowRight,
  IconArrowLeft,
  IconGreenProduct,
  IconGreenBrewery,
  IconAdd,
  IconMessages
} from "../../components/Icon";
import "./styles.scss";

class BreweriesManagement extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 15,
      modalIsOpen: false,
      reviewModal: false
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    const { modalIsOpen, reviewModal } = this.state;
    return (
      <div className="breweriesManagement">
        {modalIsOpen && (
          <BreweryProductModal
            closeModal={() => this.setState({ modalIsOpen: false })}
          />
        )}
        {reviewModal && (
          <BreweryReviewModal
            closeModal={() => this.setState({ reviewModal: false })}
          />
        )}
        <div className="breweriesManagement__cards">
          <InfoCard
            imgSrc={IconGreenBrewery}
            value={1806}
            title="total breweriesManagement"
          />
          <InfoCard
            imgSrc={IconGreenProduct}
            value={2138}
            title="total products"
          />
          <InfoCard imgSrc={IconMessages} value={13699} title="review feed" />
        </div>
        <div className="breweriesManagement__search">
          <p>Your breweries</p>
          <div className="breweriesManagement__search__filter">
            <FilterItem />
            <div className="breweriesManagement__search__filter__button">
              Search
            </div>
          </div>
        </div>

        <div>
          <div className="breweriesManagement__table">
            <div className="breweriesManagement__table__header">
              <p>#</p>
              <p>Name</p>
              <p>Location</p>
              <p>Products</p>
              <p>See all</p>
            </div>

            <div className="breweriesManagement__table__body">
              {Array(5)
                .fill(1)
                .map((el, i) => (
                  <div key={i}>
                    <div className="breweriesManagement__table__item">
                      <p>1</p>
                      <p>高木酒造高木酒造高木酒造 </p>
                      <p>
                        3 Chome-109 Nishiki Kuriyama-chō, Hokkaidō 069-1521
                        Japan
                      </p>
                      <p onClick={() => this.setState({ modalIsOpen: true })}>
                        2
                      </p>
                      <IconAdd />
                    </div>
                  </div>
                ))}
            </div>
            <div className="breweriesManagement__table__footer" />
          </div>
          <div className="breweriesManagement__pagination">
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
      </div>
    );
  }
}

export default BreweriesManagement;
