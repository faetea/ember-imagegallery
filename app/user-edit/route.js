import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },

  actions: {
    saveUser(editUser) {
      console.log(editUser);
      editUser.save().then(() => this.transitionTo('user', editUser.id));
    },

  }
});
