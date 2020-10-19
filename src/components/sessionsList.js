import React from "react";
import {
  Input,
  Icon,
  Button,
  Popover,
  Card,
  Breadcrumb,
  Table,
  Tooltip,
} from "antd";
import { NavLink } from "react-router-dom";
import { sessionActions, scenarioActions } from "../actions";
import { connect } from "react-redux";
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

class sessionsList extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    if (this.getSessionId()) {
      this.getSession();
      this.getSessionKpi();
      this.getScenarios(this.getSessionId());
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.session.get_session_kpi.data !==
      prevProps.session.get_session_kpi.data
    ) {
      if (this.props.session.get_session_kpi.data) {
        this.setState({
          list: [
            {
              ...this.props.session.get_session_kpi.data,
              scenario_title: "Base Scenario",
            },
          ],
        });
      }
    }

    if (
      this.props.scenario.scenarios.data !== prevProps.scenario.scenarios.data
    ) {
      if (
        this.props.scenario.scenarios.data ||
        this.props.scenario.scenarios.data.date
      ) {
        this.setState({
          list: [
            ...[
              {
                ...this.props.session.get_session_kpi.data,
                scenario_title: "Base Scenario",
              },
            ],
            ...this.props.scenario.scenarios.data,
          ],
        });
      }
    }
  }
  getSessionId = () => {
    if (this.props.match.params.sessionId)
      return this.props.match.params.sessionId;
  };
  getSession = () => {
    const { dispatch } = this.props;
    dispatch(sessionActions.getSession(this.getSessionId()));
  };

  getSessionKpi = () => {
    const { dispatch } = this.props;
    dispatch(sessionActions.getSessionKpi(this.getSessionId()));
  };
  getScenarios = () => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.getScenarios(this.getSessionId()));
  };

  deleteScenario = (scenario_id) => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.deleteScenario(scenario_id));
  };

  cardTitle = (
    <div className="d-flex align-items-center">
      <h3 className="text-dark mb-0">Scenarios</h3>
      <div className="ml-auto d-flex align-items-center">
        <div className="mr-3">
          <Input
            addonAfter={<Icon type="search" />}
            placeholder="Search scenarios"
          />
        </div>
        <div className="mr-3">
          <NavLink
            to={`/create-scenario/${this.getSessionId()}`}
            className="ant-btn ant-btn-sm btn-primary-outline"
          >
            Create new scenario
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
  );
  render() {
    const { get_session_kpi, get_session } = this.props.session;
    const { scenario } = this.props;
    const { scenarios } = scenario;
    const { session_title } = get_session.data;
    const columns = [
      {
        title: "Scenario",
        width: "20%",
        render: (item) => (
          <>
            {item.session_id ? (
              <div className="text-center">
                <strong>{item.scenario_title}</strong>
                <br />
                <span>
                  {item.scenario_sd} - {item.scenario_ed}
                </span>
              </div>
            ) : (
              <div className="text-center">
                <strong>{item.scenario_title}</strong>
              </div>
            )}
          </>
        ),
      },
      {
        title: "Media Spend",
        dataIndex: "media_spend",
        className: "text-center numbers",
        key: "media_spend",
      },
      {
        title: "MEDIA VOLUME",
        dataIndex: "media_volume",
        className: "text-center numbers",
        key: "media_volume",
      },
      {
        title: "MEDIA GROSS PROFIT",
        dataIndex: "media_gross_profit",
        className: "text-center numbers",
        key: "media_gross_profit",
      },

      {
        title: "SHIPMENTS",
        dataIndex: "media_shipments",
        className: "text-center numbers",
        key: "media_shipments",
      },

      {
        title: "Actions",
        className: "text-center",

        render: (item) => (
          <>
            {item.session_id ? (
              <div className="text-center">
                <Tooltip placement="bottom" title="Run Scenario">
                  <NavLink
                    to={`/run-scenario/${this.getSessionId()}/${
                      item.scenario_id
                    }`}
                    className="ant-btn ant-btn-link px-2 text-primary"
                  >
                    <Icon type="play-circle" style={{ fontSize: "18px" }} />
                  </NavLink>
                </Tooltip>
                <Tooltip placement="bottom" title="Edit Scenario">
                  <NavLink
                    to={`/edit-scenario/${this.getSessionId()}/${
                      item.scenario_id
                    }`}
                    className="ant-btn ant-btn-link px-2"
                  >
                    <Icon type="edit" style={{ fontSize: "18px" }} />
                  </NavLink>
                </Tooltip>
                <Tooltip placement="bottom" title="Copy Scenario">
                  <NavLink
                    to={`/create-scenario/${this.getSessionId()}`}
                    className="ant-btn ant-btn-link mr-2 px-2"
                  >
                    <Icon type="copy" style={{ fontSize: "18px" }} />
                  </NavLink>
                </Tooltip>
                <Tooltip placement="bottom" title="Delete">
                  <Button
                    onClick={() => this.deleteScenario(item.scenario_id)}
                    className="ant-btn ant-btn-link px-2 text-primary"
                    loading={
                      scenario.delete_scenario.id === item.scenario_id &&
                      scenario.delete_scenario.loading
                    }
                  >
                    <Icon type="delete" style={{ fontSize: "18px" }} />
                  </Button>
                </Tooltip>
              </div>
            ) : (
              <div className="text-center">
                <strong></strong>
              </div>
            )}
          </>
        ),
      },
    ];
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{session_title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="outer-wrapper">
          <Card className="mb-4" title={this.cardTitle}>
            <Table
              columns={columns}
              dataSource={this.state.list}
              pagination={false}
              loading={get_session_kpi.loading || scenarios.loading}
            ></Table>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  scenario: state.scenario,
});

export default connect(mapStateToProps)(sessionsList);
