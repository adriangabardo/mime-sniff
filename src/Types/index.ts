import { ArchiveMimes } from "./archive";
import { AudioMimes } from "./audio";
import { FontMimes } from "./font";
import { ImageMimes } from "./image";
import { TextMimes } from "./text";
import { MimeTypes } from "../Interfaces";

const AllMimes: MimeTypes[] = [
  ...ArchiveMimes,
  ...AudioMimes,
  ...FontMimes,
  ...ImageMimes,
  ...TextMimes,
];

export { ArchiveMimes, AudioMimes, FontMimes, ImageMimes, TextMimes, AllMimes };
