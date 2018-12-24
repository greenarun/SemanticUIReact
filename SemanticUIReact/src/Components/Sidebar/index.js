import React, { Component } from 'react'
import VerticalSidebar from '../VerticalSidebar';
import RightContent from '../RightContent';
import 'semantic-ui-css/semantic.min.css'
import './Style.css'
import {
  Button, 
  Icon, 
  Menu,
  Segment,
  Sidebar,
  Responsive,
} from 'semantic-ui-react'
 

export default class SidebarExampleTransitions extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,    
  }
  

  handleAnimationChange = animation => () =>
  this.setState({ animation, visible: !this.state.visible })
  
  handleMbAnimationChange = animation => () =>
  this.setState({ animation:"push", visible: !this.state.visible, direction: "top" })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
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
    const { animation, dimmed, direction, visible } = this.state 

    return (
      <div>        
        
        <Sidebar.Pushable as={Segment}> 
            <Responsive as="button" maxWidth={768} onClick={this.handleMbAnimationChange('top')} direction="top" className="topBtn"><Icon name='list right ' /></Responsive>  
            <VerticalSidebar animation={animation} direction={direction} visible={visible} />
          <Sidebar.Pusher dimmed={dimmed && visible}>
          <div className="MenuIntegrated">
          <Button onClick={this.handleAnimationChange('push')} className="pushBtn">{this.state.visible ? <Icon name='list right ' /> : <Icon name='hand point right outline' />}</Button> 
           <div className="MenuSmall">
              <Menu.Item as="h2">
                <span>A</span>
              </Menu.Item>
              <Menu.Item as="a">
              <Icon name='dashboard' />
              </Menu.Item> 
              <Menu.Item as="a">
              <Icon name='desktop' />
              </Menu.Item>
              <Menu.Item as="a">
              <Icon name='table' />
              </Menu.Item>
              <Menu.Item as="a">
              <Icon name='wpforms' />
              </Menu.Item> 
              <Menu.Item className="submenu"
                 onClick={this.showMenu}
               as="a">
                <Icon name='home' />
              
              {
          this.state.showMenu
            ? (
              <div className="menu">
                 <Menu.Item as="a">
                  <Icon name='desktop' /> <span className="MenuTitle">Components</span>
                  </Menu.Item>
                  <Menu.Item as="a">
                  <Icon name='table' /><span className="MenuTitle">Tables</span>
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
        </Menu.Item> 
        
        </div>     
          </div>
            <Segment basic>
              <RightContent />
            </Segment> 
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      
    )
  }
}
