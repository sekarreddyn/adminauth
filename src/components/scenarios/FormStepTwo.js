import React from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Divider,
  Radio,
  DatePicker,
  Menu,
  Icon,
  Dropdown,
  Table,
} from "antd";

const columns = [
  {
    title: "Input Parameters",
    dataIndex: "input",
  },
  {
    title: "Lower Limit",
    dataIndex: "low",
    className: "text-center",
  },
  {
    title: "Upper Limit",
    dataIndex: "upper",
    className: "text-center",
  },
];

const data = [
  {
    key: "1",
    input: "BU Threshold",
    low: "-10%",
    upper: "0",
  },
  {
    key: "2",
    input: "Country Threshold",
    low: "-10%",
    upper: "10%",
  },
  {
    key: "3",
    input: "Brand Threshold",
    low: "-40%",
    upper: "40%",
  },

  {
    key: "4",
    input: "Media Tactic",
    low: "-60%",
    upper: "60%",
  },
  {
    key: "5",
    input: "YOY Spend Change",
    low: "-0%",
    upper: "0%",
  },
];

const StepTwo = Form.create({
  name: "step_two",
})((props) => {
  const { getFieldDecorator, validateFields, getFieldsValue } = props.form;
  const validateInput = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        props.submittedValues(values);
        props.handleNextButton();
      }
    });
  };
  const storeValues = () => {
    const values = getFieldsValue();
    props.submittedValues(values);
    props.handleBackButton();
  };
  return (
    <Form onSubmit={validateInput}>
      <Divider></Divider>
      <div className="text-center">
        <h4 className="session-title">
          Scenario 1<span>Jan 2019 - Jan 2020</span>
        </h4>
        <b className="text-success">
          107, 165, 670{" "}
          <span className="session-count bg-success">
            <Icon type="caret-up" /> 10%
          </span>
        </b>
        <b className="text-danger">
          107, 165, 670{" "}
          <span className="session-count">
            <Icon type="caret-down" /> 10%
          </span>
        </b>
        <b className="text-dark">
          107, 165, 670{" "}
          <span className="session-count">
            <Icon type="line" /> 0%
          </span>
        </b>
        <b className="text-dark">
          107, 165, 670{" "}
          <span className="session-count">
            <Icon type="line" /> 0%
          </span>
        </b>
      </div>
      <Row gutter={30}>
        <Col span={8}>
          <Form.Item className="mb-4" label="Media Optimization Objective">
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
              initialValue: props.f_two_s_two,
            })(<DatePicker size="large" style={{ width: "100%" }} />)}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="End Date">
            {getFieldDecorator("f_two_s_two", {
              rules: [{ required: false, message: "Cannot be empty!" }],
              initialValue: props.f_two_s_two,
            })(<DatePicker size="large" style={{ width: "100%" }} />)}
          </Form.Item>
        </Col>
      </Row>

      <Divider></Divider>

      <Row gutter={30}>
        <Col span={24}>
          <Form.Item className="mb-4" label="Media Optimization Objective">
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a">Aggregated</Radio.Button>
              <Radio.Button value="b">Granular</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter="30" className="d-flex pt-4">
        <Col span={8}>
          <h3 className="mb-0">Aggregated Data</h3>
        </Col>
        <Col span={4} className="ml-auto text-right">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item className="py-2 border-bottom">
                  <Icon type="edit" style={{ fontSize: 16 }} className="mr-2" />{" "}
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
              Edit input data <Icon type="caret-down" />
            </Button>
          </Dropdown>
        </Col>
      </Row>

      <Row gutter="30" className="d-flex pt-4 mb-4">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            className="text-center"
          ></Table>
        </Col>
      </Row>

      <Divider></Divider>

      <Form.Item className="text-center">
        <Button
          type="default"
          size="large"
          style={{ width: 160 }}
          onClick={storeValues}
        >
          Back
        </Button>
        <Button
          type="primary"
          size="large"
          style={{ width: 160 }}
          className="ml-3"
          onClick={validateInput}
        >
          Next
        </Button>
      </Form.Item>
    </Form>
  );
});

export default StepTwo;
