import { MimeTypes } from "../Interfaces";
import { AllMimes } from "../Types";

export const filterMimesForValidationSet = ({
  mimesToValidate,
}: {
  mimesToValidate: string[];
}): MimeTypes[] => {
  const mimesForValidationSet: MimeTypes[] = [];

  mimesToValidate.map((validationItem) => {
    AllMimes.filter((mime) =>
      mime.MimeTypeName.includes(validationItem)
    ).map((forValidation) => mimesForValidationSet.push(forValidation));
  });

  return mimesForValidationSet;
};
