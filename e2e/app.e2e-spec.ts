import { HWAngularPractice2Page } from './app.po';

describe('hwangular-practice2 App', () => {
  let page: HWAngularPractice2Page;

  beforeEach(() => {
    page = new HWAngularPractice2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
