import React from "react";
import { Form, Button, Row, Col, Select, Divider } from "antd";

const { Option } = Select;

const StepOne = Form.create({
  name: "step_one",
})((props) => {
  const { getFieldDecorator, validateFields } = props.form;
  const validateInput = (e) => {
    e.preventDefault();

    validateFields((err, values) => {
      if (!err) {
        props.submittedValues(values);
        props.handleNextButton();
      }
    });
  };
  return (
    <>
      <Form onSubmit={validateInput}>
        <Divider></Divider>
        <Row gutter={30}>
          <Col span={8}>
            <Form.Item label="Group" className="mb-4">
              {getFieldDecorator("group_list", {
                rules: [{ required: true, message: "Please select group" }],
                initialValue: props.group_list,
              })(
                <Select
                  size="large"
                  mode="multiple"
                  placeholder="Select Group(s)"
                  style={{ width: "100%" }}
                  showSearch
                  loading={props.session.groups.loading}
                  //   disabled={props.session.groups.loading}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {props.session &&
                  props.session.groups &&
                  props.session.groups.data
                    ? props.session.groups.data.map((item, i) => (
                        <Option value={item} key={i}>
                          {item}
                        </Option>
                      ))
                    : []}
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Business Unit" className="mb-4">
              {getFieldDecorator("bu_list", {
                rules: [
                  { required: true, message: "Please select business unit" },
                ],
                initialValue: props.bu_list,
              })(
                <Select
                  size="large"
                  mode="multiple"
                  placeholder="Select Business Unit(s)"
                  style={{ width: "100%" }}
                  showSearch
                  loading={props.session.business_units.loading}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {props.session &&
                  props.session.business_units &&
                  props.session.business_units.data
                    ? props.session.business_units.data.map((item, i) => (
                        <Option value={item} key={i}>
                          {item}
                        </Option>
                      ))
                    : []}
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Country" className="mb-4">
              {getFieldDecorator("country_list", {
                rules: [{ required: true, message: "Please select country" }],
                initialValue: props.country_list,
              })(
                <Select
                  size="large"
                  mode="multiple"
                  placeholder="Select Country(s)"
                  style={{ width: "100%" }}
                  showSearch
                  loading={props.session.countries.loading}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {props.session &&
                  props.session.countries &&
                  props.session.countries.data
                    ? props.session.countries.data.map((item, i) => (
                        <Option value={item} key={i}>
                          {item}
                        </Option>
                      ))
                    : []}
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Brand" className="mb-4">
              {getFieldDecorator("brand_list", {
                rules: [{ required: true, message: "Please select brand" }],
                initialValue: props.brand_list,
              })(
                <Select
                  size="large"
                  mode="multiple"
                  placeholder="Select Brands(s)"
                  style={{ width: "100%" }}
                  showSearch
                  loading={props.session.brands.loading}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {props.session &&
                  props.session.brands &&
                  props.session.brands.data
                    ? props.session.brands.data.map((item, i) => (
                        <Option value={item} key={i}>
                          {item}
                        </Option>
                      ))
                    : []}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Media Tactic" className="mb-4">
              {getFieldDecorator("mt_list", {
                rules: [
                  { required: true, message: "Please select media tactic" },
                ],
                initialValue: props.mt_list,
              })(
                <Select
                  size="large"
                  mode="multiple"
                  placeholder="Select media tactic(s)"
                  style={{ width: "100%" }}
                  showSearch
                  loading={props.session.media_tactics.loading}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {props.session &&
                  props.session.media_tactics &&
                  props.session.media_tactics.data
                    ? props.session.media_tactics.data.map((item, i) => (
                        <Option value={item} key={i}>
                          {item}
                        </Option>
                      ))
                    : []}
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
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
      </Form>
    </>
  );
});

export default StepOne;
