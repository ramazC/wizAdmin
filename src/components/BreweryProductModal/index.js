import React, { Component } from "react";
import Modal from "react-modal";
import PerfectScrollbar from "react-perfect-scrollbar";

import { IconGreenClose } from "../../components/Icon";
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

class BreweryProducts extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  closeInteModal = () => {
    this.props.closeModal();
  };

  render() {
    //  const { } = this.props;
    return (
      <Modal
        isOpen={true}
        //onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeInteModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="breweryProducts">
          <div className="breweryProducts__title">
            <p>Products</p>
            <IconGreenClose onClick={this.closeInteModal} />
          </div>
          <p>Kikusharazi Shuzu</p>
          <PerfectScrollbar style={{ height: "400px" }}>
            <div className="breweryProducts__table">
              <div className="breweryProducts__table__header">
                <p>Name</p>
                <p>Brewing year</p>
                <p>Clssification</p>
                <p>Alcohol</p>
                <p>Label status</p>
                <p>Reviews</p>
              </div>
              {Array(10)
                .fill(1)
                .map((el, i) => (
                  <div key={i}>
                    <div className="breweryProducts__table__item">
                      <p>Senshohumasamune Junmai Daiginjo Junmai Daiginjo</p>
                      <p>2019</p>
                      <p>Tokubetsu Junmaishu</p>
                      <p>14%</p>
                      <p>
                        <span>OK</span>
                      </p>
                      <p>3</p>
                    </div>
                    <div
                      key={i}
                      className="breweryProducts__table__item__line"
                    />
                  </div>
                ))}
            </div>
          </PerfectScrollbar>

          <div
            className="breweryProducts__button"
            onClick={this.closeInteModal}
          >
            Close
          </div>
        </div>
      </Modal>
    );
  }
}

export default BreweryProducts;
