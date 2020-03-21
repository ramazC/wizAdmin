import React from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core";
import Checkbox from "rc-checkbox";
import ReactTooltip from "react-tooltip";
import Pagination from "react-js-pagination";

import FilterItem from "../../components/FilterItem";
import InfoCard from "../../components/InfoCard";
import LabelDetailModal from "../../components/LabelDetailModal";

import {
  IconDelete,
  IconArrowRight,
  IconArrowLeft,
  IconGreenProduct,
  IconGreenBrewery,
  IconGps,
  IconAdd
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
    title: "All products"
  },
  {
    title: "Currently added products"
  }
];
class Breweries extends React.Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 0,
      activePage: 15,
      availavilityCheck: false,
      modalIsOpen: false,
      sortIndex: 0
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

  onChangeCheck = index => {
    this.setState({
      availavilityCheck: !this.state.availavilityCheck
    });
  };

  render() {
    const {
      tabIndex,
      availavilityCheck,
      //   modalIsOpen,
      labelDetailModal
    } = this.state;
    const { classes } = this.props;
    return (
      <div className="breweries">
        {labelDetailModal && (
          <LabelDetailModal
            closeModal={() => this.setState({ labelDetailModal: false })}
          />
        )}
        <div className="breweries__cards">
          <InfoCard
            imgSrc={IconGreenBrewery}
            value="Kikusharazi Shuzu"
            title="Brewery name"
            text=" "
          />
          <InfoCard
            imgSrc={IconGreenProduct}
            value={2138}
            title="inventory products"
            text="approved: 120"
          />
          <InfoCard
            breweryInfo={true}
            imgSrc={IconGps}
            value="3 Chome-109 Nishiki Kuriyama-chō,  Hokkaidō 069-1521 Japan"
            title="address"
            text=" "
          />
        </div>
        <div className="breweries__search">
          <p>Add products to your Kura</p>
          <div className="breweries__search__filter">
            <FilterItem onlyFilter={true} />
            <div className="breweries__search__filter__button">Search</div>
          </div>
        </div>
        <div className="breweries__tabs">
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
          <div
            className="breweries__tabs__button"
            style={
              tabIndex === 1
                ? availavilityCheck
                  ? null
                  : { opacity: 0.5 }
                : null
            }
          >
            {tabIndex === 0 ? "Add selected" : "Remove selected"}
          </div>
        </div>
        {tabIndex === 0 && (
          <div>
            <div className="breweries__table">
              <div className="breweries__table__header">
                <p></p>
                <p>Name</p>
                <p>Brewing year</p>
                <p>Classification</p>
                <p />
                <div />
              </div>

              <div className="breweries__table__body">
                {Array(5)
                  .fill(1)
                  .map((el, i) => (
                    <div key={i}>
                      <div className="breweries__table__item">
                        <div onChange={() => this.onChangeCheck(i)}>
                          <Checkbox
                            name="my-checkbox"
                            checked={availavilityCheck}
                          />
                        </div>
                        <p
                          data-tip
                          data-for="brewerytooltip"
                          onClick={() =>
                            this.setState({ labelDetailModal: true })
                          }
                        >
                          Senshohumasamune Junmai Daiginjo..
                        </p>
                        <p>2019</p>
                        <p>Tokubetsu Junmaishu</p>
                        <div />
                        <IconAdd />
                      </div>
                      <ReactTooltip
                        place="bottom"
                        id="brewerytooltip"
                        type="light"
                        effect="solid"
                        className="brewerytooltip"
                      >
                        <div>
                          <p>Label preview</p>
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
              <div className="breweries__table__footer" />
            </div>
            <div className="breweries__pagination">
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
        {tabIndex === 1 && (
          <div>
            <div className="breweries__table">
              <div className="breweries__table__header">
                <p></p>
                <p>Name</p>
                <p>Brewing year</p>
                <p>Classification</p>
                <p />
                <div />
              </div>

              <div className="breweries__table__body">
                {Array(5)
                  .fill(1)
                  .map((el, i) => (
                    <div key={i}>
                      <div className="breweries__table__item">
                        <div onChange={() => this.onChangeCheck(i)}>
                          <Checkbox
                            name="my-checkbox"
                            checked={availavilityCheck}
                          />
                        </div>
                        <p
                          data-tip
                          data-for="brewerytooltip"
                          onClick={() =>
                            this.setState({ labelDetailModal: true })
                          }
                        >
                          Senshohumasamune Junmai Daiginjo..
                        </p>
                        <p>2019</p>
                        <p>Tokubetsu Junmaishu</p>
                        <div />
                        <IconDelete />
                      </div>
                      <ReactTooltip
                        place="bottom"
                        id="brewerytooltip"
                        type="light"
                        effect="solid"
                        className="brewerytooltip"
                      >
                        <div>
                          <p>Label preview</p>
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
              <div className="breweries__table__footer" />
            </div>
            <div className="breweries__pagination">
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

export default withStyles(styles)(Breweries);
