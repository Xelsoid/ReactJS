import React from 'react';
import PropTypes from "prop-types";

const Main = (props) => {
  const {children} = props;
  return(
    <main>
      {children}
    </main>
  )
};

Main.defaultProps = {
  children: null,
};

Main.propTypes = {
  children: PropTypes.instanceOf(Object),
};

export default Main;
