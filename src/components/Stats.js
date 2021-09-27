import React from "react";

const Stats = ({ info }) => {
  return (
    <div>
      <div className="row">
        <div className="col-auto">{info.name}</div>
        <div className="col-auto p-0">{info.amount}</div>
      </div>
    </div>
  );
};

export default Stats;
