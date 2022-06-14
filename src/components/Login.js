import React from 'react';
import SingleUser from './SingleUser';

class Login extends React.Component {
  render() {
    const { isLoggedIn, usersList, dispatch } = this.props;
    console.log(usersList);
    return (
      <div>
        <div>Log In As</div>
        <div>
          {usersList.map((user, index) => (
            <SingleUser
              user={user}
              key={`users-${index}`}
              dispatch={this.props.dispatch}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Login;
