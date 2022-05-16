import React from 'react';

const Principal = React.lazy(() => import('principal/Principal'));

function App() {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Principal />
    </React.Suspense>
  );
}

export default App;
