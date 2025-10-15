
const guests: string[] = [
  "papadoc",
  "bigbyrus",
  "howie",
  "lob",
  "grandma"
];

export function printGuests(): void{
  console.log("Here are some guests:");
  guests.forEach((guest, index) => {
    console.log(`${index + 1}. ${guest}`);
  });
}

printGuests();
