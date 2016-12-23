import { PaieTonCliPage } from './app.po';

describe('paie-ton-cli App', function() {
  let page: PaieTonCliPage;

  beforeEach(() => {
    page = new PaieTonCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
