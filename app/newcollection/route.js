import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createCollection (upload) {
      this.get('store').createRecord('collection', upload).save();
    }

  }
});
