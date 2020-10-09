import React from "react";
import { NavLink } from "react-router-dom";

const SessionItem = ({
  session_title,
  start_date,
  end_date,
  modified_on,
  scenario_count,
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
        <NavLink to="/sessions-list" className="mr-2">
          Delete
        </NavLink>
        <NavLink to="/sessions-list">View Session</NavLink>
      </span>
    </div>
  </div>
);

export default SessionItem;
