import React, { Component } from "react";
import styled from "styled-components";
import InputRange from "react-input-range";
import { IconGreyDown } from "../Icon";
import "./styles.scss";

const Text1 = styled.p`
  font-family: "Lato";
  font-size: 12px;
  line-height: 1.33;
  color: #434b56;
  margin-bottom: 0px;
  text-align: left;
`;
class ProductDetailInfo extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  inputChange = e => {
    this.props.itemChange(e.target.id, e.target.value);
  };

  render() {
    const { modalIsOpen } = this.state;

    const {
      text,
      required,
      inputType,
      dropdownType,
      onCheck,
      value,
      id,
      data,
      processbar,
      onlyView
    } = this.props;

    return (
      <div
        className="productDetailInfo"
        style={processbar ? { marginBottom: "38px" } : null}
      >
        <div
          className="productDetailInfo__text"
          style={!required ? (text === "" ? { height: "9px" } : null) : null}
        >
          <Text1>{text}</Text1>
          {required && <Text1>required</Text1>}
        </div>

        {processbar ? (
          <InputRange
            step={10}
            maxValue={100}
            minValue={0}
            value={value}
            onChange={value => this.props.itemChange(value)}
          />
        ) : dropdownType ? (
          <div
            className="productDetailInfo__dropdown"
            style={onlyView ? { opacity: 1 } : null}
            onClick={() => !onlyView && this.setState({ modalIsOpen: true })}
          >
            <label>{value ? value : onlyView ? "" : "Select"}</label>
            {!onlyView && <IconGreyDown />}
          </div>
        ) : inputType ? (
          <input
            type="text"
            placeholder="type here"
            id={id}
            value={value}
            onChange={this.inputChange}
          />
        ) : (
          <textarea
            type="text"
            placeholder="type here"
            id={id}
            value={value}
            onChange={!onlyView && this.inputChange}
          />
        )}
        {!processbar && (
          <div
            className="productDetailInfo__underline"
            style={
              onCheck
                ? required
                  ? !value
                    ? { backgroundColor: "#ff0000" }
                    : null
                  : null
                : null
            }
          />
        )}
        {modalIsOpen && (
          <div className="productDetailInfo__bottom">
            <div className="productDetailInfo__bottom__modal">
              <div className="productDetailInfo__bottom__modal__search">
                <div>
                  <div>
                    {data.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          this.setState({ modalIsOpen: false });
                          this.props.itemChange(id, item);
                        }}
                        style={
                          index + 1 === data.length
                            ? { borderBottom: "unset" }
                            : null
                        }
                      >
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="productDetailInfo__bottom__back"
              onClick={() => this.setState({ modalIsOpen: false })}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProductDetailInfo;
