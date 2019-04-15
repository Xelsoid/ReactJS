import PropTypes from "prop-types";
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Button from '../button/Button';
import './sortResults.scss';
import {sortByRating, sortByDate} from '../../actions/actions';

class SortResults extends React.Component {
  constructor() {
    super();
    this.state = {
      sortingByRating: true,
      sortingByDate: true,
    };
  }

  render() {
    const {movies, sortByDate, sortByRating} = this.props;
    const {sortingByRating, sortingByDate} = this.state;
    if(!movies){return null}

    return(
      <div className="main-sorting">
        <div className="main-sorting__column">
          <span>
            {movies.length}
            {' '}
            movies found
          </span>
        </div>
        <div className="main-sorting__column">
          <span>Sort by:</span>
          <Button
            id='btnreleaseDate'
            title='Release Date'
            disabled={false}
            btnClass='btn--primary'
            callback={()=>{
                this.setState({sortingByDate: !sortingByDate});
                sortByDate(movies, sortingByDate);
              }
            }
          />
          <Button
            id='btnRating'
            title='Rating'
            disabled={false}
            btnClass='btn--primary'
            callback={()=>{
                this.setState({sortingByRating: !sortingByRating});
                sortByRating(movies, sortingByRating);
              }
            }
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

SortResults.defaultProps = {
  movies: {},
  sortByDate: null,
  sortByRating: null,
};

SortResults.propTypes = {
  movies: PropTypes.instanceOf(Object),
  sortByDate: PropTypes.func,
  sortByRating: PropTypes.func,
};

export default connect(mapStateToProps, matchDispatchToProps)(SortResults);
