import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
  const [value, setValue] = useState(``);
  const { show } = useContext(AlertContext);

  const onSubmit = evt => {
    if (evt.key !== `Enter`) {
      return;
    }

    if (value.trim()) {
      console.log(`request to gihub`, value);
    } else {
      show(`Введите данные пользователя!`);
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="from-control"
        placeholder="Введите имя пользователя..."
        onKeyPress={onSubmit}
        onChange={evt => setValue(evt.target.value)}
      />
    </div>
  );
};
