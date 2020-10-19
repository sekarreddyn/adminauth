import React, { Component } from "react";
import { Form, Button, Row, Col, Select, Divider } from "antd";
import { connect } from "react-redux";
import { sessionActions } from "../../actions";
const { Option } = Select;

class FormStepOne extends Component {
  state = {};

  validateInput = (e) => {
    const { validateFields } = this.props.form;
    e.preventDefault();

    validateFields((err, values) => {
      if (!err) {
        this.props.submittedValues(values);
        this.props.handleNextButton();
      }
    });
  };
  componentDidMount() {
    const { bu_list, country_list, mt_list, brand_list } = this.props;
    let data = {
      bu_list: bu_list.length ? bu_list : null,
      country_list: country_list.length ? country_list : null,
      mt_list: mt_list.length ? mt_list : null,
      brand_list: brand_list.length ? brand_list : null,
    };
    this.getGroups(data);
  }
  getGroups = (data) => {
    const { dispatch } = this.props;
    dispatch(sessionActions.getGroups(data));
  };

  getBusinessUnits = (data) => {
    const { dispatch } = this.props;
    dispatch(sessionActions.getBusinessUnits(data));
  };
  getCountries = (data) => {
    const { dispatch } = this.props;

    dispatch(sessionActions.getCountries(data));
  };
  getBrands = (data) => {
    const { dispatch } = this.props;
    dispatch(sessionActions.getBrands(data));
  };

  getMediaTactics = (data) => {
    const { dispatch } = this.props;
    dispatch(sessionActions.getMediaTactics(data));
  };

  onGroupChange = (e) => {
    let data = {
      group_list: e.length ? e : null,
      country_list: this.props.form.getFieldValue("country_list").length
        ? this.props.form.getFieldValue("country_list")
        : null,
      mt_list: this.props.form.getFieldValue("mt_list").length
        ? this.props.form.getFieldValue("mt_list")
        : null,
      brand_list: this.props.form.getFieldValue("brand_list").length
        ? this.props.form.getFieldValue("brand_list")
        : null,
    };

    this.getBusinessUnits(data);
  };
  onBusinessUnitsChange = (e) => {
    let data = {
      bu_list: e.length ? e : null,
      group_list: this.props.form.getFieldValue("group_list").length
        ? this.props.form.getFieldValue("group_list")
        : null,
      mt_list: this.props.form.getFieldValue("mt_list").length
        ? this.props.form.getFieldValue("mt_list")
        : null,
      brand_list: this.props.form.getFieldValue("brand_list").length
        ? this.props.form.getFieldValue("brand_list")
        : null,
    };

    this.getCountries(data);
  };
  onCountriesChange = (e) => {
    let data = {
      country_list: e.length ? e : null,
      group_list: this.props.form.getFieldValue("group_list").length
        ? this.props.form.getFieldValue("group_list")
        : null,
      mt_list: this.props.form.getFieldValue("mt_list").length
        ? this.props.form.getFieldValue("mt_list")
        : null,
      bu_list: this.props.form.getFieldValue("bu_list").length
        ? this.props.form.getFieldValue("bu_list")
        : null,
    };

    this.getBrands(data);
  };
  onBrandsChange = (e) => {
    let data = {
      brand_list: e.length ? e : null,
      country_list: this.props.form.getFieldValue("country_list").length
        ? this.props.form.getFieldValue("country_list")
        : null,
      bu_list: this.props.form.getFieldValue("bu_list").length
        ? this.props.form.getFieldValue("bu_list")
        : null,
      group_list: this.props.form.getFieldValue("group_list").length
        ? this.props.form.getFieldValue("group_list")
        : null,
    };

    this.getMediaTactics(data);
  };
  // onMtChange = (e) => {
  //   let data = {
  //     mt_list: e.length ? e : null,
  //     country_list: this.props.form.getFieldValue("country_list").length
  //       ? this.props.form.getFieldValue("country_list")
  //       : null,
  //     bu_list: this.props.form.getFieldValue("bu_list").length
  //       ? this.props.form.getFieldValue("bu_list")
  //       : null,
  //     group_list: this.props.form.getFieldValue("group_list").length
  //       ? this.props.form.getFieldValue("group_list")
  //       : null,
  //     brand_list: this.props.form.getFieldValue("brand_list").length
  //       ? this.props.form.getFieldValue("brand_list")
  //       : null,
  //   };

