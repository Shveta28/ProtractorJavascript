function homepage(){

   var firstnumber= element(by.model('first'));
   var secondnumber= element(by.model('second'));
   var goButton= element(by.id('gobutton'));
   var answer= element(by.css("h2[class='ng-binding']"));

    this.enterfirstnumber= function(firstno){
        firstnumber.sendKeys(firstno);
    };

    this.entersecondnumber= function(secondno){
        secondnumber.sendKeys(secondno);
    };

    this.clickGo= function(){
        goButton.click();
    };

    this.verifyResult= function(result){
        expect(answer.getText()).toEqual(result);
    };

    this.getURL= function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    }
};
module.exports= new homepage();