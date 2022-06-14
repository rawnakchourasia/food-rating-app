import React from 'react';
import { logOutUser } from '../actions';

class Header extends React.Component {
  logoutUser = () => {
    const { currentUserId } = this.props;
    this.props.dispatch(logOutUser(currentUserId));
    // console.log(currentUserId);
  };

  render() {
    const { isLoggedIn } = this.props;
    // console.log(isLoggedIn);
    return (
      <div>
        {!isLoggedIn ? <div>Dish Poll App</div> : <div>Hi User</div>}
        {isLoggedIn ? <button onClick={this.logoutUser}>Logout</button> : null}
      </div>
    );
  }
}

export default Header;
