import React, { Component } from "react";
import { connect } from "react-redux";
import { authActions } from "../actions";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Form, Icon, Row, Col, Card } from "antd";

import "../App.css";
import logo from "../assets/login-logo.png";
import analyticedge from "../assets/analyticedge-logo.png";

class Login extends Component {
  componentDidMount() {
    document.body.classList.add("login");
    return () => {
      document.body.classList.remove("login");
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(authActions.login(values));
      }
    });
  };

  render() {
    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ width: "100%", height: "100vh" }}
      >
        <Card style={{ maxWidth: 450 }}>
          <Col span={24}>
            <img
              alt="Media Simulator"
              src={logo}
              className="login-logo mb-6"
              style={{
                textAlign: "center",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />

            <Form
              onSubmit={this.handleSubmit}
              className="login-form text-center"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: "100%",
                width: 450,
              }}
            >
              <Icon
                className="text-success"
                type="check-circle"
                style={{ fontSize: "64px" }}
              />

              <h3 className="text-center text-success mb-2 mt-4">Email Sent</h3>
              <p className="text-center mb-4">
                Thank you! We have recived the your request to access Media
                Simulator, we will respond to your request at the earliest.
              </p>
              <p className="info-text text-center mb-4">
                <Icon type="arrow-left" /> Back to{" "}
                <NavLink className="font-weight-bold" to="/">
                  login
                </NavLink>
              </p>
              <p className="poweredby mb-0 text-center">
                Powered By <img src={analyticedge} alt="" />{" "}
              </p>
            </Form>
          </Col>
        </Card>
      </Row>
    );
  }
}

const WrappedLogin = Form.create({ name: "normal_login" })(Login);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(WrappedLogin);
