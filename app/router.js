import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('user', { path: 'users/:user_id' });
  // this.route('user', { path: 'users/:id' });
  this.route('newcollection', { path: 'collections/new' });
  this.route('collections');
  this.route('collection', { path: 'collections/:collection_id' });
  // this.route('collection', { path: 'collections/:id' }, function() {
  //   this.route('arts');
  // });
  this.route('arts');
  this.route('art', { path: 'arts/:art_id' });
});

export default Router;
