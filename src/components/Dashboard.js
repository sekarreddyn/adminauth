import React from "react";
import { Input, Icon, Button, Popover, Row, Col } from "antd";
import { NavLink } from "react-router-dom";

const text = <span className="text-dark p-2 d-block"><Icon type="info-circle" className="mr-2" /> User Guide</span>;

const content = (
  <div className="help-text">
    <h4 className="my-3">What is a session?</h4>
    <ul>
      <li>A session is where user defines the scope where one selects the time period and the underlying Country-brand-media tactics required for the media simulations/optimizations.</li>
      <li>User can create a new session, which is a default option provided in case there are no saved sessions</li>
    </ul>
  </div>
);


class Dashboard extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="title-bar d-flex align-items-center mb-5 border-bottom pb-3">
          <h3 className="font-weight-bold text-dark mb-0">Sessions</h3>
          <div className="ml-auto d-flex align-items-center">
            <div className="mr-3">
              <Input addonAfter={<Icon type="search" />} defaultValue="Search scenarios" />
            </div>
            <div className="mr-3">
              <Button className="btn-primary-outline">Create new session</Button>
            </div>
            <div>

              <Popover content={content} placement="bottomRight" title={text}>
                <Button className="px-2">
                  <Icon type="question-circle" className="mx-auto" theme="filled" style={{ fontSize: '16px' }} />
                </Button>
              </Popover>
            </div>
          </div>
        </div>

        <Row gutter={30}>
          <Col span={8} className="mb-5">
            <div className="session-card">
              <h4 className="session-card-title">Session Title</h4>
              <p className="session-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed voluptas, id ipsum suscipit consectetur libero ipsa labore sit. Quisquam!</p>
              <div className="session-card-data d-flex align-items-center w-100">
                <div className="scenarios-count">
                  <span className="number">0</span>
                  <span className="text">Scenarios</span>
                </div>
                <div className="scenarios-count">
                  <span className="number">Jan 2019 - Jan 2020</span>
                  <span className="text">Time Frame</span>
                </div>
              </div>
              <div className="session-card-meta d-flex align-items-center">
                <span>Last accessed on : Dec 22, 2019 15:27</span>
                <span className="ml-auto">

                  <NavLink to="/sessions-list">View Session</NavLink>
                </span>
              </div>
            </div>
          </Col>

          <Col span={8} className="mb-5">
            <div className="session-card">
              <h4 className="session-card-title">Session Title</h4>
              <p className="session-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed voluptas, id ipsum suscipit consectetur libero ipsa labore sit. Quisquam!</p>
              <div className="session-card-data d-flex align-items-center w-100">
                <div className="scenarios-count">
                  <span className="number">0</span>
                  <span className="text">Scenarios</span>
                </div>
                <div className="scenarios-count">
                  <span className="number">Jan 2019 - Jan 2020</span>
                  <span className="text">Time Frame</span>
                </div>
              </div>
              <div className="session-card-meta d-flex align-items-center">
                <span>Last accessed on : Dec 22, 2019 15:27</span>
                <span className="ml-auto">

                  <NavLink to="/sessions-list">View Session</NavLink>
                </span>
              </div>
            </div>
          </Col>

          <Col span={8} className="mb-5">
            <div className="session-card">
              <h4 className="session-card-title">Session Title</h4>
              <p className="session-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed voluptas, id ipsum suscipit consectetur libero ipsa labore sit. Quisquam!</p>
              <div className="session-card-data d-flex align-items-center w-100">
                <div className="scenarios-count">
                  <span className="number">0</span>
                  <span className="text">Scenarios</span>
                </div>
                <div className="scenarios-count">
                  <span className="number">Jan 2019 - Jan 2020</span>
                  <span className="text">Time Frame</span>
                </div>
              </div>
              <div className="session-card-meta d-flex align-items-center">
                <span>Last accessed on : Dec 22, 2019 15:27</span>
                <span className="ml-auto">

                  <NavLink to="/sessions-list">View Session</NavLink>
                </span>
              </div>
            </div>
          </Col>

          <Col span={8}>
            <div className="session-card">
              <h4 className="session-card-title">Session Title</h4>
              <p className="session-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed voluptas, id ipsum suscipit consectetur libero ipsa labore sit. Quisquam!</p>
              <div className="session-card-data d-flex align-items-center w-100">
                <div className="scenarios-count">
                  <span className="number">0</span>
                  <span className="text">Scenarios</span>
                </div>
                <div className="scenarios-count">
                  <span className="number">Jan 2019 - Jan 2020</span>
                  <span className="text">Time Frame</span>
                </div>
              </div>
              <div className="session-card-meta d-flex align-items-center">
                <span>Last accessed on : Dec 22, 2019 15:27</span>
                <span className="ml-auto">

                  <NavLink to="/sessions-list">View Session</NavLink>
                </span>
              </div>
            </div>
          </Col>

          <Col span={8}>
            <div className="session-card">
              <h4 className="session-card-title">Session Title</h4>
              <p className="session-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed voluptas, id ipsum suscipit consectetur libero ipsa labore sit. Quisquam!</p>
              <div className="session-card-data d-flex align-items-center w-100">
                <div className="scenarios-count">
                  <span className="number">0</span>
                  <span className="text">Scenarios</span>
                </div>
                <div className="scenarios-count">
                  <span className="number">Jan 2019 - Jan 2020</span>
                  <span className="text">Time Frame</span>
                </div>
              </div>
              <div className="session-card-meta d-flex align-items-center">
                <span>Last accessed on : Dec 22, 2019 15:27</span>
                <span className="ml-auto">

                  <NavLink to="/sessions-list">View Session</NavLink>
                </span>
              </div>
            </div>
          </Col>

          <Col span={8}>
            <div className="session-card">
              <h4 className="session-card-title">Session Title</h4>
              <p className="session-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed voluptas, id ipsum suscipit consectetur libero ipsa labore sit. Quisquam!</p>
              <div className="session-card-data d-flex align-items-center w-100">
                <div className="scenarios-count">
                  <span className="number">0</span>
                  <span className="text">Scenarios</span>
                </div>
                <div className="scenarios-count">
                  <span className="number">Jan 2019 - Jan 2020</span>
                  <span className="text">Time Frame</span>
                </div>
              </div>
              <div className="session-card-meta d-flex align-items-center">
                <span>Last accessed on : Dec 22, 2019 15:27</span>
                <span className="ml-auto">

                  <NavLink to="/sessions-list">View Session</NavLink>
                </span>
              </div>
            </div>
          </Col>

        </Row>
      </div >
    );
  }
}

export default Dashboard;
