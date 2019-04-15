import PropTypes from "prop-types";
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import './header.scss';
import Logo from '../logo/Logo';
import Search from '../search/Search';
import Button from '../button/Button';
import fetchData from '../../helpers/utils'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      baseURL: 'https://reactjs-cdp.herokuapp.com/movies',
      searchBy: '',
    };
  }

  concatenateURL = () => {
    const { baseURL, searchBy, search } = this.state;
    return `${baseURL}?search=${search}&searchBy=${searchBy}`;
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
  return bindActionCreators({makeACall: url => fetchData(url)}, dispatch)
}

Header.defaultProps = {
  makeACall: null,
};

Header.propTypes = {
  makeACall: PropTypes.func,
};


export default connect(mapStateToProps, matchDispatchToProps)(Header);
