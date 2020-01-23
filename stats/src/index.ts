import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
})
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',')
  });

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};

let manUtdWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins++
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins++
  }
}

console.log(manUtdWins)