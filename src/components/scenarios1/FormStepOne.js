import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Row, Col, Select, Divider, Icon } from "antd";
import ReactTable from "react-table";
import "react-table/react-table.css";
const { Option } = Select;

class FormStepOne extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.submittedValues(values);
        this.props.handleNextButton();
      }
    });
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.scenario.base_scenario.data !==
      prevProps.scenario.base_scenario.data
    ) {
      if (this.props.scenario.base_scenario.data) {
        this.setState({
          data: this.props.scenario.base_scenario.data,
        });
      }
    }
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id],
        }}
      />
    );
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { get_session_kpi, get_session } = this.props.session;
    const { data } = get_session_kpi;
    const {
      media_gross_profit,
      media_shipments,
      media_spend,
      media_volume,
    } = data;
    const { session_title, start_date, end_date } = get_session.data;

    return (
      <div>
        <>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <h4 className="session-title">
                {session_title}
                <span>
                  {start_date} - {end_date}
                </span>
              </h4>
            </Col>

            <Col span={4}>
              <h4 className="session-title">
                MEDIA SPEND
                <span>
                  <strong className="text-center">{media_spend}</strong>
                </span>
              </h4>
            </Col>
            <Col span={4}>
              <h4 className="session-title">
                MEDIA VOLUME
                <span>
                  <strong className="text-center"> {media_volume}</strong>
                </span>
              </h4>
            </Col>
            <Col span={6}>
              <h4 className="session-title">
                MEDIA GROSS PROFIT
                <span>
                  <strong className="text-center">{media_gross_profit}</strong>
                </span>
              </h4>
            </Col>
            <Col span={4}>
              <h4 className="session-title">
                SHIPMENTS
                <span>
                  <strong className="text-center">{media_shipments}</strong>
                </span>
              </h4>
            </Col>
          </Row>
          <Col span={24} className="mt-3 ">
            <h4 className="session-title mb-5">Scenario Data</h4>
            <ReactTable
              data={this.state.data}
              columns={[
                {
                  Header: "Group",
                  accessor: "group",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Bussiness unit",
                  accessor: "business_unit",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Country",
                  accessor: "country",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Brand",
                  accessor: "brand",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Media Tactics",
                  accessor: "media_tactic",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "GRP's",
                  accessor: "grp",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Spend",
                  accessor: "spend",
                  Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "CPP",
                  accessor: "cost_per_point",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "Shipments",
                  accessor: "shipments",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "GPUC",
                  accessor: "gp_uc",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
                {
                  Header: "CPP",
                  accessor: "cost_per_point",
                  className: "text-center",
                  // Cell: this.renderEditable,
                },
                {
                  Header: "GP",
                  accessor: "gp",
                  // Cell: this.renderEditable,
                  className: "text-center",
                },
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
              showPagination={false}
              loading={this.props.scenario.base_scenario.loading}
              pageSize={this.state.data.length}
            />
          </Col>
          <Form onSubmit={this.handleSubmit}>
            <Divider></Divider>

            <Divider></Divider>
            <Form.Item className="text-center">
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

const WrappedFormStepOne = Form.create({ name: "normal_login" })(FormStepOne);

const mapStateToProps = (state) => ({
  session: state.session,
  scenario: state.scenario,
});

export default connect(mapStateToProps)(WrappedFormStepOne);
