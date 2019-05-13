import PropTypes from "prop-types";
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";

import './header.scss';
import Logo from '../logo/Logo';
import Search from '../search/Search';
import Button from '../button/Button';
import { fetchDataRequest } from '../../actions/actions';
import { PATHS } from "../../helpers/constants";

class Header extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      searchBy: '',
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
    const { fetchDataFromServer } = this.props;
    const { search, searchBy } = this.state;
    fetchDataFromServer(this.concatenateSearchString(search, searchBy))
  };

  render() {
    const { search, searchBy } = this.state;

    return (
      <header className="header">
        <Logo />
        <Search
          value={search}
          callback={this.collectInputData}
        />
        <NavLink to={`${PATHS.MOVIES}?search=${search}&searchBy=${searchBy}`}>
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
    films: state.films
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchDataFromServer: (search) => fetchDataRequest(search)}, dispatch)
}

Header.defaultProps = {
  fetchDataFromServer: null,
};

Header.propTypes = {
  fetchDataFromServer: PropTypes.func,
};

export default connect(mapStateToProps, matchDispatchToProps)(Header);
