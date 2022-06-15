import React from 'react';
import { addAllUsers, addAllDishes } from '../actions';
import { allUsers } from '../allUsers';
import { allDishes } from '../allDishes';
import Login from './Login';
import InsideApp from './InsideApp';
import Header from './Header';
import { Helmet } from 'react-helmet';

class App extends React.Component {
  //SETTING THE STATE AS WHEN COMPONENT IS MOUNTED
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    });

    store.dispatch(addAllUsers(allUsers));
    store.dispatch(addAllDishes(allDishes));
  }

  render() {
    const {
      usersList,
      currentUserId,
      isLoggedIn,
      userPreferences,
      dishesList,
      dishesTabSelected,
    } = this.props.store.getState();
    // console.log(dishesTabSelected);

    return (
      <div className="app">
        {/* This is React-Helmet. I have used this to change the default React Name on the Tab */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dish Poll</title>
          {/* Down below is the link to my site */}
          <link rel="canonical" href="http://codeparttime.com/" />
          <meta name="description" content="Dish Poll Application" />
        </Helmet>
        <Header
          isLoggedIn={isLoggedIn}
          currentUserId={currentUserId}
          allUsers={allUsers}
          dispatch={this.props.store.dispatch}
        />
        {isLoggedIn ? (
          <InsideApp
            userPreferences={userPreferences}
            currentUserId={currentUserId}
            dishesList={dishesList}
            dishesTabSelected={dishesTabSelected}
            dispatch={this.props.store.dispatch}
          />
        ) : (
          <Login usersList={usersList} dispatch={this.props.store.dispatch} />
        )}
      </div>
    );
  }
}

export default App;
