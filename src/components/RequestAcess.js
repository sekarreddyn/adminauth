import React, { Component } from "react";
import { connect } from "react-redux";
import { authActions } from "../actions";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Form, Icon, Input, Row, Col, Card, Button } from "antd";
import "../App.css";
import logo from "../assets/login-logo.png";
import analyticedge from "../assets/analyticedge-logo.png";

class RequestAccess extends Component {
  componentDidMount() {
    document.body.classList.add("login");
    return () => {
      document.body.classList.remove("login");
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = values;

        delete data.confirmPassword;
        this.props.dispatch(authActions.signup(data));
      }
    });
  };

  compareToPassword = (rule, value, callback) => {
    if (value && value !== this.props.form.getFieldValue("password")) {
      callback("Password  and confirm password should be same!");
    } else {
      callback();
    }
  };
  render() {
    const { signup } = this.props;
    const { loading } = signup;
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
              <Form.Item className="mb-3" label="Email Address">
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please enter your email" },
                    {
                      type: "email",
                      message: "Please enter valid email",
                    },
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

              <Form.Item className="mb-3 pb-0" label="Password">
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter your password",
                    },
                    {
                      min: 6,
                      message: "Your password must be atleast 6 characters",
                    },
                    {
                      max: 16,
                      message: "Your password should not exceed 16 characters",
                    },
                  ],
                })(
                  <Input.Password
                    type="password"
                    placeholder="******"
                    size="large"
                  />
                )}
              </Form.Item>

              <Form.Item className="mb-3 pb-2" label="Confirm Password">
                {getFieldDecorator("confirmPassword", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter your confirm password",
                    },
                    {
                      validator: this.compareToPassword,
                    },
                  ],
                })(
                  <Input.Password
                    type="password"
                    placeholder="******"
                    size="large"
                  />
                )}
              </Form.Item>

              <Form.Item className="mb-0 mt-1">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={loading}
                  size="large"
                >
                  Request Access
                </Button>
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

const WrappedRequestAccess = Form.create({ name: "normal_login" })(
  RequestAccess
);

const mapStateToProps = (state) => ({
  signup: state.auth.signup,
});

export default connect(mapStateToProps)(WrappedRequestAccess);
