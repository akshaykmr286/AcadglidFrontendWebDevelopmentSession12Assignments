import { AcadglidFrontendWebDevelopmentSession12AssignmentsPage } from './app.po';

describe('acadglid-frontend-web-development-session12-assignments App', () => {
  let page: AcadglidFrontendWebDevelopmentSession12AssignmentsPage;

  beforeEach(() => {
    page = new AcadglidFrontendWebDevelopmentSession12AssignmentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
