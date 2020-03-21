import React, { Component } from "react";

import {
  IconDeleteWhite,
  IconDone,
  IconFilter,
  IconSearch
} from "../../components/Icon";

import "./styles.scss";

class FilterItem extends Component {
  constructor() {
    super();
    this.state = {
      filterword: "",
      modalIsOpen: false,
      data: [
        {
          key: false,
          value: "Filter1"
        },
        {
          key: false,
          value: "Filter2"
        },
        {
          key: false,
          value: "Filter3"
        }
      ]
    };
  }

  componentDidMount() {}

  onSelectFilter = index => {
    const { data } = this.state;
    const temp = data;
    temp[index].key = !temp[index].key;
    this.setState({
      data: temp
    });
  };

  inputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { filterword, modalIsOpen, data } = this.state;
    const { onlyFilter, onlyInput } = this.props;
    return (
      <div className="filter">
        <div>
          <IconSearch />
          <div
            className="filter__items"
            style={onlyFilter ? { position: "unset" } : null}
          >
            {data.map(
              (item, index) =>
                item.key && (
                  <div
                    key={index}
                    className="filter__items__item"
                    onClick={() => this.onSelectFilter(index)}
                  >
                    <IconDeleteWhite />
                    <p>{item.value}</p>
                  </div>
                )
            )}
          </div>
          {!onlyFilter && (
            <input
              type="text"
              placeholder="Type product name..."
              id="filterword"
              value={filterword}
              onChange={this.inputChange}
            />
          )}
        </div>
        {!onlyInput && <IconFilter onClick={this.openModal} />}
        {modalIsOpen && (
          <div className="filter__static">
            <div className="filter__static__modal">
              <div className="filter__static__modal__search">
                <div>
                  <div>
                    {data.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => this.onSelectFilter(index)}
                        style={
                          index + 1 === data.length
                            ? { borderBottom: "unset" }
                            : null
                        }
                      >
                        <p
                          style={
                            item.key
                              ? { fontWeight: "bold", color: "#5c9e68" }
                              : null
                          }
                        >
                          {item.value}
                        </p>
                        {item.key && <IconDone />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="filter__static__back"
              onClick={() => this.setState({ modalIsOpen: false })}
            />
          </div>
        )}
      </div>
    );
  }
}

export default FilterItem;
