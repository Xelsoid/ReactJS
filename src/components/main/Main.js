// @flow;

import React from 'react';

type MainProps = {
  children: Object;
};

const Main = (props: MainProps) => {
  const {children} = props;
  return(
    <main>
      {children}
    </main>
  )
};

export default Main;
