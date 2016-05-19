import Ember from 'ember';

export default Ember.Component.extend({
  nameOrEmail: Ember.computed('art.collection.user.username', 'art.collection.user.email', function(){
    return (this.get('art.collection.user.username')||this.get('art.collection.user.email'));
  }),

  auth: Ember.inject.service(),
  isAuthor: Ember.computed('auth.credentials.id', 'art.collection.user.id', function(){
    let tokenUser = this.get('auth.credentials.id');
    let collectionUser = this.get('art.collection.user.id');
    // console.log(typeof tokenUser, tokenUser);
    // console.log(typeof collectionUser, collectionUser);
    // needs double equals because comparing a number and a string
    return (tokenUser == collectionUser);
  })
});
