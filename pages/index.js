import React, {Component} from "react";
import {connect} from "react-redux";

import {JssProvider} from 'react-jss';
import {fetchedDataSuccess} from "../src/actions/actions";
import App from '../src/App';
import FilmsGallery from '../src/components/filmsGallery/FilmsGallery';
import SortResults from '../src/components/sortResults/SortResults';

import { fetchData } from "../src/helpers/utils";

class Page extends Component {
  static async getInitialProps({store, isServer, pathname, query}) {

    const baseUrl = 'https://reactjs-cdp.herokuapp.com/movies';
    let searchPart = '?search=&searchBy=title';

    if(query && query.search) {
      searchPart = query.search;
    }

    const url = baseUrl + searchPart;

    const films = await fetchData(url);

    store.dispatch(fetchedDataSuccess(films));

    return {
      films: films
    }
  }
  render() {
    return (
      <JssProvider>
        <App>
          <SortResults />
          <FilmsGallery  />
        </App>
      </JssProvider>
    )
  }
}

export default connect(state => state)(Page);
