import { AllMimes } from "./Types";

export class Validator {
  public validateBySet({
    validationSet,
    fileToAnalyse,
  }: {
    validationSet: string[];
    fileToAnalyse: ArrayBuffer;
  }) {
    const BufferSet = Buffer.from(fileToAnalyse);

    validationSet.map((validationItem) => {
      const possibleMime = AllMimes.filter((mime) =>
        mime.MimeTypeName.includes(validationItem)
      );
      console.log(possibleMime);
    });
  }
}
