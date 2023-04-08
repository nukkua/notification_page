import React from "react";
import "./SingleNotification.css";

export const SingleNotification = (props) => {
  const notification = props.notification;
  return (
    <div
      class={`notification-container ${notification.is_valid ? "" : "invalid"}`}
    >
      <img src={notification.user_image} alt="" />
      <div class="notification-text">
        <h2>{notification.name}</h2>
        <span>{notification.action}</span>{" "}
        {!notification.is_valid && <span className="notification-dot"></span>}
        <h6>{notification.time_action}</h6>
      </div>
    </div>
  );
};

export default SingleNotification;
