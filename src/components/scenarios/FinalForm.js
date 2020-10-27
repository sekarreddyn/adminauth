import React, { Component } from "react";
import { Card, Row, Col, Steps, Breadcrumb, Divider } from "antd";
import StepOne from "./FormStepOne";
import StepTwo from "./FormStepTwo";
import StepThree from "./FormStepThree";
import { sessionActions, scenarioActions } from "../../actions";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";
const { Step } = Steps;
const dateFormat = "YYYY-MM-DD";
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
      session_id: null,
      scenario_sd: null,
      scenario_ed: null,
      is_max_vol: true,
      is_agg_constraint: true,
      bu_threshold_lower: -10,
      bu_threshold_upper: 10,
      country_threshold_lower: -10,
      country_threshold_upper: 10,
      brand_threshold_lower: -10,
      brand_threshold_upper: 10,
      media_threshold_lower: -10,
      media_threshold_upper: 10,
      grp_threshold_lower: -10,
      grp_threshold_upper: 10,
      yoy_change: 10,
    },
    step_three_fields: {
      scenario_title: undefined,
      scenario_description: undefined,
    },
    step_final_fields: {},
    show_final_values: false,
    baseScenario: [],
    aggregatedData: [
      {
        name: "Group Threshold",
        id: "grp_threshold",
        lower_limit: -10,
        upper_limit: 10,
      },
      {
        name: "BU Threshold",
        id: "bu_threshold",
        lower_limit: -10,
        upper_limit: 10,
      },
      {
        name: "Country Threshold",
        lower_limit: -10,
        id: "country_threshold",
        upper_limit: 10,
      },
      {
        name: "Brand Threshold",
        id: "brand_threshold",
        lower_limit: -10,
        upper_limit: 10,
      },
      {
        name: "Media Tactic",
        id: "media_threshold",
        lower_limit: -10,
        upper_limit: 10,
      },
    ],
    granular_data: [],
  };

  componentDidMount() {
    document.body.classList.remove("login");
    if (this.getSessionId() && !this.getScenarioId()) {
      this.getSession();
      this.getSessionKpi(this.getSessionId());
      this.getBaseScenario(this.getSessionId());
    }
    if (this.getScenarioId() && this.getSessionId()) {
      this.getSession();
      this.getScenario();
      this.getScenarioKpi(this.getSessionId());
      // this.getBaseScenario(this.getSessionId());
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
            ...this.state.step_two_fields,
            scenario_sd: moment(
              this.props.session.get_session.data.start_date,
              dateFormat
            ),
            scenario_ed: moment(
              this.props.session.get_session.data.end_date,
              dateFormat
            ),
            session_id: this.props.session.get_session.data.session_id,
          },
        });
      }
    }
    if (
      this.props.scenario.base_scenario.data !==
        prevProps.scenario.base_scenario.data &&
      !this.getScenarioId()
    ) {
      if (this.props.scenario.base_scenario.data) {
        this.setState({
          baseScenario: this.props.scenario.base_scenario.data,
        });
      }
    }
    if (
      this.props.scenario.scenario.data !== prevProps.scenario.scenario.data &&
      this.getScenarioId()
    ) {
      if (this.props.scenario.scenario.data) {
        this.setState({
          step_three_fields: {
            scenario_title: this.props.scenario.scenario.data.scenario_title,
            scenario_description: this.props.scenario.scenario.data
              .scenario_description,
          },

          baseScenario: this.props.scenario.scenario.data.scenario_data,

          aggregatedData: [
            {
              name: "Group Threshold",
              id: "grp_threshold",
              lower_limit: this.props.scenario.scenario.data
                .grp_threshold_lower,
              upper_limit: this.props.scenario.scenario.data
                .grp_threshold_upper,
            },
            {
              name: "BU Threshold",
              id: "bu_threshold",
              lower_limit: this.props.scenario.scenario.data.bu_threshold_lower,
              upper_limit: this.props.scenario.scenario.data.bu_threshold_upper,
            },
            {
              name: "Country Threshold",
              lower_limit: this.props.scenario.scenario.data
                .country_threshold_lower,
              id: "country_threshold",
              upper_limit: this.props.scenario.scenario.data
                .country_threshold_upper,
            },
            {
              name: "Brand Threshold",
              id: "brand_threshold",
              lower_limit: this.props.scenario.scenario.data
                .brand_threshold_upper,
              upper_limit: this.props.scenario.scenario.data
                .brand_threshold_lower,
            },
            {
              name: "Media Threshold",
              id: "media_threshold",
              lower_limit: this.props.scenario.scenario.data
                .media_threshold_lower,
              upper_limit: this.props.scenario.scenario.data
                .media_threshold_upper,
            },
          ],

          step_two_fields: {
            ...this.state.step_two_fields,
            is_max_vol: this.props.scenario.scenario.data.is_max_vol,
            is_agg_constraint: this.props.scenario.scenario.data
              .is_agg_constraint,
            yoy_change: this.props.scenario.scenario.data.yoy_change,
          },

          granular_data: this.props.scenario.scenario.data.granular_bounds,
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

  getScenarioKpi = () => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.getScenarioKpi(this.getScenarioId()));
  };
  getBaseScenario = () => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.getBaseScenario(this.getSessionId()));
  };
  getScenario = () => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.getScenario(this.getScenarioId()));
  };

  createScenario = (data) => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.createScenario(data));
  };

  updateScenario = (data) => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.updateScenario(data, this.getScenarioId()));
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
  getScenarioId = () => {
    if (this.props.match.params.scenarioId)
      return this.props.match.params.scenarioId;
  };
  handleConfirmButton = (values) => {
    const {
      step_three_fields,
      step_two_fields,
      baseScenario,
      granularData,
    } = this.state;
    this.setState(
      {
        step_three_fields: {
          ...step_three_fields,
          ...values,
        },
        step_final_fields: {
          scenario_data: baseScenario,
          ...values,
          ...step_two_fields,
          scenario_sd: moment(step_two_fields.scenario_sd).format(dateFormat),
          scenario_ed: moment(step_two_fields.scenario_ed).format(dateFormat),
          granular_bounds: granularData,
        },
      },

      () =>
        this.getScenarioId()
          ? this.updateScenario(this.state.step_final_fields)
          : this.createScenario(this.state.step_final_fields)
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

  getStepOneValue = (values) => {
    this.setState({
      baseScenario: values,
    });
  };

  getStepTwoValue = (
    values,
    aggregated_values,
    aggregatedData,
    granularData
  ) => {
    const { step_two_fields } = this.state;
    this.setState({
      ...this.state,
      step_two_fields: {
        ...step_two_fields,
        ...values,
        ...aggregated_values,
      },
      aggregatedData,
      granularData,
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
      baseScenario,
      aggregatedData,
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
            baseScenario={baseScenario}
            ScenarioId={this.getScenarioId()}
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
            aggregatedData={aggregatedData}
            baseScenario={baseScenario}
            ScenarioId={this.getScenarioId()}
            granular_data={this.state.granular_data}
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
            handleConfirmButton={this.handleConfirmButton}
            ScenarioId={this.getScenarioId()}
          />
        ),
      },
    ];
    return (
      <>
        <Steps current={step} direction="horizontal">
          {steps.map((item) => (
            <Step
              key={item.title}
              title={item.title}
              description={item.description}
              className="pb-4 mt-4"
            />
          ))}
        </Steps>

        <Divider></Divider>

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
          <Card
            title={this.getScenarioId() ? "Edit Scenario" : "Create Scenario"}
          >
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
  scenario: state.scenario,
});

export default connect(mapStateToProps)(FinalForm);
