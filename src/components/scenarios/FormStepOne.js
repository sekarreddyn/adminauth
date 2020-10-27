import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  Button,
  Row,
  Col,
  Divider,
  Dropdown,
  Menu,
  Icon,
  InputNumber,
} from "antd";
import ReactTable from "react-table";
import "react-table/react-table.css";
import XLSX from "xlsx";
import { ExportSheet } from "react-xlsx-sheet";
import { toast } from "react-toastify";

import "./style.css";
class FormStepOne extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: null,
      head: [
        { title: "SessionId", dataIndex: "session_id" },
        { title: "Group", dataIndex: "group" },
        { title: "BussinessUunit", dataIndex: "business_unit" },
        { title: "Country", dataIndex: "country" },
        { title: "Brand", dataIndex: "brand" },
        { title: "MediaTactics", dataIndex: "media_tactic" },
        { title: "GRP", dataIndex: "grp" },
        { title: "Spend", dataIndex: "spend" },
        { title: "MediaElasticity", dataIndex: "media_elasticity" },
        { title: "Shipments", dataIndex: "shipments" },
        { title: "GPUC", dataIndex: "gp_uc" },
        { title: "CPP", dataIndex: "cost_per_point" },
        { title: "GP", dataIndex: "gp" },
        { title: "SaturationParameter", dataIndex: "saturation_parameter" },
        { title: "Profit", dataIndex: "profit" },
        { title: "ROIB", dataIndex: "roi_b" },
        { title: "Uplift", dataIndex: "uplift" },
        { title: "Factor", dataIndex: "factor" },
        { title: "SpendShare", dataIndex: "spend_share" },
        { title: "ModifiedOn", dataIndex: "modified_on" },
      ],
      file: {},

      cols: [],
    };
    this.renderEditable = this.renderEditable.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.submittedValues(this.state.data);
        this.props.handleNextButton();
      }
    });
  };
  componentDidMount() {
    if (this.props.baseScenario) {
      this.setState({
        data: this.props.baseScenario,
      });
    }

    // let fileName = TestFile;
    // let workbook = XLSX.readFile(fileName);
    // console.log(workbook); //should print an array with the excel file data
  }

  componentDidUpdate(prevProps) {
    if (this.props.baseScenario !== prevProps.baseScenario) {
      if (this.props.baseScenario) {
        this.setState({
          data: this.props.baseScenario,
        });
      }
    }
  }
  renderEditable(cellInfo) {
    return (
      <InputNumber
        style={{ backgroundColor: "#fafafa", width: "100%" }}
        contentEditable
        suppressContentEditableWarning
        onChange={(e) => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e;
          this.setState({ data });
        }}
        value={this.state.data[cellInfo.index][cellInfo.column.id]}
      />
    );
  }
  formatNumber = (val) => {
    return val ? val.toLocaleString() : 0;
  };

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0])
      this.setState({ file: files[0], loading: true }, () => this.handleFile());
  }

  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      let formatedData = data.map((item) => ({
        group: item.Group,
        business_unit: item.BussinessUunit,
        country: item.Country,
        brand: item.Brand,
        media_tactic: item.MediaTactics,
        grp: item.GRP,
        spend: item.Spend,
        media_elasticity: item.MediaElasticity,
        shipments: item.Shipments,
        gp_uc: item.GPUC,
        cost_per_point: item.CPP,
        gp: item.GP,
      }));

      this.setState(
        {
          data: formatedData,
        },
        () => this.hideloading()
      );
    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    }
  }
  hideloading = () => {
    this.setState(
      {
        loading: false,
      },
      () => toast.success("Scenario data imported successfully")
    );
  };
  renderKpiSection = ({
    media_spend,
    media_volume,
    media_gross_profit,
    media_shipments,
  }) => {
    return (
      <>
        <Col span={4} className="text-center border-right">
          <h5 className="text-muted mb-3">MEDIA SPEND</h5>
          <b className="text-dark">{this.formatNumber(media_spend)}</b>
        </Col>
        <Col span={4} className="text-center border-right">
          <h5 className="text-muted mb-3">MEDIA VOLUME</h5>
          <b className="text-dark">{this.formatNumber(media_volume)}</b>
        </Col>
        <Col span={4} className="text-center border-right">
          <h5 className="text-muted mb-3">MEDIA GROSS PROFIT</h5>
          <b className="text-dark">{this.formatNumber(media_gross_profit)}</b>
        </Col>
        <Col span={4} className="text-center">
          <h5 className="text-muted mb-3">SHIPMENTS</h5>
          <b className="text-dark">{this.formatNumber(media_shipments)}</b>
        </Col>
      </>
    );
  };

  upload() {
    document.getElementById("file-input").click();
  }

  render() {
    const { get_session_kpi, get_session } = this.props.session;
    const { get_scenario_kpi } = this.props.scenario;
    const { session_title, start_date, end_date } = get_session.data;

    return (
      <div>
        <>
          <Row gutter={[16, 16]} className="d-flex align-items-center">
            <Col span={8}>
              <h4 className="session-title">
                {session_title}
                <span className="mt-2">
                  {start_date} - {end_date}
                </span>
              </h4>
            </Col>

            {this.props.ScenarioId
              ? this.renderKpiSection(get_scenario_kpi.data)
              : this.renderKpiSection(get_session_kpi.data)}
          </Row>

          <Divider></Divider>

          <Col span={24} className="mt-3 ">
            <Row gutter={[16, 16]} className="d-flex align-items-center w-100">
              <Col span={12}>
                <h3 className="session-title text-dark mb-4">Scenario Data</h3>
              </Col>
              <Col span={12} className="ml-auto text-right">
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item className="py-2 border-bottom">
                        <Button type="link" onClick={this.upload}>
                          <input
                            type="file"
                            name="file"
                            id="file-input"
                            accept=".xlsx"
                            onChange={this.handleChange}
                            style={{ width: 100 }}
                            hidden
                          />
                          <Icon type="upload" /> Import
                        </Button>
                      </Menu.Item>
                      <Menu.Item className="py-2 ">
                        <ExportSheet
                          header={this.state.head}
                          fileName={`scenario_data`}
                          dataSource={this.state.data}
                          xlsx={XLSX}
                        >
                          <Button type="link">
                            <Icon type="download" /> Export
                          </Button>
                        </ExportSheet>
                      </Menu.Item>
                    </Menu>
                  }
                  placement="bottomLeft"
                >
                  <Button type="primary">
                    Actions <Icon type="caret-down" />
                  </Button>
                </Dropdown>
              </Col>
            </Row>

            <ReactTable
              data={this.state.data}
              columns={[
                {
                  Header: "Group",
                  accessor: "group",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Bussiness unit",
                  accessor: "business_unit",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Country",
                  accessor: "country",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Brand",
                  accessor: "brand",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Media Tactics",
                  accessor: "media_tactic",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "GRP's",
                  accessor: "grp",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Spend",
                  accessor: "spend",
                  Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Media Elasticity",
                  accessor: "media_elasticity",
                  Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Shipments",
                  accessor: "shipments",
                  Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "GPUC",
                  accessor: "gp_uc",
                  Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "CPP",
                  accessor: "cost_per_point",
                  className: "text-center",
                  Cell: this.renderEditable,
                },
                {
                  Header: "GP",
                  accessor: "gp",
                  Cell: this.renderEditable,
                  className: "text-center",
                },
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
              showPagination={false}
              loading={
                this.props.scenario.base_scenario.loading || this.state.loading
              }
              pageSize={this.state.data.length ? this.state.data.length : 4}
              noDataText={
                !this.props.scenario.base_scenario.loading && "No data found"
              }
            />
          </Col>

          <Form onSubmit={this.handleSubmit} className="text-center mb-0">
            <Divider></Divider>

            <Form.Item className="text-center mb-0">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                style={{ width: 160 }}
                disabled={
                  this.props.scenario.base_scenario.loading &&
                  this.state.data.length === 0
                }
              >
                Next
              </Button>
            </Form.Item>
          </Form>
        </>
      </div>
    );
  }
}

const WrappedFormStepOne = Form.create({ name: "normal_login" })(FormStepOne);

const mapStateToProps = (state) => ({
  session: state.session,
  scenario: state.scenario,
});

export default connect(mapStateToProps)(WrappedFormStepOne);
