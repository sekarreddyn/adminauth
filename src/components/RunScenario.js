import React from "react";
import { Card, Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
import { sessionActions, scenarioActions } from "../actions";
import { connect } from "react-redux";
import "./runscenario.css";
class RunScenario extends React.Component {
  state = {};

  componentDidMount() {
    if (this.getScenarioId()) {
      this.runScenario(this.getScenarioId());
    }
  }

  getSessionId = () => {
    if (this.props.match.params.sessionId)
      return this.props.match.params.sessionId;
  };
  getScenarioId = () => {
    if (this.props.match.params.scenarioId)
      return this.props.match.params.scenarioId;
  };

  runScenario = () => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.runScenario(this.getScenarioId()));
  };

  cardTitle = (
    <div className="d-flex align-items-center">
      <h3 className="text-dark mb-0">Run Scenario</h3>
      <div className="ml-auto d-flex align-items-center">
        <div className="mr-3">
          {/* <NavLink
            to={`/create-scenario/${this.getSessionId()}`}
            className="ant-btn ant-btn-sm btn-primary-outline"
          >
            Create new scenario
          </NavLink> */}
        </div>
      </div>
    </div>
  );
  render() {
    const { run_scenario } = this.state.scenario;
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{"session_title"}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="outer-wrapper">
          <Card className="mb-4" title={this.cardTitle}>
            <div className="terminal">
              <pre>
                <output>webpack: [built]</output>
              </pre>
              <pre>
                <output>webpack: [built]</output>
              </pre>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  scenario: state.scenario,
});

export default connect(mapStateToProps)(RunScenario);
