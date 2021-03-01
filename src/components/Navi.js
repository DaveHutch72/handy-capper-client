import React from 'react';
//import { NavLink } from 'react-router-dom';
//mport { Menu } from 'semantic-ui-react'
import { Navbar, Nav } from 'react-bootstrap';



  const Navi = () => {
    return (
      <div className="nav">
        <>
        <Navbar bg="danger" variant="dark" fixed="top">
          <Navbar.Brand href="/">HandyCapper</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href='/courses'>All Courses</Nav.Link>
            <Nav.Link href='/courses/new'>Add A Course</Nav.Link>
          </Nav>
        </Navbar>
        </>
      </div>
      
    );
  };
  
  export default Navi;

//   <Menu size='large' style={{fontSize: '16px'}} color='green' inverted>
//   <Menu.Item>
//   <NavLink to="/" exact style={link}>Home</NavLink>
//   </Menu.Item>
//   <Menu.Item>
//   <NavLink to="/courses" exact style={link}>Courses</NavLink>
//   </Menu.Item>
//   <Menu.Item>
//   <NavLink to="/course/new" exact style={link}>Add a Course</NavLink>
//   </Menu.Item>
// </Menu>