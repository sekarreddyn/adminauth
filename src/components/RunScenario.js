import React from "react";
import { Card, Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
import { scenarioActions } from "../actions";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./runscenario.css";
class RunScenario extends React.Component {
  state = { data: [] };

  componentDidMount() {
    if (this.getScenarioId()) {
      this.runScenario(this.getScenarioId());
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.scenario.run_scenario !== prevProps.scenario.run_scenario) {
      if (this.props.scenario.run_scenario.status === "completed") {
        this.setState({
          data: this.props.scenario.run_scenario.data,
        });
      }
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
    </div>
  );
  render() {
    const { run_scenario } = this.props.scenario;
    const { status, start_date, end_date } = run_scenario;

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item></Breadcrumb.Item>
        </Breadcrumb>
        <div className="outer-wrapper">
          <Card title={this.cardTitle}>
            <div className="terminal">
              {start_date && (
                <pre>
                  <output>Starting scenario at {start_date}</output>
                </pre>
              )}

              {status === "completed" && (
                <pre>
                  <output>Scenario completed in {end_date}</output>
                </pre>
              )}
              {status === "failed" && (
                <pre>
                  <output>Scenario completed in {end_date}</output>
                </pre>
              )}
              {status === "completed" && (
                <pre>
                  <output className="text-success">
                    Run Scenario successfull
                  </output>
                </pre>
              )}
              {status === "failed" && (
                <pre>
                  <output className="text-danger">Run Scenario Failed </output>
                </pre>
              )}
            </div>
            {status === "completed" && (
              <div className="mt-5">
                <ReactTable
                  data={this.state.data}
                  columns={[
                    {
                      Header: "Group",
                      accessor: "group",

                      className: "text-center",
                    },
                    {
                      Header: "Bussiness unit",
                      accessor: "business_unit",

                      className: "text-center",
                    },
                    {
                      Header: "Country",
                      accessor: "country",

                      className: "text-center",
                    },
                    {
                      Header: "Brand",
                      accessor: "brand",

                      className: "text-center",
                    },
                    {
                      Header: "Media Tactics",
                      accessor: "media_tactic",

                      className: "text-center",
                    },
                    {
                      Header: "GRP's",
                      accessor: "grp",

                      className: "text-center",
                    },
                    {
                      Header: "Spend",
                      accessor: "spend",

                      className: "text-center",
                    },
                    {
                      Header: "CPP",
                      accessor: "cost_per_point",

                      className: "text-center",
                    },
                    {
                      Header: "Shipments",
                      accessor: "shipments",

                      className: "text-center",
                    },
                    {
                      Header: "GPUC",
                      accessor: "gp_uc",

                      className: "text-center",
                    },
                    {
                      Header: "CPP",
                      accessor: "cost_per_point",
                      className: "text-center",
                    },
                    {
                      Header: "GP",
                      accessor: "gp",

                      className: "text-center",
                    },
                  ]}
                  defaultPageSize={10}
                  className="-striped -highlight"
                  showPagination={false}
                  loading={this.props.scenario.run_scenario.loading}
                  pageSize={
                    this.state.data.length === 0 ? 3 : this.state.data.length
                  }
                />
              </div>
            )}
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
