// @flow

import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

import injectSheet from "react-jss";
import Logo from '../logo/Logo';
import Search from '../search/Search';
import Button from '../button/Button';
import { fetchedDataSuccess } from '../../actions/actions';

type HeaderProps = {
  fetchedDataSuccess: Function;
  classes: Object;
}

type State = {
  searchBy: string;
  search: string;
}

const styles = {
  header: {
    width: '100%',
    padding: '30px',
    backgroundColor: '#fdc459',
    boxSizing: 'border-box',
  }
};

class Header extends React.Component<HeaderProps, State> {
  constructor(props: HeaderProps) {
    super(props);
    this.props = props;
    this.state = {
      searchBy: 'title',
      search: '',
    };
  }

  concatenateSearchString = (search, searchBy) => {
      return `?search=${search}&searchBy=${searchBy}`;
  };

  collectInputData = (evt) => {
    this.setState({search: evt.target.value})
  };

  fetchDataFromServerCallBack = () => {
    const { fetchedDataSuccess } = this.props;
    const { search, searchBy } = this.state;

    const baseURL = 'https://reactjs-cdp.herokuapp.com/movies';
    const searchParams = this.concatenateSearchString(search, searchBy);
    const URL = baseURL + searchParams;

    fetch(URL)
      .then(response => response.json())
      .then(films => fetchedDataSuccess(films))
  };

  render() {
    const { search } = this.state;
    const { classes } = this.props;
    return (
      <header className={classes.header}>
        <Logo />
        <Search
          value={search}
          callback={this.collectInputData}
        />
        <button
          className="btn btn--primary"
          type="button"
          onClick={this.fetchDataFromServerCallBack}
        >
          Search
        </button>
        <div>
          <span>Searched by:</span>
          <Button
            id='btnTitle'
            title='Title'
            disabled={false}
            btnClass='btn--primary'
            callback={() => {this.setState({searchBy: 'title'})}}
          />
          <Button
            id='btnGenre'
            title='Genre'
            disabled={false}
            btnClass='btn--primary'
            callback={() => {this.setState({searchBy: 'genre'})}}
          />
        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    films: state.films
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchedDataSuccess: (films) => fetchedDataSuccess(films)}, dispatch)
}

const enhancer = compose(connect(mapStateToProps, matchDispatchToProps), injectSheet(styles));
export default enhancer(Header);
