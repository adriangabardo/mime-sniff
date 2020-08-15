import { MimeTypes } from "../Interfaces";

export const ArchiveMimes: MimeTypes[] = [
  {
    MimeBytePattern: Buffer.from("1F8B08", "hex"),
    MimeTypeName: "application/x-gzip",
  },
  {
    MimeBytePattern: Buffer.from("504B0304", "hex"),
    MimeTypeName: "application/zip",
  },
  {
    MimeBytePattern: Buffer.from("526172201A0700", "hex"),
    MimeTypeName: "application/x-rar-compressed",
  },
];
