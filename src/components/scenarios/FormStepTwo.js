import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  Button,
  Row,
  Col,
  Divider,
  Icon,
  Radio,
  DatePicker,
  Dropdown,
  Menu,
  InputNumber,
} from "antd";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { scenarioActions } from "../../actions";

class FormStepTwo extends Component {
  constructor() {
    super();
    this.state = {
      aggregated_data: [],
      granular_data: [
        {
          shipments: 3154918,
          spend: 7000,
          media_tactic: "TV",
          country: "Indonesia",
          group: "Asia Pacific",
          saturation_parameter: 0.82,
          modified_on: "2020-10-15",
          media_elasticity: 0.078,
          profit: -5849,
          roi_b: 0.1644132385,
          uplift: 822,
          cost_per_point: 346,
          grp: 20,
          brand: "Coca-Cola",
          business_unit: "ASEAN",
          factor: 1200,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: 1.4,
          spend_share: 0.0008143351,
          gp: 1150,
          spend_lower_limit: 4900,
          spend_upper_limit: 14000,
        },
        {
          shipments: 109327989,
          spend: 1473000,
          media_tactic: "TV",
          country: "Philippines",
          group: "Asia Pacific",
          saturation_parameter: 0.82,
          modified_on: "2020-10-15",
          media_elasticity: 0.118,
          profit: 7260600,
          roi_b: 5.9291243697,
          uplift: 9704000,
          cost_per_point: 191,
          grp: 7712,
          brand: "Coca-Cola",
          business_unit: "ASEAN",
          factor: 1200,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: 0.9,
          spend_share: 0.1713593696,
          gp: 8733600,
          spend_lower_limit: 1031100,
          spend_upper_limit: 2946000,
        },
        {
          shipments: 125957399,
          spend: 5652000,
          media_tactic: "TV",
          country: "Thailand",
          group: "Asia Pacific",
          saturation_parameter: 0.82,
          modified_on: "2020-10-15",
          media_elasticity: 0.073,
          profit: 1986768,
          roi_b: 1.3515160182,
          uplift: 7638768,
          cost_per_point: 569,
          grp: 9933,
          brand: "Coca-Cola",
          business_unit: "ASEAN",
          factor: 1200,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: 1,
          spend_share: 0.657517418,
          gp: 7638768,
          spend_lower_limit: 3956400,
          spend_upper_limit: 11304000,
        },
        {
          shipments: 61708663,
          spend: 3608000,
          media_tactic: "TV",
          country: "Vietnam",
          group: "Asia Pacific",
          saturation_parameter: 0.82,
          modified_on: "2020-10-15",
          media_elasticity: 0.044,
          profit: -1502429,
          roi_b: 0.5835838861,
          uplift: 2105570,
          cost_per_point: 415,
          grp: 8693,
          brand: "Coca-Cola",
          business_unit: "ASEAN",
          factor: 1200,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: 1,
          spend_share: 0.4197315719,
          gp: 2105570,
          spend_lower_limit: 2525600,
          spend_upper_limit: 7216000,
        },
        {
          shipments: 704320370,
          spend: 31101000,
          media_tactic: "TV",
          country: "China",
          group: "Asia Pacific",
          saturation_parameter: 0.42,
          modified_on: "2020-10-15",
          media_elasticity: 0.162,
          profit: 31281629,
          roi_b: 2.0058078507,
          uplift: 41867536,
          cost_per_point: 11772,
          grp: 2641,
          brand: "Coca-Cola",
          business_unit: "Greater China and Korea",
          factor: 5200,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: 1.49,
          spend_share: 3.618090803,
          gp: 62382629,
          spend_lower_limit: 21770700,
          spend_upper_limit: 62202000,
        },
        {
          shipments: 73304821,
          spend: 7934000,
          media_tactic: "TV",
          country: "India",
          group: "Asia Pacific",
          saturation_parameter: 0.82,
          modified_on: "2020-10-15",
          media_elasticity: 0.275,
          profit: 1790553,
          roi_b: 1.2256810297,
          uplift: 9724553,
          cost_per_point: 2175,
          grp: 3647,
          brand: "Coca-Cola",
          business_unit: "India & Southwest Asia",
          factor: 1200,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: 1,
          spend_share: 0.9229906572,
          gp: 9724553,
          spend_lower_limit: 55538100,
          spend_upper_limit: 158681000,
        },
        {
          shipments: 123418096,
          spend: 18165000,
          media_tactic: "TV",
          country: "Japan",
          group: "Asia Pacific",
          saturation_parameter: 0.42,
          modified_on: "2020-10-15",
          media_elasticity: 0.164,
          profit: 27293059,
          roi_b: 2.5025080937,
          uplift: 10823347,
          cost_per_point: 4217,
          grp: 4307,
          brand: "Coca-Cola",
          business_unit: "Japan",
          factor: 5200,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: 4.2,
          spend_share: 2.1131995575,
          gp: 45458059,
          spend_lower_limit: 12715500,
          spend_upper_limit: 36330000,
        },
        {
          shipments: 114167173,
          spend: 5568000,
          media_tactic: "TV",
          country: "Australia",
          group: "Asia Pacific",
          saturation_parameter: 0.49,
          modified_on: "2020-10-15",
          media_elasticity: 0.107,
          profit: 25290423,
          roi_b: 5.5421020001,
          uplift: 8548039,
          cost_per_point: 680,
          grp: 8188,
          brand: "Coca-Cola",
          business_unit: "South Pacific",
          factor: 5200,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: 3.61,
          spend_share: 0.647745397,
          gp: 30858423,
          spend_lower_limit: 3897600,
          spend_upper_limit: 11136000,
        },
        {
          shipments: null,
          spend: 5568000,
          media_tactic: null,
          country: "Australia",
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 30858423,
          spend_lower_limit: 113600,
          spend_upper_limit: 1136000,
        },
        {
          shipments: null,
          spend: 31101000,
          media_tactic: null,
          country: "China",
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 62382629,
          spend_lower_limit: 6220200,
          spend_upper_limit: 62202000,
        },
        {
          shipments: null,
          spend: 7934000,
          media_tactic: null,
          country: "India",
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 9724553,
          spend_lower_limit: 1586800,
          spend_upper_limit: 15868000,
        },
        {
          shipments: null,
          spend: 7000,
          media_tactic: null,
          country: "Indonesia",
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 1150,
          spend_lower_limit: 1586800,
          spend_upper_limit: 15868000,
        },
        {
          shipments: null,
          spend: 18165000,
          media_tactic: null,
          country: "Japan",
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 45458059,
          spend_lower_limit: 3633000,
          spend_upper_limit: 36330000,
        },
        {
          shipments: null,
          spend: 1473000,
          media_tactic: null,
          country: "Philippines",
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 8733600,
          spend_lower_limit: 294600,
          spend_upper_limit: 2946000,
        },
        {
          shipments: null,
          spend: 5652000,
          media_tactic: null,
          country: "Thailand",
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 7638768,
          spend_lower_limit: 1130400,
          spend_upper_limit: 11304000,
        },
        {
          shipments: null,
          spend: 3608000,
          media_tactic: null,
          country: "Vietnam",
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 2105570,
          spend_lower_limit: 721600,
          spend_upper_limit: 7216000,
        },
        {
          shipments: null,
          spend: 73508000,
          media_tactic: null,
          country: null,
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: "Coca-Cola",
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 166902752,
          spend_lower_limit: 14701600,
          spend_upper_limit: 147016000,
        },
        {
          shipments: null,
          spend: 10740000,
          media_tactic: null,
          country: null,
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: "ASEAN",
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 18479088,
          spend_lower_limit: 5370000,
          spend_upper_limit: 21480000,
        },
        {
          shipments: null,
          spend: 31101000,
          media_tactic: null,
          country: null,
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: "Greater China and Korea",
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 62382629,
          spend_lower_limit: 15550500,
          spend_upper_limit: 62202000,
        },
        {
          shipments: null,
          spend: 7934000,
          media_tactic: null,
          country: null,
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: "India & Southwest Asia",
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 9724553,
          spend_lower_limit: 3967000,
          spend_upper_limit: 15868000,
        },
        {
          shipments: null,
          spend: 18165000,
          media_tactic: null,
          country: null,
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: "Japan",
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 45458059,
          spend_lower_limit: 98025100,
          spend_upper_limit: 36330000,
        },
        {
          shipments: null,
          spend: 5568000,
          media_tactic: null,
          country: null,
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: "South Pacific",
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 30858423,
          spend_lower_limit: 2784000,
          spend_upper_limit: 11136000,
        },
        {
          shipments: null,
          spend: 73508000,
          media_tactic: null,
          country: null,
          group: "Asia Pacific",
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 166902752,
          spend_lower_limit: 58806400,
          spend_upper_limit: 147016000,
        },
        {
          shipments: null,
          spend: 73508000,
          media_tactic: "TV",
          country: null,
          group: null,
          saturation_parameter: null,
          modified_on: "2020-10-15",
          media_elasticity: null,
          profit: null,
          roi_b: null,
          uplift: null,
          cost_per_point: null,
          grp: null,
          brand: null,
          business_unit: null,
          factor: null,
          session_id: "428eaf9f-978a-44b9-afe5-34a97ac928e6",
          gp_uc: null,
          spend_share: null,
          gp: 166902752,
          spend_lower_limit: 51455600,
          spend_upper_limit: 147016000,
        },
      ],
      is_agg_constraint: true,
    };
    this.renderEditable1 = this.renderEditable1.bind(this);
    this.renderEditable2 = this.renderEditable2.bind(this);
  }

