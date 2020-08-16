import { sortByByteLength } from "./sortByByteLength";
import { MimeTypes } from "../Interfaces";
import { AllMimes } from "../Types";

describe(sortByByteLength, () => {
  it("should sort MimeTypes from smallest byte length to largest", () => {
    const ByteMimes: MimeTypes[] = AllMimes;
    const sortedValue = ByteMimes.sort(sortByByteLength);

    for (let i = 0; i < sortedValue.length - 1; i++) {
      const currentValue = sortedValue[i];
      const nextValue = sortedValue[i + 1];

      expect(
        currentValue.MimeBytePattern.length <= nextValue.MimeBytePattern.length
      ).toBe(true);
    }
  });
});
