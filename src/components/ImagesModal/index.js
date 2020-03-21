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

class ImagesModal extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      selected: -1
    };
  }

  closeInteModal = () => {
    this.props.closeModal();
  };

  render() {
    const { text, isBreweryCreate, title } = this.props;
    const { selected } = this.state;
    return (
      <Modal
        isOpen={true}
        //onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeInteModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="imagesModal">
          <div className="imagesModal__title">
            <p>{title ? title : "Images"}</p>
            <IconGreenClose onClick={this.closeInteModal} />
          </div>
          <p>{text}</p>
          <PerfectScrollbar style={{ height: "400px" }}>
            <div className="imagesModal__images">
              {Array(10)
                .fill(1)
                .map((el, i) => (
                  <div key={i}>
                    <img
                      alt=""
                      src={require("../../assets/images/product.png")}
                      style={
                        isBreweryCreate
                          ? selected === i
                            ? { border: "solid 2px #5c9e68" }
                            : null
                          : { borderWidth: "0px" }
                      }
                      onClick={() => this.setState({ selected: i })}
                    />
                    {isBreweryCreate && <p>Select as main image</p>}
                    {title && <p>Product name</p>}
                  </div>
                ))}
            </div>
          </PerfectScrollbar>

          {isBreweryCreate ? (
            <div className="imagesModal__buttons" onClick={this.closeInteModal}>
              <div>Cancel</div>
              <div>Save changes</div>
            </div>
          ) : (
            <div className="imagesModal__button" onClick={this.closeInteModal}>
              Close
            </div>
          )}
        </div>
      </Modal>
    );
  }
}

export default ImagesModal;
