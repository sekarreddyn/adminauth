import React, { Component } from "react";
import { Layout, Menu, Icon, Row, Col, Tooltip } from "antd";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions, dashboardActions } from "../../actions";
import msLogo from "../../assets/ms-logo.svg";

const { Header } = Layout;

class Navbar extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    this.props.dispatch(
      dashboardActions.openCloseSidemenu(!this.state.collapsed)
    );
  };

  handleClick = (e) => {
    this.props.dispatch(authActions.logout());
  };

  render() {
    return (
      <div>
        <Header className="main-header">
          <Row gutter={30} className="d-flex align-items-center">
            <Col span={4}>
              <NavLink to="/">
                {" "}
                <img src={msLogo} className="w-90" alt="Media Simulator" />
              </NavLink>
            </Col>

            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              // style={{ lineHeight: "64px" }}
              className="ml-auto"
            >
              <Menu.Item>
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/">Reports</NavLink>
              </Menu.Item>
              {/* <Menu.Item>
                <NavLink to="/create-session" className="creat-btn">
                  Create Session
                </NavLink> 
              </Menu.Item> */}

              {/* <Menu.Item className="text-center">
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        New report has been received
                        <span className="date">1 hr ago</span>
                      </Menu.Item>
                      <Menu.Item>Dashboard</Menu.Item>
                      <Menu.Item>Dashboard</Menu.Item>
                    </Menu>
                  }
                  overlayClassName="notification-dropdown"
                  placement="bottomCenter"
                >
                  <Icon type="bell" className="mx-auto" theme="filled" style={{ fontSize: '18px' }} />
                </Dropdown>
              </Menu.Item> */}

              <Menu.Item onClick={this.handleClick} className="text-center">
                <Tooltip placement="bottom" title="Logout">
                  <Icon
                    type="poweroff"
                    className="mx-auto"
                    style={{ fontSize: "18px" }}
                  />
                </Tooltip>
              </Menu.Item>

              <Menu.Item className="text-center">
                <Tooltip placement="bottom" title="Help">
                  <Icon
                    type="question-circle"
                    className="mx-auto"
                    theme="filled"
                    style={{ fontSize: "18px" }}
                  />
                </Tooltip>
              </Menu.Item>
            </Menu>
          </Row>
        </Header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
