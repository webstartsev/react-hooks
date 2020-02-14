import React from 'react';
import { Search } from '../components/Search';
import { Card } from '../components/Card';

export const Home = () => {
  const cards = new Array(10).fill(``).map((_, i) => i);

  return (
    <>
      <Search />
      <div className="row">
        {cards.map((card, i) => {
          return (
            <div key={i} className="col-sm-4 mb-4">
              <Card {...card} />
            </div>
          );
        })}
      </div>
    </>
  );
};
