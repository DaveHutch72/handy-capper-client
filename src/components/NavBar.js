import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const link = {
    padding: '12px',
    textDecoration: 'none'
  }

  const NavBar = () => {
    return (
      <div className="navbar">
      <Menu size='large' style={{fontSize: '16px'}} color='green' inverted>
        <Menu.Item>
        <NavLink to="/" exact style={link}>Home</NavLink>
        </Menu.Item>
        <Menu.Item>
        <NavLink to="/courses" exact style={link}>Courses</NavLink>
        </Menu.Item>
        <Menu.Item>
        <NavLink to="/course/new" exact style={link}>Add a Course</NavLink>
        </Menu.Item>
      </Menu>
       </div>
      
    );
  };
  
  export default NavBar;