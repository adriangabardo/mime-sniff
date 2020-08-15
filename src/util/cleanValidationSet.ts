export const cleanValidationSet = ({
  validationSet,
}: {
  validationSet: string | string[];
}): string[] =>
  (!Array.isArray(validationSet)
    ? validationSet.split(",")
    : validationSet
  ).map((mime) => mime.replace("*", ""));
