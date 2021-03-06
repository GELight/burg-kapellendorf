import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('experience');
  this.route('news');
  this.route('contact');
  this.route('imprint');
  this.route('dataprotection');
  this.route('disclaimer');
  this.route('past');
});

export default Router;
