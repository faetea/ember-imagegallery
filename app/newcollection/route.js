import Ember from 'ember';

export default Ember.Route.extend({
  fileupload: Ember.inject.service(),

  actions: {
    createCollection (upload) {
      this.get('store').createRecord('collection', upload).save();
    },
  }
});
