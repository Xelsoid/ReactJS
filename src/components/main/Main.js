import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { PATHS } from '../../helpers/constants';
import SortResults from '../sortResults/SortResults';
import FilmsGallery from '../filmsGallery/FilmsGallery';
import FilmDescription from '../filmDescription/FilmDescription';
import NotFound from '../notFound/NotFound';

const Main = () => (
  <main>
    <Switch>
      <Route exact path={PATHS.DEFAULT} component={null} />
      <Route path={`${PATHS.MOVIE}/:name`} component={FilmDescription} />
      <Route
        path={PATHS.MOVIES}
        render={() => (
          <div>
            <SortResults />
            <FilmsGallery />
          </div>
        )}
      />
      <Route path={PATHS.NOTFOUND} component={NotFound} />
      <Redirect from={PATHS.RESTURLS} to={PATHS.NOTFOUND} />
    </Switch>
  </main>
);

export default Main;
