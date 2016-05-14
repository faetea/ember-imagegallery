import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: 'Save Changes',

  actions: {
    submit(param) {
      this.sendAction('submit', param);
    },
    reset(record) {
      record.rollbackAttributes();
      this.sendAction('reset', record);
    }

  }
});
