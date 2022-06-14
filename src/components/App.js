import React from 'react';
import { addAllUsers, addAllDishes } from '../actions';
import { allUsers } from '../allUsers';
import { allDishes } from '../allDishes';
import Login from './Login';
import InsideApp from './InsideApp';
import Header from './Header';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      // console.log('UPDATED');
      this.forceUpdate();
    });

    store.dispatch(addAllUsers(allUsers));
    store.dispatch(addAllDishes(allDishes));

    // console.log(this.props.store.getState());
  }

  render() {
    const { usersList, currentUserId, isLoggedIn } =
      this.props.store.getState();

    return (
      <div className="app">
        <Header
          isLoggedIn={isLoggedIn}
          currentUserId={currentUserId}
          dispatch={this.props.store.dispatch}
        />
        {isLoggedIn ? <InsideApp /> : <Login />}
      </div>
    );
  }
}

export default App;
