import { MimeTypes } from "../Interfaces";

export const FontMimes: MimeTypes[] = [
  {
    MimeTypeName: "application/vnd.ms-fontobject",
    MimeBytePattern: Buffer.from(
      "000000000000000000000000000000000000000000000000000000000000000000004C50",
      "hex"
    ),
  },
  { MimeTypeName: "font/ttf", MimeBytePattern: Buffer.from("00010000", "hex") },
  { MimeTypeName: "font/otf", MimeBytePattern: Buffer.from("4F54544F", "hex") },
  {
    MimeTypeName: "font/collection",
    MimeBytePattern: Buffer.from("74746366", "hex"),
  },
  {
    MimeTypeName: "font/woff",
    MimeBytePattern: Buffer.from("774F4646", "hex"),
  },
  {
    MimeTypeName: "font/woff2",
    MimeBytePattern: Buffer.from("774F4632", "hex"),
  },
];
