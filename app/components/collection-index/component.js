import Ember from 'ember';

export default Ember.Component.extend({
  nameOrEmail: Ember.computed('collection.user.username', 'collection.user.email', function(){
    return (this.get('collection.user.username')||this.get('collection.user.email'));
  })
});
