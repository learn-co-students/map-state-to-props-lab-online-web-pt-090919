import React, { Component } from 'react'; 
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() { 
    debugger;
    return ( 
      
      <div>
        <ul>
          Users!
          {this.props.users.length != 0 ? this.props.users.map( (user,i) => (<li key= {i}>{user.username}</li>)) : null }
          {this.props.users.length != 0 ? (<p>{this.props.users.length}</p>)   : null }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {users: state.users }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
