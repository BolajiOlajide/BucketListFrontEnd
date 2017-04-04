import { BucketListFrontEndPage } from './app.po';

describe('bucket-list-front-end App', () => {
  let page: BucketListFrontEndPage;

  beforeEach(() => {
    page = new BucketListFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
