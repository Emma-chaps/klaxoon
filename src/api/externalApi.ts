import { convertDurationToHMS } from "../utils/convertDurationToHMS";

export interface BookmarkType {
  id: number;
  title?: string;
  url?: string;
  author?: string;
  uploadDate?: string;
  height?: number;
  width?: number;
  duration?: string;
  thumbnail?: string;
  flickrType?: string;
  addedDate: Date;
}

export const fetchBookmark = async (
  addedUrl: string
): Promise<BookmarkType> => {
  const {
    flickr_type,
    title,
    url,
    author_name,
    upload_date,
    width,
    height,
    duration,
    thumbnail_url,
    cache_age,
  } = await (await fetch(`http://noembed.com/embed?url=${addedUrl}`)).json();
  return {
    //creation of a unique id from timestamp
    id: new Date().getTime(),
    title,
    url,
    author: author_name,
    uploadDate:
      upload_date || cache_age
        ? new Date(
            flickr_type === "photo" ? cache_age : upload_date
          ).toLocaleString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "",
    width,
    height,
    thumbnail: thumbnail_url,
    flickrType: flickr_type,
    addedDate: new Date(),
    duration: convertDurationToHMS(duration),
  };
};
