import React from "react";
import "../CSS/scheduleBtn.css";

function ScheduleButton(props) {
  return (
    <>
      <button
        style={{
          backgroundColor: props.backgroundColor,
        }}
        className="ScheduleBtn"
        onClick={props.onClick}
      >
        <img src="/images/schedule.png" alt="" />
        Schedule
      </button>
    </>
  );
}

export default ScheduleButton;
