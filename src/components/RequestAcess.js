import React, { Component } from "react";
import { connect } from "react-redux";
import { authActions } from "../actions";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Form, Icon, Input, Row, Col, Card } from "antd";

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
    const { getFieldDecorator } = this.props.form;

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
              className="login-logo mb-4"
              style={{
                textAlign: "center",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
            <h3 className="text-center text-primary mb-3">
              Request access to media simulator
            </h3>

            <Form
              onSubmit={this.handleSubmit}
              className="login-form"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: "100%",
                width: 350,
              }}
            >
              <Form.Item className="mb-3" label="User Name">
                {getFieldDecorator("username", {
                  rules: [{ required: true, message: "User Name" }],
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Full Name"
                    size="large"
                  />
                )}
              </Form.Item>
              <Form.Item className="mb-5" label="Email Address">
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email!" },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                    size="large"
                  />
                )}
              </Form.Item>
              <Form.Item className="mb-0">
                {/* <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={loading}
                  size="large"
                >
                  Request Access
                </Button> */}

                <NavLink
                  className="ant-btn ant-btn-primary ant-btn-lg"
                  to="/request-emailsent"
                >
                  Request Access
                </NavLink>

                <p className="info-text text-center mb-4">
                  <Icon type="arrow-left" /> Back to{" "}
                  <NavLink className="font-weight-bold" to="/">
                    login
                  </NavLink>
                </p>
              </Form.Item>

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
