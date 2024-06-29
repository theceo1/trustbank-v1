import Loadable from 'react-loadable';
import React from 'react';

const Loading = () => <div>Loading...</div>;

const LoadableComponent = (loader) => {
  return Loadable({
    loader,
    loading: Loading,
  });
};

export default LoadableComponent;
