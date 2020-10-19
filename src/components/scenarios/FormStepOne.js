import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Row, Col, Divider, Icon } from "antd";
import ReactTable from "react-table";
import "react-table/react-table.css";

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
        this.props.submittedValues(this.state.data);
        this.props.handleNextButton();
      }
    });
  };
  componentDidMount() {
    if (this.props.baseScenario) {
      this.setState({
        data: this.props.baseScenario,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.baseScenario !== prevProps.baseScenario) {
      if (this.props.baseScenario) {
        this.setState({
          data: this.props.baseScenario,
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
          data[cellInfo.index][cellInfo.column.id] = parseInt(
            e.target.innerHTML
          );
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id],
        }}
      />
    );
  }

  render() {
    const { get_session_kpi, get_session } = this.props.session;
    const { data } = get_session_kpi;
    const {
      media_gross_profit,
      media_shipments,
      media_spend,
      media_volume,
    } = data;
    const { session_title, start_date, end_date } = get_session.data;
    console.log("this", this.props);
    return (
      <div>
        <>
          <Row gutter={[16, 16]} className="d-flex align-items-center">
            <Col span={8}>
              <h4 className="session-title">
                {session_title}
                <span className="mt-2">
                  {start_date} - {end_date}
                </span>
              </h4>
            </Col>

            <Col span={4} className="text-center border-right">
              <h5 className="text-muted mb-3">MEDIA SPEND</h5>
              <b className="text-dark">{media_spend}</b>
            </Col>
            <Col span={4} className="text-center border-right">
              <h5 className="text-muted mb-3">MEDIA VOLUME</h5>
              <b className="text-dark">{media_volume}</b>
            </Col>
            <Col span={4} className="text-center border-right">
              <h5 className="text-muted mb-3">MEDIA GROSS PROFIT</h5>
              <b className="text-dark">{media_gross_profit}</b>
            </Col>
            <Col span={4} className="text-center">
              <h5 className="text-muted mb-3">SHIPMENTS</h5>
              <b className="text-dark">{media_shipments}</b>
            </Col>
          </Row>

          <Divider></Divider>

          <Col span={24} className="mt-3 ">
            <h4 className="session-title text-dark mb-4">Scenario Data</h4>
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
          <Form onSubmit={this.handleSubmit} className="text-center mb-0">
            <Divider></Divider>

            <Form.Item className="text-center mb-0">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                style={{ width: 160 }}
                disabled={this.props.scenario.base_scenario.loading}
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
