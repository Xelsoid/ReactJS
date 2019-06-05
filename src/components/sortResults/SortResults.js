// @flow

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import injectSheet from 'react-jss';

import Button from '../button/Button';
import { setSortFilter } from '../../actions/actions';

type SortResultsProps = {
  movies: Object;
  setSortFilter: Function;

  classes: Object;
}

type State = {
  sortingByRating: boolean;
  sortingByDate: boolean;
}

const styles = {
  mainSorting: {
    padding: '20px',
    backgroundColor: 'lightgray',
  },
  mainSortingColumn: {
    display: 'inline-block',
    width: '49%',
  }
};

class SortResults extends React.Component<SortResultsProps, State> {
  constructor(props: SortResultsProps) {
    super(props);
    this.state = {
      sortingByRating: true,
      sortingByDate: true,
    };
  }

  render() {
    const {classes, movies, setSortFilter} = this.props;
    const {sortingByRating, sortingByDate} = this.state;
    if(!movies){return null}

    const sortByDateCallback = () => {
      this.setState({sortingByDate: !sortingByDate});
      const sortOrder = sortingByDate ? 'asc' : 'desc';
      setSortFilter('release_date', sortOrder);
    };

    const sortByRatingCallback = () => {
      this.setState({sortingByRating: !sortingByRating});
      const sortOrder = sortingByRating ? 'asc' : 'desc';
      setSortFilter('vote_average', sortOrder);
    };

    return(
      <div className={classes.mainSorting}>
        <div className={classes.mainSortingColumn}>
          <span>{`${movies.length} movies found`}</span>
        </div>
        <div className={classes.mainSortingColumn}>
          <span>Sort by:</span>
          <Button
            id="btnReleaseDate"
            title="Release Date"
            disabled={false}
            callback={sortByDateCallback}
          />
          <Button
            id="btnRating"
            title="Rating"
            disabled={false}
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
  return bindActionCreators({setSortFilter}, dispatch)
}

const enhancer = compose(connect(mapStateToProps, matchDispatchToProps), injectSheet(styles));
export default enhancer(SortResults);
