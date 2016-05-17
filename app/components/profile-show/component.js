import Ember from 'ember';

export default Ember.Component.extend({
  nameOrEmail: Ember.computed('user.username', 'user.email', function(){
    return (this.get('user.username')||this.get('user.email'));
  })
});
