import React from "react";
import { withRouter } from "react-router";

import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import {
  IconHome,
  IconLabel,
  IconProduct,
  IconBrewery
} from "../../components/Icon";

import "./styles.scss";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      selected: ""
    };
  }
  onToggle = () => {
    this.setState({ expanded: true });
  };

  componentDidMount() {
    this.setState({ selected: this.props.location.pathname.substr(1) });
  }

  render() {
    const { expanded, selected } = this.state;
    const { location, history } = this.props;
    return (
      <div className="sidemenu">
        <SideNav
          expanded={expanded}
          onToggle={this.onToggle}
          style={{ backgroundColor: "#434b56", width: "315px" }}
          onSelect={selected => {
            const to = "/" + selected;
            if (location.pathname !== to) {
              history.push(to);
            }
          }}
        >
          <div className="sidemenu__info">
            <p className="sidemenu__info__gpu">GPU 12755 OK</p>
            <p className="sidemenu__info__time">Checked: 12:00 PM</p>
          </div>
          <SideNav.Nav
            defaultSelected={location.pathname.substr(1)}
            className="sidenavNav"
          >
            <NavItem
              eventKey="dashboard"
              onClick={() => {
                this.setState({ selected: "dashboard" });
              }}
              navitemClassName={
                "subitem " + (selected === "dashboard" ? "selectedsubitem" : "")
              }
            >
              <NavIcon>
                <IconHome />
              </NavIcon>
              <NavText>DASHBOARD</NavText>
            </NavItem>
            <NavItem
              eventKey="breweries"
              onClick={() => {
                this.setState({ selected: "breweries" });
              }}
              navitemClassName={
                "subitem " + (selected === "breweries" ? "selectedsubitem" : "")
              }
            >
              <NavIcon>
                <IconBrewery />
              </NavIcon>
              <NavText>BREWERIES</NavText>
            </NavItem>
            <NavItem
              eventKey="products"
              onClick={() => {
                this.setState({ selected: "products" });
              }}
              navitemClassName={
                "subitem " + (selected === "products" ? "selectedsubitem" : "")
              }
            >
              <NavIcon>
                <IconProduct />
              </NavIcon>
              <NavText>PRODUCTS</NavText>
            </NavItem>
            <NavItem
              eventKey="pproducts"
              onClick={() => {
                this.setState({ selected: "pproducts" });
              }}
              navitemClassName={
                "subitem " + (selected === "pproducts" ? "selectedsubitem" : "")
              }
            >
              <NavIcon>
                <IconProduct />
              </NavIcon>
              <NavText>PENDING PRODUCTS</NavText>
            </NavItem>
            <NavItem
              eventKey="plabels"
              onClick={() => {
                this.setState({ selected: "plabels" });
              }}
              navitemClassName={
                "subitem " + (selected === "plabels" ? "selectedsubitem" : "")
              }
            >
              <NavIcon>
                <IconLabel />
              </NavIcon>
              <NavText style={{ color: "#a8a8a8" }}>PENDING LABELS</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default withRouter(Sidebar);
