import React from 'react';
import { logInUser } from '../actions';
// import dataInFlow from '../globalVariables';

class SingleUser extends React.Component {
  showPassInput = (id) => {
    const { user } = this.props;
    var pass = document.getElementsByClassName('getPass');
    // console.log(pass[id - 1].value);
    // console.log(id);

    var receivedPass = pass[id - 1].value;
    var storedPass = user.password;

    if (receivedPass === storedPass) {
      this.props.dispatch(logInUser(id));
      console.log('Logging in');
    } else {
      alert('Please try again');
    }
  };

  render() {
    const { isLoggedIn, user } = this.props;

    return (
      <div>
        <div>{user.username}</div>
        <div>
          <input
            type="password"
            className="getPass"
            placeholder={user.password}
          ></input>
          <button onClick={() => this.showPassInput(user.id)}>Log In</button>
        </div>
      </div>
    );
  }
}

export default SingleUser;
