function buildSummary(results) {
  let summary = [];
  results.testResults.forEach(({testResults}) =>
    testResults.forEach(result =>
      summary.push(
        `${result.status === 'passed' ? '✓' : '✕'} ${result.fullName}`,
      ),
    ),
  );

  return `START_SUMMARY\n${summary.join('\n')}\nEND_SUMMARY`;
}

class G2iReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(contexts, results) {
    console.log(buildSummary(results));
    console.log(`result=${results.numPassedTests / results.numTotalTests}`);
  }
}

module.exports = G2iReporter;
