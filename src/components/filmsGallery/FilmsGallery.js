import PropTypes from "prop-types";
import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import './filmsGallery.scss';
import FilmsGalleryCard from './FilmsGalleryCard';
import Button from '../button/Button';
import chooseFilm from '../../actions/chooseFilm';

class FilmsGallery extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps)
  }

  render(){
    const {films, chooseFilm} = this.props;
console.log('render');
    if(!films){return null}
    const {data} = films;
    return (
      <div className="film-gallery">
        {data.map(film => (
          <div key={film.id} className="film-gallery--column">
            <FilmsGalleryCard film={film} />
            <Button
              id={film.id}
              title='Show Description'
              disabled={false}
              btnClass='btn--primary'
              callback={()=>{chooseFilm(film)}}
            />
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    films: state.films
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({chooseFilm: chooseFilm}, dispatch)
}

FilmsGallery.defaultProps = {
  films: null,
  chooseFilm: null
};

FilmsGallery.propTypes = {
  films: PropTypes.instanceOf(Object),
  chooseFilm: PropTypes.func
};

export default connect(mapStateToProps, matchDispatchToProps)(FilmsGallery);
