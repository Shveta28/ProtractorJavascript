var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config={
    directConnect: true,

    onPrepare:function(){
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            }),
          );
          var AllureReporter = require('jasmine-allure-reporter');
          jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
          }));
    },
    //Capabilities to be passed
    Capabilities:{
        'browserName':'chrome'
    },
    //default framework
    framework:'jasmine',

   //spec to run
    specs:['tests/example_spec.js'],
   //Options to be passed to jasmine
    jasmineNodeOpts:{
        defaultTimeoutInterval:30000
    }

}