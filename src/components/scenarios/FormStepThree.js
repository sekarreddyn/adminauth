import React, { Component } from "react";
import { Form, Button, Input, Row, Col, Divider } from "antd";
import { connect } from "react-redux";
const { TextArea } = Input;

class StepThree extends Component {
  validateInput = (e) => {
    const { validateFields } = this.props.form;
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        this.props.handleConfirmButton(values);
      }
    });
  };
  storeValues = () => {
    const { getFieldsValue } = this.props.form;
    const values = getFieldsValue();
    this.props.submittedValues(values);
    this.props.handleBackButton();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.validateInput}>
        <Row gutter={30}>
          <Col span={24}>
            <Form.Item label="Scenario Title" className="mb-4">
              {getFieldDecorator("scenario_title", {
                rules: [
                  { required: true, message: "Please enter scenario title" },
                ],
                initialValue: this.props.scenario_title,
              })(<Input size="large" placeholder="Scenario title" />)}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Scenario Description" className="mb-4">
              {getFieldDecorator("scenario_description", {
                rules: [
                  {
                    required: false,
                    message: "Please enter scenario description",
                  },
                ],
                initialValue: this.props.scenario_description,
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
            onClick={this.storeValues}
          >
            Back
          </Button>
          <Button
            size="large"
            className="ml-3"
            style={{ width: 160 }}
            type="primary"
            onClick={this.validateInput}
            loading={this.props.scenario.create_scenario.loading}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedFormThreeOne = Form.create({ name: "step_there" })(StepThree);

const mapStateToProps = (state) => ({
  session: state.session,
  scenario: state.scenario,
});

export default connect(mapStateToProps)(WrappedFormThreeOne);
