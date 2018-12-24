import React, { Component } from 'react';
import {
    Icon, 
    Menu,
    Container,
    Flag
  } from 'semantic-ui-react'
import profilePic from '../../assets/images/admin.jpg'
import {Content, HeaderCont, LeftCont,RightCont, ProfileImg, NotifyMenu} from './Style'
import Dashboard from '../Dashboard';

    class RightContent extends Component {
        constructor() {
            super();
            
            this.state = {
                showNotify: false,
            }
            
            this.showNotify = this.showNotify.bind(this);
            this.closeNotify = this.closeNotify.bind(this);
          }
            showNotify(event) {
                event.preventDefault();    
                this.setState({ showNotify: true }, () => {
                    document.addEventListener('click', this.closeNotify);
            });
            }
            closeNotify() {
                this.setState({ showNotify: false }, () => {
                    document.removeEventListener('click', this.closeNotify);
            });
            } 
    render() { 
        return ( 
            <Content>
                <HeaderCont>
                    <Container textAlign='left' className="container">
                        <LeftCont>
                            <Menu.Item as="a"  className="Notify">
                            <Icon name='search' />
                            </Menu.Item> 
                            <Menu.Item as="a" className="Notify" onClick={this.showNotify} >
                            <Icon name='bell' />
                                <span class="count bg-danger">5</span>
                                {
                                this.state.showNotify
                                    ? (
                                    <NotifyMenu>
                                        <Menu.Item as="a">
                                        <Icon name='eye' /> <span className="MenuTitle">Viewed your Profile</span>
                                        </Menu.Item>
                                        <Menu.Item as="a">
                                        <Icon name='file pdf outline' /><span className="MenuTitle">Received document</span>
                                        </Menu.Item>
                                        <Menu.Item as="a">
                                        <Icon name='wpforms' /> <span className="MenuTitle">Forms Submitted</span>
                                        </Menu.Item>
                                    </NotifyMenu>
                                    )
                                    : (
                                    null
                                    )
                                }
                            </Menu.Item> 
                            <Menu.Item as="a" className="Notify">
                            <Icon name='envelope outline' />
                            </Menu.Item>
                        </LeftCont>
                        <RightCont>
                        <Menu.Item as="a" className="flag">
                            <Flag name='sg' />
                        </Menu.Item>
                        <Menu.Item as="a">
                            <ProfileImg src={profilePic} alt="profile pic" />
                        </Menu.Item>
                        
                        </RightCont>
                    </Container>  
                </HeaderCont>
                <Dashboard />
            </Content>
         );
    }
}
 
export default RightContent;