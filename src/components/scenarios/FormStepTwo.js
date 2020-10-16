import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  Button,
  Row,
  Col,
  Select,
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
const { Option } = Select;

class FormStepTwo extends Component {
  constructor() {
    super();
    this.state = {
      aggregated_data: [],
      granular_data: [],
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  componentDidMount() {
    if (this.props.aggregatedData) {
      this.setState({
        aggregated_data: this.props.aggregatedData,
      });
    }
  }
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
        this.props.submittedValues(values, data, this.state.aggregated_data);
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
    this.props.submittedValues(values, data, this.state.aggregated_data);
    this.props.handleBackButton();
  };

  componentDidUpdate(prevProps) {
    debugger;
    if (this.props.aggregatedData !== this.state.aggregated_data) {
      if (this.props.aggregatedData) {
        this.setState({
          aggregated_data: this.props.aggregatedData,
        });
      }
    }
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          const data = [...this.state.aggregated_data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.aggregated_data[cellInfo.index][
            cellInfo.column.id
          ],
        }}
      />
    );
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { get_session_kpi, get_session } = this.props.session;
    const { data } = get_session_kpi;
    const {
      media_gross_profit,
      media_shipments,
      media_spend,
      media_volume,
    } = data;
    const { session_title, start_date, end_date } = get_session.data;

    return (
      <div>
        <>
          <Form onSubmit={this.handleSubmit}>
            <Row gutter={30}>
              <Col span={8}>
                <Form.Item
                  className="mb-4"
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
                <Form.Item label="Start Date">
                  {getFieldDecorator("scenario_ed", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.scenario_ed,
                  })(
                    <DatePicker
                      size="large"
                      style={{ width: "100%" }}
                      format="DD-MM-YYYY"
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
                      format="DD-MM-YYYY"
                      disabled
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Divider></Divider>

            <Row gutter={30}>
              <Col span={24}>
                <Form.Item
                  className="mb-4"
                  label="Media Optimization Objective"
                >
                  {getFieldDecorator("is_agg_constraint", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.is_agg_constraint,
                  })(
                    <Radio.Group size="large">
                      <Radio.Button value={true}>Aggregated</Radio.Button>
                      <Radio.Button value={false}>Granular</Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
            </Row>
            {this.props.form.getFieldValue("is_agg_constraint") === true && (
              <>
                <Row gutter={[16, 16]} className="d-flex pt-4">
                  <Col span={12}>
                    <h3 className="mb-0">Aggregated Data</h3>
                  </Col>
                  <Col span={12} className="ml-auto text-right">
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item className="py-2 border-bottom">
                            <Icon
                              type="edit"
                              style={{ fontSize: 16 }}
                              className="mr-2"
                            />{" "}
                            Edit in UI
                          </Menu.Item>
                          <Menu.Item className="py-2 border-bottom">
                            <Icon
                              type="download"
                              style={{ fontSize: 16 }}
                              className="mr-2"
                            />{" "}
                            Import Data
                          </Menu.Item>
                          <Menu.Item className="py-2">
                            <Icon
                              type="upload"
                              style={{ fontSize: 16 }}
                              className="mr-2"
                            />{" "}
                            Upload Data
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
                      data={this.state.aggregated_data}
                      columns={[
                        {
                          Header: "Group Threshold",
                          accessor: "name",
                          // Cell: this.renderEditable,
                        },
                        {
                          Header: "LOWER LIMIT",
                          accessor: "lower_limit",
                          Cell: this.renderEditable,
                        },
                        {
                          Header: "UPPER LIMIT",
                          accessor: "upper_limit",
                          Cell: this.renderEditable,
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
                  <Col span={24}>
                    <Form.Item label="YOY Spend Change" className="mb-4">
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
                          size="medium"
                          placeholder="YOY Spend "
                          style={{ width: "100%" }}
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
            {this.props.form.getFieldValue("is_agg_constraint") === false && (
              <>
                <Row gutter={[16, 16]} className="d-flex pt-4">
                  <Col span={12}>
                    <h3 className="mb-0">Granular Data</h3>
                  </Col>
                  <Col span={12} className="ml-auto text-right">
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item className="py-2 border-bottom">
                            <Icon
                              type="edit"
                              style={{ fontSize: 16 }}
                              className="mr-2"
                            />{" "}
                            Edit in UI
                          </Menu.Item>
                          <Menu.Item className="py-2 border-bottom">
                            <Icon
                              type="download"
                              style={{ fontSize: 16 }}
                              className="mr-2"
                            />{" "}
                            Import Data
                          </Menu.Item>
                          <Menu.Item className="py-2">
                            <Icon
                              type="upload"
                              style={{ fontSize: 16 }}
                              className="mr-2"
                            />{" "}
                            Upload Data
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
                      data={this.state.granular_data}
                      columns={[
                        {
                          Header: "Group Threshold",
                          accessor: "name",
                          // Cell: this.renderEditable,
                        },
                        {
                          Header: "LOWER LIMIT",
                          accessor: "lower_limit",
                          Cell: this.renderEditable,
                        },
                        {
                          Header: "UPPER LIMIT",
                          accessor: "upper_limit",
                          Cell: this.renderEditable,
                        },
                      ]}
                      defaultPageSize={5}
                      className="-striped -highlight"
                      showPagination={false}
                      loading={this.props.scenario.base_scenario.loading}
                    />
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

          {/* <Form onSubmit={this.handleSubmit}>
            <Divider></Divider>

            <Divider></Divider>
            <Form.Item className="text-center">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                style={{ width: 160 }}
              >
                Next
              </Button>
            </Form.Item>
          </Form> */}
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
