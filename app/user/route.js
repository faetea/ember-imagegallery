import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  userID: Ember.computed.alias('auth.credentials.id'),
  flashMessages: Ember.inject.service(),
  // model (params) {
  //   return this.store.findRecord('user', params.user_id);
  // },

  actions: {
    editUser (profile) {
      this.store.findRecord('user', this.get('userID')).then(function(user) {
        user.get('username');
        user.get('first_name');
        user.get('last_name');
        user.get('bio');
        user.set('username', profile.username);
        user.set('firstName',  profile.firstName);
        user.set('lastName', profile.lastName);
        user.set('bio', profile.bio);
        user.save();
      });
    },

    changePassword (passwords) {
      this.get('auth').changePassword(passwords)
      .then(() => this.get('auth').signOut())
      .then(() => this.transitionTo('sign-in'))
      .then(() => {
        this.get('flashMessages')
        .success('Successfully changed your password!');
      })
      .then(() => {
        this.get('flashMessages').warning('You have been signed out.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },

});
