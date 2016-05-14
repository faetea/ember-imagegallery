import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('collection', params.collection_id);
  },

  actions: {
    saveCollection(editCollection) {
      // console.log(editCollection);
      editCollection.save().then(() => this.transitionTo('collection', editCollection.id));
    },
    cancelEdit(editCollection) {
      this.transitionTo('collection', editCollection.id);
    },

  }
});
