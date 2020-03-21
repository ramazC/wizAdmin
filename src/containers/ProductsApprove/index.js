import React from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core";
import Checkbox from "rc-checkbox";

import Pagination from "react-js-pagination";

import FilterItem from "../../components/FilterItem";
import InfoCard from "../../components/InfoCard";
import ProductDetailInfo from "../../components/ProductDetailInfo";

import {
  IconCup,
  IconApprove,
  IconDelete,
  IconArrowRight,
  IconArrowLeft,
  IconMoreMenu
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
    title: "Mandatory data"
  },
  {
    title: "Optional data"
  }
];
const data = ["Japan", "English", "Russian"];
const dataSort = ["Approve selected", "Delete selected"];
class ProductPending extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "Japan",
      tabIndex: 0,
      activePage: 15,
      availavilityCheck: true,
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

  sortChange = index => {
    this.setState({
      modalIsOpen: false,
      sortIndex: index
    });
  };

  render() {
    const {
      language,
      tabIndex,
      availavilityCheck,
      modalIsOpen,
      sortIndex
    } = this.state;
    const { classes } = this.props;
    return (
      <div className="productPending">
        <div className="productPending__cards">
          <InfoCard
            imgSrc={IconCup}
            value={2370}
            title="manual products"
            text="approved: 120"
          />
          <InfoCard
            imgSrc={IconCup}
            value={2370}
            title="mandatory"
            text="approved: 120"
          />
          <InfoCard
            imgSrc={IconCup}
            value={2370}
            title="optional"
            text="approved: 120"
          />
        </div>
        <div className="productPending__search">
          <p>Approve products</p>
          <div className="productPending__search__filter">
            <FilterItem onlyFilter={true} />
            <ProductDetailInfo
              text=""
              required={false}
              inputType={true}
              dropdownType={true}
              onCheck={false}
              itemChange={(id, value) => this.itemChange(id, value)}
              id="language"
              value={language}
              data={data}
            />
            <div className="productPending__search__filter__button">Search</div>
          </div>
        </div>
        <div className="productPending__tabs">
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
          <div>
            <div className="productPending__table">
              <div className="productPending__table__header">
                <p></p>
                <p>User</p>
                <p>Name</p>
                <p>Brewing Year</p>
                <p>Classification</p>
                <p></p>
                <IconMoreMenu
                  onClick={() => this.setState({ modalIsOpen: true })}
                />
                {modalIsOpen && (
                  <div className="productPending__bottom">
                    <div className="productPending__bottom__modal">
                      <div className="productPending__bottom__modal__search">
                        <div>
                          <div>
                            {dataSort.map((item, index) => (
                              <div
                                key={index}
                                onClick={() => this.sortChange(index)}
                                style={
                                  index + 1 === dataSort.length
                                    ? { borderBottom: "unset" }
                                    : null
                                }
                              >
                                <p
                                  style={
                                    sortIndex === index
                                      ? { fontWeight: "bold", color: "#5c9e68" }
                                      : null
                                  }
                                >
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="productPending__bottom__back"
                      onClick={() => this.setState({ modalIsOpen: false })}
                    />
                  </div>
                )}
              </div>

              <div className="productPending__table__body">
                {Array(5)
                  .fill(1)
                  .map((el, i) => (
                    <div key={i}>
                      <div className="productPending__table__item">
                        <div onChange={() => this.onChangeCheck(i)}>
                          <Checkbox
                            name="my-checkbox"
                            checked={availavilityCheck}
                          />
                        </div>
                        <p>ryou</p>
                        <p>高木酒造高木酒造高木酒造</p>
                        <p>2019</p>
                        <p>Tokubetsu Junmaishu</p>
                        <IconApprove style={{ height: "18px" }} />
                        <IconDelete />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="productPending__table__footer" />
            </div>
            <div className="productPending__pagination">
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

export default withStyles(styles)(ProductPending);
