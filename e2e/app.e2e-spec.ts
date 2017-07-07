import { SansTheSkeletonAppPage } from './app.po';

describe('sans-the-skeleton-app App', () => {
  let page: SansTheSkeletonAppPage;

  beforeEach(() => {
    page = new SansTheSkeletonAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
