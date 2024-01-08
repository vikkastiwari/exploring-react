import React, { lazy, Suspense } from 'react';
import Loader from '../components/Loader/Loader';

const LazyLoad = (importCallback) => {
  const LazyLoadedComponent = lazy(importCallback);

  return (props) => (
    <Suspense fallback={<Loader />}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  );
};

export default LazyLoad;
