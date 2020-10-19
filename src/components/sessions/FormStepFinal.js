import React from "react";
import { Form, Button, Divider, Row, Col } from "antd";
import moment from "moment";
const dateFormat = "YYYY-MM-DD";
const StepFinal = Form.create({
  name: "step_final",
})((props) => {
  const { validateFields, getFieldsValue } = props.form;
  const validateInput = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        let formatDate = {
          start_date: moment(props.step_two_fields.start_date).format(
            dateFormat
          ),
          end_date: moment(props.step_two_fields.start_date).format(dateFormat),
        };

        props.handleConfirmButton({
          ...props.step_one_fields,
          ...formatDate,
          ...props.step_three_fields,
        });
      }
    });
  };
  const storeValues = () => {
    const values = getFieldsValue();
    props.submittedValues(values);
    props.handleBackButton();
  };
  return (
    <Form onSubmit={validateInput} className="preview-form">
      <Divider></Divider>
      <h4 className="font-weight-bold text-primary mb-4 mt-6">
        1. Session Setup
      </h4>

      <Row gutter={30}>
        <Col span={8}>
          <div className="preview">
            <span className="title">Group</span>
            <span className="value">
              {props.step_one_fields.group_list.toString()}
            </span>
          </div>
        </Col>
        <Col span={8}>
          <div className="preview">
            <span className="title">Business Unit</span>
            <span className="value">
              {props.step_one_fields.bu_list.toString()}
            </span>
          </div>
        </Col>
        <Col span={8}>
          <div className="preview">
            <span className="title">Country</span>
            <span className="value">
              {props.step_one_fields.country_list.toString()}
            </span>
          </div>
        </Col>
      </Row>
      <Row gutter={30}>
        <Col span={8}>
          <div className="preview">
            <span className="title">Brand</span>
            <span className="value">
              {props.step_one_fields.brand_list.toString()}
            </span>
          </div>
        </Col>
        <Col span={8}>
          <div className="preview">
            <span className="title">Media Tactic</span>
            <span className="value">
              {props.step_one_fields.mt_list.toString()}
            </span>
          </div>
        </Col>
      </Row>

      <Divider></Divider>

      <h4 className="font-weight-bold text-primary mb-4">2. Time Frame</h4>
      <Row gutter={30}>
        <Col span={8}>
          <div className="preview">
            <span className="title">Start Date</span>
            <span className="value">
              {moment(props.step_two_fields.start_date).format("DD-MM-YYYY")}
            </span>
          </div>
        </Col>
        <Col span={8}>
          <div className="preview">
            <span className="title">End Date</span>
            <span className="value">
              {moment(props.step_two_fields.end_date).format("DD-MM-YYYY")}
            </span>
          </div>
        </Col>
      </Row>

      <Divider></Divider>

      <h4 className="font-weight-bold text-primary mb-4">3. Session Title</h4>
      <Row gutter={30}>
        <Col span={24}>
          <h4 className="font-weight-bold text-dark">
            {props.step_three_fields.session_title}
          </h4>
          <p>{props.step_three_fields.session_description}</p>
        </Col>
      </Row>
      <Divider></Divider>

      <Form.Item className="text-center mb-0">
        <Button size="large" type="default" onClick={storeValues}>
          Back
        </Button>
        <Button
          size="large"
          className="ml-3"
          type="primary"
          htmlType="submit"
          loading={
            (props.session &&
              props.session.create_session &&
              props.session.create_session.loading) ||
            (props.session &&
              props.session.update_session &&
              props.session.update_session.loading)
          }
        >
          {props.id ? " Update Session " : "Save Session"}
        </Button>
      </Form.Item>
    </Form>
  );
});

export default StepFinal;