  componentDidMount() {
    if (this.props.aggregatedData) {
      this.setState({
        aggregated_data: this.props.aggregatedData,
      });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
          bu_threshold_lower: this.state.aggregated_data.find(
            (x) => x.id === "bu_threshold"
          ).lower_limit,
          bu_threshold_upper: this.state.aggregated_data.find(
            (x) => x.id === "bu_threshold"
          ).upper_limit,
          country_threshold_lower: this.state.aggregated_data.find(
            (x) => x.id === "country_threshold"
          ).upper_limit,
          country_threshold_upper: this.state.aggregated_data.find(
            (x) => x.id === "country_threshold"
          ).upper_limit,
          brand_threshold_lower: this.state.aggregated_data.find(
            (x) => x.id === "brand_threshold"
          ).upper_limit,
          brand_threshold_upper: this.state.aggregated_data.find(
            (x) => x.id === "brand_threshold"
          ).upper_limit,
          media_threshold_lower: this.state.aggregated_data.find(
            (x) => x.id === "media_threshold"
          ).upper_limit,
          media_threshold_upper: this.state.aggregated_data.find(
            (x) => x.id === "media_threshold"
          ).upper_limit,
          grp_threshold_lower: this.state.aggregated_data.find(
            (x) => x.id === "grp_threshold"
          ).upper_limit,
          grp_threshold_upper: this.state.aggregated_data.find(
            (x) => x.id === "grp_threshold"
          ).upper_limit,
        };
        this.props.submittedValues(
          values,
          data,
          this.state.aggregated_data,
          this.state.granular_data
        );
        this.props.handleNextButton();
      }
    });
  };

  storeValues = () => {
    let data = {
      bu_threshold_lower: this.state.aggregated_data.find(
        (x) => x.id === "bu_threshold"
      ).lower_limit,
      bu_threshold_upper: this.state.aggregated_data.find(
        (x) => x.id === "bu_threshold"
      ).upper_limit,
      country_threshold_lower: this.state.aggregated_data.find(
        (x) => x.id === "country_threshold"
      ).upper_limit,
      country_threshold_upper: this.state.aggregated_data.find(
        (x) => x.id === "country_threshold"
      ).upper_limit,
      brand_threshold_lower: this.state.aggregated_data.find(
        (x) => x.id === "brand_threshold"
      ).upper_limit,
      brand_threshold_upper: this.state.aggregated_data.find(
        (x) => x.id === "brand_threshold"
      ).upper_limit,
      media_threshold_lower: this.state.aggregated_data.find(
        (x) => x.id === "media_threshold"
      ).upper_limit,
      media_threshold_upper: this.state.aggregated_data.find(
        (x) => x.id === "media_threshold"
      ).upper_limit,
      grp_threshold_lower: this.state.aggregated_data.find(
        (x) => x.id === "grp_threshold"
      ).upper_limit,
      grp_threshold_upper: this.state.aggregated_data.find(
        (x) => x.id === "grp_threshold"
      ).upper_limit,
    };

    const { getFieldsValue } = this.props.form;
    const values = getFieldsValue();
    this.props.submittedValues(
      values,
      data,
      this.state.aggregated_data,
      this.state.granular_data
    );
    this.props.handleBackButton();
  };

  componentDidUpdate(prevProps) {
    if (this.props.aggregatedData !== this.state.aggregated_data) {
      if (this.props.aggregatedData) {
        this.setState({
          aggregated_data: this.props.aggregatedData,
        });
      }
    }
    if (
      this.props.scenario.granular_data.data !==
      prevProps.scenario.granular_data.data
    ) {
      if (this.props.scenario.granular_data.data) {
        this.setState({
          // granular_data: this.props.scenario.granular_data.data.map(
          //   (item, index) => {
          //     return {
          //       ...item,
          //       spend_lower_limit: null,
          //       spend_upper_limit: null,
          //     };
          //   }
          // ),
        });
      }
    }
  }

  renderEditable1(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          const aggregated_data = [...this.state.aggregated_data];
          aggregated_data[cellInfo.index][cellInfo.column.id] = parseInt(
            e.target.innerHTML
          );
          this.setState({ aggregated_data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.aggregated_data[cellInfo.index][
            cellInfo.column.id
          ],
        }}
      />
    );
  }
  renderEditable2(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          const granular_data = [...this.state.granular_data];
          granular_data[cellInfo.index][cellInfo.column.id] = parseInt(
            e.target.innerHTML
          );
          this.setState({ granular_data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.granular_data[cellInfo.index][cellInfo.column.id],
        }}
      />
    );
  }
  onBudgetConstChange = (e) => {
    this.setState({
      is_agg_constraint: e.target.value,
    });
    if (!e.target.value) this.getGranularData(this.props.baseScenario);
  };

  getGranularData = (data) => {
    const { dispatch } = this.props;
    dispatch(scenarioActions.getGranularData({ mod_base_table: data }));
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <>
          <Form onSubmit={this.handleSubmit}>
            <Row gutter={30}>
              <Col span={8}>
                <Form.Item
                  className="mb-3 custom-radio moo"
                  label="Media Optimization Objective"
                >
                  {getFieldDecorator("is_max_vol", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.is_max_vol,
                  })(
                    <Radio.Group size="large">
                      <Radio.Button value={true}>Max Volume</Radio.Button>
                      <Radio.Button value={false}>Max Profit</Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Start Date" className="mb-3">
                  {getFieldDecorator("scenario_ed", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.scenario_sd,
                  })(
                    <DatePicker
                      size="large"
                      style={{ width: "100%" }}
                      format="YYYY-MM-DD"
                      disabled
                    />
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="End Date">
                  {getFieldDecorator("scenario_ed", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.scenario_ed,
                  })(
                    <DatePicker
                      size="large"
                      style={{ width: "100%" }}
                      format="YYYY-MM-DD"
                      disabled
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Divider></Divider>

            <Row gutter={30}>
              <Col span={8}>
                <Form.Item
                  className="mb-3 custom-radio ibc"
                  label="Input Budget Constraints"
                >
                  {getFieldDecorator("is_agg_constraint", {
                    rules: [{ required: false, message: "Cannot be empty!" }],
                    initialValue: this.props.is_agg_constraint,
                  })(
                    <Radio.Group
                      size="large"
                      onChange={this.onBudgetConstChange}
                    >
                      <Radio.Button value={true}>Aggregated</Radio.Button>
                      <Radio.Button value={false}>Granular</Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
            </Row>
            {this.state.is_agg_constraint === true && (
              <>
                <Row
                  gutter={[16, 16]}
                  className="d-flex align-items-center w-100"
                >
                  <Col span={12}>
                    <h3 className="mb-0 text-dark">Aggregated Data</h3>
                  </Col>
                  <Col span={12} className="ml-auto text-right">
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item className="py-2 border-bottom">
                            <Icon
                              type="edit"
                              style={{ fontSize: 16 }}
                              className="mr-2"
                            />{" "}
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
                        Actions <Icon type="caret-down" />
                      </Button>
                    </Dropdown>
                  </Col>
                </Row>
                <Row gutter={[16, 16]} className="d-flex pt-2">
                  <Col span={24} className="mt-3 ">
                    <ReactTable
                      data={this.state.aggregated_data}
                      columns={[
                        {
                          Header: "Group Threshold",
                          accessor: "name",
                          // Cell: this.renderEditable,
                        },
                        {
                          Header: "LOWER LIMIT",
                          accessor: "lower_limit",
                          Cell: this.renderEditable1,
                          className: "text-center",
                        },
                        {
                          Header: "UPPER LIMIT",
                          accessor: "upper_limit",
                          Cell: this.renderEditable1,
                          className: "text-center",
                        },
                      ]}
                      defaultPageSize={5}
                      className="-striped -highlight"
                      showPagination={false}
                      loading={this.props.scenario.base_scenario.loading}
                    />
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Form.Item label="YOY Spend Change" className="mb-3">
                      {getFieldDecorator("yoy_change", {
                        rules: [
                          {
                            required: true,
                            message: "Please enter yoy spend change",
                          },
                        ],
                        initialValue: this.props.yoy_change,
                      })(
                        <InputNumber
                          size="large"
                          placeholder="YOY Spend "
                          style={{ width: "100%" }}
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
            {this.state.is_agg_constraint === false && (
              <>
                <Row gutter={[16, 16]} className="pt-4">
                  <Col span={12}>
                    <h3 className="mb-0">Granular Data</h3>
                  </Col>
                  <Col span={12} className="ml-auto text-right">
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item className="py-2 border-bottom">
                            <Icon
                              type="edit"
                              style={{ fontSize: 16 }}
                              className="mr-2"
                            />{" "}
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
                        Actions <Icon type="caret-down" />
                      </Button>
                    </Dropdown>
                  </Col>
                </Row>
                <Row gutter={[16, 16]} className="d-flex pt-4">
                  <Col span={24} className="mt-3 ">
                    <ReactTable
                      data={this.state.granular_data}
                      columns={[
                        {
                          Header: "Group",
                          accessor: "group",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Bussiness unit",
                          accessor: "business_unit",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Country",
                          accessor: "country",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Brand",
                          accessor: "brand",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Media Tactics",
                          accessor: "media_tactic",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "GRP's",
                          accessor: "grp",
                          // Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Spend",
                          accessor: "spend",
                          Cell: this.renderEditable2,
                          className: "text-center",
                        },

                        {
                          Header: "Spend Lower Limit",
                          accessor: "spend_lower_limit",
                          Cell: this.renderEditable2,
                          className: "text-center",
                        },
                        {
                          Header: "Spend Upper Limit",
                          accessor: "spend_upper_limit",
                          Cell: this.renderEditable2,
                          className: "text-center",
                        },
                      ]}
                      defaultPageSize={10}
                      className="-striped -highlight"
                      showPagination={false}
                      loading={this.props.scenario.granular_data.loading}
                      pageSize={this.state.granular_data.length}
                    />
                  </Col>
                </Row>
              </>
            )}
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
                onClick={this.handleSubmit}
              >
                Next
              </Button>
            </Form.Item>
          </Form>
        </>
      </div>
    );
  }
}

const WrappedFormStepTwo = Form.create({ name: "step_two" })(FormStepTwo);

const mapStateToProps = (state) => ({
  session: state.session,
  scenario: state.scenario,
});

export default connect(mapStateToProps)(WrappedFormStepTwo);
