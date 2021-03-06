import Ember from 'ember';
const { set } = Ember;

export default Ember.Component.extend({
  art: {},

  actions: {
    fileLoaded (file) {
      set(this, 'file', file);
      // console.log(this.get('file'));
      this.set('art.image', file.data);
      // console.log(this.get('upload.cover'));
    },

    submit () {
      this.set('art.collection', this.get('collection'));
      // console.log(this.get('collection'));
      this.sendAction('submit', this.get('art'));
      // console.log(this.get('art'));
      this.set('art', {});
      console.log('Component sendAction Submitted');
    },

  }
});
