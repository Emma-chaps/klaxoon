import React, { useCallback, useState } from "react";

import { fetchBookmark } from "../../api/externalApi";
import { Header } from "../Header";
import { BookmarkAdder } from "../BookmarkAdder";
import { Bookmark } from "../Bookmark";
import "./App.css";
import type { BookmarkType } from "../../api/externalApi";

export function App() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);

  const addNewBookmark = useCallback(async (url: string) => {
    const newBookmark = await fetchBookmark(url);
    setBookmarks((bookmark) => [...bookmark, newBookmark]);
  }, []);

  const deleteBookmark = useCallback(
    (id: number) => {
      const newList = bookmarks.filter(
        (bookmark: BookmarkType) => bookmark.id !== id
      );
      setBookmarks(newList);
    },
    [bookmarks]
  );

  return (
    <>
      <Header />
      <main>
        <BookmarkAdder addNewBookmark={addNewBookmark} />
        <section className='bookmarks-main-container'>
          {bookmarks &&
            bookmarks.map((bookmark) => (
              <Bookmark
                key={bookmark.id}
                bookmark={bookmark}
                deleteBookmark={deleteBookmark}
              />
            ))}
        </section>
      </main>
    </>
  );
}
