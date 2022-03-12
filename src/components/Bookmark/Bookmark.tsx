import React from "react";
import type { FC } from "react";
import { IconTrash } from "../Icons";

import "./Bookmark.css";
import { useCurrentTimer } from "../../hooks/useCurrentTimer.hook";
import { BookmarkType } from "../../api/externalApi";

interface Props {
  bookmark: BookmarkType;
  deleteBookmark: (id: number) => void;
}

export const Bookmark: FC<Props> = ({ bookmark, deleteBookmark }) => {
  const {
    id,
    title,
    url,
    author,
    uploadDate,
    width,
    height,
    thumbnail,
    flickrType,
    duration,
    addedDate,
  } = bookmark;

  const addedTime = useCurrentTimer(addedDate);

  return (
    <article className='bookmark'>
      <div className='bookmark__header'>
        <h3 className='bookmark__header__title'>{title ?? flickrType}</h3>
        <div
          className='bookmark__header__icon-container'
          onClick={() => deleteBookmark(id)}
        >
          <IconTrash />
        </div>
      </div>
      <div className='bookmark__content'>
        <div className='bookmark__content__left'>
          <a
            href={url}
            className='bookmark__content__link'
            target='_blank'
            rel='noreferrer'
          >
            {url ?? ""}
          </a>
          <p>
            <span>Auteur : </span>
            {author ?? "Inconnu"}
          </p>
          {uploadDate && uploadDate?.length > 0 && (
            <p>
              <span>Date de publication : </span>
              {`le ${uploadDate}`}
            </p>
          )}
          {flickrType === "photo" ? (
            <p>
              <span>Dimensions (lxh) : </span>
              {width ?? "Inconnue"} x {height ?? "Inconnue"}
            </p>
          ) : (
            <p>
              <span>Durée : </span>
              {duration ?? "Inconnue"}
            </p>
          )}
        </div>
        <div className='bookmark__content__right'>
          <div className='bookmark__content__right__img'>
            <img
              className='img'
              src={thumbnail ?? ""}
              alt={title ?? `vignette de ${flickrType}`}
            />
          </div>
          <p className='bookmark__content__right__timer'>
            Ajouté il y a {addedTime}
          </p>
        </div>
      </div>
    </article>
  );
};
