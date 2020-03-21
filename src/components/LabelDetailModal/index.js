import React, { Component } from "react";
import Modal from "react-modal";
import Slider from "react-slick";

import {
  IconGreenClose,
  IconArrowRight,
  IconArrowLeft
} from "../../components/Icon";
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

class LabelDetailModal extends Component {
  constructor() {
    super();
    this.state = {};
  }

  closeInteModal = () => {
    this.props.closeModal();
  };

  render() {
    //    const {} = this.props;
    function NextArrow(props) {
      const { onClick } = props;
      return <IconArrowRight className="slick-next" onClick={onClick} />;
    }
    function PrevArrow(props) {
      const { onClick } = props;
      return <IconArrowLeft className="slick-prev" onClick={onClick} />;
    }
    return (
      <Modal
        isOpen={true}
        //onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeInteModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="labelDetail">
          <div className="labelDetail__title">
            <p>Label Details</p>
            <IconGreenClose onClick={this.closeInteModal} />
          </div>
          <div className="labelDetail__body">
            <div className="labelDetail__body__slider">
              <Slider
                dots={false}
                slidesToShow={1}
                slidesToScroll={1}
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
                infinite={false}
                //   className={classes.root}
              >
                {Array(3)
                  .fill(1)
                  .map((el, i) => (
                    <div
                      key={i}
                      className="labelImageSlider"
                      onClick={() => this.setState({ activeIndex: i })}
                    >
                      <img
                        src={require("../../assets/images/product.png")}
                        alt=""
                      />
                      <p>
                        {i === 0
                          ? "Front label"
                          : i === 1
                          ? "Back label"
                          : "Neck label"}
                      </p>
                    </div>
                  ))}
              </Slider>
            </div>
            <div>
              <div>
                <p>Scan ID</p>
                <p>5738750239hksdfhlsadf</p>
              </div>
              <div>
                <p>User ID</p>
                <p>natsumichan</p>
              </div>
              <div>
                <p>Created</p>
                <p>25/11/2019. 02:35:35</p>
              </div>
              <div>
                <p>Updated</p>
                <p>25/11/2019. 02:35:35</p>
              </div>
            </div>
          </div>

          <div className="labelDetail__button" onClick={this.closeInteModal}>
            Close
          </div>
        </div>
      </Modal>
    );
  }
}

export default LabelDetailModal;
