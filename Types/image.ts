import { MimeTypes } from "../Interfaces";

export const ImageMimes: MimeTypes[] = [
  {
    MimeTypeName: "image/x-icon",
    MimeBytePattern: Buffer.from("00000100", "hex"),
  },
  {
    MimeTypeName: "image/x-icon",
    MimeBytePattern: Buffer.from("00000200", "hex"),
  },
  {
    MimeTypeName: "image/bmp",
    MimeBytePattern: Buffer.from("424D", "hex"),
  },
  {
    MimeTypeName: "image/gif",
    MimeBytePattern: Buffer.from("474946383761", "hex"),
  },
  {
    MimeTypeName: "image/gif",
    MimeBytePattern: Buffer.from("474946383961", "hex"),
  },
  {
    MimeTypeName: "image/webp",
    MimeBytePattern: Buffer.from("5249464600000000574542505650", "hex"),
  },
  {
    MimeTypeName: "image/png",
    MimeBytePattern: Buffer.from("89504E470D0A1A0A", "hex"),
  },
  {
    MimeTypeName: "image/jpeg",
    MimeBytePattern: Buffer.from("FFD8FF", "hex"),
  },
];
