// @flow

import React from 'react';

import injectSheet from 'react-jss';

type FilmsGalleryCardProps = {
  film: {
    title: string;
    poster_path: string;
    release_date: string;
    genres: Array<string>;
  },
  classes: Object;
};

const styles = {
  filmGalleryCardImage: {
    width: '100%',
    marginBottom: '10px'
  },
  filmGalleryCardName: {
    display: 'inline-block',
  },
  filmGalleryCardYear: {
    display: 'inline-block',
    float: 'right',
    border: 'solid grey 1px'
  },
  filmGalleryCardGenre: {
    fontSize: '.75rem'
  }
};

const FilmsGalleryCard = (props: FilmsGalleryCardProps) => {
  const {film, classes} =  props;
  const {title, poster_path, release_date, genres} = film;

  return (
    <div>
      <img alt={title} className={classes.filmGalleryCardImage} src={poster_path} />
      <div className="clearfix">
        <span className={classes.filmGalleryCardName}>{title}</span>
        <span className={classes.filmGalleryCardYear}>{release_date}</span>
      </div>
      <small className={classes.filmGalleryCardGenre}>{genres.map(genre => `${genre} `)}</small>
    </div>
  )
};

export default injectSheet(styles)(FilmsGalleryCard);
