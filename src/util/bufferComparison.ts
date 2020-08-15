// Thanks Node.JS for the number return instead of a boolean
export const bufferComparison = (a: Buffer, b: Buffer): boolean =>
  Buffer.compare(a, b) === 0;
