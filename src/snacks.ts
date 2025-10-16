
export const snacks: string[] = [
  "Yogurt",
  "Popcorn",
  "chips"
];

export function printSnacks(): void{
  console.log("Here are some snacks:");
  snacks.forEach((snack, index) => {
    console.log(`${index + 1}. ${snack}`);
  });
}

printSnacks();
