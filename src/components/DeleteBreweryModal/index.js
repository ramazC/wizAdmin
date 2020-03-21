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

class RetailsAffiliateModal extends Component {
  constructor() {
    super();
    this.state = {};
  }

  closeInteModal = () => {
    this.props.closeModal();
  };

  render() {
    //const {} = this.props;
    return (
      <Modal
        isOpen={true}
        //onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeInteModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="deleteBrewery">
          <div className="deleteBrewery__title">
            <p />
            <IconGreenClose onClick={this.closeInteModal} />
          </div>
          <p>Delete brewery</p>
          <p>Are you sure you want to delete this brewery?</p>

          <div className="deleteBrewery__buttons" onClick={this.closeInteModal}>
            <div>Cancel</div>
            <div>Yes, delete</div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default RetailsAffiliateModal;
