import { cleanValidationSet } from "./cleanValidationSet";

describe(cleanValidationSet, () => {
  it("should return same array of strings with no wildcards as was passed in", () => {
    const passedValue: string[] = [
      "text/html",
      "text/plain",
      "application/pdf",
    ];

    const returnValue = cleanValidationSet({ validationSet: passedValue });
    expect(returnValue).toEqual(passedValue);
  });

  it("should return same array of strings with wildcards removed", () => {
    const passedValue: string[] = [
      "text/*",
      "text/plain",
      "application/pdf",
      "image/*",
    ];

    const returnValue = cleanValidationSet({ validationSet: passedValue });
    expect(returnValue).toEqual(
      passedValue.map((entry) => entry.replace("*", ""))
    );
  });

  it("should transform single string into array of strings", () => {
    const passedValue: string =
      "text/html, text/plain, application/pdf, image/png";

    const returnValue = cleanValidationSet({ validationSet: passedValue });
    expect(returnValue).toEqual(passedValue.split(","));
  });

  it("should transform single string into array of strings and remove wildcards", () => {
    const passedValue: string = "text/html, text/plain, application/*, image/*";

    const returnValue = cleanValidationSet({ validationSet: passedValue });
    expect(returnValue).toEqual(
      passedValue.split(",").map((entry) => entry.replace("*", ""))
    );
  });
});
