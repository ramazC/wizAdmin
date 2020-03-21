import React from "react";
// import { connect } from "react-redux";
// import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideMenu from "../../components/SideMenu";
import "./styles.scss";
class DefaultLayout extends React.PureComponent {
  onClickLogo = () => {
    this.props.history.push("/dashboard");
  };

  onClickProfile = () => {
    this.props.history.push("/profile");
  };

  onClickLogout = () => {
    this.props.history.push("/");
  };

  render() {
    const { isLoggedIn, children, location } = this.props;
    return (
      <div className={isLoggedIn ? "" : ""}>
        <Header
          isLoggedIn={isLoggedIn}
          onClickLogo={this.onClickLogo}
          onClickProfile={this.onClickProfile}
          onClickLogout={this.onClickLogout}
          pathName={location.pathname}
        />

        <div className={isLoggedIn ? "main" : ""}>
          <SideMenu />
          <div className="main__body">
            {children}
            <Footer
              isLoggedIn={isLoggedIn}
              onClickLogo={this.onClickLogo}
              onClickProfile={this.onClickProfile}
              onClickLogout={this.onClickLogout}
              pathName={location.pathname}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;

// const mapStateToProps = () => ({});

// const mapDispatchToProps = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DefaultLayout);
