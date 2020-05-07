import React, { Component } from "react";
import { connect } from "react-redux";
import { superAdminActions } from "../actions";

let pagable = {
  pageNumber: 0,
  pageSize: 10,
};

class Organizations extends Component {
  componentDidMount() {
    this.props.dispatch(superAdminActions.getOrganizations(pagable));
  }

  render() {
    console.log("Data", this.props.organization.organization_list.data);
    console.log("Loading", this.props.organization.organization_list.loading);
    return <div>organizations</div>;
  }
}

const mapStateToProps = (state) => ({
  organization: state.superadmin,
});

export default connect(mapStateToProps)(Organizations);
