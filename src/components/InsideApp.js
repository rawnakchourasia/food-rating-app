import React from 'react';
import YourPolls from './YourPolls';
import { changeTheTab } from '../actions';
import DishesPage from './DishesPage';
import DishPolls from './DishPolls';

class InsideApp extends React.Component {
  changeTab = (val) => {
    this.props.dispatch(changeTheTab(val));
  };
  render() {
    const {
      userPreferences,
      currentUserId,
      dishesList,
      dispatch,
      dishesTabSelected,
    } = this.props;
    return (
      <div>
        <YourPolls
          userPreferences={userPreferences}
          currentUserId={currentUserId}
          dishesList={dishesList}
          dispatch={dispatch}
        />
        <div className="tabs">
          <div
            className={`tab ${!dishesTabSelected ? '' : 'selectedTab'}`}
            onClick={() => this.changeTab(true)}
          >
            Dishes
          </div>
          <div
            className={`tab ${!dishesTabSelected ? 'selectedTab' : ''}`}
            onClick={() => this.changeTab(false)}
          >
            Dish Polls
          </div>
        </div>
        {dishesTabSelected ? (
          <DishesPage
            dishesList={dishesList}
            userPreferences={userPreferences}
            currentUserId={currentUserId}
            dispatch={dispatch}
          />
        ) : (
          <DishPolls
            dishesList={dishesList}
            userPreferences={userPreferences}
          />
        )}
      </div>
    );
  }
}

export default InsideApp;
