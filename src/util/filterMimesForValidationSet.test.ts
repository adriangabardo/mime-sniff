import { filterMimesForValidationSet } from "./filterMimesForValidationSet";
import { MimeTypes } from "../Interfaces";

describe(filterMimesForValidationSet, () => {
  it("should true", () => {
    expect(true).toBe(true);
  });

  it("should return an array of MimeTypes based on the validation set", () => {
    const mimesToValidate: string[] = ["application/"];
    const returnValue: MimeTypes[] = filterMimesForValidationSet({
      mimesToValidate,
    });

    expect(returnValue.length).toBeGreaterThan(0);
    returnValue.map((value) => {
      expect(value.MimeTypeName).toContain(mimesToValidate[0]);
    });
  });

  it("should return an empty array of MimeTypes based on an invalid validation set", () => {
    const mimesToValidate: string[] = ["application/123", "application/*"];
    const returnValue: MimeTypes[] = filterMimesForValidationSet({
      mimesToValidate,
    });

    expect(returnValue.length).toBe(0);
  });
});
