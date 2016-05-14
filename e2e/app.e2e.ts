import { Angular2GettingStartedPage } from './app.po';

describe('angular2-getting-started App', function() {
  let page: Angular2GettingStartedPage;

  beforeEach(() => {
    page = new Angular2GettingStartedPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-getting-started works!');
  });
});
