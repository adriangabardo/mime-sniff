import { MimeTypes } from "../Interfaces";

export const AudioMimes: MimeTypes[] = [
  {
    MimeBytePattern: Buffer.from("2E736E64", "hex"),
    MimeTypeName: "audio/basic",
  },
  {
    MimeBytePattern: Buffer.from("464F524D0000000041494646", "hex"),
    MimeTypeName: "audio/aiff",
  },
  {
    MimeBytePattern: Buffer.from("494433", "hex"),
    MimeTypeName: "audio/mpeg",
  },
  {
    MimeBytePattern: Buffer.from("4F67675300", "hex"),
    MimeTypeName: "application/ogg",
  },
  {
    MimeBytePattern: Buffer.from("4D54686400000006", "hex"),
    MimeTypeName: "audio/midi",
  },
  {
    MimeBytePattern: Buffer.from("524946460000000041564920", "hex"),
    MimeTypeName: "video/avi",
  },
  {
    MimeBytePattern: Buffer.from("524946460000000057415645", "hex"),
    MimeTypeName: "audio/wave",
  },
];
