import * as Modules from "./Modules";

export class MimeValidator {
  public availableMimes: typeof Modules.availableMimes;
  public validateBySet: typeof Modules.validateBySet;

  constructor() {
    this.validateBySet = Modules.validateBySet;
    this.availableMimes = Modules.availableMimes;
  }
}

export * from "./Modules";
