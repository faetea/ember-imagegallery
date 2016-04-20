import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  // model () {
  //   return this.store.findAll('user');
  // },
  model (params) {
    return this.store.findRecord('user', params.user_id);
  },

  actions: {
    // updateUser (profile) {
    //   console.log('Route Action : updateUser');
    //   user.save();
    // },

    updateUser (profile) {
      this.get('auth').updateUser(profile);
    },
  },

});
