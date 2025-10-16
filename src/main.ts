import { printGuests } from "./guestlist";
import { printMusic } from "./music";
import { printFeature } from "./animation";

function main(): void {
  printFeature("feat");
  printGuests();
  printMusic();
}

main();