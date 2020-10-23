import React from "react";
import { Spin, useState } from "antd";

const Spinner = ({ spinning }) => {
  return (
    <div className='spinner-wrapper'>
      <Spin size='large' spinning={spinning} />
    </div>
  );
};

export default Spinner;
