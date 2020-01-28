import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary'

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithHTMLReport('Leicester')

summary.buildAndPrintReport(matchReader.matches);