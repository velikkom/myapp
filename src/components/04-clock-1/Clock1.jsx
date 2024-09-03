import React from "react";
import "../../assets/sass/clock.scss";
import moment from "moment/moment";

export const Clock1 = () => {
  const dayTime = moment();
  const timeStr = dayTime.format("HH:mm");
  const dateStr = dayTime.format("LL");
  const dayStr = dayTime.format("dddd");
  const hour = dayTime.format("H");

  let message = "";
  if (hour >= 5 && hour < 11) {
    message = "Morning";
  } else if (hour >= 11 && hour < 14) {
    message = "Noon";
  } else if (hour >= 14 && hour < 18) {
    message = "Afternoon";
  } else if (hour >= 18 && hour < 22) {
    message = "Evening";
  } else {
    message = "Night";
  }

  return (
    <div className="clock-container">
      <div className="time">{timeStr}</div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {message}
        </div>
      </div>
    </div>
  );
};
