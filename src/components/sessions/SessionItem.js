import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { sessionActions } from "../../actions";
import { Button } from "antd";
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
      <span>{modified_on}</span>
      <span className="ml-auto">
        <Button
          className="mr-2"
          onClick={() => dispatch(sessionActions.deleteSession(session_id))}
          loading={delete_session.loading && delete_session.id === session_id}
          type="danger"
        >
          Delete
          {delete_session.id === session_id}
        </Button>

        <Button className="mr-2" type="primary">
          <NavLink type="primary" to={"edit-session/" + session_id}>
            Edit
          </NavLink>
        </Button>

        <Button className="mr-2" type="primary">
          <NavLink type="primary" to={"create-scenario/" + session_id}>
            View
          </NavLink>
        </Button>
      </span>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  delete_session: state.session.delete_session,
});

export default connect(mapStateToProps)(SessionItem);
