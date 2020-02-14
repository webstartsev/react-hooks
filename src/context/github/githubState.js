import React, { useReducer } from 'react';
import { GithubContext } from './githubContext';
import { githubReducer } from './githubReducer';

const initialState = {
  user: {},
  users: {},
  loading: false,
  repos: {}
};

export const GithubState = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return <GithubContext.Provider value={{}}>{children}</GithubContext.Provider>;
};
