import { AngularBulmaPage } from './app.po';

describe('angular-bulma App', function() {
  let page: AngularBulmaPage;

  beforeEach(() => {
    page = new AngularBulmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
