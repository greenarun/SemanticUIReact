import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './Style.css'
import {
  Icon, 
  Menu,
  Sidebar,
} from 'semantic-ui-react'
 

export default class VerticalSidebar extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  handleAnimationChange = animation => () =>
    this.setState({ animation, visible: !this.state.visible })
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
   
  render() { 
    return ( 
        <Sidebar
          as={Menu}
          animation={this.props.animation}
          direction={this.props.direction}
          icon='labeled'
          inverted
          vertical
          visible={this.props.visible}
          width='thin'
          className="Sidebar"
        >  
        <Menu.Item as="h2">
          <span>Arun</span> Admin
        </Menu.Item>
        <Menu.Item as="a">
         <Icon name='dashboard' /> <span className="MenuTitle">Dashboard</span>
        </Menu.Item>
        <Menu.Item as="h5">
          <span>UI ELEMENTS</span>
        </Menu.Item>
        <Menu.Item as="a">
         <Icon name='desktop' /> <span className="MenuTitle">Components</span>
        </Menu.Item>
        <Menu.Item as="a">
         <Icon name='table' /> <span className="MenuTitle">Tables</span>
        </Menu.Item>
        <Menu.Item as="a">
         <Icon name='wpforms' /> <span className="MenuTitle">Forms</span>
        </Menu.Item>
        <Menu.Item as="a" onClick={this.showMenu}>
         <Icon name='home' /> <span className="MenuTitle">Icons<Icon className="rightside" name='angle right' /> </span>
        </Menu.Item> 
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                 <Menu.Item as="a">
                  <Icon name='desktop' /> <span className="MenuTitle">Components</span>
                  </Menu.Item>
                  <Menu.Item as="a">
                  <Icon name='table' /> <span className="MenuTitle">Tables</span>
                  </Menu.Item>
                  <Menu.Item as="a">
                  <Icon name='wpforms' /> <span className="MenuTitle">Forms</span>
                  </Menu.Item>
              </div>
            )
            : (
              null
            )
        } 
  </Sidebar>
     );
  }
}
 

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}
