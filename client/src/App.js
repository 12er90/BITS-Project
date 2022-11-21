
import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">

    </Container>
  );
};

export default App;