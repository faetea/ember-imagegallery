import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createArt (art) {
      let currentCollection = this.modelFor('collection');
      let newArt = this.get('store').createRecord('art', art);
      newArt.set('collection', currentCollection);
      console.log(newArt.get('collection').get('id'));
      newArt.save();
    },

  }
});
