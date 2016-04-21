import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.findRecord('collection', params.collection_id);
  },

  actions: {
    createArt (art) {
      let collection = this.get('model');

      this.get('store').createRecord('art', art, {
        collection: collection
      }).save();
    }

  }
});
