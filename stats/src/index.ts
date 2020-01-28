import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUtdWins = 0;

matchReader.matches.forEach((match): void => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins += 1;
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins += 1;
  }
});
console.log(`Man United won ${manUtdWins} games`);
