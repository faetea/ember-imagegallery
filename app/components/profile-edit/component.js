import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(param) {
      // console.log(param);
      this.sendAction('submit', param);
    },
    reset(record) {
      record.rollbackAttributes();
      this.sendAction('reset', record);
    }

  }
});
