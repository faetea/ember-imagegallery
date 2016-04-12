import Ember from 'ember';

export default Ember.Component.extend({
  upload: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('upload'));
    },
  }
});
