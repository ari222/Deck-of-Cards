// spec.js
describe('Deck of card App', function() {
    var numberOfCard = element(by.model('vm.numberOfCard'));
    var dack = element.all(by.repeater('(key,val) in vm.dack'));
    var drawButton = element(by.id('draw'));
    var sortButton = element(by.id('sort'));
    var shuffleButton = element(by.id('shuffle'));
    var dack = element.all(by.repeater('(key,val) in vm.dack'));

    beforeEach(function() {
        browser.get('http://localhost/deck/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Deck of card');
    });

    it('should change cards 11 from 20', function() {
    	browser.sleep(1000);
        drawButton.click();
        browser.sleep(1000);
        expect(dack.count()).toEqual(20);
        browser.sleep(1000);
        numberOfCard.sendKeys(protractor.Key.BACK_SPACE);
        numberOfCard.sendKeys(protractor.Key.BACK_SPACE);
        browser.sleep(1000);
        numberOfCard.sendKeys(11);
        browser.sleep(1000);
        drawButton.click();
        browser.sleep(1000);
        expect(dack.count()).toEqual(11);
    });

    it('should return 11 cards from deck', function() {
    	browser.sleep(1000);
        numberOfCard.sendKeys(protractor.Key.BACK_SPACE);
        numberOfCard.sendKeys(protractor.Key.BACK_SPACE);
        browser.sleep(1000);
        numberOfCard.sendKeys(11);
        browser.sleep(1000);
        drawButton.click();
        browser.sleep(1000);
        expect(dack.count()).toEqual(11);
    });

    it('should return 11 shuffled cards from deck', function() {
    	browser.sleep(1000);
        numberOfCard.sendKeys(protractor.Key.BACK_SPACE);
        numberOfCard.sendKeys(protractor.Key.BACK_SPACE);
        browser.sleep(1000);
        numberOfCard.sendKeys(11);
        browser.sleep(1000);
        drawButton.click();
        browser.sleep(1000);
        expect(dack.count()).toEqual(11);
        browser.sleep(1000);
        shuffleButton.click();
        browser.sleep(1000);
        expect(dack.count()).toEqual(11);
    });

    it('should return 11 sorted cards from deck', function() {
        numberOfCard.sendKeys(protractor.Key.BACK_SPACE);
        numberOfCard.sendKeys(protractor.Key.BACK_SPACE);
        browser.sleep(1000);
        numberOfCard.sendKeys(11);
        browser.sleep(1000);
        drawButton.click();
        browser.sleep(1000);
        expect(dack.count()).toEqual(11);
        browser.sleep(1000);
        sortButton.click();
        browser.sleep(1000);
        expect(dack.count()).toEqual(11);
        browser.sleep(1000);
    });
});