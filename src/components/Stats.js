import React from "react";

const Stats = ({ info }) => {
  return (
    <div>
      <div>
        {info.name}: {info.amount}
      </div>
    </div>
  );
};

export default Stats;
