import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  email: attr('string'),

  username: attr('string'),
  firstname: attr('string'),
  lastname: attr('string'),
  bio: attr('string'),

  collections: hasMany('collection', { async: true, dependent: 'destroy' })
});
