import { AllMimes } from "../Types";

export const availableMimes = (): string[] =>
  AllMimes.map((mime) => mime.MimeTypeName);
