import { MimeTypes } from "../Interfaces";

export const sortByByteLength = (a: MimeTypes, b: MimeTypes): number =>
  a.MimeBytePattern.length > b.MimeBytePattern.length ? 1 : -1;
