import React from "react";
import "./SingleNotification.css";

export const SingleNotification = (props) => {
  const notification = props.notification;
  return (
    <div className="notification-container">
      <img src={notification.user_image} />
      <div className="fleexx">
        <h2>{notification.name}</h2>
        <span>{notification.action}</span>
      </div>
      <h6>{notification.time_action}</h6>
    </div>
  );
};

export default SingleNotification;
