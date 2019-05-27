// @flow

import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Link from 'next/link';

import './filmsGallery.scss';
import FilmsGalleryCard from './FilmsGalleryCard';
import { chooseFilm } from '../../actions/actions';
import { removeSpecialSymbols } from "../../helpers/utils";

type FilmsGalleryProps = {
  movies: Object;
  chooseFilm: Object;
}

export const FilmsGallery = (props: FilmsGalleryProps) => {
  const {movies, chooseFilm} = props;
  if(!movies){return null}

  const chooseFilmCallback = (movie) => () => {chooseFilm(movie)};

  return (
    <div className="film-gallery">
      {movies.map(movie => (
        <div key={movie.id} className="film-gallery--column">
          <FilmsGalleryCard film={movie} />
          <Link as={`/movie/${removeSpecialSymbols(movie.title)}`} href="/movie">
            <button className="btn btn--primary" type="button" onClick={chooseFilmCallback(movie)}>Choose film</button>
          </Link>
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

export default connect(mapStateToProps, matchDispatchToProps)(FilmsGallery);
