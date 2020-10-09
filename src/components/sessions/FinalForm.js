import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import StepOne from "./FormStepOne";
import StepTwo from "./FormStepTwo";
import StepThree from "./FormStepThree";
import StepFinal from "./FormStepFinal";
import { sessionActions } from "../../actions";
import { connect } from "react-redux";
class FinalForm extends Component {
  state = {
    step: 1,
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
      start_date: undefined,
      end_date: undefined,
      session_title: undefined,
      session_description: undefined,
    },
    show_final_values: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(sessionActions.getBrands());
    dispatch(sessionActions.getBusinessUnits());
    dispatch(sessionActions.getCountries());
    dispatch(sessionActions.getGroups());
    dispatch(sessionActions.getMediaTactics());
  }
  handleNextButton = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleBackButton = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
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
          this.createSession(this.state.step_final_fields)
        )
    );
  };
  createSession = (data) => {
    const { dispatch } = this.props;
    dispatch(sessionActions.createSession(data));
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

  render() {
    const {
      step,
      step_one_fields,
      step_two_fields,
      step_three_fields,
      step_final_fields,
    } = this.state;
    if (step === 1) {
      return (
        <div className="outer-wrapper">
          <Card>
            <Row className="d-flex justify-content-center">
              <Col span={18} className="mx-auto">
                {<h1> STEP 1 </h1>}
                <StepOne
                  {...step_one_fields}
                  handleNextButton={this.handleNextButton}
                  submittedValues={this.getStepOneValue}
                  session={this.props.session}
                />
              </Col>
            </Row>
          </Card>
        </div>
      );
    } else if (step === 2) {
      return (
        <div className="outer-wrapper">
          <Card>
            <Row className="d-flex justify-content-center">
              <Col span={18} className="mx-auto">
                {<h1> STEP 2 </h1>}
                <StepTwo
                  {...step_two_fields}
                  handleNextButton={this.handleNextButton}
                  handleBackButton={this.handleBackButton}
                  submittedValues={this.getStepTwoValue}
                />
              </Col>
            </Row>
          </Card>
        </div>
      );
    } else if (step === 3) {
      return (
        <div className="outer-wrapper">
          <Card>
            <Row className="d-flex justify-content-center">
              <Col span={18} className="mx-auto">
                {<h1> STEP 3 </h1>}
                <StepThree
                  {...step_three_fields}
                  handleNextButton={this.handleNextButton}
                  handleBackButton={this.handleBackButton}
                  submittedValues={this.getStepThreeValue}
                />
              </Col>
            </Row>
          </Card>
        </div>
      );
    } else {
      return (
        <div className="outer-wrapper">
          <Card>
            <Row className="d-flex justify-content-center">
              <Col span={18}>
                {<h1> FINAL STEP </h1>}
                <StepFinal
                  {...step_final_fields}
                  step_one_fields={step_one_fields}
                  step_two_fields={step_two_fields}
                  step_three_fields={step_three_fields}
                  handleConfirmButton={this.handleConfirmButton}
                  handleBackButton={this.handleBackButton}
                  submittedValues={this.getFinalStepValue}
                  session={this.props.session}
                />
              </Col>
            </Row>
          </Card>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(FinalForm);
