import React, { Component } from "react";
import { Card, Row, Col, Steps, Breadcrumb } from "antd";
import StepOne from "./FormStepOne";
import StepTwo from "./FormStepTwo";
import StepThree from "./FormStepThree";
import StepFinal from "./FormStepFinal";
import { sessionActions, scenarioActions } from "../../actions";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";
import swal from "sweetalert";

const { Step } = Steps;
const dateFormat = "DD-MM-YYYY";
class FinalForm extends Component {
  state = {
    step: 0,
    step_one_fields: {
      bu_list: [],
      group_list: [],
      country_list: [],
      mt_list: [],
      brand_list: [],
    },
    step_two_fields: {
      start_date: undefined,
      end_date: undefined,
    },
    step_three_fields: {
      session_title: undefined,
      session_description: undefined,
    },
    step_final_fields: {
      bu_list: [],
      group_list: [],
      country_list: [],
      mt_list: [],
      brand_list: [],
      start_date: null,
      end_date: null,
      session_title: undefined,
      session_description: undefined,
    },
    show_final_values: false,
  };

  componentDidMount() {
    document.body.classList.remove("login");

    if (this.getSessionId()) {
      this.getSession();

      this.getSessionKpi(this.getSessionId());
      this.getBaseScenario(this.getSessionId());
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.session.get_session.data !== prevProps.session.get_session.data
    ) {
      if (this.props.session.get_session.data) {
      }
    }
    if (
      this.props.session.get_session.data !== prevProps.session.get_session.data
    ) {
      if (this.props.session.get_session.data) {
        this.setState({
          step_two_fields: {
            start_date: moment(
              this.props.session.get_session.data.start_date,
              dateFormat
            ),
            end_date: moment(
              this.props.session.get_session.data.end_date,
              dateFormat
            ),
          },
        });
      }
    }
  }

  toTimestamp = (strDate) => {
    var d = new Date(strDate);
    var n = d.getTime();

    return n;
  };
  getSession = () => {
    const { dispatch } = this.props;
    dispatch(sessionActions.getSession(this.getSessionId()));
  };
  getSessionKpi = () => {
    const { dispatch } = this.props;
    dispatch(sessionActions.getSessionKpi(this.getSessionId()));
  };

  getBaseScenario = () => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.getBaseScenario(this.getSessionId()));
  };

  handleNextButton = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleBackButton = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  getSessionId = () => {
    if (this.props.match.params.sessionId)
      return this.props.match.params.sessionId;
  };
  handleConfirmButton = (values) => {
    const { step_final_fields } = this.state;
    this.setState(
      {
        step_final_fields: {
          ...step_final_fields,
          ...values,
        },
      },
      () =>
        this.setState({ show_final_values: true }, () =>
          this.getSessionId()
            ? this.updateSession(this.state.step_final_fields)
            : this.createSession(this.state.step_final_fields)
        )
    );
  };

  createSession = (data) => {
    const { dispatch } = this.props;
    dispatch(sessionActions.createSession(data));
  };
  updateSession = (data) => {
    const { dispatch } = this.props;
    dispatch(sessionActions.updateSession(this.getSessionId(), data));
  };
  getFinalStepValue = (values) => {
    const { step_final_fields } = this.state;
    this.setState({
      step_final_fields: {
        ...step_final_fields,
        ...values,
      },
    });
  };

  getStepOneValue = (values) => {
    const { step_one_fields } = this.state;
    console.log(values);
    this.setState({
      step_one_fields: {
        ...step_one_fields,
        ...values,
      },
    });
  };

  getStepTwoValue = (values) => {
    const { step_two_fields } = this.state;
    this.setState({
      step_two_fields: {
        ...step_two_fields,
        ...values,
      },
    });
  };
  getStepThreeValue = (values) => {
    const { step_three_fields } = this.state;
    this.setState({
      step_three_fields: {
        ...step_three_fields,
        ...values,
      },
    });
  };
  renderStepForm = (current) => {
    const {
      step,
      step_one_fields,
      step_two_fields,
      step_three_fields,
      step_final_fields,
    } = this.state;

    const steps = [
      {
        title: "Step 1",
        description: "Scenario Data",
        content: (
          <StepOne
            {...step_one_fields}
            handleNextButton={this.handleNextButton}
            submittedValues={this.getStepOneValue}
            session={this.props.session}
          />
        ),
      },
      {
        title: "Step 2",
        description: "Time Frame",
        content: (
          <StepTwo
            {...step_two_fields}
            handleNextButton={this.handleNextButton}
            handleBackButton={this.handleBackButton}
            submittedValues={this.getStepTwoValue}
          />
        ),
      },

      {
        title: "Step 3",
        description: "Scenario Setup",
        content: (
          <StepThree
            {...step_three_fields}
            handleNextButton={this.handleNextButton}
            handleBackButton={this.handleBackButton}
            submittedValues={this.getStepThreeValue}
          />
        ),
      },
      // {
      //   title: "Step 3",
      //   description: "Scenario Title",
      //   content: (
      //     <StepFinal
      //       {...step_final_fields}
      //       step_one_fields={step_one_fields}
      //       step_two_fields={step_two_fields}
      //       step_three_fields={step_three_fields}
      //       handleConfirmButton={this.handleConfirmButton}
      //       handleBackButton={this.handleBackButton}
      //       submittedValues={this.getFinalStepValue}
      //       session={this.props.session}
      //       id={this.getSessionId()}
      //     />
      //   ),
      // },
    ];
    return (
      <>
        <Steps current={step} direction="horizontal">
          {steps.map((item) => (
            <Step
              key={item.title}
              title={item.title}
              description={item.description}
              className="pb-4"
            />
          ))}
        </Steps>

        <div className="steps-content">
          <div className="steps-content">{steps[step].content}</div>
        </div>
      </>
    );
  };

  render() {
    const { step } = this.state;
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to={`/scenarios-list/${this.getSessionId()}`}>
              Scenarios
            </NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Scenario Detail</Breadcrumb.Item>
        </Breadcrumb>
        <div className="outer-wrapper">
          <Card>
            <Row className="d-flex justify-content-center">
              <Col span={24}>{this.renderStepForm(step)}</Col>
            </Row>
          </Card>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(FinalForm);
