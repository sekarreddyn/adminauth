import React from "react";
import { Form, Button, Input, Row, Col, Divider } from "antd";

const { TextArea } = Input;

const StepThree = Form.create({
  name: "step_three",
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
        <Col span={24}>
          <Form.Item label="Scenario Title" className="mb-4">
            {getFieldDecorator("session_title", {
              rules: [
                { required: true, message: "Please enter scenario title" },
              ],
              initialValue: props.session_title,
            })(<Input size="large" placeholder="Scenario title" />)}
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Scenario Description" className="mb-4">
            {getFieldDecorator("session_description", {
              rules: [
                {
                  required: false,
                  message: "Please enter scenario description",
                },
              ],
              initialValue: props.session_description,
            })(
              <TextArea
                rows={6}
                size="large"
                placeholder="Scenario description"
              />
            )}
          </Form.Item>
        </Col>
      </Row>
      <Divider></Divider>
      <Form.Item className="text-center">
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
          Save
        </Button>
      </Form.Item>
    </Form>
  );
});

export default StepThree;
