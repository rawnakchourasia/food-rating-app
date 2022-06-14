import React from 'react';

class DishPolls extends React.Component {
  render() {
    const { dishesList, userPreferences } = this.props;
    var finalArray = [];
    var scoresList = [];
    var rank1List = [];
    var rank2List = [];
    var rank3List = [];

    //SEGGREGATING DISHES RANK-WISE
    for (var i = 0; i < userPreferences.length; i++) {
      var key = Object.values(userPreferences[i])[0];
      rank1List.push(key.rank1);
      rank2List.push(key.rank2);
      rank3List.push(key.rank3);
    }

    //SCORE CALCULATION
    for (var i = 0; i < dishesList.length; i++) {
      var rank1count = 0;
      var rank2count = 0;
      var rank3count = 0;

      for (var j = 0; j < rank1List.length; j++) {
        if (dishesList[i].id === rank1List[j]) {
          rank1count = rank1count + 1;
        }
        if (dishesList[i].id === rank2List[j]) {
          rank2count = rank2count + 1;
        }
        if (dishesList[i].id === rank3List[j]) {
          rank3count = rank3count + 1;
        }
      }
      var score = rank1count * 30 + rank2count * 20 + rank3count * 10;
      scoresList.push(score);
    }

    //SORTING OF BOTH THE ARRAYS BASED ON SCORE
    var temp = 0;
    var secondaryDishes = dishesList;
    var tempDishes;
    for (var i = 0; i < scoresList.length; i++) {
      for (var j = i; j < scoresList.length; j++) {
        if (scoresList[j] > scoresList[i]) {
          temp = scoresList[j];
          scoresList[j] = scoresList[i];
          scoresList[i] = temp;

          tempDishes = secondaryDishes[j];
          secondaryDishes[j] = secondaryDishes[i];
          secondaryDishes[i] = tempDishes;
        }
      }
    }

    //CREATING NEW OBJECT FOR FINAL ARRAY
    for (var i = 0; i < scoresList.length; i++) {
      var obj = {
        id: secondaryDishes[i].id,
        dishName: secondaryDishes[i].dishName,
        image: secondaryDishes[i].image,
        score: scoresList[i],
      };
      finalArray.push(obj);
    }

    console.log(finalArray);

    return (
      <div>
        This is DishPolls
        <div>This is DishPolls</div>;<div className="pollListContainer"></div>
      </div>
    );
  }
}

export default DishPolls;
