import Ember from 'ember';

export default Ember.Component.extend({
  backgroundImage: Ember.computed('collection.cover', function(){
    var style = `background-image: url(${this.get('collection.cover')});`;

    return Ember.String.htmlSafe(style);
  }),

  nameOrEmail: Ember.computed('collection.user.username', 'collection.user.email', function(){
    return (this.get('collection.user.username')||this.get('collection.user.email'));
  }),

  auth: Ember.inject.service(),
  isAuthor: Ember.computed('auth.credentials.id', 'collection.user.id', function(){
    let tokenUser = this.get('auth.credentials.id');
    let collectionUser = this.get('collection.user.id');
    // console.log(typeof tokenUser, tokenUser);
    // console.log(typeof collectionUser, collectionUser);
    // needs double equals because comparing a number and a string
    return (tokenUser == collectionUser);
  })
});

// Ember.set('myStyle', Ember.String.htmlSafe("color: blue;"));
// <div style={{myStyle}}></div> // no console warning
