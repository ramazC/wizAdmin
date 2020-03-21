import React, { Component } from "react";
import styled from "styled-components";
import {
  IconHot,
  IconOnIce,
  IconChilled,
  IconRoomTemp,
  IconVeryHot,
  IconWarm
} from "../Icon";
import "./styles.scss";

const Text1 = styled.p`
  font-family: "Lato";
  font-size: 14px;
  line-height: 1.57;
  color: #434b56;
  margin-bottom: 0px;
  text-align: center;
`;

class SelectServing extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      selectedItem: null
    };
  }

  render() {
    // const {} = this.state;

    const { selected, onChangeSelect } = this.props;

    return (
      <div className="selectServing">
        <p>Serving suggestions</p>
        <div>
          <div>
            <IconOnIce
              style={
                selected === 0
                  ? { backgroundColor: "rgba(92, 158, 104, 0.2)" }
                  : null
              }
              onClick={() => onChangeSelect(0)}
            />
            <Text1>
              On ice
              <br />
              (-)
            </Text1>
          </div>
          <div>
            <IconChilled
              style={
                selected === 1
                  ? { backgroundColor: "rgba(92, 158, 104, 0.2)" }
                  : null
              }
              onClick={() => onChangeSelect(1)}
            />
            <Text1>
              Chilled
              <br />
              (5°-10°)
            </Text1>
          </div>
          <div>
            <IconRoomTemp
              style={
                selected === 2
                  ? { backgroundColor: "rgba(92, 158, 104, 0.2)" }
                  : null
              }
              onClick={() => onChangeSelect(2)}
            />
            <Text1>
              Room temp
              <br /> (18°-20°)
            </Text1>
          </div>
          <div>
            <IconWarm
              style={
                selected === 3
                  ? { backgroundColor: "rgba(92, 158, 104, 0.2)" }
                  : null
              }
              onClick={() => onChangeSelect(3)}
            />
            <Text1>
              Warm <br />
              (40°-45°)
            </Text1>
          </div>
          <div>
            <IconHot
              style={
                selected === 4
                  ? { backgroundColor: "rgba(92, 158, 104, 0.2)" }
                  : null
              }
              onClick={() => onChangeSelect(4)}
            />
            <Text1>
              Hot <br />
              (45°-50°)
            </Text1>
          </div>
          <div>
            <IconVeryHot
              style={
                selected === 5
                  ? { backgroundColor: "rgba(92, 158, 104, 0.2)" }
                  : null
              }
              onClick={() => onChangeSelect(5)}
            />
            <Text1>
              Very Hot
              <br /> (50°-55°)
            </Text1>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectServing;
