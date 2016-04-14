import Ember from 'ember';

export default Ember.Component.extend({
  fileupload: Ember.inject.service(),
  upload: {},

  actions: {
    submit () {
      console.log(this.get('upload'));
      this.sendAction('submit', this.get('upload'));
      console.log('Component sendAction Submitted');
    }
  }
});
