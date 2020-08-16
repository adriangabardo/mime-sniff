import { bufferComparison } from "./bufferComparison";

describe(bufferComparison, () => {
  it("equal buffers should return true", () => {
    const buffer1: Buffer = Buffer.from("jest");
    const buffer2: Buffer = Buffer.from("jest");
    const returnValue: boolean = bufferComparison(buffer1, buffer2);
    expect(returnValue).toBe(true);
  });

  it("different buffers should return false", () => {
    const buffer1: Buffer = Buffer.from("jest");
    const buffer2: Buffer = Buffer.from("jest2");
    const returnValue: boolean = bufferComparison(buffer1, buffer2);
    expect(returnValue).toBe(false);
  });

  test.each`
    invalidValue
    ${null}
    ${0}
    ${"notabuffer"}
  `("Passing anything but buffers should not work", ({ invalidValue }) => {
    expect(() => bufferComparison(invalidValue, invalidValue)).toThrowError(
      `The "buf1" argument must be one of type Buffer or Uint8Array. Received type ${typeof invalidValue}`
    );

    expect(() =>
      bufferComparison(Buffer.from("validValue"), invalidValue)
    ).toThrowError(
      `The "buf2" argument must be one of type Buffer or Uint8Array. Received type ${typeof invalidValue}`
    );
  });
});
