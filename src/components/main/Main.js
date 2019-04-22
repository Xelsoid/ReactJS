import React from 'react';
import { Switch, Route } from "react-router-dom";

import SortResults from '../sortResults/SortResults';
import FilmsGallery from '../filmsGallery/FilmsGallery';
import FilmDescription from '../filmDescription/FilmDescription';
import NotFound from '../notFound/NotFound';


const Main = () => (
  <Switch>
    <Route exact path="/" component={null} />
    <Route path="/description/*" component={FilmDescription} />
    <Route
      path="/movies*"
      render={() => (
        <div>
          <SortResults />
          <FilmsGallery />
        </div>
      )}
    />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Main;
