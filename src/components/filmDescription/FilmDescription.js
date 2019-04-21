import PropTypes from "prop-types";
import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {bindActionCreators} from "redux";

import './filmDescription.scss';
import Button from "../button/Button";
import {closeDescription} from "../../actions/actions";

const FilmDescription = ({selectedFilm, closeDescription}) => {
  if(!selectedFilm){return null}

  const {poster_path, title, tagline, release_date, runtime, overview} = selectedFilm;
  const closeDescriptionCallBack = () => {closeDescription()};
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
      <NavLink to="/">
        <Button
          id='closeDescription'
          title='Close description'
          disabled={false}
          btnClass='btn--primary'
          callback={closeDescriptionCallBack}
        />
      </NavLink>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedFilm: state.selectedFilm
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({closeDescription}, dispatch)
}

FilmDescription.defaultProps = {
  selectedFilm: null,
  closeDescription: null,
};

FilmDescription.propTypes = {
  selectedFilm: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
  closeDescription: PropTypes.func
};

export default connect(mapStateToProps, matchDispatchToProps)(FilmDescription);
