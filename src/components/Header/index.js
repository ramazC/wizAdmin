import React, { Component } from "react";
// import { connect } from "react-redux";
import Modal from "react-modal";
import { Menu } from "element-react";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

import SelectLanguage from "../../components/SelectLanguage";
import {
  IconLogo,
  IconLogout,
  IconPlus,
  IconMessage,
  IconRetail,
  IconUser,
  IconGreenClose
} from "../../components/Icon";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./styles.scss";
Modal.setAppElement("#root");

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
class Header extends Component {
  constructor() {
    super();
    this.state = {
      broadcastModal: false
    };
  }

  inputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  closeInteModal = () => {
    this.setState({
      broadcastModal: false
    });
  };

  onSendBraodCast = () => {
    this.closeInteModal();
  };

  render() {
    const { broadcastModal } = this.state;
    return (
      <Menu mode="horizontal" theme="dark" defaultActive="1" className="header">
        <div className="nav-container">
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
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris .
                    </div>
                    <div className="broadcastModal__body__line" />
                    <div className="broadcastModal__body__lang">
                      Japanese text
                    </div>
                    <div className="broadcastModal__body__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris .
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
          <div className="nav-items">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="header__logo" onClick={this.props.onClickLogo}>
                  <IconLogo />
                </div>

                <div className="header__buttons">
                  <NavLink to="/products/create">
                    <img src={IconPlus} alt="" />
                    <span>ADD PRODUCT</span>
                  </NavLink>
                  <NavLink
                    to="#"
                    onClick={() => this.setState({ broadcastModal: true })}
                  >
                    <img src={IconMessage} alt="" />
                    <span>SEND BULK MESSAGE</span>
                  </NavLink>
                  <NavLink to="/retailsales">
                    <img src={IconRetail} alt="" />
                    <span>RETAIL SALES CHANNELS</span>
                  </NavLink>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="header__lang">
                  <SelectLanguage type={0} onChange={this.inputChange} />
                </div>
                <div className="header__avatar">
                  <img src={IconUser} alt="" />
                </div>
                <div
                  className="header__logout"
                  onClick={this.props.onClickLogout}
                >
                  <IconLogout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    );
  }
}

export default Header;

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = {
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Navbar);
