import React from 'react';
import { Dna } from 'react-loader-spinner';

import { LoaderPlase } from './Loader.styled';

function Loader() {
  return (
    <LoaderPlase>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </LoaderPlase>
  );
}

export default Loader;
