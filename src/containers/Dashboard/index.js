import React from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core";
import styled from "styled-components";
import Modal from "react-modal";
import PerfectScrollbar from "react-perfect-scrollbar";
import Pagination from "react-js-pagination";
import Checkbox from "rc-checkbox";

import ProductDetailInfo from "../../components/ProductDetailInfo";
import InfoCard from "../../components/InfoCard";
import FilterItem from "../../components/FilterItem";

import {
  IconUsers,
  IconGreenProduct,
  IconVenues,
  IconDelete,
  IconArrowRight,
  IconArrowLeft,
  IconGreenClose,
  IconMoreMenu,
  IconFlag
} from "../../components/Icon";
import "./styles.scss";
import "rc-checkbox/assets/index.css";

import "react-perfect-scrollbar/dist/css/styles.css";

Modal.setAppElement("#root");
const BigText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #434b56;
  margin-bottom: 0px;
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
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "30px 40px 40px rgba(95,100, 130, 0.25)",
    backgroundColor: "#f7f6f8",
    borderWidth: "0px",
    width: "65%",
    maxWidth: "1000px",
    padding: "0px"
  }
};

const tabs = [
  {
    title: "Manage users"
  },
  {
    title: "Manage breweries"
  },
  {
    title: "Manage bars"
  },
  {
    title: "Manage reviews"
  },
  {
    title: "Bulk loader"
  }
];
const data = ["Filter1", "Filter2", "Filter3", "Filter3"];
const dataSort = ["Flag", "Release"];
class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      availavilityCheck: false,
      language: "Japan",
      sortIndex: 0,
      tabIndex: 0,
      activePage: 15,
      modalIsOpen: false,
      broadcastModal: false,
      onCheck: false,
      name: "",
      motto: "",
      uswer: "",
      wizpoints: "",
      email: "",
      userrank: null,
      usertype: null,
      affilate: ""
    };
  }

  handleTabChange = (e, index) => {
    this.setState({
      tabIndex: index
    });
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  closeInteModal = () => {
    this.setState({
      modalIsOpen: false,
      broadcastModal: false
    });
  };

  itemChange = (id, value) => {
    this.setState({
      [id]: value
    });
  };

  sortChange = index => {
    this.setState({
      modalIsOpen: false,
      sortIndex: index
    });
  };

  onChangeCheck = index => {
    this.setState({
      availavilityCheck: !this.state.availavilityCheck
    });
  };

  onSendBraodCast = () => {
    this.closeInteModal();
  };

  render() {
    const {
      availavilityCheck,
      sortIndex,
      tabIndex,
      modalIsOpen,
      onCheck,
      name,
      motto,
      uswer,
      wizpoints,
      email,
      userrank,
      usertype,
      affilate,
      broadcastModal
    } = this.state;
    const { classes } = this.props;

    return (
      <div className="users">
        <div className="users__cards">
          <InfoCard imgSrc={IconUsers} value={2370} title="manual products" />
          <InfoCard imgSrc={IconGreenProduct} value={2370} title="mandatory" />
          <InfoCard imgSrc={IconVenues} value={2370} title="optional" />
        </div>
        <div className="users__tabs">
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
            <div className="users__table">
              <div className="users__table__title">
                <BigText>Main product images</BigText>
                <div onClick={() => this.setState({ modalIsOpen: true })}>
                  + Add user
                </div>
                {modalIsOpen && (
                  <Modal
                    isOpen={modalIsOpen}
                    //onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeInteModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <div className="userModal">
                      <div className="userModal__title">
                        <p>User Details</p>
                        <IconGreenClose onClick={this.closeInteModal} />
                      </div>
                      {/* <PerfectScrollbar style={{ height: "300px" }}> */}
                      <div className="userModal__body">
                        <div>
                          <ProductDetailInfo
                            text="Name"
                            longDescription={false}
                            required={true}
                            inputType={true}
                            dropdownType={false}
                            onCheck={onCheck}
                            itemChange={(id, value) =>
                              this.itemChange(id, value)
                            }
                            id="name"
                            value={name}
                            data={data}
                          />
                          <ProductDetailInfo
                            text="Motto"
                            longDescription={false}
                            required={true}
                            inputType={true}
                            dropdownType={false}
                            onCheck={onCheck}
                            itemChange={(id, value) =>
                              this.itemChange(id, value)
                            }
                            id="motto"
                            value={motto}
                            data={data}
                          />
                          <ProductDetailInfo
                            text="Uswer"
                            longDescription={false}
                            required={true}
                            inputType={true}
                            dropdownType={false}
                            onCheck={onCheck}
                            itemChange={(id, value) =>
                              this.itemChange(id, value)
                            }
                            id="uswer"
                            value={uswer}
                            data={data}
                          />
                          <ProductDetailInfo
                            text="Wiz Points"
                            longDescription={false}
                            required={true}
                            inputType={true}
                            dropdownType={false}
                            onCheck={onCheck}
                            itemChange={(id, value) =>
                              this.itemChange(id, value)
                            }
                            id="wizpoints"
                            value={wizpoints}
                            data={data}
                          />
                        </div>
                        <div>
                          <ProductDetailInfo
                            text="Email"
                            longDescription={false}
                            required={true}
                            inputType={true}
                            dropdownType={false}
                            onCheck={onCheck}
                            itemChange={(id, value) =>
                              this.itemChange(id, value)
                            }
                            id="email"
                            value={email}
                            data={data}
                          />
                          <ProductDetailInfo
                            text="User rank"
                            longDescription={false}
                            required={true}
                            inputType={true}
                            dropdownType={true}
                            onCheck={onCheck}
                            itemChange={(id, value) =>
                              this.itemChange(id, value)
                            }
                            id="userrank"
                            value={userrank}
                            data={data}
                          />
                          <ProductDetailInfo
                            text="User Type"
                            longDescription={false}
                            required={true}
                            inputType={true}
                            dropdownType={true}
                            onCheck={onCheck}
                            itemChange={(id, value) =>
                              this.itemChange(id, value)
                            }
                            id="usertype"
                            value={usertype}
                            data={data}
                          />
                          <ProductDetailInfo
                            text="Affilate Code"
                            longDescription={false}
                            required={true}
                            inputType={true}
                            dropdownType={false}
                            onCheck={onCheck}
                            itemChange={(id, value) =>
                              this.itemChange(id, value)
                            }
                            id="affilate"
                            value={affilate}
                            data={data}
                          />
                        </div>
                      </div>
                      {/* </PerfectScrollbar> */}

                      <div
                        className="userModal__button"
                        onClick={this.onSaveUser}
                      >
                        Save
                      </div>
                    </div>
                  </Modal>
                )}
              </div>
              <div className="users__table__header">
                <p>ID</p>
                <p>Name</p>
                <p>Rank</p>
                <p>Handle</p>
                <p>AT</p>
                <p>AC</p>
                <p>Wizpoints</p>
                <p>Created</p>
                <p></p>
              </div>

              <div className="users__table__body">
                {Array(5)
                  .fill(1)
                  .map((el, i) => (
                    <div key={i}>
                      <div className="users__table__item">
                        <p>
                          5738750239
                          <br />
                          hksdfhlsadf
                        </p>
                        <p>Dave Phillips</p>
                        <p>1</p>
                        <p>dave34</p>
                        <p>U</p>
                        <p></p>
                        <p>0</p>
                        <p>22/98/19</p>
                        <IconDelete />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="users__table__footer" />
            </div>
            <div className="users__pagination">
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
        {tabIndex === 3 && (
          <div>
            {broadcastModal && (
              <Modal
                isOpen={broadcastModal}
                //onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeInteModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="broadcastModal">
                  <div className="broadcastModal__title">
                    <p></p>
                    <IconGreenClose onClick={this.closeInteModal} />
                  </div>

                  <div className="broadcastModal__body">
                    <p>Send broadcast message</p>
                    <p>Send a broadcast message to all devices.</p>
                    <PerfectScrollbar
                      style={{ height: "250px", paddingRight: "20px" }}
                    >
                      <div className="broadcastModal__body__lang">
                        English text
                      </div>
                      <div className="broadcastModal__body__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris .
                      </div>
                      <div className="broadcastModal__body__line" />
                      <div className="broadcastModal__body__lang">
                        Japanese text
                      </div>
                      <div className="broadcastModal__body__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris .
                      </div>
                      <div className="broadcastModal__body__line" />
                    </PerfectScrollbar>
                  </div>

                  <div
                    className="broadcastModal__button"
                    onClick={this.onSendBraodCast}
                  >
                    Send
                  </div>
                </div>
              </Modal>
            )}
            <div className="users__managereviews__table">
              <div className="users__managereviews__table__header">
                <p></p>
                <p>ID</p>
                <p>Content</p>
                <p>Flag count</p>
                <p>Entity type</p>
                <p></p>
                <IconMoreMenu
                  onClick={() => this.setState({ modalIsOpen: true })}
                />
                {modalIsOpen && (
                  <div className="users__managereviews__bottom">
                    <div className="users__managereviews__bottom__modal">
                      <div className="users__managereviews__bottom__modal__search">
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
                      className="users__managereviews__bottom__back"
                      onClick={() => this.setState({ modalIsOpen: false })}
                    />
                  </div>
                )}
              </div>

              <div className="users__managereviews__table__body">
                {Array(5)
                  .fill(1)
                  .map((el, i) => (
                    <div key={i}>
                      <div className="users__managereviews__table__item">
                        <div onChange={() => this.onChangeCheck(i)}>
                          <Checkbox
                            name="my-checkbox"
                            checked={availavilityCheck}
                          />
                        </div>
                        <p>
                          5738750239
                          <br />
                          hksdfhlsadf
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua…
                        </p>
                        <p>1</p>
                        <p>4</p>
                        <IconFlag style={{ height: "20px" }} />
                        <IconDelete />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="users__managereviews__table__footer" />
              <div className="users__managereviews__pagination">
                <div>Flagged reviews: 56</div>
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
              <div className="users__managereviews__line" />
              <div className="users__managereviews__search">
                <p>Ban users from reviews</p>
                <div className="users__managereviews__search__filter">
                  <FilterItem onlyFilter={false} onlyInput={true} />
                  <div className="users__managereviews__search__filter__button">
                    Search
                  </div>
                </div>
              </div>
              <div className="users__managereviews__info">
                <div>
                  <p>User handle:</p>
                  <p>abc123456</p>
                </div>
                <div>
                  <p>User name:</p>
                  <p>Andrew Richardson</p>
                </div>
                <div>
                  <p>User email:</p>
                  <p>andrew@email.com</p>
                </div>
                <div>
                  <span onClick={() => this.setState({ broadcastModal: true })}>
                    Flag user
                  </span>
                  <span>Release flag</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
