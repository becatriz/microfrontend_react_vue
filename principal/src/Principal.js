import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const PostsList = React.lazy(() => import('./modules/PostsList'));
const PostDetails = React.lazy(() => import('postdetails/PostDetails'));

const Principal = () => (
  <BrowserRouter>
    <div className="container mx-auto">
      <React.Suspense fallback={'Loading'}>
        <Routes>
          <Route path="list/*" element={<PostsList />} />
          <Route path="detail/*" element={<PostDetails />} />
          <Route path="*" element={<Navigate to="/list" replace />} />
        </Routes>
      </React.Suspense>
    </div>
  </BrowserRouter>
);

export default Principal;
