import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
              <div className='navbar__tabs'>
              <h1>Christian Portillo</h1>
              {
                this.props.tabs.map((tab, index) => {
                    const className =  `tab ${tab.active ? 'active' : ''}`
                    return <a key={index} onClick={() => this.props.handleClick(tab.title)} className={className}>{tab.title}</a>
                })
              }
              </div>
              {
                this.props.tabs.map((tab, index) => {
                    if(tab.active) {
                    return(
                        <div key={index} className='navbar__componet'>
                            { tab.component }
                        </div>
                    )
                    }
                })
              }
          </div>
          
          
        )
    }
}


export default NavBar;
{/* for mobile implementation<a className='toggle' id='navHamburger'>
            <i className='fas fa-bars'></i>
          </a>*/}