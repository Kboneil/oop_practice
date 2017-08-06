import { OopPage } from './app.po';

describe('oop App', () => {
  let page: OopPage;

  beforeEach(() => {
    page = new OopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
