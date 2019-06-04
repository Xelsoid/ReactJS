// @flow

import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import Link from 'next/link';

import injectSheet from 'react-jss';
import FilmsGalleryCard from './FilmsGalleryCard';
import { chooseFilm } from '../../actions/actions';
import { removeSpecialSymbols } from '../../helpers/utils';

type FilmsGalleryProps = {
  movies: Object;
  chooseFilm: Object;
  classes: Object;
}

const styles = {
  filmGallery: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '20px 0',
  },
  filmGalleryColumn: {
    flexBasis: '33%',
    boxSizing: 'border-box',
    padding: '10px',
  }
};

export const FilmsGallery = (props: FilmsGalleryProps) => {
  const {movies, chooseFilm, classes } = props;
  if(!movies){return null}

  const chooseFilmCallback = (movie) => () => {chooseFilm(movie)};

  return (
    <div className={classes.filmGallery}>
      {movies.map(movie => (
        <div key={movie.id} className={classes.filmGalleryColumn}>
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

const enhancer = compose(connect(mapStateToProps, matchDispatchToProps), injectSheet(styles));
export default enhancer(FilmsGallery);
