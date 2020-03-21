import React, { Component } from "react";
import { IconArrowDown } from "../Icon";
import "./styles.scss";

const data = [
  {
    key: "english",
    value: "English"
  },
  {
    key: "japan",
    value: "Japanese"
  },
  {
    key: "russia",
    value: "Russian"
  }
];

class SelectLanguage extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      selectedItem: null
    };
  }

  componentDidMount() {
    this.setState({
      selectedItem: data[this.props.type]
    });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onSelectItem = (item, type) => {
    this.setState({ selectedItem: item });
    this.closeModal();
  };

  render() {
    const { selectedItem, modalIsOpen } = this.state;

    // const { type } = this.props;

    return (
      <div className="dropdownselect" style={{ paddingTop: "5px" }}>
        <span>
          {selectedItem && (
            <img
              src={require(`../../assets/icons/${selectedItem.key}.png`)}
              onClick={this.openModal}
              alt=""
            />
          )}
          <p onClick={this.openModal}>{selectedItem && selectedItem.value}</p>
          <IconArrowDown onClick={this.openModal} />
        </span>
        {modalIsOpen && (
          <div className="dropdownselect__com">
            <div className="dropdownselect__com__modal">
              <div className="dropdownselect__com__modal__search">
                <div>
                  <div>
                    {data.map((item, index) => (
                      <div key={index} onClick={() => this.onSelectItem(item)}>
                        <span className="dropdownselect__com__modal__border" />
                        <img
                          src={require(`../../assets/icons/${item.key}.png`)}
                          alt=""
                        />
                        <p>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dropdownselect__com__back"
              onClick={() => this.setState({ modalIsOpen: false })}
            />
          </div>
        )}
      </div>
    );
  }
}

export default SelectLanguage;
