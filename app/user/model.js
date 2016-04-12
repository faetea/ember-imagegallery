import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),

  username: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  bio: DS.attr('string'),

  collections: DS.hasMany('collection', {async: true})
});
