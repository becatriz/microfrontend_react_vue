import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PostsList from './modules/PostsList';

const PostDetails = React.lazy(() => import('postDetails/PostDetails'));

const Root = () => (
  <BrowserRouter>
    <div className="container mx-auto">
      <Routes>
        <Route path="list/*" element={<PostsList />} />
        <Route path="detail/*" element={<PostDetails />} />
        <Route path="*" element={<Navigate to="/list" replace />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default Root;
