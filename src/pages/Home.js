import React, { useContext } from 'react';
import { Search } from '../components/Search';
import { Card } from '../components/Card';
import { GithubContext } from '../context/github/githubContext';

export const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <>
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">Загрузка...</p>
        ) : (
          users.map((user, i) => (
            <div key={i} className="col-sm-4 mb-4">
              <Card user={user} />
            </div>
          ))
        )}
        {}
      </div>
    </>
  );
};
