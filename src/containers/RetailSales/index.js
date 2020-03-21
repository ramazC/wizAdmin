import React from "react";

import Pagination from "react-js-pagination";
import ReactTooltip from "react-tooltip";

import FilterItem from "../../components/FilterItem";
import InfoCard from "../../components/InfoCard";
import RetailsProductModal from "../../components/RetailsProductModal";
import RetailsAffiliateModal from "../../components/RetailsAffiliateModal";

import {
  IconCup,
  IconEdit,
  IconDelete,
  IconArrowRight,
  IconArrowLeft
} from "../../components/Icon";
import "./styles.scss";

class RetailSales extends React.Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 0,
      activePage: 15,
      modalIsOpen: false,
      affiliateModal: false
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  itemChange = (id, value) => {
    this.setState({
      [id]: value
    });
  };

  handleTabChange = (e, index) => {
    this.setState({
      tabIndex: index
    });
  };

  render() {
    const { tabIndex, modalIsOpen, affiliateModal } = this.state;
    return (
      <div className="retailSales">
        {affiliateModal && (
          <RetailsAffiliateModal
            closeModal={() => this.setState({ affiliateModal: false })}
          />
        )}
        {modalIsOpen && (
          <RetailsProductModal
            closeModal={() => this.setState({ modalIsOpen: false })}
          />
        )}
        <div className="retailSales__cards">
          <InfoCard
            imgSrc={IconCup}
            value={2370}
            title="manual products"
            text="approved: 120"
          />
          <InfoCard
            imgSrc={IconCup}
            value={138}
            title="mandatory"
            text="approved: 120"
          />
          <InfoCard
            imgSrc={IconCup}
            value={34}
            title="optional"
            text="approved: 20"
          />
        </div>
        <div className="retailSales__search">
          <p>Retails sales</p>
          <div className="retailSales__search__filter">
            <FilterItem />
            <div className="retailSales__search__filter__button">Search</div>
          </div>
        </div>

        {tabIndex === 0 && (
          <div>
            <div className="retailSales__table">
              <div className="retailSales__table__header">
                <p>Sales item</p>
                <p>Affiliate name</p>
                <p>Affiliate product code</p>
                <p>Affiliate Product URL</p>
                <p />
                <p />
              </div>

              <div className="retailSales__table__body">
                {Array(5)
                  .fill(1)
                  .map((el, i) => (
                    <div key={i}>
                      <div className="retailSales__table__item">
                        <p
                          data-tip
                          data-for="retailsSales"
                          onClick={() =>
                            this.setState({
                              modalIsOpen: true
                            })
                          }
                        >
                          Senshohumasamune Junmai Daiginjo
                        </p>
                        <p>Sakura</p>
                        <p>hfsladhfg4893235mnsd0</p>
                        <p>http://amz.com/jhdsfg7834</p>
                        <IconDelete />
                        <IconEdit
                          onClick={() =>
                            this.setState({
                              affiliateModal: true
                            })
                          }
                        />
                      </div>
                      <ReactTooltip
                        place="bottom"
                        id="retailsSales"
                        type="light"
                        effect="solid"
                        className="tooltipRetailsSales"
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
                    </div>
                  ))}
              </div>
              <div className="retailSales__table__footer" />
            </div>
            <div className="retailSales__pagination">
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
        )}
      </div>
    );
  }
}

export default RetailSales;
