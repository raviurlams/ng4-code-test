import { Ng4CodeTestPage } from './app.po';

describe('ng4-code-test App', function() {
  let page: Ng4CodeTestPage;

  beforeEach(() => {
    page = new Ng4CodeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