  //   // this.getMediaTactics(data);
  // };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <>
          <Form onSubmit={this.validateInput}>
            <Divider></Divider>
            <Row gutter={30}>
              <Col span={24}>
                <Form.Item label="Group" className="mb-3">
                  {getFieldDecorator("group_list", {
                    rules: [{ required: true, message: "Please select group" }],
                    initialValue: this.props.group_list,
                  })(
                    <Select
                      size="large"
                      mode="multiple"
                      placeholder="Select Group(s)"
                      style={{ width: "100%" }}
                      showSearch
                      loading={this.props.session.groups.loading}
                      //   disabled={this.props.session.groups.loading}
                      filterOption={(input, option) =>
                        option.this.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={this.onGroupChange}
                    >
                      {this.props.session &&
                      this.props.session.groups &&
                      this.props.session.groups.data
                        ? this.props.session.groups.data.map((item, i) => (
                            <Option value={item} key={i}>
                              {item}
                            </Option>
                          ))
                        : []}
                    </Select>
                  )}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Business Unit" className="mb-3">
                  {getFieldDecorator("bu_list", {
                    rules: [
                      {
                        required: true,
                        message: "Please select business unit",
                      },
                    ],
                    initialValue: this.props.bu_list,
                  })(
                    <Select
                      size="large"
                      mode="multiple"
                      placeholder="Select Business Unit(s)"
                      style={{ width: "100%" }}
                      showSearch
                      loading={this.props.session.business_units.loading}
                      filterOption={(input, option) =>
                        option.this.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={this.onBusinessUnitsChange}
                    >
                      {this.props.session &&
                      this.props.session.business_units &&
                      this.props.session.business_units.data
                        ? this.props.session.business_units.data.map(
                            (item, i) => (
                              <Option value={item} key={i}>
                                {item}
                              </Option>
                            )
                          )
                        : []}
                    </Select>
                  )}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Country" className="mb-3">
                  {getFieldDecorator("country_list", {
                    rules: [
                      { required: true, message: "Please select country" },
                    ],
                    initialValue: this.props.country_list,
                  })(
                    <Select
                      size="large"
                      mode="multiple"
                      placeholder="Select Country(s)"
                      style={{ width: "100%" }}
                      showSearch
                      loading={this.props.session.countries.loading}
                      filterOption={(input, option) =>
                        option.this.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={this.onCountriesChange}
                    >
                      {this.props.session &&
                      this.props.session.countries &&
                      this.props.session.countries.data
                        ? this.props.session.countries.data.map((item, i) => (
                            <Option value={item} key={i}>
                              {item}
                            </Option>
                          ))
                        : []}
                    </Select>
                  )}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Brand" className="mb-3">
                  {getFieldDecorator("brand_list", {
                    rules: [{ required: true, message: "Please select brand" }],
                    initialValue: this.props.brand_list,
                  })(
                    <Select
                      size="large"
                      mode="multiple"
                      placeholder="Select Brands(s)"
                      style={{ width: "100%" }}
                      showSearch
                      loading={this.props.session.brands.loading}
                      filterOption={(input, option) =>
                        option.this.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={this.onBrandsChange}
                    >
                      {this.props.session &&
                      this.props.session.brands &&
                      this.props.session.brands.data
                        ? this.props.session.brands.data.map((item, i) => (
                            <Option value={item} key={i}>
                              {item}
                            </Option>
                          ))
                        : []}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Media Tactic" className="mb-3">
                  {getFieldDecorator("mt_list", {
                    rules: [
                      { required: true, message: "Please select media tactic" },
                    ],
                    initialValue: this.props.mt_list,
                  })(
                    <Select
                      size="large"
                      mode="multiple"
                      placeholder="Select media tactic(s)"
                      style={{ width: "100%" }}
                      showSearch
                      loading={this.props.session.media_tactics.loading}
                      filterOption={(input, option) =>
                        option.this.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      // onChange={this.onMtChange}
                    >
                      {this.props.session &&
                      this.props.session.media_tactics &&
                      this.props.session.media_tactics.data
                        ? this.props.session.media_tactics.data.map(
                            (item, i) => (
                              <Option value={item} key={i}>
                                {item}
                              </Option>
                            )
                          )
                        : []}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Divider></Divider>
            <Form.Item className="text-center mb-0">
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
      </div>
    );
  }
}

const WrappedFormStepOne = Form.create({ name: "step_one" })(FormStepOne);

const mapStateToProps = (state) => ({
  session: state.session,
  scenario: state.scenario,
});

export default connect(mapStateToProps)(WrappedFormStepOne);
