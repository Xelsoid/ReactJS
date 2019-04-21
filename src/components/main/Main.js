import React from 'react';
import {Route, Switch} from "react-router-dom";

import SortResults from '../sortResults/SortResults';
import FilmsGallery from '../filmsGallery/FilmsGallery';
import FilmDescription from '../filmDescription/FilmDescription';

const Main = () => (
  <>
    <Switch>
      <Route exact path="/description/*">
        <FilmDescription />
      </Route>
      <Route exact path="/movies*">
        <SortResults />
        <FilmsGallery />
      </Route>
    </Switch>
  </>
);

export default Main;
