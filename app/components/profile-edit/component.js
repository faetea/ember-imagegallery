import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: 'Save',
  // user: {},

  actions: {
    buttonClicked(param) {
      // console.log(param);
      this.sendAction('action', param);
    },
    // editUser () {
    //   this.sendAction('editUser', this.get('user'));
    // },

  }
});
