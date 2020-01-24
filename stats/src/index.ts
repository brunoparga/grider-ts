import { CSVFileReader } from './CSVFileReader'

const reader = new CSVFileReader('football.csv');
reader.read();

console.log(reader.data)

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};

let manUtdWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins++
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins++
  }
}

console.log(`Man United won ${manUtdWins} games`)