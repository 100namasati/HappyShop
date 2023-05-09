import React, { Component } from "react";
import logo from "../Images/compnay-logo.png";
import '../Component/Navbar/Navbar.css'
import { AiOutlinePlus } from "react-icons/ai";
import "./Sider.css";
import { Input, Menu } from "antd";
const { Search } = Input;
const { SubMenu } = Menu;
export default class Sider extends Component {
  render() {
    return (
      <div>
        <div className="navbar-logo">
          <img src={logo} alt="company-logo" />
        </div>
        <div className="navbar-search-sider">
          <Search
            placeholder="input search text"
            allowClear
            enterButton
            size="large"
          />
        </div>
        <Menu
          mode="inline"
          expandIcon={<AiOutlinePlus className="iconStyle" />}
        >
          <SubMenu key="1" title="Home">
            <Menu.Item key="1">Home Demo 01</Menu.Item>
            <Menu.Item key="2">Home Demo 01</Menu.Item>
            <Menu.Item key="3">Home Demo 01</Menu.Item>
            <Menu.Item key="4">Home Demo 01</Menu.Item>
            <Menu.Item key="5">Home Demo 01</Menu.Item>
          </SubMenu>

          <SubMenu key="2" title="Shop">
            <SubMenu key="3" title="New Arrivals">
              <Menu.Item key="6">Home Demo 01</Menu.Item>
              <Menu.Item key="7">Home Demo 01</Menu.Item>
            </SubMenu>
            <SubMenu key="4" title="Best Selling">
              <Menu.Item key="6">Home Demo 01</Menu.Item>
              <Menu.Item key="7">Home Demo 01</Menu.Item>
            </SubMenu>
            <SubMenu key="5" title="Special Offers">
              <Menu.Item key="6">Home Demo 01</Menu.Item>
              <Menu.Item key="7">Home Demo 01</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="6" title="Products">
            <Menu.Item key="1">Home Demo 01</Menu.Item>
            <Menu.Item key="2">Home Demo 01</Menu.Item>
            <Menu.Item key="3">Home Demo 01</Menu.Item>
          </SubMenu>
          <SubMenu key="7" title="Collection">
            <Menu.Item key="1">Home Demo 01</Menu.Item>
            <Menu.Item key="2">Home Demo 01</Menu.Item>
            <Menu.Item key="3">Home Demo 01</Menu.Item>
          </SubMenu>
          <Menu.Item key="3">Blogs</Menu.Item>
          <SubMenu key="7" title="Pages">
            <Menu.Item key="1">Home Demo 01</Menu.Item>
            <Menu.Item key="2">Home Demo 01</Menu.Item>
            <Menu.Item key="3">Home Demo 01</Menu.Item>
          </SubMenu>
          {/* 
          <SubMenu key="3" title="Home">
            <Menu.Item key="2">Home Demo 01</Menu.Item>
            <Menu.Item key="2">Home Demo 01</Menu.Item>
            <Menu.Item key="2">Home Demo 01</Menu.Item>
            <Menu.Item key="2">Home Demo 01</Menu.Item>
            <Menu.Item key="2">Home Demo 01</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}
