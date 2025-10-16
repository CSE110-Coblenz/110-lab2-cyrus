
export const music: string[] = [
  "Rap",
  "Blues",
  "soft Rock",
  "Hip-hop"
];

export function printMusic(): void{
  console.log("Here are some music ideas:");
  music.forEach((genre, index) => {
    console.log(`${index + 1}. ${genre}`);
  });
}

printMusic();
