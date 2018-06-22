import * as React from 'react'
import { connect } from 'react-redux'
import { newUser, newHobby, changeUser } from '../actions/users'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import './DiscoverScreen.css'

//import SwipeImage from './SwipeImage';

class CurrentProfileScreen extends React.PureComponent {
  render() {
    return(
      <div>
        <Menu />
        <h3>Your page</h3>

          <div key={this.props.user.userId} className="container">
            <div className="pic">
              <img className="image" src={this.props.user.userPhoto}/>
            </div>
            <div className="name-box">
              <h2>
                {this.props.user.userName},
                <span className="age"> {this.props.user.userAge}</span>
              </h2>
              <p>{this.props.user.userLocation}</p>
            </div>

            <div className="info-hobby">
              {this.props.user.userHobby.typeHobby}: {this.props.user.userHobby.experienceHobby}, {this.props.user.userHobby.userType}
            </div>
            <br/>

            <div className="info">
              <b>Short Description: </b>
                {this.props.user.userShortDescription}
            </div>

            <br/><br/><br/>
          </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.users.userData.find(user => user.userId === state.users.currentUserId),

  }
}

export default connect(mapStateToProps, { newUser, newHobby, changeUser })(CurrentProfileScreen)
