import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  profile: {},
  editable: false,
  // doubleClick () {
  //   this.toggleProperty('editable');
  // },

  actions: {
    updateProfile () {
      this.sendAction('routeUpdateProfile', this.get('profile'));
      this.set('editable', false);
    },
    toggleEdit () {
      this.toggleProperty('editable');
    },

  },
});
