import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('collection', params.collection_id);
  },
  // model (params) {
  //   return this.store.find('collection', params.id);
  // },

  actions: {
    createArt (art) {
      let currentCollection = this.get('model');

      this.get('store').createRecord('art', art, {
        'collection': currentCollection
      }).save();
    }

  }
});
