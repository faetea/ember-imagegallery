import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return {
      collections: this.get('store').findAll('collection'),
      arts: this.get('store').findAll('art'),
      users: this.get('store').findAll('user'),
    };
  },

  actions: {
    // createCollection: function(properties){
    //   this.get('store').createRecord('collection', properties).save()
    //   .then( () => console.log('Created Collection') )
    //   .then( () => this.transitionTo('collection') );
    // },
    //
    // createArt: function(properties){
    //   this.get('store').createRecord('art', properties).save()
    //   .then( () => console.log('Created Art') )
    //   .then( () => this.transitionTo('collection') );
    // },
    //
    // updateCollection: function(collection) {
    //   collection.save()
    //   .then( () => console.log('Updated Collection') )
    //   .then( () => this.transitionTo('collection') );
    // },
    //
    // destroyCollection: function(collection){
    //   collection.get('arts').forEach((art) => art.destroyRecord());
    //   collection.destroyRecord()
    //   .then( () => console.log('Destroyed Collection') )
    //   .then( () => this.transitionTo('collections') );
    // },

  }
});
