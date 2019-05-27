// @flow

import React from 'react';

import './filmsGalleryCard.scss';

type FilmsGalleryCardProps = {
  film: {
    title: string;
    poster_path: string;
    release_date: string;
    genres: Array<string>;
  }
};

const FilmsGalleryCard = (props: FilmsGalleryCardProps) => {
  const {film} =  props;
  const {title, poster_path, release_date, genres} = film;

  return (
    <div className="film-gallery-card">
      <img alt={title} className="film-gallery-card__image" src={poster_path} />
      <div className="clearfix">
        <span className="film-gallery-card__name">{title}</span>
        <span className="film-gallery-card__year">{release_date}</span>
      </div>
      <small className="film-gallery-card__genre">{genres.map(genre => `${genre} `)}</small>
    </div>
  )
};

export default FilmsGalleryCard;
