import fs from 'fs';
import { DataReader } from './DataReader';

export class CSVFileReader implements DataReader {
  data: string[][] = [];

  constructor(public filename: string) {
    this.filename = filename;
  }

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
