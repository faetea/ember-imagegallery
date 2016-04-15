import Ember from 'ember';
const { set } = Ember;

export default Ember.Component.extend({
  // fileupload: Ember.inject.service(),
  upload: {},

  actions: {
    fileLoaded (file) {
      set(this, 'file', file);
      this.set('upload.cover', {cover: file});
      console.log(this.get('upload.cover'));
      console.log(this.get('file'));
      // console.log(file.filename, file.type, file.data, file.size);
    },

    submit () {
      console.log(this.get('upload'));
      this.sendAction('submit', this.get('upload'));
      console.log('Component sendAction Submitted');
    }
  }
});
