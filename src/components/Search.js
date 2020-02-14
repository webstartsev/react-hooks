import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
  const { show } = useContext(AlertContext);

  const onSubmit = evt => {
    if (evt.key === `Enter`) {
      show(`This is Alert`);
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="from-control"
        placeholder="Введите имя пользователя..."
        onKeyPress={onSubmit}
      />
    </div>
  );
};
