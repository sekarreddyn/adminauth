import React from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Table,
  Divider,
  Icon,
  Menu,
  Dropdown,
} from "antd";

const columns = [
  {
    title: "Group",
    dataIndex: "group",
  },
  {
    title: "Bussiness Unit",
    dataIndex: "bu",
  },
  {
    title: "Country",
    dataIndex: "country",
    className: "text-center",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    className: "text-center",
  },

  {
    title: "Media Tactic",
    dataIndex: "mediatactic",
    className: "text-center",
  },

  {
    title: "GRP’s",
    dataIndex: "grp",
    className: "text-center",
  },

  {
    title: "Spend",
    dataIndex: "spend",
    className: "text-center",
  },

  {
    title: "CPP",
    dataIndex: "cpp",
    className: "text-center",
  },

  {
    title: "Shipments",
    dataIndex: "shipments",
    className: "text-center",
  },

  {
    title: "GP/UC",
    dataIndex: "gpuc",
    className: "text-center",
  },

  {
    title: "Media Elasticity",
    dataIndex: "me",
    className: "text-center",
  },
];

const data = [
  {
    key: "1",
    group: "Asia Pacific",
    bu: "South Pacific",
    country: "A",
    brand: "C",
    mediatactic: "TV",
    grp: "XX",
    spend: "5,199,010",
    cpp: "XX",
    shipments: "XX",
    gpuc: "XX",
    me: "XX",
  },
  {
    key: "2",
    group: "Asia Pacific",
    bu: "South Pacific",
    country: "A",
    brand: "C",
    mediatactic: "TV",
    grp: "XX",
    spend: "5,199,010",
    cpp: "XX",
    shipments: "XX",
    gpuc: "XX",
    me: "XX",
  },
  {
    key: "3",
    group: "Asia Pacific",
    bu: "South Pacific",
    country: "A",
    brand: "C",
    mediatactic: "TV",
    grp: "XX",
    spend: "5,199,010",
    cpp: "XX",
    shipments: "XX",
    gpuc: "XX",
    me: "XX",
  },
  {
    key: "4",
    group: "Asia Pacific",
    bu: "South Pacific",
    country: "A",
    brand: "C",
    mediatactic: "TV",
    grp: "XX",
    spend: "5,199,010",
    cpp: "XX",
    shipments: "XX",
    gpuc: "XX",
    me: "XX",
  },
];

const StepOne = Form.create({
  name: "step_one",
})((props) => {
  const { validateFields } = props.form;
  const validateInput = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        props.submittedValues(values);
        props.handleNextButton();
      }
    });
  };
  return (
    <Form onSubmit={validateInput}>
      <Divider></Divider>
      <Row className="d-flex align-items-center">
        <Col span={8}>
          <h3 className="session-title">
            Scenario 1<span className="mt-2">Jan 2019 - Jan 2020</span>
          </h3>
        </Col>
        <Col span={4} className="text-center border-right">
          <h5 className="text-muted mb-3">MEDIA SPEND</h5>
          <b className="text-success">
            107, 165, 670{" "}
            <span className="session-count bg-success">
              <Icon type="caret-up" /> 10%
            </span>
          </b>
        </Col>
        <Col span={4} className="text-center border-right">
          <h5 className="text-muted mb-3">MEDIA VOLUME</h5>
          <b className="text-danger">
            107, 165, 670{" "}
            <span className="session-count">
              <Icon type="caret-down" /> 10%
            </span>
          </b>
        </Col>
        <Col span={4} className="text-center border-right">
          <h5 className="text-muted mb-3">MEDIA GROSS PROFIT</h5>
          <b className="text-dark">
            107, 165, 670{" "}
            <span className="session-count">
              <Icon type="line" /> 0%
            </span>
          </b>
        </Col>
        <Col span={4} className="text-center">
          <h5 className="text-muted mb-3">SHIPMENTS</h5>
          <b className="text-dark">
            107, 165, 670{" "}
            <span className="session-count">
              <Icon type="line" /> 0%
            </span>
          </b>
        </Col>
      </Row>

      <Divider></Divider>

      <Row gutter="30" className="d-flex pt-4 mb-4">
        <Col span={8}>
          <h3 className="mb-0">Scenario Data</h3>
        </Col>
        <Col span={4} className="ml-auto text-right">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item className="py-2 border-bottom">
                  <Icon type="edit" style={{ fontSize: 16 }} className="mr-2" />{" "}
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
              Edit input data <Icon type="caret-down" />
            </Button>
          </Dropdown>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={data}
        className="text-center"
      ></Table>

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
  );
});

export default StepOne;
