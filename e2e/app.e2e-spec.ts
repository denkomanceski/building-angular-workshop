import { ModulesTutorialPage } from './app.po';

describe('modules-tutorial App', () => {
  let page: ModulesTutorialPage;

  beforeEach(() => {
    page = new ModulesTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
