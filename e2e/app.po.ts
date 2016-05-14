export class Angular2GettingStartedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-getting-started-app h1')).getText();
  }
}
