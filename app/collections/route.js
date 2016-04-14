import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return {
      collections: this.get('store').findAll('collection'),
      arts: this.get('store').findAll('art'),
      users: this.get('store').findAll('user'),
    };
  },

  actions: {

  }
});
