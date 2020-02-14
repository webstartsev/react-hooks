import React, { useReducer } from 'react';
import { GithubContext } from './githubContext';
import { githubReducer } from './githubReducer';
import { GET_USER, SEARCH_USERS, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types';

const initialState = {
  user: {},
  users: {},
  loading: false,
  repos: {}
};

export const GithubState = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const getUser = async name => {
    setLoading();
    dispatch({ type: GET_USER, payload: {} });
  };

  const search = async value => {
    setLoading();
    dispatch({ type: SEARCH_USERS, payload: [] });
  };

  const getRepos = async name => {
    setLoading();
    dispatch({ type: GET_REPOS, repos: [] });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider
      value={{ getUser, search, getRepos, clearUsers, setLoading, user, users, repos, loading }}
    >
      {children}
    </GithubContext.Provider>
  );
};
