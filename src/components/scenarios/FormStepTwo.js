import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  Button,
  Row,
  Col,
  Divider,
  Icon,
  Radio,
  DatePicker,
  Dropdown,
  Menu,
  InputNumber,
} from "antd";

import ReactTable from "react-table";
import "react-table/react-table.css";
import { scenarioActions } from "../../actions";
import XLSX from "xlsx";
import { ExportSheet } from "react-xlsx-sheet";
import { toast } from "react-toastify";
class FormStepTwo extends Component {
  constructor() {
    super();
    this.state = {
      aggregated_data: [],
      granular_data: [],
      is_agg_constraint: null,
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
        { title: "SpendLowerLimit", dataIndex: "spend_upper_limit" },
        { title: "SpendUpperLimt", dataIndex: "spend_lower_limit" },
        { title: "ModifiedOn", dataIndex: "modified_on" },
      ],
      file: {},
      cols: [],
    };
    this.renderEditable1 = this.renderEditable1.bind(this);
    this.renderEditable2 = this.renderEditable2.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.aggregatedData) {
      this.setState({
        aggregated_data: this.props.aggregatedData,
      });
    }

    this.setState({
      is_agg_constraint: this.props.is_agg_constraint,
    });
  }
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
        group: item.Group ? item.Group : null,
        business_unit: item.BussinessUunit ? item.BussinessUunit : null,
        country: item.Country ? item.Country : null,
        brand: item.Brand ? item.Brand : null,
        media_tactic: item.MediaTactics ? item.MediaTactics : null,
        grp: item.GRP ? item.GRP : null,
        spend: item.Spend ? item.Spend : null,
        spend_share: item.SpendShare ? item.SpendShare : null,
        profit: item.Profit ? item.Profit : null,
        roi_b: item.ROIB ? item.ROIB : null,
        saturation_parameter: item.SaturationParameter
          ? item.SaturationParameter
          : null,
        session_id: item.SessionId ? item.SessionId : null,
        media_elasticity: item.MediaElasticity ? item.MediaElasticity : null,
        shipments: item.Shipments ? item.Shipments : null,
        gp_uc: item.GPUC ? item.GPUC : null,
        cost_per_point: item.CPP ? item.CPP : null,
        factor: item.Factor ? item.Factor : null,
        gp: item.GP ? item.GP : null,
        uplift: item.Uplift ? item.Uplift : null,
        spend_upper_limit: item.SpendUpperLimt ? item.SpendUpperLimt : null,
        spend_lower_limit: item.SpendLowerLimit ? item.SpendLowerLimit : null,
        modified_on: item.ModifiedOn ? item.ModifiedOn : null,
      }));

      this.setState(
        {
          granular_data: formatedData,
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
      () => toast.success("Granular data imported successfully")
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
          bu_threshold_lower: this.state.aggregated_data.find(
            (x) => x.id === "bu_threshold"
          ).lower_limit,
          bu_threshold_upper: this.state.aggregated_data.find(
            (x) => x.id === "bu_threshold"
          ).upper_limit,
          country_threshold_lower: this.state.aggregated_data.find(
            (x) => x.id === "country_threshold"
          ).upper_limit,
          country_threshold_upper: this.state.aggregated_data.find(
            (x) => x.id === "country_threshold"
          ).upper_limit,
          brand_threshold_lower: this.state.aggregated_data.find(
            (x) => x.id === "brand_threshold"
          ).upper_limit,
          brand_threshold_upper: this.state.aggregated_data.find(
            (x) => x.id === "brand_threshold"
          ).upper_limit,
          media_threshold_lower: this.state.aggregated_data.find(
            (x) => x.id === "media_threshold"
          ).upper_limit,
          media_threshold_upper: this.state.aggregated_data.find(
            (x) => x.id === "media_threshold"
          ).upper_limit,
          grp_threshold_lower: this.state.aggregated_data.find(
            (x) => x.id === "grp_threshold"
          ).upper_limit,
          grp_threshold_upper: this.state.aggregated_data.find(
            (x) => x.id === "grp_threshold"
          ).upper_limit,
        };
        this.props.submittedValues(
          values,
          data,
          this.state.aggregated_data,
          this.state.granular_data
        );
        this.props.handleNextButton();
      }
    });
  };

  storeValues = () => {
    let data = {
      bu_threshold_lower: this.state.aggregated_data.find(
        (x) => x.id === "bu_threshold"
      ).lower_limit,
      bu_threshold_upper: this.state.aggregated_data.find(
        (x) => x.id === "bu_threshold"
      ).upper_limit,
      country_threshold_lower: this.state.aggregated_data.find(
        (x) => x.id === "country_threshold"
      ).upper_limit,
      country_threshold_upper: this.state.aggregated_data.find(
        (x) => x.id === "country_threshold"
      ).upper_limit,
      brand_threshold_lower: this.state.aggregated_data.find(
        (x) => x.id === "brand_threshold"
      ).upper_limit,
      brand_threshold_upper: this.state.aggregated_data.find(
        (x) => x.id === "brand_threshold"
      ).upper_limit,
      media_threshold_lower: this.state.aggregated_data.find(
        (x) => x.id === "media_threshold"
      ).upper_limit,
      media_threshold_upper: this.state.aggregated_data.find(
        (x) => x.id === "media_threshold"
      ).upper_limit,
      grp_threshold_lower: this.state.aggregated_data.find(
        (x) => x.id === "grp_threshold"
      ).upper_limit,
      grp_threshold_upper: this.state.aggregated_data.find(
        (x) => x.id === "grp_threshold"
      ).upper_limit,
    };

    const { getFieldsValue } = this.props.form;
    const values = getFieldsValue();
    this.props.submittedValues(
      values,
      data,
      this.state.aggregated_data,
      this.state.granular_data
    );
    this.props.handleBackButton();
  };

  componentDidUpdate(prevProps) {
    if (this.props.aggregatedData !== this.state.aggregated_data) {
      if (this.props.aggregatedData) {
        this.setState({
          aggregated_data: this.props.aggregatedData,
        });
      }
    }
    if (
      this.props.scenario.granular_data.data !==
        prevProps.scenario.granular_data.data &&
      !this.props.ScenarioId
    ) {
      if (this.props.scenario.granular_data.data) {
        this.setState({
          granular_data: this.props.scenario.granular_data.data,
        });
      }
    }
    if (
      this.props.granular_data !== this.state.granular_data &&
      this.props.ScenarioId
    ) {
      if (this.state.granular_data) {
        this.setState({
          granular_data: this.props.granular_data,
        });
      }
    }
  }

  renderEditable1(cellInfo) {
    return (
      <InputNumber
        style={{ backgroundColor: "#fafafa", width: "100%" }}
        contentEditable
        suppressContentEditableWarning
        onChange={(e) => {
          const aggregated_data = [...this.state.aggregated_data];
          aggregated_data[cellInfo.index][cellInfo.column.id] = e;
          this.setState({ aggregated_data });
        }}
        value={this.state.aggregated_data[cellInfo.index][cellInfo.column.id]}
      />
    );
  }
  renderEditable2(cellInfo) {
    return (
      <InputNumber
        style={{ backgroundColor: "#fafafa", width: "100%" }}
        contentEditable
        suppressContentEditableWarning
        onChange={(e) => {
          const granular_data = [...this.state.granular_data];
          granular_data[cellInfo.index][cellInfo.column.id] = e;
          this.setState({ granular_data });
        }}
        value={this.state.granular_data[cellInfo.index][cellInfo.column.id]}
      />
    );
  }
  onBudgetConstChange = (e) => {
    this.setState({
      is_agg_constraint: e.target.value,
    });
    if (!e.target.value && !this.props.ScenarioId) {
      this.getGranularData(this.props.baseScenario);
    }
    if (
      !e.target.value &&
      this.props.ScenarioId &&
      this.state.granular_data == null
    ) {
      this.getGranularData(this.props.baseScenario);
    }
  };

  getGranularData = (data) => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.getGranularData({ mod_base_table: data }));
  };

  upload() {
    document.getElementById("file-input").click();
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <>
          <Form onSubmit={this.handleSubmit}>
            <Row gutter={30}>
              <Col span={8}>
                <Form.Item
                  className="mb-3 custom-radio moo"
                  label="Media Optimization Objective"
                >
                  {getFieldDecorator("is_max_vol", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.is_max_vol,
                  })(
                    <Radio.Group size="large">
                      <Radio.Button value={true}>Max Volume</Radio.Button>
                      <Radio.Button value={false}>Max Profit</Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Start Date" className="mb-3">
                  {getFieldDecorator("scenario_ed", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.scenario_sd,
                  })(
                    <DatePicker
                      size="large"
                      style={{ width: "100%" }}
                      format="YYYY-MM-DD"
                      disabled
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="End Date">
                  {getFieldDecorator("scenario_ed", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.scenario_ed,
                  })(
                    <DatePicker
                      size="large"
                      style={{ width: "100%" }}
                      format="YYYY-MM-DD"
                      disabled
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Divider></Divider>

            <Row gutter={30}>
              <Col span={8}>
                <Form.Item
                  className="mb-3 custom-radio ibc"
                  label="Input Budget Constraints"
                >
                  {getFieldDecorator("is_agg_constraint", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.is_agg_constraint,
                  })(
                    <Radio.Group
                      size="large"
                      onChange={this.onBudgetConstChange}
                      disabled={this.props.ScenarioId}
                    >
                      <Radio.Button value={true}>Aggregated</Radio.Button>
                      <Radio.Button value={false}>Granular</Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
            </Row>
            {this.state.is_agg_constraint === true && (
              <>
                <Row
                  gutter={[16, 16]}
                  className="d-flex align-items-center w-100"
                >
                  <Col span={12}>
                    <h3 className="mb-0 text-dark">Aggregated Data</h3>
                  </Col>
                </Row>
                <Row gutter={[16, 16]} className="d-flex pt-2">
                  <Col span={24} className="mt-3 ">
                    <ReactTable
                      data={this.state.aggregated_data}
                      columns={[
                        {
                          Header: "Constraints",
                          accessor: "name",
                          // Cell: this.renderEditable,
                        },
                        {
                          Header: "LOWER LIMIT",
                          accessor: "lower_limit",
                          Cell: this.renderEditable1,
                          className: "text-center",
                        },
                        {
                          Header: "UPPER LIMIT",
                          accessor: "upper_limit",
                          Cell: this.renderEditable1,
                          className: "text-center",
                        },
                      ]}
                      defaultPageSize={5}
                      className="-striped -highlight"
                      showPagination={false}
                      loading={this.props.scenario.base_scenario.loading}
                    />
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Form.Item label="YOY Spend Change" className="mb-3">
                      {getFieldDecorator("yoy_change", {
                        rules: [
                          {
                            required: true,
                            message: "Please enter yoy spend change",
                          },
                        ],
                        initialValue: this.props.yoy_change,
                      })(
                        <InputNumber
                          size="large"
                          placeholder="YOY Spend "
                          style={{ width: "100%" }}
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
            {this.state.is_agg_constraint === false && (
              <>
                <Row gutter={[16, 16]} className="pt-4">
                  <Col span={12}>
                    <h3 className="mb-0">Granular Data</h3>
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
                              fileName={`granular_data`}
                              dataSource={this.state.granular_data}
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
                <Row gutter={[16, 16]} className="d-flex pt-4">
                  <Col span={24} className="mt-3 ">
                    <ReactTable
                      data={
                        this.state.granular_data ? this.state.granular_data : []
                      }
                      columns={[
                        {
                          Header: "Group",
                          accessor: "group",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Bussiness unit",
                          accessor: "business_unit",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Country",
                          accessor: "country",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Brand",
                          accessor: "brand",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Media Tactics",
                          accessor: "media_tactic",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Media Elasticity",
                          accessor: "media_elasticity",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "GRP's",
                          accessor: "grp",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Spend",
                          accessor: "spend",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },

                        {
                          Header: "Spend Lower Limit",
                          accessor: "spend_lower_limit",
                          Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Spend Upper Limit",
                          accessor: "spend_upper_limit",
                          Cell: this.renderEditable2,
                          className: "text-center",
                        },
                      ]}
                      defaultPageSize={10}
                      className="-striped -highlight"
                      showPagination={false}
                      loading={
                        this.props.scenario.granular_data.loading ||
                        this.state.loading
                      }
                      pageSize={
                        this.state.granular_data !== null &&
                        this.state.granular_data.length
                      }
                    />
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Form.Item label="YOY Spend Change" className="mb-3">
                      {getFieldDecorator("yoy_change", {
                        rules: [
                          {
                            required: true,
                            message: "Please enter yoy spend change",
                          },
                        ],
                        initialValue: this.props.yoy_change,
                      })(
                        <InputNumber
                          size="large"
                          placeholder="YOY Spend "
                          style={{ width: "100%" }}
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
            <Divider></Divider>
            <Form.Item className="text-center">
              <Button
                size="large"
                style={{ width: 160 }}
                type="default"
                onClick={this.storeValues}
              >
                Back
              </Button>
              <Button
                size="large"
                className="ml-3"
                style={{ width: 160 }}
                type="primary"
                onClick={this.handleSubmit}
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

const WrappedFormStepTwo = Form.create({ name: "step_two" })(FormStepTwo);

const mapStateToProps = (state) => ({
  session: state.session,
  scenario: state.scenario,
});

export default connect(mapStateToProps)(WrappedFormStepTwo);
