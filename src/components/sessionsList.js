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
    <h4 className="my-3">What is a scenarios ?</h4>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula
        lectus, consectetur quis elit id, rutrum ullamcorper nunc. Pellentesque
        interdum augue sapien, non euismod nunc tincidunt eu. Praesent tempus ut
        metus a pretium. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Maecenas sed auctor turpis, sit amet
        pellentesque orci. Fusce id convallis enim. Sed nec accumsan lorem.
        Donec aliquet ipsum quam, nec cursus lacus consectetur vitae.
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula
        lectus, consectetur quis elit id, rutrum ullamcorper nunc. Pellentesque
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
              <div>
                <strong>{item.scenario_title}</strong>
                <br />
                <span>
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
        dataIndex: "media_spend",
        className: "text-center numbers font-weight-bold",
        key: "media_spend",
      },
      {
        title: "MEDIA VOLUME",
        dataIndex: "media_volume",
        className: "text-center numbers font-weight-bold",
        key: "media_volume",
      },
      {
        title: "MEDIA GROSS PROFIT",
        dataIndex: "media_gross_profit",
        className: "text-center numbers font-weight-bold",
        key: "media_gross_profit",
      },

      {
        title: "SHIPMENTS",
        dataIndex: "media_shipments",
        className: "text-center numbers font-weight-bold",
        key: "media_shipments",
      },

      {
        title: "Actions",
        className: "text-center",

        render: (item) => (
          <>
            {item.session_id ? (
              <div className="text-center">
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
                              <Icon type="copy" className="mr-1" /> Copy Session
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
                            <Icon type="delete" /> Delete
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
