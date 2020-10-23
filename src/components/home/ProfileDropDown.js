import React, { useContext } from "react";
import { Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AcessTokenContext } from "../../contexts/accessTokenContext";

const menu = (
  <Menu>
    <Menu.Item>
      <Link to='/settings'>Sozlamalar</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/results'>Natijalar</Link>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const ProfileDropDown = () => {
  const { avatar } = useContext(AcessTokenContext);

  return (
    <div>
      <Dropdown overlay={menu} placement='bottomRight' arrow>
        <div>
          {!avatar && <Avatar icon={<UserOutlined />} />}
          {avatar && <Avatar src={avatar} />}
        </div>
      </Dropdown>
    </div>
  );
};

export default ProfileDropDown;
