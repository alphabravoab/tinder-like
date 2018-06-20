import React, { PureComponent } from 'react';

export default class UserForm extends PureComponent {
  handleChange = (event) => {
    this.setState({
     [event.target.name]: event.target.value
   });
 }

 handleSubmit = (event) => {
   event.preventDefault()

   // if () {
   //   this.props.newUser({
   //     name: this.state.userName,
   //     gender: this.state.userGender,
   //     age: this.state.userAge,
   //     location: this.state.userLocation,
   //     shortDescription: this.state.userShortDescription
   //   })
  }

  render() {
    return(
      <div className="userForm">

        <form onSubmit={ this.handleSubmit }>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Gender:
            <input type="text" name="gender" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Age:
            <input type="number" name="age" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Location:
            <input type="text" name="location" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Short Description:
          <input type="text" rows="3" name="shortDescription" onChange={this.handleChange}/>
          </label>
          <br/>
          <input type="submit" value="New User" />
        </form>

      </div>
    )
  }
}