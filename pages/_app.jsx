import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const App = ({ Component, }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8'/>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// node: PropTypes.node.isRequired,
// string: PropTypes.string.isRequired,
// number: PropTypes.number.isRequired,
// func: PropTypes.func.isRequired,
// object: PropTypes.object.isRequired,
// array: PropTypes.array.isRequired,
// bool: PropTypes.bool.isRequired,
// symbol: PropTypes.symbol.isRequired,
// elementType: PropTypes.elementType.isRequired,

// shape: PropTypes.shape({
//   item: PropTypes.string.isRequired,
// });

export default App;