import Ember from 'ember';

export default Ember.Component.extend({
  backgroundImage: Ember.computed('collection.cover', function(){
    var style = `background-image: url(${this.get('collection.cover')});`;

    return Ember.String.htmlSafe(style);
  }),
  nameOrEmail: Ember.computed('collection.user.username', 'collection.user.email', function(){
    return (this.get('collection.user.username')||this.get('collection.user.email'));
  })
});

// Ember.set('myStyle', Ember.String.htmlSafe("color: blue;"));
// <div style={{myStyle}}></div> // no console warning
