import React from "react";
import "./EventInfo.css";

const EventInfo = props => {
  return (
    <div className="Event_info">
      <div className="event_main">
        <p className="event_date">
          <i className="fas fa-calendar-alt" />
          10 - 12 Dic
        </p>
        <p className="event_city">
          <i className="fas fa-map-marker-alt" />
          Bogota, Colombia
        </p>
      </div>
      <h1 className="site_name">BG - Webcamp</h1>
      <p className="site_slogan">
        La mejor conferencia de <span>Diseño web</span>
      </p>
    </div>
  );
};

export default EventInfo;
