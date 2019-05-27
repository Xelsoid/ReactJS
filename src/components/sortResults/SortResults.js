// @flow

import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Button from '../button/Button';
import './sortResults.scss';
import {sortByRating, sortByDate} from '../../actions/actions';

type SortResultsProps = {
  movies: Object;
  sortByDate: Function;
  sortByRating: Function;
}

type State = {
  sortingByRating: boolean;
  sortingByDate: boolean;
}

class SortResults extends React.Component<SortResultsProps, State> {
  constructor(props: SortResultsProps) {
    super(props);
    this.state = {
      sortingByRating: true,
      sortingByDate: true,
    };
  }

  render() {
    const {movies, sortByDate, sortByRating} = this.props;
    const {sortingByRating, sortingByDate} = this.state;
    if(!movies){return null}

    const sortByDateCallback = () => {
      this.setState({sortingByDate: !sortingByDate});
      sortByDate(movies, sortingByDate);
    };

    const sortByRatingCallback = () => {
      this.setState({sortingByRating: !sortingByRating});
      sortByRating(movies, sortingByRating);
    };

    return(
      <div className="main-sorting">
        <div className="main-sorting__column">
          <span>{`${movies.length} movies found`}</span>
        </div>
        <div className="main-sorting__column">
          <span>Sort by:</span>
          <Button
            id='btnReleaseDate'
            title='Release Date'
            disabled={false}
            btnClass='btn--primary'
            callback={sortByDateCallback}
          />
          <Button
            id='btnRating'
            title='Rating'
            disabled={false}
            btnClass='btn--primary'
            callback={sortByRatingCallback}
          />
        </div>
      </div>
  )}
}

function mapStateToProps(state) {
  return {
    movies: state.films
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({sortByDate, sortByRating}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SortResults);
