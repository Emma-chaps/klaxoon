import React from "react";
import type { FC } from "react";
import "./Header.css";

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <header className='main-header'>
      <h1 className='main-header__title'>Ma bibliothèque de favoris</h1>
    </header>
  );
};
