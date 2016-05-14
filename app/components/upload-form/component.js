import Ember from 'ember';
const { set } = Ember;

export default Ember.Component.extend({
  upload: {},

  actions: {
    fileLoaded (file) {
      set(this, 'file', file);
      // console.log(this.get('file'));
      this.set('upload.cover', file.data);
      // console.log(this.get('upload.cover'));
    },

    submit () {
      // console.log(this.get('upload'));
      this.sendAction('submit', this.get('upload'));
      console.log('Component sendAction Submitted');
    },

    reset () {
      this.sendAction('reset');
      console.log('Component sendAction Reset');
    },

  }
});
