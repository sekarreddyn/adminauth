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
  Dropdown,
  Menu,
} from "antd";
import { NavLink } from "react-router-dom";
import { sessionActions, scenarioActions } from "../actions";
import { connect } from "react-redux";
import swal from "sweetalert";
const text = (
  <span className="text-dark p-2 d-block">
    <Icon type="info-circle" className="mr-2" /> User Guide
  </span>
);

const content = (
  <div className="help-text">
    <h4 className="my-3">What is a scenario?</h4>
    <ul>
      <li>
        Scenario section in the application enables the User to run
        optimizations
      </li>
      <li>
        Session defines the scope while Scenario is where user provides all data
        inputs and assumptions required for optimization.{" "}
      </li>
      <li>
        One session can have multiple scenarios with different inputs and
        assumptions.
      </li>
    </ul>
  </div>
);

class sessionsList extends React.Component {
  state = {
    list: [],
  };
  onSearch = (value) => {
    this.setState({
      list: this.props.scenario.scenarios.data.filter((item) =>
        item.scenario_title && item.scenario_title !== "Base Scenario"
          ? item.scenario_title.toUpperCase().includes(value.toUpperCase())
          : item
      ),
    });
  };
  componentDidMount() {
    if (this.getSessionId()) {
      this.getSession();
      this.getSessionKpi();
      //this.getScenarios(this.getSessionId(),);
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
          list: this.props.scenario.scenarios.data,
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
    dispatch(sessionActions.getSessionKpi(this.getSessionId(), "list"));
  };
  getScenarios = () => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.getScenarios(this.getSessionId()));
  };

  deleteScenario = (scenario_id) => {
    const { dispatch } = this.props;
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this scenario!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(scenarioActions.deleteScenario(scenario_id));
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  };
  truncDigits = (inputNumber, digits) => {
    const fact = 10 ** digits;
    return Math.floor(inputNumber * fact) / fact;
  };
  getPercentageChange = (newValue, oldValue) => {
    let val = this.truncDigits(100 * ((newValue - oldValue) / oldValue), 2);

    if (val > 0) {
      return (
        <>
          {this.formatNumber(newValue)}
          <b className="text-success ml-2 ">
            <span className="session-count bg-success">
              <Icon type="caret-up" /> {val}%
            </span>
          </b>
        </>
      );
    } else if (val < 0) {
      return (
        <>
          {this.formatNumber(newValue)}
          <b className="text-danger  ml-2">
            <span className="session-count bg-danger">
              <Icon type="caret-down" /> {val}%
            </span>
          </b>
        </>
      );
    } else {
      return (
        <>
          {this.formatNumber(newValue)}
          <b className="text-dark  ml-2">
            <span className="session-count">
              <Icon type="line" /> {val}%
            </span>
          </b>
        </>
      );
    }
  };
  cardTitle = (
    <div className="d-flex align-items-center">
      <h3 className="text-dark mb-0">Scenarios</h3>
      <div className="ml-auto d-flex align-items-center">
        <div className="mr-3">
          <Input
            addonAfter={<Icon type="search" />}
            placeholder="Search scenarios"
            onChange={(e) => this.onSearch(e.target.value)}
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

  formatNumber = (val) => {
    return val ? val.toLocaleString() : 0;
  };
  render() {
    const { get_session_kpi, get_session } = this.props.session;
    const { scenario } = this.props;
    const { scenarios } = scenario;
    const { session_title } = get_session.data;
    const { data } = get_session_kpi;

    const {
      media_gross_profit,
      media_shipments,
      media_spend,
      media_volume,
    } = data;
    const columns = [
      {
        title: "Scenario",
        width: "20%",
        render: (item) => (
          <>
            {item.session_id ? (
              <div>
                <strong className="d-block mb-1">{item.scenario_title}</strong>
                <span className="text-muted">
                  {item.scenario_sd} - {item.scenario_ed}
                </span>
              </div>
            ) : (
              <div>
                <strong>{item.scenario_title}</strong>
              </div>
            )}
          </>
        ),
      },
      {
        title: "Media Spend",
        className: "text-center numbers font-weight-bold",
        render: (item) => (
          <>
            {item.session_id ? (
              <div>
                {this.getPercentageChange(item.media_spend, media_spend)}
              </div>
            ) : (
              <div>
                <strong>{this.formatNumber(item.media_spend)}</strong>
              </div>
            )}
            {item.has_run && item.optimized_kpi ? (
              <div className="mt-2">
                {this.getPercentageChange(
                  item.optimized_kpi.media_spend,
                  media_spend
                )}
              </div>
            ) : (
              <div></div>
            )}
          </>
        ),
      },
      {
        title: "MEDIA VOLUME",

        className: "text-center numbers font-weight-bold",
        key: "media_volume",

        render: (item) => (
          <>
            {item.session_id ? (
              <div>
                {this.getPercentageChange(item.media_volume, media_volume)}
              </div>
            ) : (
              <div>
                <strong>{this.formatNumber(item.media_volume)}</strong>
              </div>
            )}
            {item.has_run && item.optimized_kpi ? (
              <div className="mt-2">
                {this.getPercentageChange(
                  item.optimized_kpi.media_volume,
                  media_volume
                )}
              </div>
            ) : (
              <div></div>
            )}
          </>
        ),
      },
      {
        title: "MEDIA GROSS PROFIT",

        className: "text-center numbers font-weight-bold",
        key: "media_gross_profit",
        render: (item) => (
          <>
            {item.session_id ? (
              <div>
                {this.getPercentageChange(
                  item.media_gross_profit,
                  media_gross_profit
                )}
              </div>
            ) : (
              <div>
                <strong>{this.formatNumber(item.media_gross_profit)}</strong>
              </div>
            )}
            {item.has_run && item.optimized_kpi ? (
              <div className="mt-2">
                {this.getPercentageChange(
                  item.optimized_kpi.media_gross_profit,
                  media_gross_profit
                )}
              </div>
            ) : (
              <div></div>
            )}
          </>
        ),
      },

      {
        title: "SHIPMENTS",
        className: "text-center numbers font-weight-bold",
        key: "media_shipments",
        render: (item) => (
          <>
            {item.session_id ? (
              <div>
                {this.getPercentageChange(
                  item.media_shipments,
                  media_shipments
                )}
              </div>
            ) : (
              <div>
                <strong>{this.formatNumber(item.media_shipments)}</strong>
              </div>
            )}
            {item.has_run && item.optimized_kpi ? (
              <div className="mt-2">
                {this.getPercentageChange(
                  item.optimized_kpi.media_shipments,
                  media_shipments
                )}
              </div>
            ) : (
              <div></div>
            )}
          </>
        ),
      },

      {
        title: "Actions",
        className: "text-center",

        render: (item) => (
          <>
            {item.session_id ? (
              <div className="text-center">
                {item.has_run === false && (
                  <Tooltip placement="top" title="Run Scenario">
                    <NavLink
                      to={`/run-scenario/${this.getSessionId()}/${
                        item.scenario_id
                      }`}
                      className="ant-btn ant-btn-link px-2 text-primary"
                    >
                      <Icon type="play-circle" style={{ fontSize: "18px" }} />
                    </NavLink>
                  </Tooltip>
                )}
                {item.has_run === true && (
                  <Tooltip placement="top" title="View Result">
                    <NavLink
                      to={`/optimized-data/${this.getSessionId()}/${
                        item.scenario_id
                      }`}
                      className="ant-btn ant-btn-link px-2 text-primary"
                    >
                      <Icon type="eye" style={{ fontSize: "18px" }} />
                    </NavLink>
                  </Tooltip>
                )}

                <Tooltip placement="top" title="Edit Scenario">
                  <NavLink
                    to={`/edit-scenario/${this.getSessionId()}/${
                      item.scenario_id
                    }`}
                    className="ant-btn ant-btn-link px-2 mr-2"
                  >
                    <Icon type="edit" style={{ fontSize: "18px" }} />
                  </NavLink>
                </Tooltip>

                <Tooltip placement="top" title="More Actions">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          <Button className="px-0" type="link" size="small">
                            <NavLink
                              to={`/create-scenario/${this.getSessionId()}`}
                            >
                              <Icon type="copy" className="mr-1" /> Copy
                              Scenario
                            </NavLink>
                          </Button>
                        </Menu.Item>
                        <Menu.Item>
                          <Button
                            onClick={() =>
                              this.deleteScenario(item.scenario_id)
                            }
                            className="px-0"
                            type="link"
                            size="small"
                            loading={
                              scenario.delete_scenario.id ===
                                item.scenario_id &&
                              scenario.delete_scenario.loading
                            }
                          >
                            <Icon type="delete" /> Delete Scenario
                          </Button>
                        </Menu.Item>
                      </Menu>
                    }
                    placement="bottomRight"
                  >
                    <Button type="link" className="border px-2 bg-white">
                      <Icon type="more" style={{ fontSize: "18px" }} />
                    </Button>
                  </Dropdown>
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
              loading={
                get_session_kpi.loading ||
                scenarios.loading ||
                scenario.delete_scenario.loading
              }
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
