import React, { PureComponent } from 'react';
import UsernameForm from './UsernameForm';
import PasswordForm from './PasswordForm';
import RegisterButton from './RegisterButton';
import { changeUser } from '../../actions/users';
import './Mainscreen.css';
import logo from '../../images/Hobbyhub-logo-green.png'

export default class Mainscreen extends PureComponent{

  render() {
    return (

        <div className="mainscreen">
          <body>
            <img src={logo} className="logo" alt="logo"/>
            <div className="container">
              <UsernameForm />
              <PasswordForm />
            </div>
            <br/>
            <RegisterButton />
          </body>
        </div>

    )
  }
}
