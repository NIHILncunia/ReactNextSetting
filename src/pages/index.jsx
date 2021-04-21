import React from 'react';
// import { css } from '@emotion/react';

const index = ({ name, }) => {
  return (
    <>
      <div>Hello {name}!!</div>
    </>
  );
};

export const getStaticProps = async () => {
  const name = 'Next';

  return {
    props: {
      name,
    },
  };
};

export default index;