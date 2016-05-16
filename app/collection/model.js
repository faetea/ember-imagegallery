import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  name: attr('string'),
  desc: attr('string'),
  cover: attr('string'),

  thumbUrl: attr('string'),
  smallUrl: attr('string'),
  mediumUrl: attr('string'),

  createdAt: attr('date'),
  updatedAt: attr('date'),
  coverUpdatedAt: attr('date'),

  user: belongsTo('user', {async: true, autoSave: true }),
  arts: hasMany('art', { async: true, dependent: 'destroy' }),
});
