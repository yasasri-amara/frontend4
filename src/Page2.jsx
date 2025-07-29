import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import'./css/Page2.css'
export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
        <h1> Welcome to second page </h1>
        <br/><br/>
        
<Link to="/page1">Go To Page1</Link>
<br/><br/>
<div className='link2'>

</div>
<Link to="/">go to HomePage</Link>
<br/><br/>
      </div>
    )
  }
}
