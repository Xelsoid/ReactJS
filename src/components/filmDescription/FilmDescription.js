// @flow

import React from 'react';
import {connect} from "react-redux";

import './filmDescription.scss';
import Button from "../button/Button";

type FilmDescriptionProps = {
  selectedFilm: {
    poster_path: string;
    title: string;
    tagline: string;
    release_date: number;
    runtime: number;
    overview: string;
  }
};

const FilmDescription = (props: FilmDescriptionProps) => {
  const {selectedFilm} = props;
  if(!selectedFilm){return null}

  const {poster_path, title, tagline, release_date, runtime, overview} = selectedFilm;

  const goBackCallback = () => {
    window.history.back()
  };

  return (
    <div className="film-description clearfix">
      <div className="film-description__image-wrapper">
        <img alt={title} className="film-description__image" src={poster_path} />
      </div>
      <div className="film-description__info-wrapper">
        <h2 className="film-description__header">{title}</h2>
        <strong className="film-description__useful-info display-block">{tagline}</strong>
        <span>
          {`Year: ${new Date(release_date).getFullYear()} `}
        </span>
        <span>
          {`${runtime} min`}
        </span>
        <p className="film-description__narration">
          {overview}
        </p>
      </div>
      <Button
        id='closeDescription'
        title='Close description'
        disabled={false}
        btnClass='btn--primary'
        callback={goBackCallback}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedFilm: state.selectedFilm
  };
}

export default connect(mapStateToProps)(FilmDescription);
