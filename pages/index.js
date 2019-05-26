import React, {Component} from "react";
import {connect} from "react-redux";
import fetch from 'isomorphic-unfetch';

import {fetchedDataSuccess} from "../src/actions/actions";
import App from '../src/App';
import FilmsGallery from '../src/components/filmsGallery/FilmsGallery'

class Page extends Component {
  static async getInitialProps({store, isServer, pathname, query}) {

    const baseUrl = 'https://reactjs-cdp.herokuapp.com/movies';
    let searchPart = '?search=&searchBy=title';

    if(query && query.search) {
      searchPart = query.search;
    }

    const url = baseUrl + searchPart;

    const res = await fetch(url);
    const films = await res.json();

    store.dispatch(fetchedDataSuccess(films));

    return {
      films: films
    }
  }
  render() {
    return (
      <App>
        <FilmsGallery  />
      </App>
    )
  }
}

export default connect(state => state)(Page);
