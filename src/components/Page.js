import React from 'react'
import PropTypes from 'prop-types';


export default class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year)
  }

  componentDidMount() {
    this.props.getPhotos(2019)
  }

  renderTemplate() {
    const { photos, isFetching, error } = this.props;
    if (error) {
      return <p className="error">При загрузке возникла ошибка:( Пожалуйста, обновите страницу!</p>
    }

    if (isFetching) {
      return <p>Loading... Please wait.</p>
    } else {
      return photos.map((el) => {
        return (
          <div key={el.id}>
            <div className="wrap">
              <img src={el.sizes[2].url} alt="" fullLink={el.sizes[el.sizes.length - 1].url} />
            </div>
            <p>{el.likes.count} ♥</p>
          </div>
        )
      })
    }
  }

  renderButton() {
    const years = [2019, 2018, 2017, 2016, 2015, 2014, 2013]
    return years.map((item, index) => {
      return <button onClick={this.onBtnClick} key={index}>{item}</button>
    })
  }

  render() {
    const { year, photos } = this.props
    return (
      <div>
        <div>
          {this.renderButton()}
        </div>
        <p className="photos-info">У вас {photos.length}  фото за {year} год</p>
        <div className="grid">
          {this.renderTemplate()}
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}