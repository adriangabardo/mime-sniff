import { availableMimes, MimeValidator } from "../index";
import { base64example, impostorBase64Example } from "./sampleFile";
const validator = new MimeValidator();

// console.log(
//   "validateBySet impostorBase64Example:",
//   validator.validateBySet({
//     fileToAnalyse: impostorBase64Example,
//     validationSet: ["text/html"],
//   })
// );

// console.log(
//   "validateBySet base64example:",
//   validator.validateBySet({
//     fileToAnalyse: base64example,
//     validationSet: "text/plain",
//   })
// );

const possibleMimeMatches = validator.possibleMimeMatches({
  fileToAnalyse: base64example,
});
console.log("possibleMimeMatches:", possibleMimeMatches);
