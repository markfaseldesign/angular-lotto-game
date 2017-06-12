import { LottoGamePage } from './app.po';

describe('lotto-game App', function() {
  let page: LottoGamePage;

  beforeEach(() => {
    page = new LottoGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
