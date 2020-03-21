import React, { Component } from "react";
import { withRouter } from "react-router";

import DeleteBreweryModal from "../DeleteBreweryModal";
import ImagesModal from "../ImagesModal";
import { IconMoreMenu, IconBreweryCard, IconMap } from "../../components/Icon";

import "./styles.scss";

const data = ["Visit website", "Edit", "Add products", "Delete"];

class BreweryCard extends Component {
  constructor() {
    super();
    this.state = {
      filterword: "",
      modalIsOpen: false,
      deleteModal: false,
      productsModal: false
    };
  }

  menuClick = index => {
    this.setState({
      modalIsOpen: false
    });
    if (index === 1) this.props.history.push("/breweries/edit"); //edit
    if (index === 2) this.props.history.push("/breweries/addproducts"); //add products
    if (index === 3) this.setState({ deleteModal: true });
  };

  render() {
    const { modalIsOpen, deleteModal, productsModal } = this.state;
    //  const { } = this.props;
    return (
      <div className="breweryCard">
        {deleteModal && (
          <DeleteBreweryModal
            closeModal={() => this.setState({ deleteModal: false })}
          />
        )}
        {productsModal && (
          <ImagesModal
            text="Kikusharazi Shuzu"
            title="Products"
            closeModal={() => this.setState({ productsModal: false })}
          />
        )}
        <div>
          <div className="breweryCard__body">
            <img alt="" src={require("../../assets/icons/user.png")} />
            <div>
              <p>Kikusharazi Shuzu</p>
              <div onClick={() => this.setState({ productsModal: true })}>
                <IconBreweryCard />
                <p>6 products</p>
              </div>
            </div>
          </div>
          <div className="breweryCard__map">
            <IconMap />
            <p>3 Chome-109 Nishiki Kuriyama-chō, Hokkaidō 069-1521 Japan</p>
          </div>
        </div>
        <IconMoreMenu onClick={() => this.setState({ modalIsOpen: true })} />
        {modalIsOpen && (
          <div className="breweryCard__bottom">
            <div className="breweryCard__bottom__modal">
              <div className="breweryCard__bottom__modal__search">
                <div>
                  <div>
                    {data.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => this.menuClick(index)}
                        style={
                          index + 1 === data.length
                            ? { borderBottom: "unset" }
                            : null
                        }
                      >
                        <p
                        //  style={
                        // sortIndex === index
                        //   ? { fontWeight: "bold", color: "#5c9e68" }
                        //   : null
                        //   }
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
              className="breweryCard__bottom__back"
              onClick={() => this.setState({ modalIsOpen: false })}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(BreweryCard);
