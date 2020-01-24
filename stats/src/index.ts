import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';

const reader = new CSVFileReader('football.csv');
reader.read();

console.log(reader.data);

let manUtdWins = 0;

reader.data.forEach((match): void => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins += 1;
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins += 1;
  }
});
console.log(`Man United won ${manUtdWins} games`);
