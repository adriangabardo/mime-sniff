import * as Modules from "./Modules";

export class MimeValidator {
  public availableMimes: typeof Modules.availableMimes;
  public validateBySet: typeof Modules.validateBySet;
  public possibleMimeMatches: typeof Modules.possibleMimeMatches;

  constructor() {
    this.availableMimes = Modules.availableMimes;
    this.validateBySet = Modules.validateBySet;
    this.possibleMimeMatches = Modules.possibleMimeMatches;
  }
}

export * from "./Modules";
