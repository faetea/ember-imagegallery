import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  model () {
    return this.get('store').findAll('user');
  },

  actions: {
    createCollection (upload) {
      this.get('store').createRecord('collection', upload).save();
    }

  }
});

// { "collection"=> {
//   "name"=>"pink",
//   "desc"=>"bubble",
//   "cover"=>"[object Object]",
//   "user_id"=>nil
// },
//   "format"=>"json"}
