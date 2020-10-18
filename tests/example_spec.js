
var hp = require('../pages/homepage.js');
var ds= require('../DataProvider/homepage.js')

describe('Protractor Demo App', function() {

  beforeEach(function(){
    hp.getURL();
  });

    it('should add one and two', function() {
      hp.enterfirstnumber(ds.DataSet.firstnumber);
      hp.entersecondnumber(ds.DataSet.secondnumber);
      hp.clickGo();
      hp.verifyResult(ds.DataSet.result);
      browser.sleep(2000);
  
    });
  });
  