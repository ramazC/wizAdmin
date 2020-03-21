import React from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core";
import Checkbox from "rc-checkbox";
import ReactTooltip from "react-tooltip";

import FilterItem from "../../components/FilterItem";
import InfoCard from "../../components/InfoCard";
import LabelDetailModal from "../../components/LabelDetailModal";

import {
  IconCup,
  IconApprove,
  IconDelete,
  IconArrowRight,
  IconArrowLeft,
  IconMoreMenu,
  IconView
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
    title: "Labels waiting approval"
  },
  {
    title: "Labels approved"
  }
];
const dataSort = ["Approve selected", "Delete selected"];
class Labels extends React.Component {
  constructor() {
    super();
    this.state = {
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
      sortIndex: index,
      labelDetailModal: false
    });
  };

  render() {
    const {
      tabIndex,
      availavilityCheck,
      modalIsOpen,
      sortIndex,
      labelDetailModal
    } = this.state;
    const { classes } = this.props;
    return (
      <div className="labels">
        {labelDetailModal && (
          <LabelDetailModal
            closeModal={() => this.setState({ labelDetailModal: false })}
          />
        )}
        <div className="labels__cards">
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
            text="approved: 120"
          />
        </div>
        <div className="labels__search">
          <p>Manual Scan Management</p>
          <div className="labels__search__filter">
            <FilterItem />
            <div className="labels__search__filter__button">Search</div>
          </div>
        </div>
        <div className="labels__tabs">
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
            <div className="labels__table">
              <div className="labels__table__header">
                <p></p>
                <p>Asset</p>
                <p>User ID</p>
                <p>Created</p>
                <p></p>
                <IconMoreMenu
                  onClick={() => this.setState({ modalIsOpen: true })}
                />
                {modalIsOpen && (
                  <div className="labels__bottom">
                    <div className="labels__bottom__modal">
                      <div className="labels__bottom__modal__search">
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
                      className="labels__bottom__back"
                      onClick={() => this.setState({ modalIsOpen: false })}
                    />
                  </div>
                )}
              </div>

              <div className="labels__table__body">
                {Array(5)
                  .fill(1)
                  .map((el, i) => (
                    <div key={i}>
                      <div className="labels__table__item">
                        <div onChange={() => this.onChangeCheck(i)}>
                          <Checkbox
                            name="my-checkbox"
                            checked={availavilityCheck}
                          />
                        </div>
                        <p
                          data-tip
                          data-for="pendingLabel"
                          onClick={() =>
                            this.setState({ labelDetailModal: true })
                          }
                        >
                          Image
                        </p>
                        <p>natsumichan</p>
                        <p>25/11/2019. 02:35:35</p>
                        <IconApprove style={{ height: "18px" }} />
                        <IconDelete />
                      </div>
                      <ReactTooltip
                        place="bottom"
                        id="pendingLabel"
                        type="light"
                        effect="solid"
                        className="pendingLabel"
                      >
                        <div>
                          <p>Label preview</p>
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
                        {/* <div>
                          <div>
                            <IconDelete />
                            <p>Delete</p>
                          </div>
                          <div>
                            <IconApprove />
                            <p>Approve</p>
                          </div>
                        </div> */}
                      </ReactTooltip>
                    </div>
                  ))}
              </div>
              <div className="labels__buttons">
                <div>
                  <IconArrowLeft />
                  <p>Previous page</p>
                </div>
                <div>
                  <p>Next page</p>
                  <IconArrowRight />
                </div>
              </div>
            </div>
          </div>
        )}
        {tabIndex === 1 && (
          <div>
            <div className="labels__table">
              <div className="labels__table__header">
                <p></p>
                <p>Asset</p>
                <p>User ID</p>
                <p>Created</p>
                <p></p>
                <div />
              </div>

              <div className="labels__table__body">
                {Array(5)
                  .fill(1)
                  .map((el, i) => (
                    <div key={i}>
                      <div className="labels__table__item">
                        <div />
                        <p
                          data-tip
                          data-for="pendingLabel"
                          onClick={() =>
                            this.setState({ labelDetailModal: true })
                          }
                        >
                          Image
                        </p>
                        <p>natsumichan</p>
                        <p>25/11/2019. 02:35:35</p>
                        <IconView />
                        <IconDelete />
                      </div>
                      <ReactTooltip
                        place="bottom"
                        id="pendingLabel"
                        type="light"
                        effect="solid"
                        className="pendingLabel"
                      >
                        <div>
                          <p>Label preview</p>
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
                        {/* <div>
                          <div>
                            <IconDelete />
                            <p>Delete</p>
                          </div>
                          <div>
                            <IconApprove />
                            <p>Approve</p>
                          </div>
                        </div> */}
                      </ReactTooltip>
                    </div>
                  ))}
              </div>
              <div className="labels__buttons">
                <div>
                  <IconArrowLeft />
                  <p>Previous page</p>
                </div>
                <div>
                  <p>Next page</p>
                  <IconArrowRight />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Labels);
