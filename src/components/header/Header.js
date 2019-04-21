import PropTypes from "prop-types";
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {NavLink} from "react-router-dom";

import './header.scss';
import Logo from '../logo/Logo';
import Search from '../search/Search';
import Button from '../button/Button';
import {fetchData} from '../../helpers/utils'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      searchBy: '',
      search: '',
    };
  }

  collectInputData = (evt) => {
    this.setState({search: evt.target.value})
  };

  fetchDataFromServerCallBack = () => {
    const { fetchDataFromServer } = this.props;
    const { search, searchBy } = this.state;
    fetchDataFromServer(search, searchBy)
  };

  render() {
    const { search } = this.state;
    const { currentURL } = this.props;

    return (
      <header className="header">
        <Logo />
        <Search
          value={search}
          callback={this.collectInputData}
        />
        <NavLink to={currentURL}>
          <Button
            id='btnSearch'
            title='Search'
            disabled={false}
            btnClass='btn--primary'
            callback={this.fetchDataFromServerCallBack}
          />
        </NavLink>
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
    currentURL: state.currentURL,
    films: state.films
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchDataFromServer: (search, searchBy) => fetchData(search, searchBy)}, dispatch)
}

Header.defaultProps = {
  fetchDataFromServer: null,
  currentURL: '',
};

Header.propTypes = {
  fetchDataFromServer: PropTypes.func,
  currentURL: PropTypes.string,
};

export default connect(mapStateToProps, matchDispatchToProps)(Header);
