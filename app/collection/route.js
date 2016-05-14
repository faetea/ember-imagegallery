import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createArt (art) {
      this.get('store').createRecord('art', art).save();
    },

  }
});
