import Ember from 'ember';
const { set } = Ember;

export default Ember.Component.extend({
  // fileupload: Ember.inject.service(),
  upload: {},

  actions: {
    fileLoaded (file) {
      set(this, 'file', file);
      console.log(this.get('file'));
      this.set('upload.cover', file.data);
      // console.log(this.get('upload.cover'));
    },

    submit () {
      console.log(this.get('upload'));
      this.sendAction('submit', this.get('upload'));
      console.log('Component sendAction Submitted');
    }
  }
});

// console.log(this.get('upload.cover.filename'));
// console.log(this.get('upload.cover.data'));
// console.log(this.get('upload.cover.type'));
// console.log(this.get('upload.cover.size'));
