import React, { Component } from 'react';
import BackVid from '../homepageVideo';
import NavBar from '../navbar';

export default class HomePage extends Component {
  
  constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                  title: 'Home',
                  active: true,
                  //component: 'Welcome'
                },
                {
                    title: 'About Me',
                    active: false,
                    //component: 'reet'
                },
                {
                    title: 'Contact',
                    active: false,
                    //component: 'oof'
                },
            ]
        }
    }
    
    handleTabChange = (title) => {
        const tabs = this.state.tabs;
        
        tabs.map(tab => {
            if(tab.title == title) {
                tab.active = true
            }else {
                tab.active = false
            }
        })
        
        this.setState({tabs});
    }
  
  render() {
    return (
      <div className='homepage-grid'>
          <div className='homepage-grid__navbar'>
            <NavBar handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs} />
          </div>
          <div className='homepage-grid__background'>
            <BackVid/>
          </div>
      </div>
    );
  }
}

