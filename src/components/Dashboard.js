import React from "react";
import { Input, Icon, Button, Popover, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { sessionActions } from "../actions";
import { connect } from "react-redux";
import Loading from "./Loading/SessionItem";
import SessionItem from "./sessions/SessionItem";
const text = (
  <span className="text-dark p-2 d-block">
    <Icon type="info-circle" className="mr-2" /> User Guide
  </span>
);

const content = (
  <div className="help-text">
    <h4 className="my-3">What is a session?</h4>
    <ul>
      <li>
        A session is where user defines the scope where one selects the time
        period and the underlying Country-brand-media tactics required for the
        media simulations/optimizations.
      </li>
      <li>
        User can create a new session, which is a default option provided in
        case there are no saved sessions
      </li>
    </ul>
  </div>
);

class Dashboard extends React.Component {
  state = {};
  componentDidMount() {
    this.props.dispatch(sessionActions.getSessions());
  }
  render() {
    const { session } = this.props;
    const { get_sessions } = session;
    const { loading, data } = get_sessions;

    return (
      <>
        <div className="outer-wrapper">
          <div className="title-bar d-flex align-items-center mb-5 border-bottom pb-3">
            <h3 className="font-weight-bold text-dark mb-0">Sessions</h3>
            <div className="ml-auto d-flex align-items-center">
              <div className="mr-3">
                <Input
                  addonAfter={<Icon type="search" />}
                  defaultValue="Search sessions"
                />
              </div>
              <div className="mr-3">
                <NavLink
                  to="/create-session"
                  className="ant-btn ant-btn-sm btn-primary-outline"
                >
                  Create new session
                </NavLink>
              </div>
              <div>
                <Popover content={content} placement="bottomRight" title={text}>
                  <Button className="px-2">
                    <Icon
                      type="question-circle"
                      className="mx-auto"
                      theme="filled"
                      style={{ fontSize: "16px" }}
                    />
                  </Button>
                </Popover>
              </div>
            </div>
          </div>

          {loading === true && (
            <React.Fragment>
              <Row gutter={30}>
                {Array(6)
                  .fill("")
                  .map((e, i) => (
                    <Col span={8} className="mb-5" key={i}>
                      <Loading style={{ opacity: Number(2 / i).toFixed(1) }} />
                    </Col>
                  ))}
              </Row>
            </React.Fragment>
          )}
          {loading === false && (
            <Row gutter={30}>
              {data.map((session, i) => (
                <Col span={8} className="mb-5" key={i}>
                  <SessionItem {...session} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(Dashboard);
