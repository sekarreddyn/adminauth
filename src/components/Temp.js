import React from "react";
import { Card, Dropdown, Menu, Button, Icon, Upload } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
class Dashbpard extends React.Component {
  state = {};

  cardTitle = (
    <div className="d-flex align-items-center">
      <h3 className="text-dark mb-0">Scenarios</h3>
      <div className="ml-auto d-flex align-items-center">

        <div>
          <Dropdown overlay={
            <Menu>
              <Menu.Item className="py-3">
                <Upload>
                  <Button type="link" className="p-0">
                    <Icon type="download" /> Export Data
                  </Button>
                </Upload>
              </Menu.Item>
              <Menu.Item className="py-3">
                <Upload>
                  <Button type="link" className="p-0">
                    <Icon type="upload" /> Import Data
                  </Button>
                </Upload>
              </Menu.Item>
            </Menu>
          } placement="bottomRight">
            <Button className="px-2">Actions</Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );

  render() {

    return (
      <div className="outer-wrapper">
        <Card title={this.cardTitle}>

        </Card>
      </div>
    );
  }
}

export default Dashbpard;
