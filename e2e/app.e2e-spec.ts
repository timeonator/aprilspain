import { AprilspainPage } from './app.po';

describe('aprilspain App', function() {
  let page: AprilspainPage;

  beforeEach(() => {
    page = new AprilspainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
