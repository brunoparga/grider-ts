import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    matches.forEach((match): void => {
      const homeWin = match[1] === this.team &&
        match[5] === MatchResult.HomeWin;
      const awayWin = match[2] === this.team &&
        match[5] === MatchResult.AwayWin;
      if (homeWin || awayWin) {
        wins += 1;
      }
    });
    return `${this.team} won ${wins} games`
  }  
}