import React, { Component } from "react";
import { Form, Button, Row, Col, Select, Divider, Checkbox } from "antd";
import { connect } from "react-redux";
import { sessionActions } from "../../actions";
const { Option } = Select;

class FormStepOne extends Component {
  state = {
    checked: false,
    disabled: false,
    is_group_list_checked: false,
    is_bu_list_checked: false,
    is_country_list_checked: false,
    is_brand_list_checked: false,
    is_mt_list_checked: false,
  };

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
  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
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

  onCheckboxChange = (e, type) => {
    const { checked } = e.target;
    if (type === "group") {
      this.setState({
        is_group_list_checked: checked,
      });
      this.props.form.setFieldsValue({
        group_list: checked ? this.props.session.groups.data : [],
      });

      let data = {
        group_list: this.props.form.getFieldValue("group_list").length
          ? this.props.form.getFieldValue("group_list")
          : null,
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
    }
    if (type === "business") {
      this.setState({
        is_bu_list_checked: checked,
      });

      this.props.form.setFieldsValue({
        bu_list: checked ? this.props.session.business_units.data : [],
      });

      let data = {
        bu_list: this.props.form.getFieldValue("bu_list").length
          ? this.props.form.getFieldValue("bu_list")
          : null,
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
    }
    if (type === "country") {
      this.setState({
        is_country_list_checked: checked,
      });

      this.props.form.setFieldsValue({
        country_list: checked ? this.props.session.countries.data : [],
      });

      let data = {
        country_list: this.props.form.getFieldValue("country_list").length
          ? this.props.form.getFieldValue("country_list")
          : null,
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
    }
    if (type === "brand") {
      this.setState({
        is_brand_list_checked: checked,
      });

      this.props.form.setFieldsValue({
        brand_list: checked ? this.props.session.brands.data : [],
      });

      let data = {
        brand_list: this.props.form.getFieldValue("brand_list").length
          ? this.props.form.getFieldValue("brand_list")
          : null,
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
    }
    if (type === "media") {
      this.setState({
        is_mt_list_checked: checked,
      });

      this.props.form.setFieldsValue({
        mt_list: checked ? this.props.session.media_tactics.data : [],
      });
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <>
          <Form onSubmit={this.validateInput} layout="vertical">
            <Divider></Divider>
            <Row gutter={30}>
              <Col span={24}>
                <Form.Item
                  label={
                    <>
                      Group
                      <div className="float-right text-dark">
                        {" "}
                        <Checkbox
                          checked={this.state.is_group_list_checked}
                          disabled={this.props.session.groups.loading}
                          onChange={(e) => this.onCheckboxChange(e, "group")}
                          style={{ color: "rgba(0, 0, 0, 0.85)" }}
                        >
                          Select all
                        </Checkbox>
                      </div>
                    </>
                  }
                  className="mb-3"
                >
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
                        option.props.children
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
                <Form.Item
                  label={
                    <>
                      Business Unit
                      <div className="float-right text-dark">
                        {" "}
                        <Checkbox
                          checked={this.state.is_bu_list_checked}
                          disabled={
                            this.props.session.business_units.loading ||
                            this.props.session.groups.data === null
                          }
                          onChange={(e) => this.onCheckboxChange(e, "business")}
                          style={{ color: "rgba(0, 0, 0, 0.85)" }}
                        >
                          Select all
                        </Checkbox>
                      </div>
                    </>
                  }
                  className="mb-3"
                >
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
                        option.props.children
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
                <Form.Item
                  label={
                    <>
                      Country
                      <div className="float-right text-dark">
                        {" "}
                        <Checkbox
                          checked={this.state.is_country_list_checked}
                          disabled={this.props.session.countries.loading}
                          onChange={(e) => this.onCheckboxChange(e, "country")}
                          style={{ color: "rgba(0, 0, 0, 0.85)" }}
                        >
                          Select all
                        </Checkbox>
                      </div>
                    </>
                  }
                  className="mb-3"
                >
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
                        option.props.children
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
                <Form.Item
                  label={
                    <>
                      Brand
                      <div className="float-right text-dark">
                        {" "}
                        <Checkbox
                          checked={this.state.is_brand_list_checked}
                          disabled={this.props.session.brands.loading}
                          onChange={(e) => this.onCheckboxChange(e, "brand")}
                          style={{ color: "rgba(0, 0, 0, 0.85)" }}
                        >
                          Select all
                        </Checkbox>
                      </div>
                    </>
                  }
                  className="mb-3"
                >
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
                        option.props.children
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
                <Form.Item
                  label={
                    <>
                      Media Tactic
                      <div className="float-right text-dark">
                        {" "}
                        <Checkbox
                          checked={this.state.is_mt_list_checked}
                          disabled={this.props.session.media_tactics.loading}
                          onChange={(e) => this.onCheckboxChange(e, "media")}
                          style={{ color: "rgba(0, 0, 0, 0.85)" }}
                        >
                          Select all
                        </Checkbox>
                      </div>
                    </>
                  }
                  className="mb-3"
                >
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
                        option.props.children
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
