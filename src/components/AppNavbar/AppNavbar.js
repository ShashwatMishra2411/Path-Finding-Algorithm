import React, { useState } from 'react';
import "./AppNavbar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  ButtonGroup
} from 'reactstrap';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import ProgressBar from "../ProgressBar/ProgressBar";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">PathVisualizer</NavbarBrand>
        <Collapse isOpen={isOpen} navbar className='algo'>
          <Nav className="mr-auto align" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id={"Tooltip-" + 4} nav caret>
                Algorithms
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Button onClick={() => { props.handleDijkstra(); props.handleVisualization() }}>Dijkstra</Button>
                </DropdownItem>
                <DropdownItem>
                  <Button onClick={() => { props.handleAstar(); props.handleVisualization() }}>A*</Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
            <DropdownToggle nav caret>
                Colors
              </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                  <Button onClick={() => { props.handleColor("blue");}}>Blue</Button>
                </DropdownItem>
                <DropdownItem>
                  <Button onClick={() => { props.handleColor("brown");}}>Brown</Button>
                </DropdownItem>
              </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>  
        </Collapse>
        <NavbarText id={"Tooltip-" + 3}>
          <ProgressBar visitedNodes={props.visitedNodes} shortestNodes={props.shortestNodes} />
        </NavbarText>
        <NavbarText className="clear-functions">
          <ButtonGroup>
            <Button id={"Tooltip-" + 0} onClick={props.handleClearPath}>Clear Path</Button>
            <Button id={"Tooltip-" + 1} onClick={props.handleClearGrid}>Clear Grid</Button>
          </ButtonGroup>          
        </NavbarText>
        <NavbarText id={"Tooltip-" + 2}>
          <DarkModeToggle />
        </NavbarText>
      </Navbar>
    </div>
  );
}

export default AppNavbar;