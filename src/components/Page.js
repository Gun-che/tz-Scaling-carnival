import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {

  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.setYear(year)
  }

  render() {
    const { year, photos } = this.props;
    return (
      <div>
        <div>
          <button onClick={this.onBtnClick}>2020</button>
          <button onClick={this.onBtnClick}>2019</button>
          <button onClick={this.onBtnClick}>2018</button>
          <button onClick={this.onBtnClick}>2017</button>
          <button onClick={this.onBtnClick}>2016</button>
        </div>
        <p>you have {photos.length} photos for {year}</p>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
}