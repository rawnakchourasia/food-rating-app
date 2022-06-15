import React from 'react';

class SingleDishInPage extends React.Component {
  render() {
    const { dish } = this.props;
    console.log(dish);
    return (
      <div>
        <div className="dishInPageContainer">
          <div>
            <img className="disnInPageImage" src={dish.image} alt="dish"></img>
          </div>
          <div className="titanddes">
            <div className="titleOnly">
              <span style={{ fontWeight: 700 }}>Dish Name : </span>
              {dish.dishName}
            </div>
            <div className="descriptionOnly">{dish.description}</div>
          </div>
          <div className="rankingsSelect">
            <div>No Rank</div>
            <div>Rank 1</div>
            <div>Rank 2</div>
            <div>Rank 3</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleDishInPage;
