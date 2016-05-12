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
  this.route('userEdit', { path: 'users/:user_id/edit' });
  this.route('newcollection', { path: 'collections/new' });
  this.route('collections');
  this.route('collection', { path: 'collections/:collection_id' });
  this.route('collectionEdit', { path: 'collections/:collection_id/edit' });
  this.route('arts');
  this.route('art', { path: 'arts/:art_id' });
  this.route('artEdit', { path: 'arts/:art_id/edit' });
});

export default Router;
