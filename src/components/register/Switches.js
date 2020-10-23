import React from "react";
import { Switch } from "antd";

const Switches = ({
  teacher,
  student,
  center,
  toggleTeacher,
  toggleStudent,
  toggleCenter,
}) => {
  return (
    <div className='role-btns'>
      <div className='teacher'>
        <Switch defaultChecked onChange={toggleTeacher} checked={teacher} />
        <span>O'qituvchi</span>
      </div>
      <div className='student'>
        <Switch onChange={toggleStudent} checked={student} />
        <span>O'quvchi</span>
      </div>
      <div className='center'>
        <Switch onChange={toggleCenter} checked={center} />
        <span>O'quv Markaz</span>
      </div>
    </div>
  );
};

export default Switches;
