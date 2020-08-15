import { MimeTypes } from "../Interfaces";

export const TextMimes: MimeTypes[] = [
  {
    MimeBytePattern: Buffer.from("3c21444f43545950452048544d4c", "hex"),
    MimeTypeName: "text/html",
  },
  {
    MimeBytePattern: Buffer.from("3c48544d4c", "hex"),
    MimeTypeName: "text/html",
  },
  {
    MimeBytePattern: Buffer.from("3c48454144", "hex"),
    MimeTypeName: "text/html",
  },
  {
    MimeBytePattern: Buffer.from("3c534352495054", "hex"),
    MimeTypeName: "text/html",
  },
  {
    MimeBytePattern: Buffer.from("3c494652414d45", "hex"),
    MimeTypeName: "text/html",
  },
  { MimeBytePattern: Buffer.from("3c4831", "hex"), MimeTypeName: "text/html" },
  {
    MimeBytePattern: Buffer.from("3c444956", "hex"),
    MimeTypeName: "text/html",
  },
  {
    MimeBytePattern: Buffer.from("3c464f4e54", "hex"),
    MimeTypeName: "text/html",
  },
  {
    MimeBytePattern: Buffer.from("3c5441424c45", "hex"),
    MimeTypeName: "text/html",
  },
  { MimeBytePattern: Buffer.from("3c41", "hex"), MimeTypeName: "text/html" },
  {
    MimeBytePattern: Buffer.from("3c5354594c45", "hex"),
    MimeTypeName: "text/html",
  },
  {
    MimeBytePattern: Buffer.from("3c5449544c45", "hex"),
    MimeTypeName: "text/html",
  },
  { MimeBytePattern: Buffer.from("3c42", "hex"), MimeTypeName: "text/html" },
  {
    MimeBytePattern: Buffer.from("3c424f4459", "hex"),
    MimeTypeName: "text/html",
  },
  { MimeBytePattern: Buffer.from("3c4252", "hex"), MimeTypeName: "text/html" },
  { MimeBytePattern: Buffer.from("3c50", "hex"), MimeTypeName: "text/html" },
  {
    MimeBytePattern: Buffer.from("3c212d2d", "hex"),
    MimeTypeName: "text/html",
  },
  {
    MimeBytePattern: Buffer.from("3c3f786d6c", "hex"),
    MimeTypeName: "text/xml",
  },
  {
    MimeBytePattern: Buffer.from("255044462d", "hex"),
    MimeTypeName: "application/pdf",
  },
  {
    MimeBytePattern: Buffer.from("252150532d41646f62652d", "hex"),
    MimeTypeName: "application/postscript",
  },
  {
    MimeBytePattern: Buffer.from("feff0000", "hex"),
    MimeTypeName: "text/plain",
  },
  {
    MimeBytePattern: Buffer.from("fffe0000", "hex"),
    MimeTypeName: "text/plain",
  },
  {
    MimeBytePattern: Buffer.from("efbbbf00", "hex"),
    MimeTypeName: "text/plain",
  },
];
