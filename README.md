# mime-sniff

![NPM Package](https://github.com/adriangabardo/mime-validator/workflows/NPM%20Package/badge.svg) ![NPM Package Badge](https://img.shields.io/npm/v/mime-sniff)

This package receives files as base64 encoded strings, then creates a Buffer to read bytes from. With this, you can either specify mime types allowed for the library to validate if the file adheres to them, or simply pass a file so that the library can find possible mime types it might belong to.

This is more effective than simply reading the file extension, as that can be easily masked. Renaming the file extension would pass the checks, whilst reading the file itself doesn't allow for that circumvention.

## How to Use

### Installation

`npm i mime-sniff`

### Import methods

```TS
import { validateBySet, possibleMimeMatches } from "../index";
import { base64example } from "./sampleFile";

validateBySet({
  fileToAnalyse: base64example,
  validationSet: "text/plain",
});

possibleMimeMatches({
  fileToAnalyse: base64example
})
```

### Import class

There is absolutely no advantage to doing this, but if classes are your thing go ahead.

```TS
import { MimeValidator } from "../index";
import { base64example } from "./sampleFile";
const validator = new MimeValidator();

validator.validateBySet({
  fileToAnalyse: base64example,
  validationSet: "text/plain",
});

validator.possibleMimeMatches({
  fileToAnalyse: base64example
})
```

## Available methods

- `validateBySet` - pass a string or array of strings of mime types (eg. `["text/*", "application/pdf"]`) and the method will read your file and check if it adheres to one of the mimes you specified. Returns a `boolean`, can return an array of mime types the file adheres to if `returnFullArrayOfMimes` is passed.

- `possibleMimeMatches` - reads the base64 file and checks it against all the mime types available, returns an array of possible mime types the file adheres to.

- `availableMimes` - returns an array of all the mime types the library supports.
