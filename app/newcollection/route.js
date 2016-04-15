import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createCollection (upload) {
      this.get('store').createRecord('collection', upload).save();
    },
    // createCollection (upload, file) {
    //   this.get('store').createRecord('collection', upload, {
    //     cover: file
    //   }).save();
    // },

  }
});

// {name: "", desc: "", cover: {file: {filename: "", type: "", data: "", size: null }}};
