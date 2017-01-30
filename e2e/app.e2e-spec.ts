import { LegislationPage } from './app.po';

describe('legislation App', function() {
  let page: LegislationPage;

  beforeEach(() => {
    page = new LegislationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
