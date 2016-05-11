import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveArt(editArt) {
      editArt.get('hasDirtyAttributes');
      console.log(editArt.get('hasDirtyAttributes'));
      editArt.changedAttributes();
      console.log(editArt.changedAttributes());
      editArt.save().then(() => this.transitionTo('art', editArt.id));
    },
    cancelEdit(editArt) {
      this.transitionTo('art', editArt.id);
    },

  }
});
