import React, { Component } from "react";

import "./styles.scss";

class InfoCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { imgSrc, value, title, text, breweryInfo } = this.props;
    return (
      <div className="infoCard" style={text ? null : { height: "100px" }}>
        <div
          className="infoCard__icon"
          style={text ? null : { marginBottom: "unset" }}
        >
          <img src={imgSrc} alt="" />
        </div>
        <div className="infoCard__info">
          <p
            style={
              breweryInfo
                ? {
                    fontSize: "14px",
                    lineHeight: 1.57,
                    width: "200px",
                    fontWeight: "unset"
                  }
                : null
            }
          >
            {value}
          </p>
          <p>{title}</p>
          {text && (
            <p style={breweryInfo ? { height: "unset" } : null}>{text}</p>
          )}
        </div>
      </div>
    );
  }
}

export default InfoCard;
