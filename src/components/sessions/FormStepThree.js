import React from 'react'
import { Form, Button, Input, Row, Col, Divider } from 'antd';

const { TextArea } = Input;

const StepThree = Form.create({
  name: 'step_three'
})(props => {
  const { getFieldDecorator, validateFields, getFieldsValue } = props.form;
  const validateInput = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        props.submittedValues(values);
        props.handleNextButton();
      }
    });
  }
  const storeValues = () => {
    const values = getFieldsValue();
    props.submittedValues(values);
    props.handleBackButton();
  }
  return (
    <Form onSubmit={validateInput}>
      <Divider></Divider>
      <Row gutter={30}>
        <Col span={24}>
          <Form.Item label="Session Title" className="mb-4">
            {getFieldDecorator('f_one_s_two', {
              rules: [{ required: false, message: 'Cannot be empty!' }],
              initialValue: props.f_one_s_two
            })(<Input size="large" placeholder="Please enter session title" />)}
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Session Description" className="mb-4">
            {getFieldDecorator('f_one_s_two', {
              rules: [{ required: false, message: 'Cannot be empty!' }],
              initialValue: props.f_one_s_two
            })(<TextArea rows={6} size="large" placeholder="Please enter session description" />)}
          </Form.Item>
        </Col>
      </Row>
      <Divider></Divider>
      <Form.Item className="text-center">
        <Button size="large" style={{ width: 160 }} type="default" onClick={storeValues} >Back</Button>
        <Button size="large" className="ml-3" style={{ width: 160 }} type="primary" onClick={validateInput}>Next</Button>
      </Form.Item>
    </Form>
  );
});

export default StepThree;