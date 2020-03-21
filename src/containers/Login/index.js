import React from "react";
import styled from "styled-components";
import "./styles.scss";
import { IconLogo } from "../../components/Icon";

const Text1 = styled.p`
  font-family: "Lato";
  font-size: 24px;
  font-weight: bold;
  line-height: 1.33;
  color: #434b56;
  margin: 10px 0;
  text-align: left;
`;

const Text2 = styled.p`
  font-family: "Lato";
  font-size: 14px;
  font-weight: normal;
  line-height: 1.57;
  color: #a8a8a8;
  margin-bottom: 7px;
  text-align: left;
`;
class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      emptyUsername: false,
      emptyPassword: false
    };
  }

  inputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    this.setState({
      emptyUsername: false,
      emptyPassword: false
    });
    if (username === "") {
      this.setState({ emptyUsername: true });
      return;
    } else if (password === "") {
      this.setState({ emptyPassword: true });
      return;
    } else if (username !== "" && password !== "") {
      this.props.history.push("/dashboard");
    }
  };

  render() {
    const { username, password, emptyUsername, emptyPassword } = this.state;
    return (
      <div className="login">
        <div>
          <div className="login__modal">
            <div className="login__modal__body">
              <div>
                <IconLogo />
              </div>
              {/* <form onSubmit={this.handleSubmit}> */}
              <div>
                <Text1>Welcome Back!</Text1>
                <Text2>Please login to continue.</Text2>

                <div
                  className="login__modal__body__input"
                  style={
                    emptyUsername ? { borderBottom: "1px solid red" } : null
                  }
                >
                  <div className="login__modal__body__input__text">
                    <p>Username</p>
                    <p>required</p>
                  </div>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={this.inputChange}
                    required
                  />
                </div>

                <div
                  className="login__modal__body__input"
                  style={
                    emptyPassword ? { borderBottom: "1px solid red" } : null
                  }
                >
                  <div>
                    <p>Password</p>
                    <p>required</p>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={this.inputChange}
                    minLength="6"
                    required
                  />
                </div>

                <div className="login__modal__body__forgot">
                  Forgot password?
                </div>
                <button
                  className="login__modal__body__button"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Login
                </button>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
