import React, { useCallback, useState } from "react";
import type { FC, ChangeEvent, FormEvent } from "react";

import { IconCross } from "../Icons";
import "./BookmarkAdder.css";

interface Props {
  addNewBookmark: (value: string) => void;
}

export const BookmarkAdder: FC<Props> = ({ addNewBookmark }) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (value.length > 0) addNewBookmark(value);
      setValue("");
    },
    [value, addNewBookmark]
  );

  return (
    <section className='bookmark-adder-container'>
      <form className='bookmark-adder-container__form' onSubmit={handleSubmit}>
        <label htmlFor='url' className='from__label-field' />
        <input
          type='url'
          name='url'
          placeholder='Ajouter une url'
          value={value}
          onChange={handleChange}
          className='form__input-field'
        />
        <button type='submit' className='form__submit-button'>
          <IconCross className='submit-button__icon-cross' />
        </button>
      </form>
    </section>
  );
};
