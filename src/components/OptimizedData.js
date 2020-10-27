import React from "react";
import { Card, Breadcrumb, Icon, Button } from "antd";
import { NavLink } from "react-router-dom";
import { scenarioActions } from "../actions";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import XLSX from "xlsx";
import { ExportSheet } from "react-xlsx-sheet";

class OptimizedData extends React.Component {
  state = {
    dataList: [],

    header: [
      { title: "Scenario_id", dataIndex: "scenario_id" },
      { title: "Group", dataIndex: "group" },
      { title: "BussinessUnit", dataIndex: "business_unit" },
      { title: "Country", dataIndex: "country" },
      { title: "Brand", dataIndex: "brand" },
      { title: "MediaTactics", dataIndex: "media_tactic" },
      { title: "GRP", dataIndex: "grp" },
      { title: "GRPOptimized", dataIndex: "grp_optimized" },
      { title: "Factor", dataIndex: "factor" },
      { title: "SaturationParameter", dataIndex: "saturation_parameter" },
      { title: "MediaElasticity", dataIndex: "media_elasticity" },
      { title: "Shipments", dataIndex: "shipments" },
      { title: "Spend", dataIndex: "spend" },
      { title: "SpendOptimized", dataIndex: "spend_optimized" },
      { title: "Uplift", dataIndex: "uplift" },
      { title: "UpliftOptimized", dataIndex: "uplift_optimized" },
      { title: "Profit", dataIndex: "profit" },
      { title: "Profitoptimized", dataIndex: "profit_optimized" },
      { title: "SpendShare", dataIndex: "spend_share" },
      { title: "SpendSharerOptimized", dataIndex: "spend_share_optimized" },
      { title: "GPOptimized", dataIndex: "gp_optimized" },
      { title: "IsMaxVolume", dataIndex: "is_max_volume" },
      { title: "ROI", dataIndex: "roi_b" },
      { title: "ROIOptimized", dataIndex: "roi_optimized" },
      { title: "GPUC", dataIndex: "gp_uc" },
      { title: "CPP", dataIndex: "cost_per_point" },
      { title: "GP", dataIndex: "gp" },
      { title: "SpendLowerLimit", dataIndex: "spend_lower_limit" },
      { title: "SpendUpperLimit", dataIndex: "spend_upper_limit" },
      { title: "ModifiedOn", dataIndex: "modified_on" },
    ],
  };

  componentDidMount() {
    if (this.getScenarioId()) {
      this.getOptimizedData(this.getScenarioId());
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.scenario.get_optimized_data !==
      prevProps.scenario.get_optimized_data
    ) {
      if (this.props.scenario.get_optimized_data) {
        this.setState({
          dataList: this.props.scenario.get_optimized_data.data,
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

  getOptimizedData = () => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.getOptimizedData(this.getScenarioId()));
  };

  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to={`/scenarios-list/${this.getSessionId()}`}>
              Scenarios
            </NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Optimized Data</Breadcrumb.Item>
        </Breadcrumb>
        <div className="outer-wrapper">
          <Card
            title={
              <div className="d-flex align-items-center">
                <h3 className="text-dark mb-0"> Optimized Data </h3>

                <div className="ml-auto d-flex align-items-center">
                  <ExportSheet
                    header={this.state.header}
                    fileName={`optimized-data`}
                    dataSource={this.state.dataList}
                    xlsx={XLSX}
                  >
                    <Button type="link">
                      <Icon type="download" /> Export
                    </Button>
                  </ExportSheet>
                </div>
              </div>
            }
          >
            <div className="mt-5">
              <ReactTable
                data={this.state.dataList}
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
                    Header: "Shipments",
                    accessor: "shipments",

                    className: "text-center",
                  },
                  {
                    Header: "Spend",
                    accessor: "spend",

                    className: "text-center",
                  },
                  {
                    Header: "Spend Optimized",
                    accessor: "spend_optimized",

                    className: "text-center",
                  },
                  {
                    Header: "Uplift",
                    accessor: "uplift",

                    className: "text-center",
                  },
                  {
                    Header: "Uplift Optimized",
                    accessor: "uplift_optimized",

                    className: "text-center",
                  },
                  {
                    Header: "Profit",
                    accessor: "profit",

                    className: "text-center",
                  },
                  {
                    Header: "Profit Optimized",
                    accessor: "profit_optimized",

                    className: "text-center",
                  },
                  {
                    Header: "ROI",
                    accessor: "roi_b",

                    className: "text-center",
                  },
                  {
                    Header: "ROI Optimized",
                    accessor: "roi_optimized",

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
                loading={this.props.scenario.get_optimized_data.loading}
                pageSize={
                  this.state.dataList.length === 0
                    ? 3
                    : this.state.dataList.length
                }
              />
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

export default connect(mapStateToProps)(OptimizedData);
