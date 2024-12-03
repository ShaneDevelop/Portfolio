interface RomanNumerals {
  [key: string]: number;
}

function numericToRoman(num: number): string {
  const romanNumerals: RomanNumerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let roman: string = '';
  for (let i in romanNumerals) {
    while (num >= romanNumerals[i]) {
      roman += i;
      num -= romanNumerals[i];
    }
  }
  return roman;
}


const currentYear = new Date().getFullYear();
const Footer = () => {
  const words = ["Developed", "Created", "Crafted", "Coded"];
  return (
    <footer className="flex justify-between items-center pt-40 pb-10 text-slate-400">
      <h1 className="league-spartan text-md max-lg:text-sm"> Copyright © <span className="bg-gradient-to-br from-blue-400 to-teal-400 bg-clip-text text-transparent">{currentYear}</span></h1>
      <h1 className="league-spartan text-lg max-lg:text-sm">Developed by <u>Frosty</u></h1>
    </footer>
  )
}

export default Footer