import React, { Component } from "react";
// import { connect } from "react-redux";
import { Menu } from "element-react";
import { NavLink } from "react-router-dom";
import {
  IconInstagram,
  IconTwitter,
  IconFacebook
} from "../../components/Icon";

import "./styles.scss";

class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <Menu mode="horizontal" theme="dark" defaultActive="1" className="footer">
        <div className="nav-container justify-content-between">
          <div className="nav-items">
            <div className="d-flex">
              <div className="footer__buttons">
                <NavLink to="/dashboard">
                  <span>©2019 - SakeWiz | All right reserved</span>
                </NavLink>
                <NavLink to="/about">
                  <span>About us</span>
                </NavLink>
                <NavLink to="/contact">
                  <span>Contact us</span>
                </NavLink>
              </div>

              <div className="footer__icons">
                <p>Find us</p>
                <img
                  src={IconFacebook}
                  alt=""
                  onClick={() =>
                    window.open("https://www.facebook.com/", "_blank")
                  }
                />
                <img
                  src={IconTwitter}
                  alt=""
                  onClick={() =>
                    window.open("https://www.twitter.com/", "_blank")
                  }
                />
                <img
                  src={IconInstagram}
                  alt=""
                  onClick={() =>
                    window.open("https://www.instagram.com/", "_blank")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Menu>
    );
  }
}

export default Header;

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = {
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Navbar);
