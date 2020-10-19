import React from "react";
import { Form, Button, DatePicker, Row, Col, Divider } from "antd";
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
      <Row gutter={30}>
        <Col span={8}>
          <Form.Item label="Start Date" className="mb-3">
            {getFieldDecorator("start_date", {
              rules: [{ required: true, message: "Please select start date" }],
              initialValue: props.start_date,
            })(
              <DatePicker
                size="large"
                format="DD-MM-YYYY"
                style={{ width: "100%" }}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="End Date" className="mb-3">
            {getFieldDecorator("end_date", {
              rules: [{ required: true, message: "Please select end date" }],
              initialValue: props.end_date,
            })(
              <DatePicker
                size="large"
                style={{ width: "100%" }}
                format="DD-MM-YYYY"
              />
            )}
          </Form.Item>
        </Col>
      </Row>
      <Divider></Divider>
      <Form.Item className="text-center mb-0">
        <Button
          size="large"
          style={{ width: 160 }}
          type="default"
          onClick={storeValues}
        >
          Back
        </Button>
        <Button
          size="large"
          className="ml-3"
          style={{ width: 160 }}
          type="primary"
          onClick={validateInput}
        >
          Next
        </Button>
      </Form.Item>
    </Form>
  );
});

export default StepTwo;
