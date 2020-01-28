import { MatchReader } from './MatchReader';
import { Summary } from './Summary'

const matchReader = MatchReader.fromCSV('football.csv');
const summary = Summary.winsAnalysisWithHTMLReport('Leicester')

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);