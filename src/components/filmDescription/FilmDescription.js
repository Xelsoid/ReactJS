// @flow

import React from 'react';
import {connect} from "react-redux";

import {compose} from "redux";
import injectSheet from "react-jss";
import Button from "../button/Button";

type FilmDescriptionProps = {
  selectedFilm: {
    poster_path: string;
    title: string;
    tagline: string;
    release_date: number;
    runtime: number;
    overview: string;
  },
  classes: Object;
};

const styles = {
  filmDescription: {
    padding: '10px 0',
    backgroundColor: '#fdc459',
    clear: 'both',
  },
  filmDescriptionImage: {
    maxWidth: '300px',
    minWidth: '250px',
  },
  filmDescriptionHeader: {
    fontSize: '40px',
    marginBottom: '10px',
  },
  filmDescriptionUsefulInfo: {
    display: 'block',
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '10px',
  },
  filmDescriptionNarration: {
    fontSize: '18px',
    marginTop: '10px',
  },
};

const FilmDescription = (props: FilmDescriptionProps) => {
  const {selectedFilm, classes} = props;
  if(!selectedFilm){return null}

  const {poster_path, title, tagline, release_date, runtime, overview} = selectedFilm;

  const goBackCallback = () => {
    window.history.back()
  };

  return (
    <div className={classes.filmDescription}>
      <div className={classes.filmDescriptionWrapper}>
        <img alt={title} className={classes.filmDescriptionImage} src={poster_path} />
      </div>
      <div className={classes.filmDescriptionWrapper}>
        <h2 className={classes.filmDescriptionHeader}>{title}</h2>
        <strong className={classes.filmDescriptionUsefulInfo}>{tagline}</strong>
        <span>
          {`Year: ${new Date(release_date).getFullYear()} `}
        </span>
        <span>
          {`${runtime} min`}
        </span>
        <p className={classes.filmDescriptionNarration}>
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

const enhancer = compose(connect(mapStateToProps), injectSheet(styles));
export default enhancer(FilmDescription);
