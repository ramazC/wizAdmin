import React, { Component } from "react";
import Modal from "react-modal";

import { IconGreenClose } from "../../components/Icon";
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

class RetailsProductDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  closeInteModal = () => {
    this.props.closeModal();
  };

  render() {
    //    const {} = this.props;
    return (
      <Modal
        isOpen={true}
        //onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeInteModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="productModal">
          <div className="productModal__title">
            <p>Images</p>
            <IconGreenClose onClick={this.closeInteModal} />
          </div>
          <div className="productModal__body">
            <img alt="" src={require("../../assets/images/product.png")} />
            <div>
              <div>
                <p>Name</p>
                <p>Senshohumasamune Junmai Daiginjoshu</p>
              </div>
              <div>
                <p>Classification</p>
                <p>Junmai Ginjoshu</p>
              </div>
              <div>
                <p>Country/Region</p>
                <p>Japan, Tohoku Miyagi</p>
              </div>
              <div>
                <p>Volume/Weight</p>
                <p>1800 ML</p>
              </div>
            </div>
          </div>

          <div className="productModal__button" onClick={this.closeInteModal}>
            Close
          </div>
        </div>
      </Modal>
    );
  }
}

export default RetailsProductDetail;
