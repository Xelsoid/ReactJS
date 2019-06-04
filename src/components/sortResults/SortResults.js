// @flow

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import injectSheet from 'react-jss';

import Button from '../button/Button';
import {
  setSortFilter,
  sortByDate,
  sortByRating,
} from '../../actions/actions';

type SortResultsProps = {
  movies: Object;
  sortByDate: Function;
  sortByRating: Function;
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
    const {
      classes,
      movies,
      setSortFilter,
      sortByDate,
      sortByRating,
    } = this.props;
    // const {sortingByRating, sortingByDate} = this.state;
    if(!movies){return null}

    const sortByDateCallback = () => {
      setSortFilter('release_date');
      //this.setState({sortingByDate: !sortingByDate});
      //sortByDate(movies, sortingByDate);
    };

    const sortByRatingCallback = () => {
      setSortFilter('vote_average');
      //this.setState({sortingByRating: !sortingByRating});
      //sortByRating(movies, sortingByRating);
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
  return bindActionCreators({sortByDate, sortByRating, setSortFilter}, dispatch)
}

const enhancer = compose(connect(mapStateToProps, matchDispatchToProps), injectSheet(styles));
export default enhancer(SortResults);
