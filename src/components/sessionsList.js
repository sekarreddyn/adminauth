import React from "react";
import { Input, Icon, Button, Popover, Card, Breadcrumb, Table, Tooltip } from "antd";
import { NavLink } from "react-router-dom";

const text = <span className="text-dark p-2 d-block"><Icon type="info-circle" className="mr-2" /> User Guide</span>;

const content = (
  <div className="help-text">
    <h4 className="my-3">What is a session?</h4>
    <ul>
      <li>A session is where user defines the scope where one selects the time period and the underlying Country-brand-media tactics required for the media simulations/optimizations.</li>
      <li>User can create a new session, which is a default option provided in case there are no saved sessions</li>
    </ul>
  </div>
);

const cardTitle = (
  <div className="d-flex align-items-center">
    <h3 className="text-dark mb-0">Sessions</h3>
    <div className="ml-auto d-flex align-items-center">
      <div className="mr-3">
        <Input addonAfter={<Icon type="search" />} defaultValue="Search scenarios" />
      </div>
      <div className="mr-3">
        <Button className="btn-primary-outline">Create new session</Button>
      </div>
      <div>

        <Popover content={content} placement="bottomRight" title={text}>
          <Button className="px-2">
            <Icon type="question-circle" className="mx-auto" theme="filled" style={{ fontSize: '16px' }} />
          </Button>
        </Popover>
      </div>
    </div>
  </div>
);

const columns = [
  {
    title: 'Scenario',
    dataIndex: 'scenario',
    width: "20%",
  },
  {
    title: 'Media Spend',
    dataIndex: 'mediaspend',
    className: 'text-center numbers'
  },
  {
    title: 'MEDIA VOLUME',
    dataIndex: 'mediavolume',
    className: 'text-center numbers'
  },
  {
    title: 'MEDIA GROSS PROFIT',
    dataIndex: 'mediagrossprofit',
    className: 'text-center numbers'
  },

  {
    title: 'SHIPMENTS',
    dataIndex: 'shipments',
    className: 'text-center numbers'
  },

  {
    title: 'Actions',
    dataIndex: 'actions',
    className: 'text-center'
  }
];

const actionsList = (
  <div className="text-center">
    <Tooltip placement="bottom" title="Run Scenario">
      <NavLink to="/run-scenario" className="ant-btn ant-btn-link px-2 text-primary">
        <Icon type="play-circle" style={{ fontSize: '18px' }} />
      </NavLink>
    </Tooltip>
    <Tooltip placement="bottom" title="Copy Scenario">
      <NavLink to="/session-copies" className="ant-btn ant-btn-link mr-2 px-2">
        <Icon type="copy" style={{ fontSize: '18px' }} />
      </NavLink>
    </Tooltip>
  </div>
);

const actionsListMore = (
  <div className="text-center">
    <Tooltip placement="bottom" title="Run Scenario">
      <NavLink to="/run-scenario" className="ant-btn ant-btn-link px-2 text-primary">
        <Icon type="play-circle" style={{ fontSize: '18px' }} />
      </NavLink>
    </Tooltip>
    <Tooltip placement="bottom" title="Edit Scenario">
      <NavLink to="/run-scenario" className="ant-btn ant-btn-link px-2">
        <Icon type="edit" style={{ fontSize: '18px' }} />
      </NavLink>
    </Tooltip>
    <Tooltip placement="bottom" title="Copy Scenario">
      <NavLink to="/session-copies" className="ant-btn ant-btn-link mr-2 px-2">
        <Icon type="copy" style={{ fontSize: '18px' }} />
      </NavLink>
    </Tooltip>
  </div>
);

const data = [
  {
    key: '1',
    scenario: <h4 className="session-title">Base Scenario <span>Oct 2019 - Oct 2020</span></h4>,
    mediaspend: <b>107, 165, 670</b>,
    mediavolume: <b>107, 165, 670</b>,
    mediagrossprofit: <b>107, 165, 670</b>,
    shipments: <b>107, 165, 670</b>,
    actions: actionsList,
  },
  {
    key: '2',
    scenario: <h4 className="session-title">Scenario 1<span>Jan 2019 - Jan 2020</span></h4>,
    mediaspend: <b className="text-success">107, 165, 670 <span className="session-count bg-success"><Icon type="caret-up" /> 10%</span></b>,
    mediavolume: <b className="text-danger">107, 165, 670 <span className="session-count"><Icon type="caret-down" /> 10%</span></b>,
    mediagrossprofit: <b className="text-dark">107, 165, 670 <span className="session-count"><Icon type="line" /> 0%</span></b>,
    shipments: <b className="text-dark">107, 165, 670 <span className="session-count"><Icon type="line" /> 0%</span></b>,
    actions: actionsListMore,
  },
  {
    key: '3',
    scenario: <h4 className="session-title">Scenario 2<span>Feb 2019 - Feb 2020</span></h4>,
    mediaspend: <b className="text-success">107, 165, 670 <span className="session-count bg-success"><Icon type="caret-up" /> 10%</span></b>,
    mediavolume: <b className="text-danger">107, 165, 670 <span className="session-count"><Icon type="caret-down" /> 10%</span></b>,
    mediagrossprofit: <b className="text-dark">107, 165, 670 <span className="session-count"><Icon type="line" /> 0%</span></b>,
    shipments: <b className="text-dark">107, 165, 670 <span className="session-count"><Icon type="line" /> 0%</span></b>,
    actions: actionsListMore,
  },
  {
    key: '4',
    scenario: <h4 className="session-title">Scenario 3<span>Mar 2019 - Mar 2020</span></h4>,
    mediaspend: <b className="text-success">107, 165, 670 <span className="session-count bg-success"><Icon type="caret-up" /> 10%</span></b>,
    mediavolume: <b className="text-danger">107, 165, 670 <span className="session-count"><Icon type="caret-down" /> 10%</span></b>,
    mediagrossprofit: <b className="text-dark">107, 165, 670 <span className="session-count"><Icon type="line" /> 0%</span></b>,
    shipments: <b className="text-dark">107, 165, 670 <span className="session-count"><Icon type="line" /> 0%</span></b>,
    actions: actionsListMore,
  },
];

class sessionsList extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/">Dashboard</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Sessions
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="outer-wrapper">
          <Card className="mb-4" title={cardTitle}>
            <Table columns={columns} dataSource={data} ></Table>
          </Card>
        </div>
      </div>
    );
  }
}

export default sessionsList;
