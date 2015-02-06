'use strict';

describe('Pathfinder Utils Home Page', function() {

    beforeEach(function () {
      browser.get('/');
    });

  it('should have header with initiative tracker', function() {
      expect(element.all(by.css('header ol li a')).get(0).getText()).toMatch('Initiative Tracker');
    });
});

describe('Pathfinder Initiative Tracker Home Page', function () {
    beforeEach(function () {
        browser.get('/#initiative');
        browser.executeScript('window.localStorage.clear();');
    });

    it('should let you insert a name and initiative and add to the table', function () {
        element(by.model('creature.name')).sendKeys('troll');
        element(by.model('creature.initiative')).sendKeys('17');
        element(by.buttonText('Add')).click();
        expect(element.all(by.repeater('creature in creatures').column('name')).get(0).getText()).toBe('troll');
    });

    it('should sort five entries by initiative', function () {
        element(by.model('creature.name')).sendKeys('troll');
        element(by.model('creature.initiative')).sendKeys('12');
        element(by.buttonText('Add')).click();
        element(by.model('creature.name')).sendKeys('master');
        element(by.model('creature.initiative')).sendKeys('19');
        element(by.buttonText('Add')).click();
        element(by.model('creature.name')).sendKeys('dragon');
        element(by.model('creature.initiative')).sendKeys('30');
        element(by.buttonText('Add')).click();
        element(by.model('creature.name')).sendKeys('orc');
        element(by.model('creature.initiative')).sendKeys('4');
        element(by.buttonText('Add')).click();
        element(by.model('creature.name')).sendKeys('Travis');
        element(by.model('creature.initiative')).sendKeys('16');
        element(by.buttonText('Add')).click();
        expect(element.all(by.repeater('creature in creatures').column('name')).get(0).getText()).toBe('dragon');
        expect(element.all(by.repeater('creature in creatures').column('name')).get(1).getText()).toBe('master');
        expect(element.all(by.repeater('creature in creatures').column('name')).get(2).getText()).toBe('Travis');
        expect(element.all(by.repeater('creature in creatures').column('name')).get(3).getText()).toBe('troll');
        expect(element.all(by.repeater('creature in creatures').column('name')).get(4).getText()).toBe('orc');
    });

    it('should save creatures between refreshes', function () {
        element(by.model('creature.name')).sendKeys('troll');
        element(by.model('creature.initiative')).sendKeys('12');
        element(by.buttonText('Add')).click();
        browser.refresh();
        expect(element.all(by.repeater('creature in creatures').column('name')).get(0).getText()).toBe('troll');
    });

    it('should begin with an empty list of creatures', function () {
        expect(element.all(by.repeater('creature in creatures')).count()).toBe(0);
    });
});
