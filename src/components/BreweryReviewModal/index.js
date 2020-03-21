import React, { Component } from "react";
import Modal from "react-modal";
import PerfectScrollbar from "react-perfect-scrollbar";

import {
  IconGreenClose,
  IconStar,
  IconThumbFilled
} from "../../components/Icon";
import "./styles.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

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

class ReviewProducts extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      switchLang: false
    };
  }

  closeInteModal = () => {
    this.props.closeModal();
  };

  render() {
    const { switchLang } = this.state;
    return (
      <Modal
        isOpen={true}
        //onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeInteModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="reviewProducts">
          <div className="reviewProducts__title">
            <p>Review feed</p>
            <IconGreenClose onClick={this.closeInteModal} />
            <div className="reviewProducts__title__switch">
              <p
                className={
                  switchLang ? "reviewProducts__title__switch__select" : null
                }
                onClick={() => this.setState({ switchLang: !switchLang })}
              >
                English
              </p>
              <p
                className={
                  !switchLang ? "reviewProducts__title__switch__select" : null
                }
                onClick={() => this.setState({ switchLang: !switchLang })}
              >
                Japanese
              </p>
            </div>
          </div>
          <PerfectScrollbar style={{ height: "400px" }}>
            <div className="reviewProducts__reviews">
              {Array(15)
                .fill(1)
                .map((el, i) => (
                  <div key={i}>
                    <div className="brewery__reviews__reviewer">
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
                    <div className="brewery__reviews__text">
                      "Sophisticated fresh aroma and short texture after taste.
                      Little taste of Japanese dishes are recommended for its
                      pairing."
                    </div>
                  </div>
                ))}
              <div className="brewery__reviews__bottom" />
            </div>
          </PerfectScrollbar>

          <div className="reviewProducts__button" onClick={this.closeInteModal}>
            Close
          </div>
        </div>
      </Modal>
    );
  }
}

export default ReviewProducts;
