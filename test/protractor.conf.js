exports.config = {

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/e2e/**/*.js'
  ],


  multiCapabilities: [{
    'browserName': 'chrome'
  }],


  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:9001',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false,
    defaultTimeoutInterval: 10000
  }
};
