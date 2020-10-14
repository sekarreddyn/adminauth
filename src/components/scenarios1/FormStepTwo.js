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
} from "antd";
import ReactTable from "react-table";
import "react-table/react-table.css";
const { Option } = Select;

class FormStepOne extends Component {
  constructor() {
    super();
    this.state = {
      aggregated_data: [
        {
          name: "BU Threshold",
          lower_limit: 10,
          upper_limit: 40,
        },
        {
          name: "Country Threshold",
          lower_limit: 13,
          upper_limit: 30,
        },
        {
          name: "Brand Threshold",
          lower_limit: 10,
          upper_limit: 40,
        },
        {
          name: "Media Tactic",
          lower_limit: 10,
          upper_limit: 12,
        },
        {
          name: "YOY Spend Change",
          lower_limit: 23,
          upper_limit: 10,
        },
      ],
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.submittedValues(values);
        this.props.handleNextButton();
      }
    });
  };
  //  storeValues = () => {
  //   const values = getFieldsValue();
  //   props.submittedValues(values);
  //   props.handleBackButton();
  // };

  componentDidUpdate(prevProps) {
    if (
      this.props.scenario.base_scenario.data !==
      prevProps.scenario.base_scenario.data
    ) {
      if (this.props.scenario.base_scenario.data) {
        this.setState({
          data: this.props.scenario.base_scenario.data,
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

    console.log("session", this.props.scenario.base_scenario.data);

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
                  <Radio.Group defaultValue="a" size="large">
                    <Radio.Button value="a">Max Volume</Radio.Button>
                    <Radio.Button value="b">Max Profit</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Start Date">
                  {getFieldDecorator("f_two_s_two", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.f_two_s_two,
                  })(<DatePicker size="large" style={{ width: "100%" }} />)}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="End Date">
                  {getFieldDecorator("f_two_s_two", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.f_two_s_two,
                  })(<DatePicker size="large" style={{ width: "100%" }} />)}
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
                  <Radio.Group defaultValue="a" size="large">
                    <Radio.Button value="a">Aggregated</Radio.Button>
                    <Radio.Button value="b">Granular</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter="30" className="d-flex pt-4">
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
            <Row gutter="30" className="d-flex pt-4">
              <Col span={24} className="mt-3 ">
                <ReactTable
                  data={this.state.aggregated_data}
                  columns={[
                    {
                      Header: "INPUT PARAMETERS",
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
                  // defaultPageSize={10}
                  className="-striped -highlight"
                  showPagination={false}
                  loading={this.props.scenario.base_scenario.loading}
                />
              </Col>
            </Row>

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

const WrappedFormStepOne = Form.create({ name: "two" })(FormStepOne);

const mapStateToProps = (state) => ({
  session: state.session,
  scenario: state.scenario,
});

export default connect(mapStateToProps)(WrappedFormStepOne);
