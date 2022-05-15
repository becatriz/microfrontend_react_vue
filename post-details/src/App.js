import React from 'react';

const Root = React.lazy(() => import('root/Root'));

function App() {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Root />
    </React.Suspense>
  );
}

export default App;
