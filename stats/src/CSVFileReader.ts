import fs from 'fs';
import { parseDate } from './utils';

export class CSVFileReader {
  data: string[][] = [];

  constructor(public filename: string) {
    this.filename = filename;
  }

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): any => [
        parseDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3], 10),
        parseInt(row[4], 10),
        row[5],
        row[6],
      ]);
  }
}
