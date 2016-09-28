'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /main_view when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/main_view");
  });


  describe('main_view', function() {

    beforeEach(function() {
      browser.get('index.html#!/main_view');
    });


    it('should render main_view when user navigates to /main_view', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('list_view', function() {

    beforeEach(function() {
      browser.get('index.html#!/list_view');
    });


    it('should render list_view when user navigates to /list_view', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
