import Ember from 'ember';

export default Ember.Component.extend({
  nameOrEmail: Ember.computed('art.collection.user.username', 'art.collection.user.email', function(){
    return (this.get('art.collection.user.username')||this.get('art.collection.user.email'));
  }),

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
