/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useRef } from 'react';
import { mountList } from 'postslist/PostsList';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mountList(ref.current);
  }, []);

  return <div ref={ref} />;
};
