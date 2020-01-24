import { CSVFileReader } from './CSVFileReader';

const reader = new CSVFileReader('football.csv');
reader.read();

console.log(reader.data);

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUtdWins = 0;

reader.data.forEach((match: string[]): void => {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins += 1;
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins += 1;
  }
});
console.log(`Man United won ${manUtdWins} games`);
