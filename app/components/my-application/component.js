import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  userID: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    }
  }
});
