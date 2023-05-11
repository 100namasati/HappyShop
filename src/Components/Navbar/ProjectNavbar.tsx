import logo from "../../Images/logo.png";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Badge, Avatar, Drawer } from "antd";
import Sider from "../Slider/Sider";
import { Input } from "antd";
import NavbarController from "./NavbarController";
import "./Navbar.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD:src/Components/Navbar/ProjectNavbar.tsx
import Protected from "./Protected";
import { withRouter } from "../../HOC";
=======
>>>>>>> origin:src/Component/ProjectNavbar.tsx
const { Search } = Input;

class ProjectNavbar extends NavbarController {
  renderNav = () => {
    return (
      <>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="company-logo" />
            <h4>Happy Shop</h4>
          </div>
          <div className="navbar-contact">
            <div className="phone-icon">
              <FiPhoneCall />
            </div>
            <div>
              <p className="phone-text1">Get Support</p>
              <p className="phone-text2"> 123-456-789-10</p>
            </div>
          </div>
          <div className="navbar-search">
            <Search
              placeholder="input search text"
              allowClear
              enterButton
              size="large"
            />
          </div>
          <div className="navbar-features">
<<<<<<< HEAD:src/Components/Navbar/ProjectNavbar.tsx
            <div className="navbar-features-usericon-container">
=======
            <div  className="navbar-features-usericon-container">
>>>>>>> origin:src/Component/ProjectNavbar.tsx
              <FaUser
                className="user-profile-icon"
                onClick={this.openUserMenu}
              />
              {this.state.openMenu ? (
<<<<<<< HEAD:src/Components/Navbar/ProjectNavbar.tsx
                <div className="user-menu" ref={this.componentRef}>
                  <ul className="user-menu-list">
                    <Link
                      to={"/myaccount"}
                      className="user-menu-list-item"
                      onClick={() => {
                        this.setState({ openMenu: !this.state.openMenu });
                      }}
                    >
                      <li
                        onClick={() => {
                          this.setState({ openMenu: !this.state.openMenu });
                        }}
                      >
                        My Account
                      </li>
                    </Link>
                    <Link
                      to={"/"}
                      className="user-menu-list-item"
                      onClick={() => {
                        this.setState({ openMenu: !this.state.openMenu });
                      }}
                    >
                      <li
                        onClick={() => {
                          this.setState({ openMenu: !this.state.openMenu });
                        }}
                      >
                        Wishlist
                      </li>
                    </Link>
                    <Link
                      to={"/"}
                      className="user-menu-list-item"
                      onClick={() => {
                        this.setState({ openMenu: !this.state.openMenu });
                      }}
                    >
                      <li>Compare</li>
                    </Link>
                    <Link
                      to={"/"}
                      className="user-menu-list-item"
                      onClick={() => {
                        this.setState({ openMenu: !this.state.openMenu });
                      }}
                    >
                      <li>Search</li>
                    </Link>
                    {Protected() ? (
                      <li
                        className="user-menu-list-item"
                        onClick={() => {
                          this.logout();
                          this.setState({ openMenu: !this.state.openMenu });
                        }}
                      >
                        Logout
                      </li>
                    ) : (
                      <Link
                        to={"/login"}
                        className="user-menu-list-item"
                        onClick={() => {
                          this.setState({ openMenu: !this.state.openMenu });
                        }}
                      >
                        <li>Login/Register</li>
                      </Link>
                    )}
=======
                <div className="user-menu">
                  <ul className="user-menu-list">
                    <Link to={"/"} className="user-menu-list-item">
                      <li>My Account</li>
                    </Link>
                    <Link to={"/"} className="user-menu-list-item">
                      <li>Wishlist</li>
                    </Link>
                    <Link to={"/"} className="user-menu-list-item">
                      <li>Compare</li>
                    </Link>
                    <Link to={"/"} className="user-menu-list-item">
                      <li>Search</li>
                    </Link>
                    <Link to={"/"} className="user-menu-list-item">
                      <li>Login</li>
                    </Link>
>>>>>>> origin:src/Component/ProjectNavbar.tsx
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
            <span>
              <Badge size="small" count={5}>
                <Avatar
                  src={<AiOutlineShoppingCart />}
                  size="large"
                  style={{ color: "black", fontSize: 30 }}
                />
              </Badge>
            </span>
            <span>
              <p className="text">Your cart</p>
              <p className="ammount">$0.00</p>
            </span>
          </div>
          <div className="navbar-features2" id="feature2">
            <span>
              <FaUser />
            </span>
            <span>
              <Badge size="small" count={5}>
                <Avatar
                  src={<AiOutlineShoppingCart />}
                  size="large"
                  style={{ color: "black", fontSize: 30 }}
                />
              </Badge>
            </span>
            <span onClick={this.openDrawer}>
              {this.state.drawer ? <AiOutlineClose /> : <FaBars />}
            </span>
            <Drawer
              placement={this.state?.drawerDirection}
              width={300}
              onClose={this.closeDrawer}
              open={this.state.drawer}
            >
              <Sider />
            </Drawer>
          </div>
        </div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Home Section #01
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Home Section #01
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Home Section #02
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Home Section #03
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Home Section #04
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Home Section #05
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <div className="menu-container-list">
                        <div className="menu-list">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>

                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </div>
                        <div className="menu-list">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>

                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </div>
                        <div className="menu-list">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>

                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Product
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/products">
                         Wooden Product
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Collection
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  };

  render() {
    return (
      <div>
        {this.renderNav()}
        {/* {this.renderMenulist()} */}
      </div>
    );
  }
}
export default withRouter(ProjectNavbar);
