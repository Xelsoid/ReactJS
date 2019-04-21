import PropTypes from "prop-types";
import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import './filmsGallery.scss';
import FilmsGalleryCard from './FilmsGalleryCard';
import Button from '../button/Button';
import {chooseFilm} from '../../actions/actions';

const FilmsGallery = ({movies, chooseFilm}) => {
  if(!movies){return null}
  return (
    <div className="film-gallery">
      {movies.map(movie => (
        <div key={movie.id} className="film-gallery--column">
          <FilmsGalleryCard film={movie} />
          <Button
            id={movie.id}
            title='Show Description'
            disabled={false}
            btnClass='btn--primary'
            callback={()=>{chooseFilm(movie)}}
          />
        </div>
      ))}
    </div>
  )
};

function mapStateToProps(state) {
  return {
    movies: state.films
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({chooseFilm}, dispatch)
}

FilmsGallery.defaultProps = {
  movies: null,
  chooseFilm: null
};

FilmsGallery.propTypes = {
  movies: PropTypes.instanceOf(Object),
  chooseFilm: PropTypes.func
};

export default connect(mapStateToProps, matchDispatchToProps)(FilmsGallery);
