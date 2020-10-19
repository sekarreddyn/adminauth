import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { sessionActions } from "../../actions";
import { Button, Dropdown, Menu, Icon } from "antd";
import swal from "sweetalert";

const DeleteSession = (session_id, dispatch) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(sessionActions.deleteSession(session_id));
    } else {
      // swal("Your imaginary file is safe!");
    }
  });
};
const SessionItem = ({
  session_title,
  start_date,
  end_date,
  modified_on,
  scenario_count,
  delete_session,
  dispatch,
  session_id,
}) => (
    <div className="session-card">
      <h4 className="session-card-title">{session_title}</h4>
      <p className="session-card-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed
        voluptas, id ipsum suscipit consectetur libero ipsa labore sit. Quisquam!
    </p>
      <div className="session-card-data d-flex align-items-center w-100">
        <div className="scenarios-count">
          <span className="number">{scenario_count}</span>
          <span className="text">Scenarios</span>
        </div>
        <div className="scenarios-count">
          <span className="number">
            {start_date} - {end_date}
          </span>
          <span className="text">Time Frame</span>
        </div>
      </div>
      <div className="session-card-meta d-flex align-items-center">
        <span>Last modified on : {modified_on}</span>
        <span className="ml-auto">

          <Button className="mr-2" type="primary">
            <NavLink type="primary" to={"/scenarios-list/" + session_id}>
              View
          </NavLink>
          </Button>
          <Dropdown overlay={
            <Menu>
              <Menu.Item>
                <Button className="px-0" type="link" size="small">
                  <NavLink type="primary" to={"edit-session/" + session_id}>
                    <Icon type="edit" className="mr-2" />Edit
                  </NavLink>
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button
                  onClick={() => DeleteSession(session_id, dispatch)}
                  loading={delete_session.loading && delete_session.id === session_id}
                  type="link"
                  size="small"
                  className="px-0"
                >
                  <Icon type="delete" />Delete {delete_session.id === session_id}
                </Button>
              </Menu.Item>
            </Menu>
          } placement="bottomLeft">
            <Button><Icon type="more" /></Button>
          </Dropdown>
        </span>
      </div>
    </div>
  );

const mapStateToProps = (state) => ({
  delete_session: state.session.delete_session,
});

export default connect(mapStateToProps)(SessionItem);
