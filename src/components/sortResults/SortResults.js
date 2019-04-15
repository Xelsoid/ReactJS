import PropTypes from "prop-types";
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Button from '../button/Button';
import './sortResults.scss';
import sortByRating from '../../actions/sortByRating';
import sortByDate from '../../actions/sortByDate';
import {fetchData} from "../../actions/fetchData";


class SortResults extends React.Component {
  constructor() {
    super();
    this.state = {
      sortingByRating: true,
      sortingByDate: true,
    };
  }

  render() {
    const {films, sortByDate, sortByRating} = this.props;
    const {sortingByRating, sortingByDate} = this.state;
    if(!films){return null}

    return(
      <div className="main-sorting">
        <div className="main-sorting__column">
          <span>
            {films.data.length}
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
              // this.setState({sortingByDate: !sortingByDate});
              sortByDate(films, sortingByDate);
              }
            }
          />
          <Button
            id='btnRating'
            title='Rating'
            disabled={false}
            btnClass='btn--primary'
            callback={()=>{
              // this.setState({sortingByRating: !sortingByRating});
              sortByRating(films, sortingByRating);
              }
            }
          />
        </div>
      </div>
  )}
}

function mapStateToProps(state) {
  return {
    films: state.films
  };
}

function matchDispatchToProps(dispatch) {
  return {
    sortByDate: (films) => dispatch(sortByDate(films)),
    sortByRating: (films) => dispatch(sortByRating(films)),
  };
}

SortResults.defaultProps = {
  films: {},
  sortByDate: null,
  sortByRating: null,
};

SortResults.propTypes = {
  films: PropTypes.instanceOf(Object),
  sortByDate: PropTypes.func,
  sortByRating: PropTypes.func,
};

export default connect(mapStateToProps, matchDispatchToProps)(SortResults);
