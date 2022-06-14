import React from 'react';
import YourPolls from './YourPolls';

class InsideApp extends React.Component {
  render() {
    const { userPreferences, currentUserId, dishesList, dispatch } = this.props;
    return (
      <div>
        <YourPolls
          userPreferences={userPreferences}
          currentUserId={currentUserId}
          dishesList={dishesList}
          dispatch={dispatch}
        />
      </div>
    );
  }
}

export default InsideApp;
