import {
  cleanValidationSet,
  filterMimesForValidationSet,
  sortByByteLength,
  bufferComparison,
} from "../util";
import { MimeTypes } from "../Interfaces";

export const validateBySet = ({
  validationSet,
  fileToAnalyse,
  returnFullArrayOfMimes,
}: {
  validationSet: string | string[];
  fileToAnalyse: string;
  returnFullArrayOfMimes?: boolean;
}): boolean | string[] => {
  const BufferFile: Buffer = Buffer.from(fileToAnalyse, "base64");
  const mimesToValidate: string[] = cleanValidationSet({ validationSet });
  const mimeSet: MimeTypes[] = filterMimesForValidationSet({
    mimesToValidate,
  }).sort(sortByByteLength);

  const mimesFileAdheresTo: string[] = [];
  mimeSet.map((possibleMime) => {
    const fileMatchsThisSet: boolean = bufferComparison(
      possibleMime.MimeBytePattern,
      BufferFile.slice(0, possibleMime.MimeBytePattern.length)
    );

    if (fileMatchsThisSet) mimesFileAdheresTo.push(possibleMime.MimeTypeName);
  });

  if (returnFullArrayOfMimes) return mimesFileAdheresTo;
  const isFileValid = mimesFileAdheresTo.length > 0;
  return isFileValid;
};
