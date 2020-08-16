import { AllMimes } from "../Types";
import { sortByByteLength, bufferComparison } from "../util";

interface PossibleMatchesReturn {
  MimeTypeName: string;
  MimeByteBase64: string;
}

export const possibleMimeMatches = ({
  fileToAnalyse,
}: {
  fileToAnalyse: string;
}): PossibleMatchesReturn[] => {
  const FileBuffer = Buffer.from(fileToAnalyse, "base64");
  const arrayOfMatches: PossibleMatchesReturn[] = [];

  AllMimes.sort(sortByByteLength).map((sortedMime) => {
    const isMatch = bufferComparison(
      sortedMime.MimeBytePattern,
      FileBuffer.slice(0, sortedMime.MimeBytePattern.length)
    );

    if (isMatch) {
      const mimeMatched: PossibleMatchesReturn = {
        MimeByteBase64: sortedMime.MimeBytePattern.toString("base64"),
        MimeTypeName: sortedMime.MimeTypeName,
      };

      arrayOfMatches.push(mimeMatched);
    }
  });

  return arrayOfMatches;
};
