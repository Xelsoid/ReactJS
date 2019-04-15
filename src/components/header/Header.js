import PropTypes from "prop-types";
import React from 'react';
import {connect} from "react-redux";

import './header.scss';
import Logo from '../logo/Logo';
import Search from '../search/Search';
import Button from '../button/Button';
import {fetchData} from '../../actions/fetchData'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      baseURL: 'https://reactjs-cdp.herokuapp.com/movies',
      searchBy: null,
      search: 'batman',
    };
  }

  concatenateURL = () => {
    const { baseURL, searchBy, search } = this.state;
    const url = `${baseURL}?search=${search}&searchBy=${searchBy}`;
    return url;
  };

  collectInputData = (evt) => {
    this.setState({search: evt.target.value})
  };

  render() {
    const { makeACall } = this.props;
    const { search } = this.state;
    const url = this.concatenateURL();
    return (
      <header className="header">
        <Logo />
        <Search
          value={search}
          callback={this.collectInputData}
        />
        <Button
          id='btnSearch'
          title='Search'
          disabled={false}
          btnClass='btn--primary'
          callback={() => {
            makeACall(url)
          }}
        />
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
  return {
    makeACall: url => dispatch(fetchData(url))
  };
}

Header.defaultProps = {
  makeACall: null,
  search: '',
};

Header.propTypes = {
  makeACall: PropTypes.func,
  search: PropTypes.string,
};


export default connect(mapStateToProps, matchDispatchToProps)(Header);
