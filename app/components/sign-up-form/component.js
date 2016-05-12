import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  credentials: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
      console.log('sign-up-form Submit sendAction');
    },
    reset () {
      this.sendAction('reset');
      console.log('sign-up-form Reset sendAction');
    },
  }
});
