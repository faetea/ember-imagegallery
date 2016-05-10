import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    buttonClicked(param) {
      // console.log(param);
      this.sendAction('buttonClicked', param);
    },

  }
});
