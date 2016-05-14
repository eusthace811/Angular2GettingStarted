import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2GettingStartedAppComponent } from '../app/angular2-getting-started.component';

beforeEachProviders(() => [Angular2GettingStartedAppComponent]);

describe('App: Angular2GettingStarted', () => {
  it('should create the app',
      inject([Angular2GettingStartedAppComponent], (app: Angular2GettingStartedAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-getting-started works!\'',
      inject([Angular2GettingStartedAppComponent], (app: Angular2GettingStartedAppComponent) => {
    expect(app.title).toEqual('angular2-getting-started works!');
  }));
});
