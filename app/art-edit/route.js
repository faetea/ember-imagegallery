import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveArt(editArt) {
      editArt.save().then(() => this.transitionTo('art', editArt.id));
    },
    cancelEdit(editArt) {
      this.transitionTo('art', editArt.id);
    },

  }
});
